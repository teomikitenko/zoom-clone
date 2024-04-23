"use server"
import { PrismaClient } from "@prisma/client";

export async function createUser(formdata:FormData) {
    const prisma = new PrismaClient();

    await prisma.user.create({
      data: {
        email: formdata.get('email') as string,
        name: formdata.get('name') as string,
      },
    });
  }