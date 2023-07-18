This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

After clone the repo:

### Run project

- Install dependencies:

```bash

npm i

```

- Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Open database

- start container services (you need have docker installed)

```bash
docker-compose up
```

- generate Prisma client

```bash
npx prisma generate
```

- run migrations

```bash
  npx prisma migrate dev
```

- open prisma studio

```bash
  npx prisma studio
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
