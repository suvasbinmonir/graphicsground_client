import { useEffect } from "react";

const useScrollToTop = () => {
  useEffect(() => {
    // Scroll to the top with smooth behavior
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Enables smooth scrolling
    });
  }, []); // Runs only once after component mounts
};

export default useScrollToTop;
