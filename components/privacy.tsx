import { Transition } from "@headlessui/react";
import { useState, useEffect, ReactElement } from "react";

export default function Privacy(): ReactElement {
  const [show, setShow] = useState(true);
  const [document, setDocument] = useState<any>(null);

  useEffect(() => {
    setDocument(window.document as Document);
  }, [document]);

  function handleRead() {
    setShow(false);
    document.cookie = "privacy_read=true; path=/";
  }

  if (document && document?.cookie.indexOf("privacy_read") === -1) {
    return (
      <div className="py-6 flex flex-col justify-center sm:py-12 fixed z-50">
        <section>
          <Transition
            show={show}
            appear={true}
            enter="transition-opacity delay-500 duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0  bg-black/30" />
            <div className="bg-[#2b2d31] animate-fadeIn max-w-screen-lg mx-auto fixed bg-gray-home inset-x-5 p-5 bottom-10 rounded-lg drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between text-white">
              <div className="w-full flex align-center ">
                {" "}
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    width="48"
                    className="fill-white mr-2 basis-[12%]"
                  >
                    <path d="M24 31.3q.7 0 1.2-.5t.5-1.2q0-.7-.5-1.2t-1.2-.5q-.7 0-1.2.5t-.5 1.2q0 .7.5 1.2t1.2.5Zm-1.5-6.7h3V14.25h-3ZM24 43.95q-7-1.75-11.5-8.125T8 21.85V9.95l16-6 16 6v11.9q0 7.6-4.5 13.975T24 43.95Z" />
                  </svg>
                  <div>
                    Discord Package <b className="px-1">does not</b> store any
                    information about you. We do not use any third party
                    services. This website is directly hosted from the
                    <a
                      className="hover:transition-all duration-200 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 font-bold px-1"
                      href="https://github.com/xMefy/discord-stats"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github Repository
                    </a>
                    using{" "}
                    <a
                      className="hover:transition-all duration-200 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 font-bold px-1"
                      href="https://vercel.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Vercel
                    </a>
                    . If you do not trust this website the{" "}
                    <a
                      className="hover:transition-all duration-200 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 font-bold px-1"
                      href="https://github.com/xMefy/discord-stats"
                      target="_blank"
                      rel="noreferrer"
                    >
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center flex-shrink-0">
                <button
                  onClick={() => {
                    setTimeout(() => {
                      handleRead();
                    }, 0);
                  }}
                  className="bg-indigo-500 px-5 py-2 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
                >
                  Got it!
                </button>
              </div>
            </div>
          </Transition>
        </section>
      </div>
    );
  } else return <></>;
}
