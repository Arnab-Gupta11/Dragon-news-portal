import QZone1 from "./../../assets/qZone1.png";
import QZone2 from "./../../assets/qZone2.png";
import QZone3 from "./../../assets/qZone3.png";
const QZone = () => {
  return (
    <div className="mt-10 bg-[#F3F3F3] py-4">
      <h2 className="text-2xl font-semibold ml-3 mb-5">Q-Zone</h2>
      <div className="space-y-5">
        <img className="w-full" src={QZone1} alt="" />
        <img className="w-full" src={QZone2} alt="" />
        <img className="w-full" src={QZone3} alt="" />
      </div>
    </div>
  );
};

export default QZone;
