import React from "react";
import MobileAppBar from "./MobileAppBar";
import Link from "next/link";
import * as motion from "motion/react-client";

function AppBar() {
  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.05 }}
        className="fixed inset-x-0 top-0 z-10 container mx-auto p-4"
      >
        <div className="navbar rounded-xl bg-base-100 px-2.5 md:px-4 shadow-sm">
          <div className="flex-1">
            <div className="inline-flex items-center">
              <MobileAppBar />
              <Link href="/" className="px-1.5 text-xl font-bold">
                Trekkintribune
              </Link>
            </div>
          </div>
          <nav className="hidden flex-none md:block">
            <ul className="menu menu-horizontal">
              <li>
                <a>Home</a>
              </li>
            </ul>
          </nav>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn avatar btn-circle btn-ghost"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu z-1 mt-3 w-52 menu-sm rounded-box bg-base-100 p-2 shadow"
              >
                <li>
                  <a>Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
}

export default AppBar;
