"use server"
import { PrismaClient } from "@prisma/client";
import { currentUser } from '@clerk/nextjs/server';
 

type UserObject = {
  userClerkId:string,
  name:string
}

const prisma = new PrismaClient();

 export async function createUser(userObject:UserObject) {
  await prisma.user.create({
    data: userObject,
    });
  } 
  export async function createMeeting(formdata:FormData){
  const user = await currentUser();
   await prisma.meetings.create({
    data:{
      creatorId:user?.id as string,
      meetingDate:formdata.get('date') as string,
      meetingDescription:formdata.get('description') as string
    }
  }) 
  }