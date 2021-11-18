import Link from "next/link";
import React from "react";
import { SNS } from "data/js/sns";
import { createPopper } from "@popperjs/core";
import { getProfileImgSrc } from "lib/profile";
import profileData from "data/json/profile";

const UserDropdown = ({ name, ...props }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const profile = profileData.find((e) => e.name === name);

  return (
    <>
      <a
        className="text-blueGray-500 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
              alt={name}
              className="w-full rounded-full align-middle border-none shadow-lg"
              src={getProfileImgSrc(profile)}
            />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <Link href={`/profile/${name}`}>
          <a
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            About {name}
          </a>
        </Link>
        <div className="h-0 my-2 border border-solid border-blueGray-100" />
        {SNS.map((sns) => {
          const profile_sns = profile[sns.name];
          return (
            profile_sns && (
              <a
                key={sns.name}
                href={`${sns.base}/${profile_sns}`}
                className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-red-700 text-blueGray-700 "
              >
                {sns.icon({ style: { color: sns.brandColor } })} {sns.name}
              </a>
            )
          );
        })}
      </div>
    </>
  );
};

export default UserDropdown;
