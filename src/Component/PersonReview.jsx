/* eslint-disable react/prop-types */
const PersonReview = ({ person }) => {
  console.log(person);
  const { name, photo, review, rating, date } = person;
  return (
    <div className="card w-[90%] shadow-xl flex-row ">
      <figure className="pt-4 rounded-xl">
        <img src={photo} alt="" className="pl-8" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold text-[#9538E2]">{name}</h2>
        <div className="">
          <p className="font-semibold">{review}</p>

          <div className="rating pt-3">
            <p className="font-semibold mr-2">Rating: {rating}</p>
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
            <div>
                <p className="text-base pt-3 font-semibold">Date: {date}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PersonReview;
