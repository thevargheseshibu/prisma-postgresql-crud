const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Function to retrieve all users from the database
async function readAllUsers() {
  try {
    const users = await prisma.user.findMany();
    console.log('All users:', users);
  } catch (error) {
    console.error('Error reading all users:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Call the function to retrieve all users
readAllUsers();
