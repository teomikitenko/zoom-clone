"use server"
import { PrismaClient } from "@prisma/client";
import { currentUser } from '@clerk/nextjs/server';
import { ObjectId } from 'bson'  


const prisma = new PrismaClient();

/* export async function createUser(formdata:FormData) {
  await prisma.user.create({
    data: {
      userClerkId:,
      name: formdata.get('name') as string,
      },
    });
  } */
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