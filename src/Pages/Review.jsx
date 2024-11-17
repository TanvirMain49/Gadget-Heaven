import { useLoaderData } from "react-router-dom";
import PersonReview from "../Component/PersonReview";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Review = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title> Review || Gadget Haven</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <div className="bg-[#9538E2] rounded-xl pb-10">
          <div className="text-center text-white">
            <div className="">
              <h1 className="text-4xl font-bold md:px-24 pt-8">
                Hear from Our Happy Customers
              </h1>
              <p className="text-base py-6 md:px-[34%] px-12">
                Read honest reviews and ratings from people who love exploring
                new tech.
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 md:py-8 py-3 ">
          {data.map((person) => (
            <PersonReview key={person.id} person={person}></PersonReview>
          ))}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Review;
