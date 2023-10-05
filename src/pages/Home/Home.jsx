import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import LeftSideNav from "../../components/LeftSideNav/LeftSideNav";
import Navbar from "../../components/Navbar/Navbar";
import RightSideNav from "../../components/RightSideNav/RightSideNav";
import NewsCard from "./NewsCard";

const Home = () => {
  const datas = useLoaderData();
  // console.log(news);
  return (
    <div className="mb-20 max-w-screen-xl mx-auto">
      <Header></Header>
      <Banner></Banner>
      <Navbar></Navbar>
      <div className="grid grid-cols-4 gap-5">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2">
          <div>
            {datas?.map((data) => (
              <NewsCard key={data.id} news={data}></NewsCard>
            ))}
          </div>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
