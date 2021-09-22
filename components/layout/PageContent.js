import Head from "next/head";

const PageContent = (props) => {
  const { title } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-100">
        <div className="container mx-auto xl:px-20">{props.children}</div>
      </main>
    </>
  );
};

export default PageContent;
