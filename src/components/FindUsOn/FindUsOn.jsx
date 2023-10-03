import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const FindUsOn = () => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-5">Find us on</h2>
      <div>
        <div className="flex items-center p-4 text-lg gap-4 border rounded-t-lg">
          <div className="bg-[#F3F3F3] p-3 rounded-full">
            <FaFacebook className=" text-blue-600"></FaFacebook>
          </div>

          <span className="text-[#706F6F] font-medium">Facebook</span>
        </div>
        <div className="flex items-center p-4 text-lg gap-4 border-x">
          <div className="bg-[#F3F3F3] p-3 rounded-full">
            <FaTwitter className=" text-blue-500"></FaTwitter>
          </div>

          <span className="text-[#706F6F] font-medium">Twiter</span>
        </div>
        <div className="flex items-center p-4 text-lg gap-4 border rounded-b-lg">
          <div className="bg-[#F3F3F3] p-3 rounded-full">
            <FaInstagram className=" text-pink-600"></FaInstagram>
          </div>

          <span className="text-[#706F6F] font-medium">Instagram</span>
        </div>
      </div>
    </div>
  );
};

export default FindUsOn;
