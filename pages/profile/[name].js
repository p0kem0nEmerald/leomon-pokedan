import * as React from "react";

import Admin from "layouts/Admin.js";
import Link from "next/link";
import NewLineText from "components/Typography/NewLineText";
import ProfileData from "data/json/profile";
import { SNS } from "data/js/sns";
import { getProfileCoverImgSrc } from "lib/profile";

export default function Profile({ profile }) {
  return (
    <>
      {/* <Navbar transparent /> */}
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url("${getProfileCoverImgSrc(profile)}")`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt={profile.name}
                        src={`url("${getProfileCoverImgSrc(profile)}")`}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0"></div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      {SNS.map((sns) => {
                        const profile_sns = profile[sns.name];
                        const url = `${sns.base}/${profile_sns}`;
                        return (
                          profile_sns && (
                            <div className="mr-4 p-3 text-center">
                              <Link href={url}>
                                <a>
                                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                    {sns.icon({
                                      style: { color: sns.brandColor },
                                    })}
                                  </span>
                                  <span className="text-sm text-blueGray-400">
                                    {sns.name}
                                  </span>
                                </a>
                              </Link>
                            </div>
                          )
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {profile.ja}
                  </h3>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        <NewLineText text={profile.bio} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const paths = ProfileData.map((e) => ({
    params: { name: e.name },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const profile = ProfileData.find((e) => e.name === params.name);
  return {
    props: {
      profile: profile,
    },
  };
}

Profile.layout = Admin;
