const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({log:["query"]});

async function createUser() {
  try {
    const newUser = await prisma.user.create({
      data: {
        name: "deanef",
        email: "deanf1@123.com",
        age: 27,
        UserPreference:{
          create:{
            emailUpdates:true,
          }
        }
      },
      // include:{
      //  UserPreference:true,
      // },
      select:{
        name:true
      }
    });

    console.log("User created:", newUser);
  } catch (error) {
    console.error("Error creating user:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createUser();
