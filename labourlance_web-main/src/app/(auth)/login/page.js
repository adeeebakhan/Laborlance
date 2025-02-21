"use client";
import { auth } from "@/services/firebase";
import Link from "next/link";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const route = useRouter();

  const [signinWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const sshowdialog = () => {
    document.getElementById("sucess").showModal();
  };
  const fshowdialog = () => {
    document.getElementById("fail").showModal();
  };

  const handleLogin = async () => {
    try {
      const res = await signinWithEmailAndPassword(email, password);
      if (res == undefined) {
        fshowdialog();
      } else {
        console.log({ res });
        setemail("");
        setpassword("");
        sshowdialog();
        route.push("/");
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="flex h-screen">
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://static.wixstatic.com/media/30df8e_87e7d9f9faa44671a6b793e02e7d0a00~mv2.webp)`,
        }}
      >
        <div className="absolute left-0 top-1/2 transform p-10 pl-32">
          <h1 className="text-4xl font-bold mb-4 text-primary text-center">
            Welcome to My App
          </h1>
          <p className="text-lg mb-8 text-white text-center">
            Empowering labor with transparency and fairness <br /> – log in to
            connect, work, and earn with integrity.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="bg-white shadow-md w-full md:w-96 p-8">
          <h2 className="text-4xl font-bold mb-6 text-primary">Login</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
              />
              <button className="text-xs text-primary hover:text-blue-500">
                Forgot Password
              </button>
              <dialog id="sucess" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Welcome</h3>
                  <p className="py-4">Welcome Back!!</p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
              <dialog id="fail" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Failed</h3>
                  <p className="py-4">
                    Either Your Login or Password is Wrong!
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
            <button
              className=" bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleLogin}
            >
              Login
            </button>
            <div className="pt-3">
              <Link href="/register">
                <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Register
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
