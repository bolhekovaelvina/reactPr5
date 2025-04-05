import React from "react";
import Header from "./modules/components/Header";
import Banner from "./modules/components/Banner";
import Catalog from "./modules/components/Catalog";
import ProductPage from "./modules/components/ProductPage";
import Footer from "./modules/components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router";

import "./reset.css";
import "./modules/css/text.css";
import "./modules/css/buttons.css";
import "./modules/css/Footer.module.css";

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            {/* <h1>лол1</h1> */}
                            <Banner />
                        </>
                    }
                    />
                <Route
                    path="/catalog"
                    element={
                        <>
                            {/* <h1>лол2</h1> */}
                            <Catalog />
                        </>
                    }
                />
                <Route
                    path="/catalog/:id"
                    element={
                        <>
                            {/* <h1>лол2</h1> */}
                            <ProductPage />
                        </>
                    }
                />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;