import {NextResponse} from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post"

export const GET = async (request) => {
    // fetch data from mongodb
    try {
        console.log("route 1")
        await connect();
        console.log("route 2")
        const posts = await Post.find();
        console.log("route 3")
        return new NextResponse(JSON.stringify(posts), { status: 200 });
      } catch (err) {
        console.error('There has been a problem with your fetch operation:', error);
      }

   
}