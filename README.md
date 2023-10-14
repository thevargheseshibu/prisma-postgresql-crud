# Prisma Postgresql Node.js Project



    This repository contains a Node.js project that demonstrates the use of Prisma, a modern database toolkit, to interact with a PostgreSQL database. Prisma simplifies database access and management in Node.js applications.

## Getting Started

![home](https://github.com/thevargheseshibu/prisma-postgresql-crud/blob/master/Images/home.png)

### Prerequisites

    Before you begin, ensure you have met the following requirements:

    - Node.js installed on your machine
    - PostgreSQL database created and running
    - npm or yarn installed

### Clone the Repository

    
    git clone https://github.com/thevargheseshibu/prisma-postgresql-crud.git
    cd prisma-postgresql-crud
    

### Install Dependencies

    npm install 

### Database Configuration

1. Create a PostgreSQL database.

2. Configure your database connection URL in a .env file:
   DATABASE_URL=postgresql://username:password@localhost:5432/your_database_name

### Generate Prisma Client
    Generate the Prisma Client code based on your database schema:
    npx prisma generate 

### Run the Application
    Start the Node.js application:
    npm start 

###  Stacks Used
- Node.js: A JavaScript runtime for building server-side applications.
- Prisma: A modern database toolkit for Node.js and TypeScript.
- PostgreSQL: An open-source relational database management system.
- nodemon: A utility that monitors for changes in your source code and automatically restarts your server.

### Features
- Define data models using Prisma schema.
- Generate Prisma Client for database operations.
- Insert, update, delete, and query data from the PostgreSQL database.
- Manage database schema changes using Prisma Migrations.
- Use nodemon for automatic server restart during development.

### Folder Structure
- prisma/: Contains the Prisma schema file (schema.prisma).
- src/: Contains your Node.js application code.
- package.json: Lists project dependencies and scripts.
- README.md: This documentation file.
- .env.example: An example .env file for database configuration.


