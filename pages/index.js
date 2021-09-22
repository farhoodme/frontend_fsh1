import Head from "next/head";
import { withAuthSync } from "../hocs/AuthHOC";
import PageContent from "../components/layout/PageContent";
import Header from "../components/layout/Header";

function Home() {
  return (
    <PageContent title="Home">
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">

      <Header />

      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Home Page</h1>

        <p className="mt-3 text-2xl">
          Get started by editing{" "}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.js
          </code>
        </p>
      </div>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
    </PageContent>
  );
}

export default withAuthSync(Home);