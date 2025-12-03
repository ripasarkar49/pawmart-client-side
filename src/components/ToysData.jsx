import React, { Suspense, use } from "react";
import ToyCards from "./ToyCards";

const toyPromise = fetch("/toys.json").then((res) => res.json());

const ToysData = () => {
  const toysData = use(toyPromise);

  return (
    <div>
      <Suspense fallback={<span className="loading loading-bars loading-md"></span>}>
       <ToyCards toys={toysData} /></Suspense>
    </div>
  );
};

export default ToysData;
