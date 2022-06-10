import React from "react";
import HashLoader from "react-spinners/HashLoader";
import "./loader.css";

const Loader = ({ loading }) => {
  return (
    <div className="load">
      <HashLoader
        color={"#38EF7D"}
        loading={loading}
        size={110}
        className="load"
      />
    </div>
  );
};

export default Loader;
