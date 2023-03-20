import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DogImage from "../components/DogImage";
import { getDogAction } from "../redux/dogAction";
import "./homePage.css";

const HomePage = () => {
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector((state) => state.dog);
  return (
    <div className="home_page">
      {loading && <h1>Loading...</h1>}
      {!!error && <h2>Something went wrong!</h2>}
      {data?.length > 0 && <DogImage imgUrl={data} />}

      <button onClick={() => dispatch(getDogAction())}>Get a Dog</button>
    </div>
  );
};

export default HomePage;
