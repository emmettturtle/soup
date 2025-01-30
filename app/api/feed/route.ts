import { getJson } from "serpapi";
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

const API_KEY = process.env.NEXT_PUBLIC_SERPAPI_API_KEY;

export async function GET() {
    try {
        const response = await getJson({
            engine: "google_news",
            api_key: API_KEY,
            // q: "",
            hl: "en",
            gl: "us",
            topic_token: "CAAqJggKIiBDQkFTRWdvSUwyMHZNRFZxYUdjU0FtVnVHZ0pWVXlnQVAB"
        });
        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}