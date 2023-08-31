import Comments from "./Elements/Comments";
import Elements from "./Elements/Elements";
import Footer from "./Elements/Footer";
import Header from "./Elements/Header";
import Main from "./Elements/Main";
import ProductEl from "./Elements/ProductEl";
import Registration from "./Elements/Registration";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-main-background text-white">
      <div className="w-screen h-[1330px] relative bg-intro-and-email-sign-up-background z-10">
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
