import Router from "next/router";
import Link from "next/link";
import { LogoutIcon } from "@heroicons/react/outline";
import Cookies from "js-cookie";

const Header = () => {
  const logout = () => {
    Cookies.remove("token");
    Router.push("/login");
  };

  return (
    <nav className="top-0 absolute w-full flex flex-wrap items-center justify-between px-3 py-4">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <Link href="/">
          <a>
            <h1 className="font-semibold">Home</h1>
          </a>
        </Link>
        <a className="flex items-center cursor-pointer" onClick={logout}>
          Logout <LogoutIcon className="ml-2 h-5 w-5 text-blue-500" />
        </a>
      </div>
    </nav>
  );
};

export default Header;
