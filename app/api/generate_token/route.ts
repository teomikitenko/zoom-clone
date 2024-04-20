export const dynamic = 'force-dynamic' 

import { StreamClient, UserObjectRequest } from "@stream-io/node-sdk";
import { NextResponse } from "next/server"

 

export async function POST(request: Request) {
    const client =  new StreamClient(process.env.NEXT_PUBLIC_STREAM_API_KEY as string, process.env.STREAM_SECRET_KEY as string);
    const data = await request.formData()
    const userId = data.get('user_id')
    const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;

    const token = client.createToken(userId as string,exp);
    const callId = 'jN9qmb6vrosu'//require('crypto').randomUUID()
    return NextResponse.json({ token,userId,callId })
}