import React, { useState, useRef, useEffect } from "react";

// Quick reply options for different stages
const INITIAL_OPTIONS = [
  { label: "🚕 Book a Taxi", value: "I want to book a taxi" },
  { label: "🏖️ Tour Packages", value: "Show me tour packages" },
  { label: "🛥️ Houseboat", value: "I want to book a houseboat" },
  { label: "🏨 Hotel Booking", value: "I need a hotel booking" },
  { label: "🏕️ Camping/Trekking", value: "Tell me about camping and trekking" },
  { label: "📞 Contact Us", value: "How can I contact you?" },
];

const SERVICE_OPTIONS = [
  { label: "24hrs Taxi Service", value: "I want 24hrs Taxi Service" },
  { label: "Call Drivers", value: "I need a Call Driver" },
  { label: "Tour Packages", value: "I want to book a Tour Package" },
  { label: "Hotel Bookings", value: "I want Hotel Booking" },
  { label: "Houseboat Booking", value: "I want Houseboat Booking" },
  { label: "Camping", value: "I want to go Camping" },
  { label: "Trekking", value: "I want to go Trekking" },
  { label: "Contract Vehicles", value: "I need Monthly Based Contract Vehicles" },
];

const DESTINATION_OPTIONS = [
  { label: "🌿 Munnar", value: "I want to visit Munnar" },
  { label: "🚤 Alleppey", value: "I want to visit Alleppey" },
  { label: "🌳 Wayanad", value: "I want to visit Wayanad" },
  { label: "🐘 Thekkady", value: "I want to visit Thekkady" },
  { label: "🏛️ Kochi", value: "I want to explore Kochi" },
  { label: "💧 Athirappilly", value: "I want to visit Athirappilly" },
  { label: "🏖️ Kovalam", value: "I want to visit Kovalam" },
  { label: "⛰️ Vagamon", value: "I want to visit Vagamon" },
];

const LANGUAGE_OPTIONS = [
  { label: "English", value: "English" },
  { label: "Malayalam", value: "Malayalam" },
  { label: "Hindi", value: "Hindi" },
  { label: "Tamil", value: "Tamil" },
  { label: "Arabic", value: "Arabic" },
];

const VEHICLE_OPTIONS = [
  { label: "🚗 Sedan", value: "I want a Sedan" },
  { label: "🚙 SUV / Innova", value: "I want an SUV" },
  { label: "🚐 Tempo Traveller", value: "I want a Tempo Traveller" },
  { label: "🚌 Mini Bus", value: "I want a Mini Bus" },
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! 👋 I'm your Dream Kerala Holidays assistant. I can help you with tour packages, taxi bookings, houseboats, and more. What would you like to do?",
      options: INITIAL_OPTIONS,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Detect what options to show based on the AI response
  const detectOptions = (reply) => {
    const lower = reply.toLowerCase();

    // If asking about service type or what they want to book
    if (
      lower.includes("what service") ||
      lower.includes("which service") ||
      lower.includes("what would you like to book") ||
      lower.includes("what type of booking") ||
      lower.includes("how can i help")
    ) {
      return SERVICE_OPTIONS;
    }

    // If asking about destination
    if (
      lower.includes("which destination") ||
      lower.includes("where would you like") ||
      lower.includes("which place") ||
      lower.includes("where do you want") ||
      lower.includes("which location")
    ) {
      return DESTINATION_OPTIONS;
    }

    // If asking about vehicle type
    if (
      lower.includes("what type of vehicle") ||
      lower.includes("which vehicle") ||
      lower.includes("sedan") && lower.includes("suv") ||
      lower.includes("vehicle preference")
    ) {
      return VEHICLE_OPTIONS;
    }

    // If asking about language
    if (
      lower.includes("preferred language") ||
      lower.includes("which language") ||
      lower.includes("what language")
    ) {
      return LANGUAGE_OPTIONS;
    }

    // If asking for confirmation
    if (
      lower.includes("shall i confirm") ||
      lower.includes("would you like to confirm") ||
      lower.includes("should i proceed") ||
      lower.includes("want me to book")
    ) {
      return [
        { label: "✅ Yes, confirm!", value: "Yes, please confirm the booking" },
        { label: "✏️ Edit details", value: "I want to change some details" },
        { label: "❌ Cancel", value: "Cancel the booking" },
      ];
    }

    // If the conversation seems complete or asking anything else
    if (
      lower.includes("anything else") ||
      lower.includes("help you with something else") ||
      lower.includes("is there anything")
    ) {
      return [
        { label: "📋 New Booking", value: "I want to make a new booking" },
        { label: "❓ Ask a Question", value: "I have a question" },
        { label: "👋 That's all, thanks!", value: "That's all, thank you!" },
      ];
    }

    return null;
  };

  const sendMessage = async (e, quickReply = null) => {
    if (e) e.preventDefault();
    const messageText = quickReply || input.trim();
    if (!messageText || isLoading) return;

    const userMessage = { role: "user", content: messageText };
    const updatedMessages = [...messages, userMessage];

    // Remove options from the last assistant message once user responds
    setMessages((prev) => {
      const updated = [...prev];
      if (updated.length > 0 && updated[updated.length - 1].options) {
        updated[updated.length - 1] = {
          ...updated[updated.length - 1],
          options: null,
        };
      }
      return [...updated, userMessage];
    });

    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();
      const options = detectOptions(data.reply);

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply, options },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. Please try again or reach us directly at +91 95671 32777.",
          options: [
            { label: "📞 Call Now", value: "How can I contact you?" },
            { label: "🔄 Try Again", value: "Hello" },
          ],
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickReply = (value) => {
    sendMessage(null, value);
  };

  const formatMessage = (text) => {
    let html = text;

    // Escape HTML entities first
    html = html.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // Code blocks (```)
    html = html.replace(/```([\s\S]*?)```/g, '<pre class="cb-code-block">$1</pre>');

    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code class="cb-inline-code">$1</code>');

    // Tables
    html = html.replace(
      /(?:^|\n)(\|.+\|)\n(\|[-| :]+\|)\n((?:\|.+\|\n?)+)/g,
      (match, header, separator, body) => {
        const headerCells = header.split("|").filter((c) => c.trim());
        const rows = body.trim().split("\n");

        let table = '<div class="cb-table-wrap"><table class="cb-table"><thead><tr>';
        headerCells.forEach((cell) => {
          table += `<th>${cell.trim()}</th>`;
        });
        table += "</tr></thead><tbody>";

        rows.forEach((row) => {
          const cells = row.split("|").filter((c) => c.trim());
          table += "<tr>";
          cells.forEach((cell) => {
            let cellContent = cell.trim().replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
            table += `<td>${cellContent}</td>`;
          });
          table += "</tr>";
        });

        table += "</tbody></table></div>";
        return table;
      }
    );

    // Headers
    html = html.replace(/^### (.+)$/gm, '<h6 class="cb-h3">$1</h6>');
    html = html.replace(/^## (.+)$/gm, '<h5 class="cb-h2">$1</h5>');
    html = html.replace(/^# (.+)$/gm, '<h4 class="cb-h1">$1</h4>');

    // Bold and italic
    html = html.replace(/\*\*\*(.*?)\*\*\*/g, "<strong><em>$1</em></strong>");
    html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

    // Unordered lists
    html = html.replace(
      /((?:^|\n)[-•] .+(?:\n[-•] .+)*)/g,
      (match) => {
        const items = match.trim().split("\n").map((item) => {
          const content = item.replace(/^[-•] /, "");
          return `<li>${content}</li>`;
        });
        return `<ul class="cb-list">${items.join("")}</ul>`;
      }
    );

    // Ordered lists
    html = html.replace(
      /((?:^|\n)\d+\. .+(?:\n\d+\. .+)*)/g,
      (match) => {
        const items = match.trim().split("\n").map((item) => {
          const content = item.replace(/^\d+\. /, "");
          return `<li>${content}</li>`;
        });
        return `<ol class="cb-list">${items.join("")}</ol>`;
      }
    );

    // Links
    html = html.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="cb-link">$1</a>'
    );

    // Horizontal rule
    html = html.replace(/^---$/gm, '<hr class="cb-hr"/>');

    // Line breaks
    html = html.replace(/\n/g, "<br/>");

    // Clean up
    html = html.replace(/(<\/(?:ul|ol|table|pre|div|h[4-6])>)<br\/>/g, "$1");
    html = html.replace(/<br\/>(<(?:ul|ol|table|pre|div|h[4-6]))/g, "$1");

    return html;
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat assistant"}
      >
        {isOpen ? (
          <i className="fas fa-times" />
        ) : (
          <i className="fas fa-comments" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window" role="dialog" aria-label="Chat with Dream Kerala Holidays">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header__info">
              <div className="chatbot-header__avatar">
                <i className="fas fa-headset" />
              </div>
              <div>
                <h4>Dream Kerala Holidays</h4>
                <span className="chatbot-header__status">
                  <span className="status-dot" /> Online
                </span>
              </div>
            </div>
            <button
              className="chatbot-header__close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <i className="fas fa-times" />
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index}>
                <div
                  className={`chatbot-message chatbot-message--${msg.role}`}
                >
                  {msg.role === "assistant" && (
                    <div className="chatbot-message__avatar">
                      <i className="fas fa-robot" />
                    </div>
                  )}
                  <div
                    className="chatbot-message__bubble"
                    dangerouslySetInnerHTML={{
                      __html: formatMessage(msg.content),
                    }}
                  />
                </div>
                {/* Quick Reply Options */}
                {msg.role === "assistant" && msg.options && (
                  <div className="chatbot-quick-replies">
                    {msg.options.map((option, i) => (
                      <button
                        key={i}
                        className="chatbot-quick-reply"
                        onClick={() => handleQuickReply(option.value)}
                        disabled={isLoading}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="chatbot-message chatbot-message--assistant">
                <div className="chatbot-message__avatar">
                  <i className="fas fa-robot" />
                </div>
                <div className="chatbot-message__bubble chatbot-typing">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form className="chatbot-input" onSubmit={sendMessage}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={isLoading}
              aria-label="Type your message"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
            >
              <i className="fas fa-paper-plane" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
