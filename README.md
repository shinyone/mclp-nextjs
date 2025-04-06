# MCLP-nextjs (Minecraft LaunchPad)

## Overview

This project is a Next.js application that serves as a community hub for survival Minecraft gamers. It features a dark mode styling and provides information about the server, including descriptions, Discord links, and voting options.

This is a Next.js version of the original [PHP version](https://github.com/mrfloris/MCLP).  Thanks for sharing @mrfloris! 

## Next.js

Learn about [Next.js](https://nextjs.org/docs)

Get free hosting (for small projects) from [Vercel](https://vercel.com/docs/getting-started-with-vercel)

## Project Structure

```
LaunchPad
├── public
│   ├── assets
│   │   └── logo.png
├── src
│   ├── components
│   │   ├── HomeSection.tsx
│   │   └── Layout.tsx
│   ├── pages
│   │   ├── index.tsx
│   │   ├── 404.tsx
│   │   └── _app.tsx
│   ├── styles
│   │   └── globals.css
│   └── utils
│       └── config.ts
│       └── script.js
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 12 or later)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shinyone/mclp-nextjs.git
   cd mclp-nextjs
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Edit the `.env.local` file in the root directory and add your environment variables:

```.env

# Minecraft server details
NEXT_PUBLIC_SERVER_NAME=ExampleServer
NEXT_PUBLIC_SERVER_NAME_SHORT=MCES
NEXT_PUBLIC_SERVER_IP=Example.com
NEXT_PUBLIC_SERVER_PORT=25565
NEXT_PUBLIC_SERVER_TYPE=Java Edition
NEXT_PUBLIC_SERVER_DESCRIPTION=Minecraft Survival Server
NEXT_PUBLIC_SERVER_VERSION=1.21.4

# Minecraft server season details
NEXT_PUBLIC_SERVER_SEASON_VERSION=0.0.1
NEXT_PUBLIC_SERVER_SEASON_ZERO=Founders Era
NEXT_PUBLIC_SERVER_SEASON_ONE=The Reset
NEXT_PUBLIC_SERVER_SEASON_TWO=Amplified
NEXT_PUBLIC_SERVER_SEASON_THREE=Blossom Boom
NEXT_PUBLIC_SERVER_SEASON_FOUR=Final Chapter

# Minecraft server environment details
NEXT_PUBLIC_SERVER_JAVA_VERSION=23.0.2

# Discord server details
NEXT_PUBLIC_SERVER_DISCORD_LINK=discord.gg/floris
NEXT_PUBLIC_SERVER_DISCORD_OWNER1=@mrfloris
NEXT_PUBLIC_SERVER_DISCORD_OWNER2=@admins

# Live map details
NEXT_PUBLIC_SERVER_MAP_LINK=Example.com:8100

# Voting for the server details
NEXT_PUBLIC_SERVER_VOTE_REWARDS=a diamond
NEXT_PUBLIC_SERVER_VOTE_SITE1_URL=https://www.example.com/vote/server/1
NEXT_PUBLIC_SERVER_VOTE_SITE1_SHORT=VS1
NEXT_PUBLIC_SERVER_VOTE_SITE2_URL=https://www.example.com/vote/server/2
NEXT_PUBLIC_SERVER_VOTE_SITE2_SHORT=VS2
NEXT_PUBLIC_SERVER_VOTE_SITE3_URL=https://www.example.com/vote/server/3
NEXT_PUBLIC_SERVER_VOTE_SITE3_SHORT=VS3
NEXT_PUBLIC_SERVER_VOTE_SITE4_URL=https://www.example.com/vote/server/4
NEXT_PUBLIC_SERVER_VOTE_SITE4_SHORT=VS4

# Website details
NEXT_PUBLIC_SERVER_WEBSITE_VERSION=0.4.0

```

### Running the Application

To start the development server, run:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to view the application.

### Building for Production

To build the application for production, run:

```bash
npm run build
```

Then, to start the production server:

```bash
npm start
```

## Components

- **HomeSection**: Displays the home section with a description of the server and a button to learn more.
- **Layout**: Provides a consistent layout structure for the application.

## Styles

The application uses a dark mode styling and global styles in `src/styles/globals.css`.

## Contributing

Feel free to submit issues or pull requests to improve the project.

## License

This project is licensed under the MIT License.
