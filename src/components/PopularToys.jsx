import React, { use } from "react";
import ToyCards from "./ToyCards";

const toyPromise = fetch("/toys.json").then((res) => res.json());

const PopularToys = () => {
  const toysData = use(toyPromise);

  const popular = toysData.slice(0, 3);

  return (
    <div className="">
      <h2 className="font-bold text-3xl my-3 w-11/12 mx-auto ">Popular Toys</h2>

      <ToyCards toys={popular} />
    </div>
  );
};

export default PopularToys;
