"use server";
import { PrismaClient } from "@prisma/client";
import { currentUser } from "@clerk/nextjs/server";
import type { UserObject } from "@/types/types";

const prisma = new PrismaClient();

export async function createUser(userObject: UserObject) {
  await prisma.users.create({
    data: userObject,
  });
}
export async function createMeeting(formdata: FormData) {
  const user = await currentUser();
  await prisma.users.update({
    where: { userClerkId: user?.id as string },
    data: {
      meetings: {
        create: {
          meetingDate: formdata.get("date") as string,
          meetingDescription: formdata.get("description") as string,
          meetingId: user?.id as string,
        },
      },
    },
  });
}
export async function upcomingMeetings() {
  const meetings = await prisma.meetings.findMany({
    where: {
      meetingDate: {
        gt: new Date().toISOString(),
      },
    },
    include: {
      user: true,
    },
  });
  return meetings;
}
export async function prevMeetings() {
  const meetings = await prisma.meetings.findMany({
    where: {
      meetingDate: {
        lt: new Date().toISOString(),
      },
    },
    include: {
      user: true,
    },
  });
  return meetings;
}
