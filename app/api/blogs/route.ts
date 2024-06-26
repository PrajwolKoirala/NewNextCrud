import { NextResponse } from "next/server";
import { addPost, getPosts } from "@/lib/data";
export const GET = async (req: Request, res: Response) => {
    console.log("GET REQUEST");

    try{
        const posts = getPosts();
        return NextResponse.json({message:"OK", posts}, {status:200})
    }catch(err){
        return NextResponse.json({message:"error", err},
        {status: 500}
        )
    }
    
}

export const POST = async (req: Request, res: Response) => {
    console.log("post REQUEST");
    const {title, desc} = await req.json();
    try{
        const post = {title, desc, date:new Date(), id: Date.now().toString()};
        addPost(post);
        return NextResponse.json({message:"OK", post}, {status:201})

    }catch(err){
        return NextResponse.json({message:"error", err},
        {status: 500}
        )
    }
}