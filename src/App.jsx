import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { useEffect } from "react";
import "react-photo-view/dist/react-photo-view.css";
import "react-tooltip/dist/react-tooltip.css";
import Loader from "./components/shared/Loader/Loader";
import Routes from "./routes";
import BackToTop from "./pages/BackToTop";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate data loading delay
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(delay);
    };
  }, []);

  return (
    <>
      <div className="">
        { isLoading ? (
          <Loader />
        ) : (
          <div className="home-content">
            {/* <RouterProvider router={router}></RouterProvider> */ }
            <Routes />
            <Toaster />
            <BackToTop></BackToTop>
          </div>
        ) }
      </div>
    </>
  );
}

export default App;
