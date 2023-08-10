import { links } from "@/data/data";
import Link from "next/link";
import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subheading, setSubHeading] = useState("");

  return (
    <>
      {links?.map((item) => {
        return (
          <div className="">
            <div
              className="px-3 text-left md:cursor-pointer group"
              onClick={() => {
                if (heading === item.name) {
                  setHeading("");
                  setSubHeading("");
                } else {
                  setHeading(item.name);
                }
              }}
            >
              <h1 className="py-7 hover:text-blue-500  flex items-center justify-between">
                {item.name}
                <span className="px-4 cursorp-ointer inline">
                  {heading === item.name ? <BsChevronDown /> : <BsChevronUp />}
                </span>
              </h1>

              {item.submenu && (
                <div className="hidden md:group-hover:block md:group:block">
                  <div className="absolute">
                    <div className="py-3">
                      <div className="h-5 w-5 bg-white absolute mt-1 rotate-45 left-3"></div>
                    </div>
                    <div
                      className={`bg-white p-5 grid  ${
                        item.sublinks.length > 3 ? "grid-cols-3" : "grid-cols-1"
                      } gap-5 `}
                    >
                      {item.sublinks?.map((item) => {
                        return (
                          <div>
                            <h1 className="text-sm font-semibold">
                              {item.Head}
                            </h1>

                            {item?.sublink?.map((item) => (
                              <li className="hover:text-blue-500 text-[12px]">
                                {item?.name}
                              </li>
                            ))}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* mobile view */}
            <div
              className={`${heading === item.name ? "md:hidden" : "hidden"}`}
            >
              {item.sublinks?.map((item) => (
                <div>
                  <div>
                    <h1
                      onClick={() => {
                        {
                          subheading === item.Head
                            ? setSubHeading("")
                            : setSubHeading(item.Head);
                        }
                      }}
                      className="text-md py-5 pl-7 font-semibold cursor-pointer  flex items-center justify-between"
                    >
                      {item.Head}
                      <span>
                        {subheading === item.Head ? (
                          <BsChevronDown />
                        ) : (
                          <BsChevronUp />
                        )}
                      </span>
                    </h1>

                    <div
                      className={`${
                        subheading === item.Head ? "block" : "hidden"
                      }`}
                    >
                      {item?.sublink?.map((val) => {
                        return (
                          <li className="text-sm py-5 pl-10 font-semibold ">
                            <Link
                              href={""}
                              to={val.link}
                              className="hover:text-blue-500"
                            >
                              {val.name}
                            </Link>
                          </li>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NavLinks;
