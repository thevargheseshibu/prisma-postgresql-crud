const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


async function createUser() {
    try {
      const newUser = await prisma.user.create({
        data: {
          name: 'John Doe',
          email: 'john@example.com',
        },
      });
  
      console.log('User created:', newUser);
    } catch (error) {
      console.error('Error creating user:', error);
    } finally {
      await prisma.$disconnect();
    }
  }
  
  createUser();
  