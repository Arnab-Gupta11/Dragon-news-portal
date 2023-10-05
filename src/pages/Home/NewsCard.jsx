import { BsFillEyeFill } from "react-icons/bs";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const NewsCard = ({ news }) => {
  const { _id, rating, author, title, total_view, image_url, details } = news || {};
  return (
    <div>
      <div className="relative flex flex-col rounded-md bg-white border mb-8">
        <div className="bg-gray-100 px-5 py-4 border-none mb-5">
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-14 rounded-full">
                <img src={author?.img} />
              </div>
            </div>
            <div>
              <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">{author?.name}</h5>

              <p className="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">Frontend Lead @ Google</p>
            </div>
          </div>
        </div>

        <div className="px-4">
          <div>
            <h4 className="text-3xl font-bold mb-4">{title}</h4>
          </div>
          <div className="relative">
            <img src={image_url} alt="" />
          </div>
          <div className="">
            <p className="mt-3 text-xl font-normal text-gray-700">{details.slice(0, 200)}...</p>
            <Link to={`/news/${_id}`}>
              <button className="text-orange-600 font-medium">Read More</button>
            </Link>
          </div>
          <hr className="mt-4" />
          <div className="flex items-center justify-between my-4 ">
            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">{rating?.number}</p>
            <p className="flex items-center gap-3">
              <BsFillEyeFill></BsFillEyeFill>
              <span>{total_view}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
NewsCard.propTypes = {
  news: PropTypes.object,
};
export default NewsCard;
