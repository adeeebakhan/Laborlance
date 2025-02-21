"use client";
import Link from "next/link";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/services/firebase";
import { signOut } from "firebase/auth";
const Header = () => {
  const [user] = useAuthState(auth);
  var islogin = false;
  if (user == null) {
    islogin = false;
  } else {
    islogin = true;
  }

  return (
    <header className="navbar" id="nav">
      <div className="navbar-start px-3">
        <Link href="/">
          <img
            id="logo"
            src="/logo.svg"
            alt="Labourlance logo"
            width={55}
            height={55}
          />
        </Link>
        <a id="Labourlance" className="px-4">
          Labourlance
        </a>
      </div>
      <div className="navbar-end" id="nav_pag">
        <div className="px-6">
          <Link href="/">Home</Link>
        </div>
        <div className="px-6">
          <Link href="/about">About</Link>
        </div>
        <div className="px-6">
          <Link href="/jobs">Jobs</Link>
        </div>
        <div className="px-6">
          <Link href="/contact">Contact</Link>
        </div>
        {!islogin && (
          <div className="px-6">
            <Link href="/login">Login/Register</Link>
          </div>
        )}
        {islogin && (
          <div className="px-6">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="bg-base-100 text-neutral-content rounded-full w-12">
                  <span className="text-4xl">H</span>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-zinc-800 rounded-box w-52"
              >
                <li>
                  <Link
                    href="/profile"
                    className="justify-between text-primary"
                  >
                    Profile{" "}
                  </Link>
                </li>
                <li>
                  <a
                    className="justify-between text-primary"
                    onClick={() => signOut(auth)}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
