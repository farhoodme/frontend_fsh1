import React, { useState, useEffect } from "react";
import { withAuthSync } from "../hocs/AuthHOC";
import PageContent from "../components/layout/PageContent";
import Header from "../components/layout/Header";
import { getUserDetails } from "../api/IdentityAPI";
import { getTwitterPosts } from "../api/StreamAPI";
import TwitterPost from "../components/TwitterPost";
import Loading from "../components/Loading";


function Home() {
  const [posts, setPosts] = useState();
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    getUserDetails()
      .then((data) => {
        const { user } = data;
        if (user) {
          const { streams } = user;
          if (streams.length > 0) {
            const id = streams[0].id;
            getTwitterPosts({
              page: page,
              "id[]": id,
              to: "2021-08-05T10:43:45.502Z",
              start_date: "2021-08-04T20:59:59.999",
              end_date: "2021-09-03T10:43:45.504",
              computer: true,
              popular: false,
            }).then((data) => {
              const { documents, stats } = data;
              setPosts(documents);
              console.log(documents)
            });
          }
        }
      })
      .catch((error) => {})
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <PageContent title="Home">
      <div className="min-h-screen py-2 bg-gray-100">
        <Header />
        <div className="px-8 md:px-10 mx-auto w-full">
          <div className="flex flex-wrap mb-10">
            {posts
              ? posts.map((item) => {
                  return (
                    <div key={item.id} className="w-full lg:w-6/12 px-2 py-2">
                      <TwitterPost item={item} />
                    </div>
                  );
                })
              : <Loading />}
          </div>
        </div>
      </div>
    </PageContent>
  );
}

export default withAuthSync(Home);
