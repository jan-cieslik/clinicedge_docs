---
sidebar_position: 3
---
# 2.1 Getting Started

Clinic Edge is a [Next.js](https://nextjs.org/) project, bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The backend is powered by **Supabase**. For a detailed explanation of the file and folder structure, see [**Section 3. Get to Know: System Components**](Database_Structure/3_1_introduction_to_supabase.md).

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 16.x or higher) - [Download here](https://nodejs.org/)
- **npm**, **yarn**, **pnpm**, or **bun** (package manager)
- **Git** - [Download here](https://git-scm.com/)

To check if you have Node.js installed, run:
```bash
node --version
npm --version
```

## Setup Instructions

### 1. Clone the Repository

First, clone the Clinic Edge repository from GitHub:

```bash
git clone https://github.com/jan-cieslik/clinic_edge.git
cd clinic-edge
```


### 2. Install Dependencies

Install all project dependencies using your preferred package manager:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

This command reads the `package.json` file and installs all required dependencies in the `node_modules` folder.

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory of the project to store environment variables. The easiest way is to copy the template file:

```bash
cp .env.default .env.local
```

Then, edit the `.env.local` file and add your **Supabase** credentials:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Alternatively, if no `.env.default` file is present, you can create `.env.local` manually with the required variables above.

Contact your project lead or DevOps team to obtain the Supabase credentials. For more information on Supabase configuration, refer to [**Section 3.1: Introduction to Supabase**](Database_Structure/3_1_introduction_to_supabase.md).

### 4. Run the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### 5. Access the Application

Once the server is running, open your browser and navigate to:

```
http://localhost:3000
```

You should now see the Clinic Edge application running locally. The page will automatically reload when you make changes to the code.

## Troubleshooting

- **Port 3000 already in use**: If port 3000 is already in use, you can specify a different port using:
  ```bash
  npm run dev -- -p 3001
  ```

- **Dependencies not installing**: Try clearing the npm cache and reinstalling:
  ```bash
  npm cache clean --force
  npm install
  ```

- **Environment variables not loading**: Make sure you've created the `.env.local` file in the root directory and restarted the development server.

For more detailed information on the system architecture and components, see [**Section 3. Get to Know: System Components**](Database_Structure/3_1_introduction_to_supabase.md).
