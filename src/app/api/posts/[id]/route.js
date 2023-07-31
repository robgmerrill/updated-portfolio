import {NextResponse} from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post"

export const GET = async (request, {params}) => {
    const {id} = params;
    console.log("heretofore", id)
    // fetch data from mongodb
    try {
        await connect();
        console.log("here1")
        const post = await Post.findById(id);
        console.log("here2")
        return new NextResponse(JSON.stringify(post), { status: 200 });
      } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
      }

   
}