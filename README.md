FRONTEND_FSH1 for authenticate user, fetch and display data based on logged in user.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Project Structure

This project have 2 pages one of the is main page `pages/index.js` another is login page `pages/login.js`. The main page is a protected page and need user authentication to display data.

## Styling

Project use [Tailwind CSS](https://tailwindcss.com/) for styling. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).


## Development

Open the project with your favourite code editor (I prefer Visual Studio Code).

Before development run this command to install required packages and libraries:

```bash
npm install
# or
yarn install
```

And for run the development server using this command:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.


## Unit Test

For unit testing I use [Jest](https://jestjs.io/) testing framework, and tests is writed in __test__ folder, for running test use this command:

```bash
npm run test
# or
yarn test
```


## How to Deploy

### Node.js Server

You can be deployed to any hosting provider that supports Node.js.
Make sure your `package.json` has the `build` and `start` scripts:

```bash
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```

`next build` builds the production application in the `.next` folder. After building, `next start` starts a Node.js server that supports hybrid pages, serving both statically generated and server-side rendered pages.

### Using Docker

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.
2. Build your container: `docker build -t nextjs-docker .`.
3. Run your container: `docker run -p 3000:3000 nextjs-docker`.

