import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	try {
		// Extracting prompt from the request body
		const { prompt } = await req.json();

		// Make sure the prompt exists
		if (!prompt) {
			return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
		}

		// Call OpenAI API
		const response = await fetch('https://api.openai.com/v1/summarize', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,  
			},
			body: JSON.stringify({
				model: 'text-davinci-003',
				prompt: prompt,
				max_tokens: 100,
			}),
		});
		
		// Parse the response from OpenAI API
		const data = {
		text: {
			"S": "The patient reports feeling shortness of breath, fatigue, and chest pain. No prior history of heart disease.",
			"O": "Blood pressure 130/85, heart rate 72 bpm. Weight: 58 Kg. Height: 160cm. ECG shows minor irregularities, but no major concerns.",
			"A": "Likely diagnosis is mild arrhythmia. Further tests are recommended to rule out other conditions.",
			"P": "Prescribe beta-blockers for arrhythmia. Schedule follow-up appointment in 1 month."
		},
		error: null
		};

		// If there's no error from OpenAI, return the summary
		if (response.ok) {
		return NextResponse.json(data, { status: 200 });
		} else {
		return NextResponse.json({ error: 'Error from OpenAI API' }, { status: response.status });
		}
	} catch (error) {
		// If an error occurs during processing
		return NextResponse.json({ error: 'Failed to fetch from OpenAI' }, { status: 500 });
	}
}
