
import { currentUser } from "@clerk/nextjs/server";
import { StreamClient, VideoLayoutSettingsNameEnum, VideoRecordSettingsRequestModeEnum, VideoRecordSettingsRequestQualityEnum} from "@stream-io/node-sdk";
import { NextResponse } from "next/server"



export async function GET() {
    const client =  new StreamClient(
        process.env.NEXT_PUBLIC_STREAM_API_KEY as string,
        process.env.STREAM_SECRET_KEY as string);
        const layoutOptions = {
          "video.background_color":'#161925',
          "grid.rows":4,
          "grid.columns":2
          //add styles
        };
        client.video.updateCallType('default',{
          settings:{
            recording:{
                mode: VideoRecordSettingsRequestModeEnum.AVAILABLE,
      audio_only: false,
      quality: VideoRecordSettingsRequestQualityEnum._1080P,
      layout: {
        name: VideoLayoutSettingsNameEnum.GRID,
        options: layoutOptions,
      },
            }
          }  
        })
    const user = await currentUser()
    const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
    const token = client.createToken(user?.id as string); 
    return NextResponse.json({token})
}