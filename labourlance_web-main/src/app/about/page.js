import Image from "next/image";
import Link from "next/link";

export default function about() {
  return (
    <main>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://static.wixstatic.com/media/30df8e_87e7d9f9faa44671a6b793e02e7d0a00~mv2.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-primary">
              About Labourlance
            </h1>
            <p className="mb-5 text-base-100">
              Welcome to labourlance, where we revolutionize the way you connect
              with labor and contractors. We pride ourselves on cutting out the
              middleman, ensuring direct access to the workforce you need for
              your projects.
            </p>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://www.aiimsdeoghar.edu.in/Content/resources/images/mission.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Our Mission!</h1>
            <p className="py-6">
              At labourlance, our mission is clear – to simplify and streamlin
              labor and to give transparency to both labour and the contractor..
            </p>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-screen bg-fixed"
        style={{
          backgroundImage:
            "url(https://www.designingbuildings.co.uk/w/images/8/83/Labourer-1024382_640.jpg)",
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse bg-base-100 bg-opacity-15 rounded-lg">
          <img
            src="https://different.com.mk/images/bg/different-is-a-choice.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold text-center text-primary">
              What Sets Us Apart!
            </h1>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-base-100">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                  <div className="text-lg font-black">Direct Connection</div>
                  We facilitate direct contact between businesses and labor,
                  promoting transparency and efficiency in the hiring process.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end mb-10">
                  <div className="text-lg font-black">Extensive Network</div>
                  Benefit from our extensive network of workers and contractors,
                  covering various industries and specialties.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                  <div className="text-lg font-black">
                    Cost-Effective Solutions
                  </div>
                  By removing middlemen, we help you save costs while ensuring
                  fair compensation for the labor force.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end mb-10">
                  <div className="text-lg font-black">
                    User-Friendly Platform
                  </div>
                  Our online platform is designed for ease of use, allowing you
                  to find the right talent or job quickly and efficiently.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://t4.ftcdn.net/jpg/06/50/03/91/360_F_650039124_MVFz160HlQZ4Oy9WgLKoUHmci685RUNa.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold text-primary text-center">
              How It Works!
            </h1>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                  <time className="font-mono italic">Step 1</time>
                  <div className="text-lg font-black">Post Your Job:</div>
                  Share your project details, and we'll connect you directly
                  with available labor.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end mb-10">
                  <time className="font-mono italic">Step 2</time>
                  <div className="text-lg font-black">Browse Profiles:</div>
                  Explore profiles of contractor reviewing previous projects.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                  <time className="font-mono italic">Step 3</time>
                  <div className="text-lg font-black">
                    Direct Communication:
                  </div>
                  Communicate directly with potential hires, negotiate terms,
                  and finalize agreements without any intermediaries.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="min-h-full mb-10 bg-[url('https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?cs=srgb&dl=pexels-daniel-absi-952670.jpg&fm=jpg')] bg-cover bg-fixed">
        <h1 className="text-5xl font-bold text-center text-primary pt-10">
          Our Team
        </h1>
        <p className="pt-5 text-center text-xl text-base-100">
          Meet the passionate team behind labourlance.
          <br /> Comprising individuals dedicated to transforming the labor and
          contractor hiring landscape,
          <br />
          we are committed to delivering exceptional service and value.
        </p>
        <div className="flex flex-wrap pt-10 ">
          <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
            <div className="flex flex-col">
              <a href="#" className="mx-auto">
                <Image
                  className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                  src="/Harsh.jpeg"
                  width={345}
                  height={335}
                />
              </a>

              <div className="text-center mt-6">
                <h1 className="text-base-100 text-xl font-bold mb-1">
                  Harsh Pratap Singh
                </h1>
              </div>
            </div>
          </div>

          <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
            <div className="flex flex-col">
              <a href="#" className="mx-auto">
                <Image
                  className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                  src="/neeraj.jpeg"
                  width={300}
                  height={300}
                />
              </a>

              <div className="text-center mt-6">
                <h1 className="text-base-100 text-xl font-bold mb-1">
                  Neeraj Kumar
                </h1>
              </div>
            </div>
          </div>

          <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
            <div className="flex flex-col">
              <a href="#" className="mx-auto">
                <Image
                  className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                  src="/iqra.jpeg"
                  width={315}
                  height={300}
                />
              </a>

              <div className="text-center mt-6">
                <h1 className="text-base-100 text-xl font-bold mb-1">
                  Iqra Massi
                </h1>
              </div>
            </div>
          </div>

          <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
            <div className="flex flex-col">
              <a href="#" className="mx-auto">
                <Image
                  className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                  src="/Adeeba.jpeg"
                  width={320}
                  height={300}
                />
              </a>

              <div className="text-center mt-6">
                <h1 className="text-base-100 text-xl font-bold mb-1">
                  Adeeba Khan
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero min-h-full">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-primary">
              Get Started Today
            </h1>
            <p className="py-6">
              Whether you're a business in need of skilled labor or a worker
              seeking opportunities, labourlance is your go-to platform for
              direct connections. Join us in reshaping the future of labor and
              contracting.
            </p>
            <Link href="/login">
              {" "}
              <button className="btn btn-primary btn-wide">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
