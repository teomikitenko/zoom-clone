
import { StreamClient, UserObjectRequest } from "@stream-io/node-sdk";
import { NextResponse } from "next/server"

 

export async function POST(request: Request) {
    const client =  new StreamClient(
        'ac9crr7ggy7x',
         'xcgp54ztax8pd8haka2tnaj5dux6ubradmndtwbh49fghmy8gyhu8jbmct86et37');
    const data = await request.formData()
    const userId = data.get('user_id')
    const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
    const token = client.createToken(userId as string,exp);
    const callId = 'jN9qmb6vrosu'//require('crypto').randomUUID()
    return NextResponse.json({ token,userId,callId })
}