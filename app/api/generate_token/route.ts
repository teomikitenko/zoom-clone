import { currentUser } from "@clerk/nextjs/server";
import {
  StreamClient,
  VideoLayoutSettingsNameEnum,
  VideoRecordSettingsRequestModeEnum,
  VideoRecordSettingsRequestQualityEnum,
} from "@stream-io/node-sdk";
import { NextResponse } from "next/server";

export async function GET(req:Request) {
  const user = await currentUser();
  let client = new StreamClient(
      process.env.NEXT_PUBLIC_STREAM_API_KEY as string,
      process.env.STREAM_SECRET_KEY as string,{timeout:7000}
    );
    const layoutOptions = {
      "logo.image_url": "",
      "layout.background_color": "#161925",
      "title.text": "",
      "participant.video_border_rounded": true,
      "participant.label_border_radius": 1.3,
      "participant.label_display_border": true,
    };
    client.video.updateCallType("default", {
      settings: {
        recording: {
          mode: VideoRecordSettingsRequestModeEnum.AVAILABLE,
          audio_only: false,
          quality: VideoRecordSettingsRequestQualityEnum._1080P,
          layout: {
            name: VideoLayoutSettingsNameEnum.GRID,
            options: layoutOptions,
          },
        },
      },
    });
    const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
    const token = client.createToken(user?.id as string);
    return NextResponse.json({ token });  
}
