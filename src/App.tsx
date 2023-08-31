import { useEffect } from "react";
import Comments from "./Elements/Comments";
import Elements from "./Elements/Elements";
import Footer from "./Elements/Footer";
import Header from "./Elements/Header";
import Main from "./Elements/Main";
import ProductEl from "./Elements/ProductEl";
import Registration from "./Elements/Registration";

const App = () => {
  const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", reveal);

    reveal();
  }, []);

  return (
    <main className="overflow-x-hidden bg-main-background text-white">
      <div className="w-screen h-[1330px] relative bg-intro-and-email-sign-up-background z-10 lg:h-[500px] lg:mb-[500px]">
        <Header />
        <Main />
        <img
          src="./bg-curvy-desktop.svg"
          alt="bg curvy desktop"
          className="absolute bottom-0 left-0 w-screen object-cover z-0"
        />
      </div>
      <Elements />
      <ProductEl />
      <Comments />
      <Registration />
      <Footer />
    </main>
  );
};

export default App;
