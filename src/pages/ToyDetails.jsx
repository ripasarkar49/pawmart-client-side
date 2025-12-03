import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ToyDetailsCards from "./ToyDetailsCards";
import { useLoaderData, useParams } from "react-router";
import TryNow from "../components/TryNow";

const ToyDetails = () => {
  const data = useLoaderData();
  const { toyId } = useParams();
  const [toy, setToy] = useState({});
    // console.log(data, toyId, toy);

  useEffect(() => {
    const toyDetails = data.find((single) => single.toyId === parseInt(toyId));
    if (toyDetails) {
      setToy(toyDetails);
    }
  }, [data, toyId]);
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto py-5 ">
       <section>
         <ToyDetailsCards toy={toy}></ToyDetailsCards>
       </section>
       <section>
        <TryNow></TryNow>
       </section>
       
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default ToyDetails;
