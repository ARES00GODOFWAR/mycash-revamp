import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    message: string
}

export default async function GET(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    // res.status(200).json({ message: 'Hello from Next.js!' })

    try {
        if (req.method === 'POST') {
            // Process a POST request
            // const body = await JSON.parse(req.body)
            res.status(200).json({ message: 'Hello from Next.js! POST' })
        }
    }
    catch (error) {
        // res.status(500).json({ statusCode: 500, message: error.message })
    }
}