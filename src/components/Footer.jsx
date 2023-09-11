import * as React from "react";

import Logo from "../content/assets/svgs/logo.svg";
import FacebookIcon from "../content/assets/svgs/facebook.svg";
import InstagramIcon from "../content/assets/svgs/instagram.svg";

export function Footer() {
  return (
    <footer className="bg-white z-40 relative shadow-sm">
      <div className="max-w-[1128px] px-9 mx-auto py-[73px]">
        <Logo />
        <div className="flex justify-between">
          <div className="flex-1">
            <p className="text-xs text-slate-900 mt-[10.5px] mb-[13.5px]">
              Delicious Experiences helps companies{" "}
              <span className="font-bold opacity-75">
                bring remote teams together
              </span>{" "}
              to celebrate and deepen their bond,{" "}
              <span className="font-bold opacity-75">
                strengthen connections with clients
              </span>
              , and{" "}
              <span className="font-bold opacity-75">
                improve employee happiness
              </span>
              . Our unique culinary experiences focus on bringing people
              together through engaging, fun, virtual, hands-on events that help
              catapult your teams and clients to a different time and place.
            </p>
            <p className="text-xs text-slate-800">
              © Delicious Experiences 2023
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <ul>
              <li className="text-base">Home</li>
              <li className="text-base">FAQ</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-end">
            <ul>
              <li className="text-base">About Us</li>
              <li className="text-base">Contact</li>
              <li className="text-base">Host an experience</li>
              <li className="text-base">Blog</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-between flex-col">
            <div className="flex pl-[55%]">
              <FacebookIcon className="mr-4" />
              <InstagramIcon />
            </div>
            <div className="pl-[55%] text-xs text-light">
              <p className="mb-3">Terms of Service</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
