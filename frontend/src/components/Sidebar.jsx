// src/components/Sidebar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useAuthUser from "../hooks/useAuthUser";
import {
  BellIcon,
  HomeIcon,
  MenuIcon,
  ShipWheelIcon,
  XIcon,
} from "lucide-react";

const Sidebar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <>
      <Link
        to="/"
        className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${
          currentPath === "/" ? "btn-active" : ""
        }`}
        onClick={() => setIsOpen(false)}
      >
        <HomeIcon className="size-5 text-base-content opacity-70" />
        <span>Home</span>
      </Link>

      <Link
        to="/notifications"
        className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${
          currentPath === "/notifications" ? "btn-active" : ""
        }`}
        onClick={() => setIsOpen(false)}
      >
        <BellIcon className="size-5 text-base-content opacity-70" />
        <span>Notifications</span>
      </Link>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="w-64 bg-base-200 border-r border-base-300 hidden lg:flex flex-col h-screen sticky top-0 z-20">
        <div className="p-5 border-b border-base-300">
          <Link to="/" className="flex items-center gap-2.5">
            <svg className="size-9" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Zetra Logo" role="img">
              <rect x="8" y="8" width="84" height="84" rx="12" fill="#2FB24C" />
            </svg>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1">{NavLinks()}</nav>

        <div className="p-4 border-t border-base-300 mt-auto">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={authUser?.profilePic || null} alt="User Avatar" />
              </div>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">{authUser?.fullName}</p>
              <p className="text-xs text-success flex items-center gap-1">
                <span className="size-2 rounded-full bg-success inline-block" />
                Online
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          className="btn btn-circle btn-ghost"
          onClick={() => setIsOpen(true)}
        >
          <MenuIcon className="size-6" />
        </button>
      </div>

      {/* Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-30"
            onClick={() => setIsOpen(false)}
          />

          <aside className="w-72 bg-base-200 border-r border-base-300 flex flex-col h-full z-50 relative">
            <div className="p-5 border-b border-base-300 flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
                <svg className="size-8" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Zetra Logo" role="img">
                  <rect x="8" y="8" width="84" height="84" rx="12" fill="#2FB24C" />
                </svg>
              </Link>
              <button onClick={() => setIsOpen(false)}>
                <XIcon className="size-6" />
              </button>
            </div>

            <nav className="flex-1 p-4 space-y-1">{NavLinks()}</nav>

            <div className="p-4 border-t border-base-300 mt-auto">
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src={authUser?.profilePic || null} alt="User Avatar" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">{authUser?.fullName}</p>
                  <p className="text-xs text-success flex items-center gap-1">
                    <span className="size-2 rounded-full bg-success inline-block" />
                    Online
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default Sidebar;
