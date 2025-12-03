import React, { Suspense, use } from 'react'
import CardDesign from './CardDesign';
const petPromise = fetch("/toys.json").then((res) => res.json());
const PetSuppliesData = () => {
     const petsData = use(petPromise);
  return (
    <div>
      <Suspense fallback={<span className="loading loading-bars loading-md"></span>}>
       <CardDesign pets={petsData} /></Suspense>
    </div>
  )
}

export default PetSuppliesData
