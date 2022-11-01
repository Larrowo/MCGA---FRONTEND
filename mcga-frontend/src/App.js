import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Products from "./screens/Products";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./redux/Products/thunks";

const App = () => {
  //   const dispatch = useDispatch();
  //   const { products, isLoadingProducts } = useSelector(state => state.products);

  return (
    <layout>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Login />} />

        <Route />
      </Routes>
    </layout>
  );
};
console.log();

export default App;
