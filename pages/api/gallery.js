import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_KEY });
const NOTION_DB = process.env.NOTION_DB;

// Main handler function
export default async function handler(req, res) {
    if (req.method === 'GET') {
        return handleGet(req, res);
    } else {
        // Handle other methods or return a 405 Method Not Allowed
        res.setHeader('Allow', ['GET']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

// Function to handle GET requests
async function handleGet(req, res) {
    try {
        const response = await notion.databases.query({
            database_id: NOTION_DB,
            filter: {
                property: "Status",
                select: {
                    equals: "Live"
                }
            }
        });

        return res.status(200).json(response.results);
    } catch (error) {
        console.error("Error fetching Notion data: ", error);
        return res.status(500).json({ error: "Error fetching Notion data" });
    }
}
