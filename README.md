

```markdown
# URL Shortener Project

## Description
This project aims to create a URL shortener service that converts long URLs into shorter, more manageable links. It utilizes a PostgreSQL database connected through Prisma for data storage and management.

## Setup Instructions

### Prerequisites
- Node.js installed on your system
- PostgreSQL database server installed and running

### Steps

1. Clone the Repository:

```bash
git clone <repository_url>
```

2. Install Dependencies:

```bash
cd url-shortener
npm install
```

3. Set Up PostgreSQL Database:
   - Install PostgreSQL if not already installed.
   - Create a new database for the URL shortener service.

4. Configure Prisma:
   - Install Prisma CLI globally:

```bash
npm install -g prisma
```

   - Initialize Prisma in your project directory:

```bash
prisma init
```

   - Follow the prompts to set up Prisma with your database.

5. Run the migaration query:
```bash
npx prisma migrate dev
```

6. Generate Prisma Client:
```bash
npx prisma generate
```

7. Start the Application:

Go to Frontend dir
```bash
cd frontend
```
then,
start the application
```bash
npm run dev
```

Go to Backend dir
```bash
cd Backend
```
then,
start the application
```bash
npm run dev
```


## Usage
- Once the application is running, you can access the URL shortener service through its API endpoints to shorten and manage URLs.
- Make personalized shortUrl share with friends or can directly implement in your application


## Contributors
- Navneet (https://github.com/NAVI1322)

```

Feel free to customize it further based on your project's specific requirements!
