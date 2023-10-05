import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold mb-5">All Category</h1>
        <div className="space-y-7 flex flex-col  text-xl font-medium text-[#9F9F9F]">
          {categories.map((category) => (
            <NavLink key={category.id} to="" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
