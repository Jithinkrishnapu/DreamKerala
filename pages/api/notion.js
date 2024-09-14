import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async function handler(req, res) {
  const { pageId } = req.query; // Get page ID from query parameters
  try {
    const page = await notion.pages.retrieve({page_id:pageId});
    res.status(200).json(page);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve page" });
  }
}
