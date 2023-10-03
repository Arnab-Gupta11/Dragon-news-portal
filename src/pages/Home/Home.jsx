import Banner from "../../components/Banner/Banner";

import Header from "../../components/Header/Header";

import Navbar from "../../components/Navbar/Navbar";

import RightSideNav from "../../components/RightSideNav/RightSideNav";

const Home = () => {
  return (
    <div className="mb-20">
      <Header></Header>
      <Banner></Banner>
      <Navbar></Navbar>
      <div className="grid grid-cols-4 gap-5">
        <div className="border"></div>
        <div className="col-span-2 border-2"></div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
