"use client";
import React, { useState } from "react";
import { database } from "@/services/firebase";
import { ref, set } from "firebase/database";

export default function contact() {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [message, setmessage] = useState("");
  let isnullorwhitespaces = (value) => {
    value = value.toString();
    return value == null || value.replaceAll(" ", "").length < 1;
  };

  let insertdata = () => {
    if (
      isnullorwhitespaces(email) ||
      isnullorwhitespaces(name) ||
      isnullorwhitespaces(message)
    ) {
      alert("Fill all the details!");
      return;
    }
    set(ref(database, "Contact/" + name), {
      name: name,
      email: email,
      message: message,
    });
    setemail("");
    setmessage("");
    setname("");
    alert("We will Contact You within 24hr.");
  };

  return (
    <main>
      <div className="bg-[url('https://i.pinimg.com/originals/fe/bc/bb/febcbb34fcead6b3ac7894baea63b1a9.jpg')] min-h-screen bg-contain">
        <div className="text-center font-bold text-5xl pt-5 pb-10 text-primary">
          <h3>Contact Us</h3>
        </div>
        <div className="flex w-full flext justify-center">
          <div className="grid grid-cols-4 gap-10">
            <div className="bg-base-100 flex-grow card rounded-box w-48 h-40">
              <div className="flex w-full flext justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#df6717"
                  width={70}
                  height={70}
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M4.20404 15C3.43827 15.5883 3 16.2714 3 17C3 18.5705 5.03656 19.9297 8 20.5842M12 21C16.9706 21 21 19.2091 21 17C21 16.2714 20.5617 15.5883 19.796 15M12 17C8.68629 15.4444 6 12.6587 6 9.22222C6 5.78578 8.68629 3 12 3C15.3137 3 18 5.78578 18 9.22222C18 11.4856 16.8347 13.4667 15.0922 15M12 6.5V11.5M9.5 9H10M12 9H14.5"
                      stroke="#df6717"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <h1 className="text-xl text-center font-bold pb-2">Location</h1>
              <h1 className=" text-sm text-center">
                Atria Institute of Technology Hebbal, Bengaluru 560024
              </h1>
            </div>
            <div className="bg-base-100 flex-grow card rounded-box w-48 h-40">
              <div className="flex w-full flext justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={70}
                  height={70}
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M5.00659 6.93309C5.04956 5.7996 5.70084 4.77423 6.53785 3.93723C7.9308 2.54428 10.1532 2.73144 11.0376 4.31617L11.6866 5.4791C12.2723 6.52858 12.0372 7.90533 11.1147 8.8278M17.067 18.9934C18.2004 18.9505 19.2258 18.2992 20.0628 17.4622C21.4558 16.0692 21.2686 13.8468 19.6839 12.9624L18.5209 12.3134C17.4715 11.7277 16.0947 11.9628 15.1722 12.8853"
                      stroke="#df6717"
                      stroke-width="1.5"
                    ></path>{" "}
                    <path
                      opacity="0.5"
                      d="M5.00655 6.93311C4.93421 8.84124 5.41713 12.0817 8.6677 15.3323C11.9183 18.5829 15.1588 19.0658 17.0669 18.9935M15.1722 12.8853C15.1722 12.8853 14.0532 14.0042 12.0245 11.9755C9.99578 9.94676 11.1147 8.82782 11.1147 8.82782"
                      stroke="#df6717"
                      stroke-width="1.5"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <h1 className="text-xl text-center font-bold pb-2">
                Phone Number
              </h1>
              <h1 className=" text-sm text-center">080-233 21312</h1>
            </div>
            <div className="bg-base-100 flex-grow card rounded-box w-48 h-40">
              <div className="flex w-full flext justify-center">
                <svg
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke-width="3"
                  stroke="#df6717"
                  fill="none"
                  width={70}
                  height={70}
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M35.66,35.67a16.71,16.71,0,0,1-7.75-6.78.82.82,0,0,1,.12-.95l1.55-1.69a.8.8,0,0,0,.15-.87l-2.44-4.65S26.21,19.08,24,20.5c0,0-5.81,4.54-2.1,10.78s7.2,8.35,10.34,9.88c2.73,1.33,8.64,3.1,12.21-3.39,0,0,1.25-2,0-2.51-.57-.23-3.68-1.77-5-2.41a.82.82,0,0,0-1,.22l-1.86,2.35A.81.81,0,0,1,35.66,35.67Z"></path>
                    <path
                      d="M8.86,53.49l4-11.2a23,23,0,1,1,8.64,8.8Z"
                      stroke-linecap="round"
                    ></path>
                  </g>
                </svg>
              </div>
              <h1 className="text-xl text-center font-bold pb-2">
                WhatsApp Number
              </h1>
              <h1 className=" text-sm text-center">+91 8800729224</h1>
            </div>
            <div className="bg-base-100 flex-grow card rounded-box w-48 h-40">
              <div className="flex w-full flext justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#df6717"
                  width={70}
                  height={70}
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                      stroke="#df6717"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="#df6717"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></rect>{" "}
                  </g>
                </svg>
              </div>
              <h1 className="text-xl text-center font-bold pb-2">Email</h1>
              <a
                className=" text-sm text-center hover:text-primary link"
                href="mailto:labourlance.help@gmail.com"
              >
                labourlance.help@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className=" pt-10 flex w-full flext justify-center ">
          <div className="grid grid-cols-2 gap-28">
            <div className="flex-grow card rounded-box w-96 h-96 ">
              <h1 className="text-base-100 pb-2 text-sm">Email/Phone no.</h1>
              <div>
                <input
                  type="text"
                  placeholder="Email/Phone no."
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className="bg-black text-white input w-full max-w-xs"
                />
              </div>
              <h1 className="text-base-100 pt-3 pb-2 text-sm">Name</h1>
              <div>
                <input
                  type="text"
                  onChange={(e) => setname(e.target.value)}
                  value={name}
                  placeholder="Name"
                  className="bg-black text-white input w-full max-w-xs"
                />
              </div>
              <h1 className="text-base-100 pt-3 pb-2 text-sm">Message</h1>
              <div>
                <textarea
                  value={message}
                  onChange={(e) => setmessage(e.target.value)}
                  className="bg-black text-base-100 textarea w-full max-w-xs"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="pt-5">
                <button
                  onClick={insertdata}
                  className="btn btn-primary btn-wide text-base-100"
                >
                  Send
                </button>
              </div>
            </div>
            <div className="flex-grow card rounded-box w-96 h-96 ">
              <div>
                <h1 className=" text-primary font-bold text-xl pb-6 pt-20">
                  Get In Touch!
                </h1>
                <a className="text-base-100 font-bold">
                  Thank you for visiting our website. We value your feedback and
                  inquiries. Please feel free to reach out to us through the
                  above means.
                </a>
                <p className="text-base-100 text-sm pt-5">
                  You can use the form to send us a message. We will do our best
                  to respond to your inquiries within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
