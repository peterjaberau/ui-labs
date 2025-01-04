# Prisma
```bash

# prisma folder
--prisma
  |--migrations
    --|--20220101000000_init
  |--schema.prisma
  |--seeds.ts
  |--_dev.db_


# setup [.env]
DATABASE_URL="file:./dev.db"
USER_EMAIL=admin@example.com
USER_PASSWORD=password123

# setup database
npx prisma migrate deploy
npx prisma generate
//pnpm seed
node ./prisma/seed.js   


/prisma/schema.prisma
/prisma/seeds.ts
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

1. npx prisma migrate deploy
2. npx prisma generate
3. node ./prisma/seed.js




# schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model User {
  id           String         @id @default(uuid())
  name         String
}

model Post {
  id        String   @id @default(uuid())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User?    @relation(fields: [authorId], references: [id])
  authorId  String?
}


```


# React Router v7 with Remix Auth.

A production-ready authentication template featuring React Router v7 and Remix Auth, demonstrating multiple authentication strategies:

- **OAuth2 Authentication**: Supports GitHub and Google login
- **TOTP Verification**: Implements secure email verification with Time-based One-Time Password
  - Rate limiting and cooldown periods
  - Configurable attempt limits
  - Auto-expiring verification codes
  - Protection against brute force attacks

Built with Drizzle ORM and D1, optimized for Cloudflare Workers deployment.

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 [TailwindCSS](https://tailwindcss.com/) and [Shadcn](https://ui.shadcn.com/) for UI styling
- 🔑 [Remix Auth](https://github.com/sergiodxa/remix-auth) for authentication
- 🌧️ [Drizzle ORM](https://orm.drizzle.team/) for database
- 🛢️ Cloudflare D1 for database
- 📁 Cloudflare KV for caching
- 📖 [React Router docs](https://reactrouter.com/)

## Links

React Router v7 Authentication Demo Series:
- [React Router v7 with Better Auth](https://github.com/foxlau/react-router-v7-better-auth) - Authentication demo using Better Auth package
- [React Router v7 with Remix Auth](https://github.com/foxlau/react-router-v7-remix-auth) - Multi-strategy authentication demo using Remix Auth

## Getting Started

### Installation

Git clone the repository:

```bash
git clone https://github.com/foxlau/react-router-v7-remix-auth.git
```

Install the dependencies:

```bash
npm install
```

### Development

Run an initial database migration:

```bash
npm run db:apply
```

If you modify the Drizzle ORM schema, please run `npm run db:generate` first. If you need to delete the generated SQL migrations, execute `npm run db:drop` and select the SQL migration you wish to remove.

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

Deployment is done using the Wrangler CLI.

```bash
npx wrangler d1 create rr7-remix-auth
npx wrangler kv namespace create AUTH_VERIFICATION_KV
```

To deploy directly to production:

```sh
npm run db:apply-prod
npm run deploy
```

To deploy a preview URL:

```sh
npm run deploy:version
```

You can then promote a version to production after verification or roll it out progressively.

```sh
npm run deploy:promote
```

## Questions

If you have any questions, please open an issue.
