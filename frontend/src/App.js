import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPetPage from "./components/MainPetPage/MainPetPage";
import SimilarBreeds from "./components/SimilarBreeds/SimilarBreeds";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>

          <Route path="/" element={<MainPetPage />} />

          <Route path="/breed/:id" element={<MainPetPage />} />
        </Routes>
        <SimilarBreeds />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
