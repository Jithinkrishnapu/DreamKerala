import React, { useLayoutEffect, useState, useTransition } from "react";
import { Nav, Tab } from "react-bootstrap";
import TariffTable from "./TariffTable";
import VehicleTable from "../VehicleTable";

function TariffComponent() {
  const tabData = [
    {
      eventKey: "tab1",
      title: "AC Sedan",
      imgSrc: "assets/images/gallery/sedan.png",
      description:
        "Sit amet consectetur velit integer tincidunt scelerisque. Sodales volutpat neque fermeny malesuada scelerisque massa lacus",
      checkList: ["Family Camping", "Couple Camping", "Wild Camping"],
    },
    {
      eventKey: "tab2",
      title: "Ertiga",
      imgSrc: "assets/images/gallery/ertiga.png",
      description:
        "Sit amet consectetur velit integer tincidunt scelerisque. Sodales volutpat neque fermeny malesuada scelerisque massa lacus",
      checkList: ["Family Camping", "Couple Camping", "Wild Camping"],
    },
    {
      eventKey: "tab3",
      title: "Innova",
      imgSrc: "assets/images/gallery/innova.png",
      description:
        "Sit amet consectetur velit integer tincidunt scelerisque. Sodales volutpat neque fermeny malesuada scelerisque massa lacus",
      checkList: ["Family Camping", "Couple Camping", "Wild Camping"],
    },
    {
      eventKey: "tab4",
      title: "Tempo Traveller",
      imgSrc: "assets/images/gallery/traveller.png",
      description:
        "Sit amet consectetur velit integer tincidunt scelerisque. Sodales volutpat neque fermeny malesuada scelerisque massa lacus",
      checkList: ["Family Camping", "Couple Camping", "Wild Camping"],
    },
    {
      eventKey: "tab5",
      title: "Mini Coach",
      imgSrc: "assets/images/gallery/mini.png",
      description:
        "Sit amet consectetur velit integer tincidunt scelerisque. Sodales volutpat neque fermeny malesuada scelerisque massa lacus",
      checkList: ["Family Camping", "Couple Camping", "Wild Camping"],
    },
    {
      eventKey: "tab6",
      title: "Large Coach",
      imgSrc: "assets/images/gallery/coach.png",
      description:
        "Sit amet consectetur velit integer tincidunt scelerisque. Sodales volutpat neque fermeny malesuada scelerisque massa lacus",
      checkList: ["Family Camping", "Couple Camping", "Wild Camping"],
    },
  ];

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  useLayoutEffect(() => {
    startTransition(async () => {
      try {
        const response = await fetch("/api/tariff");
        if (!response.ok) {
          throw new Error("Error fetching carousel data");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    });
  }, [startTransition]);



  return (
    <section className="activity-section">
      <div className="activity-wrapper-bgc  text-white black-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title text-white">
                  Affordable and Flexible Pricing
                </span>
                <h2>Explore Your Destination with Ease and Comfort</h2>
              </div>
            </div>
          </div>
          <Tab.Container defaultActiveKey="0">
            <div className="row">
              <div className="col-lg-4">
                {/*=== Activity Nav Tab ===*/}
                <div className="activity-nav-tab mb-50 wow fadeInLeft">
                  <Nav as="ul" className="nav nav-tabs">
                    {data.map((tab,i) => (
                      <Nav.Item as="li" key={i}>
                        <Nav.Link
                          as="a"
                          href={`#${i}`}
                          className="nav-link"
                          eventKey={i}
                        >
                          {tab?.properties?.Headline?.rich_text[0]
                                ?.plain_text}
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </div>
              </div>
              <div className="col-lg-8 justify-content-center align-items-center d-flex ">
                {/*=== Tab Content ===*/}
                <Tab.Content className="tab-content mb-50 wow fadeInRight">
                  {data.map((tab,i) => (
                    <Tab.Pane
                      className="tab-pane fade"
                      eventKey={i}
                      key={i}
                    >
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          {/*=== Activity Content Box ===*/}
                          <div className="activity-content-box">
                            {/* <TariffTable
                              selectedModel={i || 0}
                            /> */}

<div>
              { data[i]?.properties?.table?.rich_text?.length ? 
              <TariffTable data={JSON.parse(data[i]?.properties?.table?.rich_text[0]?.plain_text)} />
               : <></>}
            </div>

                            <p
                              style={{
                                background: "#2E709E",
                                borderRadius: 5,
                                opacity: 0.9,
                              }}
                              className="p-2 text-center"
                            >
                              <span>*NB : </span>Above rates include toll,
                              parking, and driver bata, and are subject to
                              change due to availability, fuel rates, and
                              festive or seasonal periods.
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          {/*=== Activity Image Box ===*/}
                          <div className="activity-image-box">
                            <img
                              src={data[i]?.properties?.images?.files[0]?.file?.url}
                              className="radius-12"
                              alt={data[i]?.properties?.Headline?.rich_text[0]
                                ?.plain_text}
                            />
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </div>
            </div>
          </Tab.Container>
        </div>
      </div>
    </section>
  );
}

export default TariffComponent;
