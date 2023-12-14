import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '~/lib/db';
import { hash } from 'bcrypt';

interface ResponseData {
    user: User | null;
    message: string;
}

interface User {
    email: string;
    username: string;
    name: string;
    password: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        if (req.method === 'POST') {
            // Destructure the request body and add validation
            const { email, username, name, password }: User = req.body as User;

            if (!email || !username || !password) {
                return res.status(400).json({ user: null, message: 'Email, username, and password are required' });
            }

            // Check if the user already exists by email
            const existingUserByEmail = await db.user.findUnique({
                where: { email: email },
            });

            if (existingUserByEmail) {
                return res.status(400).json({ user: null, message: 'Email already exists' });
            }

            // Check if the user already exists by username
            const existingUserByUsername = await db.user.findUnique({
                where: { username: username },
            });

            if (existingUserByUsername) {
                return res.status(400).json({ user: null, message: 'Username already exists' });
            }

            // Hash the password
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
            const hashedPassword: string = await hash(password, 10);

            // Create the user
            const user = await db.user.create({
                data: {
                    email: email,
                    username: username,
                    name: name,
                    password: hashedPassword, // Save the hashed password
                },
            });

            // Send a success response
            res.status(201).json({ user, message: 'User created successfully' });
        } else {
            // Handle other HTTP methods if necessary
            res.status(405).json({ user: null, message: 'Method Not Allowed' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ user: null, message: 'Internal Server Error' });
    }
}