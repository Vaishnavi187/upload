import React, { useState, useEffect, useContext } from "react";
import { mycontext, useMyContext } from "../context/Mycontext";

const Home = () => {
  const { image, setQuery, setCategory } = useMyContext();

  return (
    <>
      <div className="flex gap-10 ml-32 mt-6">
        <button
          className="btn btn-outline "
          onClick={() => setCategory("fashion")}
        >
          Fashion
        </button>
        <button
          className="btn btn-outline btn-primary"
          onClick={() => setCategory("nature")}
        >
          Nature
        </button>
        <button
          className="btn btn-outline btn-secondary"
          onClick={() => setCategory("science")}
        >
          Science
        </button>
        <button
          className="btn btn-outline btn-accent"
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

      <div className="flex flex-wrap gap-10 justify-center mt-6  mx-auto ">
        {image.map((images) => (
          <div key={images.id}>
            <img
              src={images.webformatURL}
              alt=""
              className="w-64 h-64 border-2 transition-all duration-100 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
