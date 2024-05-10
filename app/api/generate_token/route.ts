
import { currentUser } from "@clerk/nextjs/server";
import { StreamClient} from "@stream-io/node-sdk";
import { NextResponse } from "next/server"

 

export async function GET() {
    const client =  new StreamClient(
        process.env.NEXT_PUBLIC_STREAM_API_KEY as string,
        process.env.STREAM_SECRET_KEY as string);
    const user = await currentUser()
    const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
    const token = client.createToken(user?.id as string); 
    return NextResponse.json({token})
}