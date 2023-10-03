import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="flex items-center w-full bg-[#F3F3F3] p-4 mt-8">
      <span className="bg-[#D72050] px-5 py-3 text-xl text-white font-medium">Latest</span>

      <Marquee className="font-semibold" speed={100} pauseOnHover={true}>
        <Link className="mr-12">Match Highlights: Germany vs Spain — as it happened !</Link>
        <Link className="mr-12">Football Highlights:Argentina won the world cup !</Link>
        <Link className="mr-12">Cricket Highlights:ICC world cup starts from 5th october !</Link>
      </Marquee>
    </div>
  );
};

export default Banner;
