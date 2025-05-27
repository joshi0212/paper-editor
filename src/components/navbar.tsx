import { Outlet, Link, useLocation } from "react-router-dom";
import { AiOutlineSetting, AiOutlineHome } from "react-icons/ai";
import clsx from "clsx";

export default function Navbar() {
  const location = useLocation();

  const selectedClass = "text-primary";
  const linkClass = "hover:text-primary";

  return (
   <div className="w-full h-14 flex gap-5 bg-black text-white items-center justify-center">
        <Link className={linkClass} to="/import">Import</Link>
        <Link className={linkClass} to="/write">Write</Link>
        <Link className={linkClass} to="/proofread">Proofread</Link>
        <Link className={linkClass} to="/deliver">Deliver</Link>
   </div>
  );
}