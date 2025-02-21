"use client";
import React, { useState } from "react";
import { auth, database } from "@/services/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { ref, set } from "firebase/database";

const Register = () => {
  const [selectedOption, setSelectedOption] = useState("user");
  const roleOptions = [
    { value: "labour", label: "Labour" },
    { value: "constructor", label: "Constructor" },
  ];
  const uid = function () {
    return (
      Date.now().toString(36) +
      Math.random().toString(36).substring(2, 12).padStart(12, 0)
    );
  };

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  const route = useRouter();

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const sshowdialog = () => {
    document.getElementById("sucess").showModal();
  };
  const fshowdialog = () => {
    document.getElementById("fail").showModal();
  };

  const handlesinghup = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      if (res == undefined) {
        fshowdialog();
      } else {
        set(ref(database, "Register/" + uid()), {
          id: uid(),
          username: username,
          email: email,
          password: password,
          role: selectedOption,
        });
        setemail("");
        setusername("");
        setpassword("");
        sshowdialog();
        route.push("/");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover"
      style={{
        backgroundImage: `url(https://static.wixstatic.com/media/30df8e_87e7d9f9faa44671a6b793e02e7d0a00~mv2.webp)`,
      }}
    >
      <div className="bg-white shadow-md p-8 w-full md:w-96">
        <h2 className="text-4xl font-bold mb-6 text-center text-primary">
          Register
        </h2>
        <dialog id="sucess" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Congratulations!!</h3>
            <p className="py-4">Sucessfully Registered</p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        <dialog id="fail" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Failed</h3>
            <p className="py-4">Please Fill all the details</p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              value={email}
              type="email"
              placeholder="Email"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="mb-4">
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
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="role"
            >
              Role
            </label>
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="role"
              value={selectedOption}
              onChange={handleDropdownChange}
            >
              {roleOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <button
            className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handlesinghup}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
