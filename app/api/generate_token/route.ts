
import { StreamClient, UserObjectRequest } from "@stream-io/node-sdk";
import { NextResponse } from "next/server"
import { currentUser } from '@clerk/nextjs/server';


 

export async function GET() {
    const client =  new StreamClient(
        'ac9crr7ggy7x',
        'xcgp54ztax8pd8haka2tnaj5dux6ubradmndtwbh49fghmy8gyhu8jbmct86et37');
   // const user = await currentUser()
    const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
     const token = client.createToken('fdbdfbdfbdf' as string); 
     console.log(token)
    return NextResponse.json({token})
}