import { Link } from "react-router-dom";
import logo from "/barlogo.png";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      
      <img
        src={logo}
        alt="DirectServe Logo"
        className="h-12 w-auto object-contain"
      />

      <span className="text-lg font-semibold tracking-tight text-slate-800">
        DirectServe
      </span>

    </Link>
  );
}