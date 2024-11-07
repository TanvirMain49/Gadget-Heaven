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
  if (!product.length) {
    return (
      <div>
        <h1 className="text-4xl font-bold text-[#9538E2] ml-24">
          No Product Available
        </h1>
      </div>
    );
  }
  return (
      <div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
      {product.map((Product, idx) => (
        <Card key={idx} Product={Product}></Card>
      ))}
    </div>
      </div>
  );
};

export default CategoryCards;
