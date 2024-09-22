import React, { useEffect, useState } from "react";
import "./App.css";
import LoadingPage from "./LoadingPage";
import Component1 from "./Component1";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const handleLoading = () => {
      setTimeout(() => {
        setIsLoading(false);
        document.getElementById("preloader").style.display = "none";
      }, 9000);
    };
    handleLoading();
  }, []);
  return <>{isLoading ? <LoadingPage /> : <Component1 />}</>;
};

export default App;
