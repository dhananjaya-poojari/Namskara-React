import { IMG_CDN_URL } from "../constants";

const RestuarantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <div>
      <div className="w-[200px] p-4">
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h2 className="font-bond text-xl hover:bg-purple-50">{name}</h2>
        <h3>{cuisines.join()}</h3>
        <h4>{avgRating} stars</h4>
      </div>
    </div>
  );
};

export default RestuarantCard;
