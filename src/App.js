import Home from "./pages/home/index";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddExpense from "./pages/add-expense";
import React, { useState, useEffect } from "react";
import Loader from "./components/loader/index";
const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/add-expense" element={<AddExpense />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
