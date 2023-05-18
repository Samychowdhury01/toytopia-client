import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `font-bold ${isActive ? "text-[#FFBB00]" : ""}`}
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
