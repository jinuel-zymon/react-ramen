import { imgPath } from "@/components/helpers/functions-general";
import {
  Beer,
  Dessert,
  LayoutDashboard,
  ReceiptText,
  Shell,
  Soup
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";


const Navigation = ({ menu="" }) => {
  return (
    <div className="p-4 ">
      <div className="mb-5 flex gap-2 items-center">
        <img src={`${imgPath}/logo.png`} alt="" className="w-[30%]" />
        <h5 className="uppercase mb-0">
          Naruto <br /> <span className="text-sm">Ramen</span>
        </h5>
      </div>


      <nav>
        <ul className="space-y-5">
          <li>
            <Link
              to="/admin/dashboard"
              className={`${menu === "dashboard" ? "active" : ""} nav-link`}
            >
              
              <LayoutDashboard size={18} strokeWidth={1} /> Dashboard
            </Link>
          </li>


          <li>
            <Link
              to="/admin/ramen"
              className={`${menu === "movies" ? "active" : ""} nav-link`}
            >
              
              <Soup size={18} strokeWidth={1} /> Ramen
            </Link>
          </li>

          <li>
            <Link
              to="/admin/toppings"
              className={`${menu === "movies" ? "active" : ""} nav-link`}
            >
              
              <Shell size={18} strokeWidth={1} /> Toppings
            </Link>
          </li>

          <li>
            <Link
              to="/admin/sides-dessert"
              className={`${menu === "movies" ? "active" : ""} nav-link`}
            >
              
              <Dessert size={18} strokeWidth={1} /> Sides & Dessert
            </Link>
          </li>

          <li>
            <Link
              to="/admin/drinks"
              className={`${menu === "movies" ? "active" : ""} nav-link`}
            >
              
              <Beer size={18} strokeWidth={1} /> Drinks
            </Link>
          </li>


          <li>
            <Link
              to="/admin/transaction"
              className={`${menu === "transaction" ? "active" : ""} nav-link`}
            >
              
              <ReceiptText size={18} strokeWidth={1} /> Transaction
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};


export default Navigation;


