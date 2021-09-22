import Head from "next/head";

const PageContent = (props) => {
  const { title } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <div className="container">{props.children}</div>
      </main>
    </>
  );
};

export default PageContent;
