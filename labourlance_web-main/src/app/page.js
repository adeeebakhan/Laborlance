import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div
        className="hero min-h-screen bg-fixed"
        style={{
          backgroundImage: "url(https://i.ibb.co/1sb0CNd/background-main.jpg)",
        }}
      >
        <div className="hero-content gap-20 lg:grid-cols-2 lg:flex-row-reverse">
          <Image
            src="/workers.jpg"
            width={700}
            height={700}
            className=" rounded-lg shadow-2xl"
          />
          <div>
            <p className="py-2 text-base-100">WELCOME TO</p>
            <h1 className="text-5xl font-bold text-base-100">Labourlance</h1>
            <p className="py-6 text-base-100">
              "Empowering Labor, Ensuring Fairness – Connect, Work, Thrive!"
            </p>
            <Link href="/login">
              <button className="btn btn-primary btn-wide">Join Now</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="min-h-screen">
        <div className="column">
          <Image
            src="/1st2nd.jpg"
            width={260}
            height={770}
            className=" rounded-lg shadow-2xl"
          />
        </div>
        <div className="column">
          <Image
            src="/2nd2nd.jpg"
            width={260}
            height={770}
            className=" rounded-lg shadow-2xl"
          />
        </div>
        <div className="column" id="text_second">
          <p className="pb-2 pt-20">OUR</p>
          <h3 className="text-5xl font-bold text-primary pb-3">Services</h3>
          <p className="pb-10">
            At Labourlance, we offer a variety of services that cater to the
            needs of workers. Our services include job postings for contractors
            and job search for laborers, safety training programs, and legal
            support for labor rights.{" "}
            <Link className="link link-hover" href="/about">
              Click here 
            </Link>
            to learn more.
          </p>
          <a className="flex items-center pb-6">
            <Image src="/helmet.svg" width={40} height={40}></Image>
            <span className="text-2xl font-bold pl-5">Job Postings</span>
          </a>
          <a className="flex items-center pb-6">
            <Image src="/suitcase.svg" width={40} height={40}></Image>
            <span className="text-2xl font-bold pl-5">Find Job</span>
          </a>
          <a className="flex items-center pb-20">
            <Image src="/find.svg" width={40} height={40}></Image>
            <span className="text-2xl font-bold pl-5">Help</span>
          </a>

          <Link href="/jobs">
            <button className="btn btn-primary btn-wide">Explore jobs</button>
          </Link>
        </div>
      </div>
      <div className="min-h-screen bg-no-repeat bg-[url('https://i.ibb.co/DYC7VFs/background-main-two.jpg')] bg-cover bg-fixed"></div>
    </main>
  );
}
