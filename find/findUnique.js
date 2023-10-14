const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({ log: ["query"] });

async function createUser() {
  try {
    const newUser = await prisma.user.findUnique({
      where: {
        id: "d0caacd8-947c-4774-8753-2b18425df4c7",
      },
      //take:2,
      //skip:1
    });

    console.log("User created:", newUser);
  } catch (error) {
    console.error("Error creating user:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createUser();
