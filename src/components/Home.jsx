import React, { useState, useEffect, useContext } from "react";
import { mycontext, useMyContext } from "../context/Mycontext";

const Home = () => {
  const { image, setQuery, setCategory } = useMyContext();

  return (
    <>
      <div className="flex flex-wrap mr-14 justify-center gap-2  mt-6">
        <button
          className="btn btn-outline px-4 py-2 rounded-md"
          onClick={() => setCategory("fashion")}
        >
          Fashion
        </button>
        <button
          className="btn btn-outline btn-primary px-4 py-2 rounded-md"
          onClick={() => setCategory("nature")}
        >
          Nature
        </button>
        <button
          className="btn btn-outline btn-secondary px-4 py-2 rounded-md"
          onClick={() => setCategory("science")}
        >
          Science
        </button>
        <button
          className="btn btn-outline btn-accent px-4 py-2 rounded-md"
          onClick={() => setCategory("people")}
        >
          people
        </button>

       
          <input
            type="text"
            placeholder="Search..."
            className="w-96 h-12  text-center"
            onChange={(e) => setQuery(e.target.value)}
          />
     
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 mt-7 ">
        {image.map((images) => (
          <div key={images.id}>
            <img
              src={images.webformatURL}
              alt=""
              className="w-full h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 border-2 transition-all duration-100 hover:scale-110 overflow-hidden"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
