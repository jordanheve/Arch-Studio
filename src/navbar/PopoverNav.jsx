import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
export default function PopoverNav() {
  return (
    <Popover className="relative lg:hidden ">
      <Popover.Button aria-label="navigation menu">
        <Bars3Icon className="h-10" />
      </Popover.Button>
      <Popover.Overlay className="fixed inset-0 bg-black opacity-30 z-30" />
      <Popover.Panel className="absolute mt-6 -right-1  w-80 z-50">
        <nav className=" text-xl p-6 flex flex-col gap-6 bg-white text-slate-500 font-semibold">
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>
      </Popover.Panel>
    </Popover>
  );
}
