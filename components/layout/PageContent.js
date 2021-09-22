import Head from "next/head";

const PageContent = (props) => {
  const { title } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
      <div className="absolute w-full h-full bg-gray-100">
      <div className="container mx-auto px-4 h-full">
          {props.children}
      </div>
      </div>
      </main>
    </>
  );
};

export default PageContent;
