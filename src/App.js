import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const values = [
  {
    name: "Be creative",
    description:
      "Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.",
  },
  {
    name: "Share everything you know",
    description:
      "Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.",
  },
  {
    name: "Never give up",
    description:
      "Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.",
  },
];
const team = [
  {
    name: "Kristen Roggero",
    role: "Artist / Crocheter",
    imageUrl: "logo192.png",
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <img className="" src=""></img>
      </header>

      <main className="isolate">
        {/* Hero section */}

        <div className="relative isolate -z-10">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-16 pt-36 sm:pt-60 lg:px-8 lg:pt-16">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-indigo-400">
                      VibrantKnots
                    </span>
                  </h1>
                  <h3 className="italic">Handmade Goods</h3>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    Join me in the journey into endless piles of yarn to see
                    what magic you can weave with nothing but a hook and some
                    thread!
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content section */}
          {/* <div className="mx-auto max-w-7xl px-6 pb-8 pt-36 sm:pt-60 lg:px-8 lg:pt-16">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our mission
              </h2>
              <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                  <p className="text-xl leading-8 text-gray-600">
                    Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                    sem. At arcu, sit dui mi, nibh dui, diam eget aliquam.
                    Quisque id at vitae feugiat egestas ac. Diam nulla orci at
                    in viverra scelerisque eget. Eleifend egestas fringilla
                    sapien.
                  </p>
                  <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                    <p>
                      Faucibus commodo massa rhoncus, volutpat. Dignissim sed
                      eget risus enim. Mattis mauris semper sed amet vitae sed
                      turpis id. Id dolor praesent donec est. Odio penatibus
                      risus viverra tellus varius sit neque erat velit. Faucibus
                      commodo massa rhoncus, volutpat. Dignissim sed eget risus
                      enim. Mattis mauris semper sed amet vitae sed turpis id.
                    </p>
                    <p className="mt-10">
                      Et vitae blandit facilisi magna lacus commodo. Vitae
                      sapien duis odio id et. Id blandit molestie auctor
                      fermentum dignissim. Lacus diam tincidunt ac cursus in
                      vel. Mauris varius vulputate et ultrices hac adipiscing
                      egestas. Iaculis convallis ac tempor et ut. Ac lorem vel
                      integer orci.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Image section */}
          {/* <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt=""
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
        </div> */}

          {/* Values section */}
          <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-60 lg:px-8 lg:pt-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-center">
              What is VibrantKnots?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 md:text-center">
              Leading a creative life by example. My medium of choice is
              crochet, which basically means I have a whole lot of yarn
              everywhere I go.
            </p>
            <div className="mx-auto max-w-2xl lg:mx-0"></div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {values.map((value) => (
                <div key={value.name}>
                  <dt className="font-semibold text-gray-900">{value.name}</dt>
                  <dd className="mt-1 text-gray-600">{value.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Logo cloud */}
          <div className="relative isolate -z-10 mt-32 sm:mt-48">
            <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
              <svg
                className="h-[40rem] w-[80rem] flex-none stroke-gray-200"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                    width={200}
                    height={200}
                    x="50%"
                    y="50%"
                    patternUnits="userSpaceOnUse"
                    patternTransform="translate(-100 0)"
                  >
                    <path d="M.5 200V.5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
                  <path
                    d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                    strokeWidth={0}
                  />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
                />
              </svg>

              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                  For the love of plants!
                </h2>
              </div>
              <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                <div className="carousel-item">
                  <img
                    src="/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                    className="rounded-box"
                    alt="img1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                    className="rounded-box"
                    alt="img2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                    className="rounded-box"
                    alt="img3"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/images/stock/photo-1494253109108-2e30c049369b.jpg"
                    className="rounded-box"
                    alt="img4"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                    className="rounded-box"
                    alt="img5"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/images/stock/photo-1559181567-c3190ca9959b.jpg"
                    className="rounded-box"
                    alt="img6"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                    className="rounded-box"
                    alt="img7"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Team section */}
          <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
            <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
              The Artist
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Given the fact that crocheting is no stranger in my family, it was
              only a matter of time until I started crochet, too. To me,
              crocheting is not just a hobby, but a way to connect with old
              roots.
            </p>
            <div className="mx-auto max-w-2xl lg:mx-0 "></div>

            <ul
              role="list"
              className="mx-auto mt-20 text-center lg:mx-0 lg:max-w-none"
            >
              {team.map((person) => (
                <li key={person.name}>
                  <img
                    className="mx-auto h-24 w-24 rounded-full"
                    src={person.imageUrl}
                    alt=""
                  />
                  <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm leading-6 text-gray-600">
                    {person.role}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* social section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              See the latest on socials
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              VibrantKnots is on YouTube, TikTok, and Instagram!
            </p>

            <div className="mb-6 mt-12">
              <button className="mb-3 px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-indigo-500  to-fuchsia-500 text-zinc-800 font-semibold">
                <a href="">YouTube</a>
              </button>
              <button className="mb-3 px-1 py-1 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-pink-400 font-semibold">
                <span className="block bg-zinc-800 hover:bg-zinc-700 rounded-full px-5 py-2">
                  <a href="">Instagram</a>
                </span>
              </button>
              <button className="mb-6 px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-zinc-800 font-semibold">
                <a href="">TikTok</a>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mx-auto mt-40 max-w-7xl overflow-hidden px-6 pb-20 sm:mt-64 sm:pb-24 lg:px-8">
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2023 VibrantKnots. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
