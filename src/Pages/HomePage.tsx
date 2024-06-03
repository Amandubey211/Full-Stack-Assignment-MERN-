import Header from "../Components/Header";
import MainContent from "../Components/MainContent";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className=" flex justify-center items-center">
        <MainContent />
      </div>
    </>
  );
};

export default HomePage;
