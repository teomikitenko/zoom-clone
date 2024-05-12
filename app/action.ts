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
  const id = new ObjectId(user?.id as string)
   await prisma.meetings.create({
    data:{
      creatorId:'',
      meetingDate:formdata.get('date') as string,
      meetingDescription:formdata.get('description') as string
    }
  }) 
  }