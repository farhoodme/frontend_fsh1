import { TwitterIcon } from "../icons/svgIcons";
import {
  DotsVerticalIcon,
  StarIcon,
  TrashIcon,
  ShareIcon,
} from "@heroicons/react/outline";

const TwitterPost = (props) => {
  const { username, name, user_followers, created_at, content } = props.item;

  return (
    <div className="border border-gray-300 rounded-md bg-white">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <div className="flex">
          <div className="rounded-full h-9 w-9 flex items-center justify-center bg-twitterBlue mt-1">
            <TwitterIcon color="#fff" />
          </div>
          <div className="flex flex-col align-center justify-center pl-2">
            <div className="flex text-sm">
              <div className="font-semibold">{name}</div>
              <a
                href={`https://twitter.com/${username}`}
                target="_blank"
                className="ml-2 text-twitterBlue"
              >
                @{username}
              </a>
              <div className="ml-2">
                Takipçi: <span className="font-semibold">{user_followers}</span>
              </div>
            </div>
            <div className="text-xs text-gray-500">{created_at}</div>
          </div>
        </div>
        <div>
          <DotsVerticalIcon className="ml-2 h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="px-4 py-3 text-sm h-32 overflow-auto">{content}</div>
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex">
          <div>
            <StarIcon className="ml-2 h-5 w-5 text-gray-400" />
          </div>
          <div className="px-4">
            <TrashIcon className="ml-2 h-5 w-5 text-gray-400" />
          </div>
          <div>
            <ShareIcon className="ml-2 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitterPost;
