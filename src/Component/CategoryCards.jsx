import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CategoryCards = () => {
  const data = useLoaderData();
  const { category } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    if (category) {
      let filterProducts = [...data].filter(
        (product) => product.category === category
      );
      if (category === "All Product") {
        filterProducts = data;
      }
      setProduct(filterProducts);
    } else {
      setProduct(data);
    }
  }, [category, data]);
    if(!product.length){
        return(
            <div>
                <h1 className="text-2xl">Bal falaw</h1>
            </div>
        )
    }
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
      {product.map((Product) => (
        <Card key={Product.id} Product={Product}></Card>
      ))}
    </div>
  );
};

export default CategoryCards;
