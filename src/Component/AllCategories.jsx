/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const AllCategories = ({categoryTabs}) => {
    return (
        <div>

            <div >
                <div className="flex flex-col justify-center items-center border-2 gap-4 p-7 rounded-xl">
                {
                    categoryTabs.map(categoryTab => <Link className="btn" key={categoryTab.id} to={`/cards/${categoryTab.category}`}>{categoryTab.category}</Link>)
                }
                </div>

            </div>


        </div>
    );
};

export default AllCategories;