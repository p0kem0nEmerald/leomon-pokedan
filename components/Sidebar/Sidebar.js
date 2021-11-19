import { Contents } from "data/js/contents";
import Link from "next/link";
import ProfileData from "data/json/profile";
import React from "react";
import SidebarMainRoutes from "routes/SidebarMain";
import UserDropdown from "components/Dropdowns/UserDropdown.js";
import { getProfileImgSrc } from "lib/profile";
import { useRouter } from "next/router";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="px-0 flex flex-wrap items-center justify-between w-full mx-auto md:flex-col md:items-stretch md:min-h-full md:flex-nowrap">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link href="/">
            <a
              href="#pablo"
              className="md:block text-left text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold py-1 px-0"
            >
              <img src="/img/LeoTube.png" className="px-6 hidden md:block" />
            </a>
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none ">
            <li className="inline-block relative">
              <UserDropdown name={"Leomon"} />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href="#pablo"
                      className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm font-bold p-4 px-0"
                    >
                      LeoTube
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* <--- Gallery Pages --- */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Pages
            </h6>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              {SidebarMainRoutes.map((route, i) => {
                const isTarget = route.isTarget(router.pathname);
                return (
                  <li className="items-center" key={i}>
                    <Link href={route.path}>
                      <a
                        href="#"
                        className={`text-xs py-3 font-bold block ${
                          isTarget
                            ? "text-sky-500 hover:text-sky-600"
                            : "text-blueGray-700 hover:text-blueGray-500"
                        }`}
                      >
                        <i
                          className={`${route.fontawesome} mr-2 text-sm ${
                            isTarget ? "opacity-75" : "text-blueGray-300"
                          }`}
                        ></i>
                        {` ${route.label}`}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
            {/* --- Gallery Pages ---> */}

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* <--- Profiiles --- */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Profiles
            </h6>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-2">
              {ProfileData.map((profile) => {
                return (
                  <li className="items-center">
                    <Link href={`/profile/${profile.name}`}>
                      <a
                        href="#pablo"
                        className="text-blueGray-700 hover:text-blueGray-500 text-xs py-1 font-bold block"
                      >
                        <img
                          src={getProfileImgSrc(profile)}
                          className="w-8 rounded-full mr-2 inline-block"
                        />
                        {` ${profile.name}`}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
            {/* --- Profiiles ---> */}

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

            {/* <--- Other Contents --- */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Other Contents
            </h6>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-2">
              {Contents.map(
                (content) =>
                  content.isPublic && (
                    <li className="items-center">
                      <a
                        href={`https://p0kem0nemerald.github.io/${content.path}`}
                        className="text-blueGray-700 hover:text-blueGray-500 text-xs py-1 font-bold block"
                      >
                        <img
                          src={`https://p0kem0nemerald.github.io/static/images/_site/favicon/${content.base}.png`}
                          className="w-8 rounded-full mr-2 inline-block"
                        />
                        {` ${content.label}`}
                      </a>
                    </li>
                  )
              )}
            </ul>
            {/* --- Other Contents ---> */}

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
          </div>
        </div>
      </nav>
    </>
  );
}