const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({log:["query"]});

async function createUser() {
  try {
    const newUser = await prisma.user.createMany({
      data: [{
        name: "deanefe",
        email: "deanf1ee@123.com",
        age: 27,

      },{
        name: "Same",
        email: "Same@123.com",
        age: 26,
      }],
     
    });

    console.log("User created:", newUser);
  } catch (error) {
    console.error("Error creating user:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createUser();
