import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import RightSideNav from "../../components/RightSideNav/RightSideNav";
import Navbar from "../../components/Navbar/Navbar";

const NewsDetails = () => {
  const { id } = useParams();
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <h2>News</h2>
          <h3>{id}</h3>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
