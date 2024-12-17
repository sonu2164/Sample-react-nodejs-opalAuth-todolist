# Sample <JS/(React, Nodejs)>

Sample description
It is a note sharing webapp, where user's can share notes and see other's notes. Role management and 

## 🚀 Getting Started  

### Open Using Daytona  

1. **Install Daytona**: Follow the [Daytona installation guide](https://www.daytona.io/docs/installation/installation/).  
2. **Create the Workspace**:  
   ```bash  
   daytona create [https://github.com/sonu2164/Sample-react-nodejs-opal-auth-todolist](https://github.com/sonu2164/Sample-react-nodejs-opalAuth-todolist)
   ```  

... MORE STEPS IF NEEDED ...

4. **Start the Application**:  
   *Start the server*
   Before starting server make sure that OPAL service is up and then create a `.env` file in `server` directory and paste following code into it.
   ```
   DATABASE_URL=mysql://root:mysql@localhost:3306/test
   ```
   This url is based on configs mentioned in `docker-compose.yml`, you can change it accordingly.

   Now execute the following commands in your `server` directory to start the server:
   ```bash
   npm install
   npm run prisma:migrate
   npm run dev
   ```
   Now our server will start at `http://localhost:3001`

*Start the client*
   Before starting client make sure that server is up and then run following commands in `client` directory to start the client:
   ```bash
   npm install
   npm start
   ```
   Now our client will start at `http://localhost:3000`


---

## License
This project is licensed under the Apache License. See the [LICENSE](LICENSE) file for details.

## ✨ Features  

- to showcase authorization using opal.
- to use custom data fetcher with mysql for real world applications.

## Features
- Create new notes and share them with everyone
- View notes, Delete and edit own notes.
- Authorizatiion and Role management done using Opal.
- Two tole, admin and user.

## TechStack
- Reactjs, Maretial UI for frontend
- Opal for authorisation (authZ)
- Nodejs (Express) for backend
- MySQL for database
- Prisma for ORM
- axios to fetch data
