import Logo from "../../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="flex justify-center mt-12">
      <div>
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="text-center mt-5 space-y-3">
          <p className="text-[#706F6F] text-lg">Journalism Without Fear or Favour</p>
          <p className="text-[#403F3F] text-xl font-medium">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
