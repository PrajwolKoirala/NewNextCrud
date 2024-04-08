// pages/api/users.ts

// import { NextApiRequest, NextApiResponse } from 'next';
// import { getAllUsers } from '@/data/user';


// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'GET') {
//     try {
//       const users = await getAllUsers();
//       res.status(200).json(users);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users); // Return the response
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ status: 500, message: "Something went wrong" }); // Return the error response
  }
}

