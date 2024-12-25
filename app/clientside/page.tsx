"use client";
import React, { useEffect, useState } from "react";


import Image from "next/image"


interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category:string;  
  image: string;
  rating:{
    rate:number;
    count:number
  }
}


const ClientPage = () => {
  const [data, setData] = useState<Products[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products"
      );
      const parsedResponse: Products[] = await response.json();
      console.log("Products >>>", parsedResponse);
      setData(parsedResponse);
    };
    fetchData();
  }, []);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 m-2">
      {data.map((product, index) => (
        <div key={index} className="bg-gray-200 p-4 rounded shadow-md space-y-3 text-black font-semibold text-sm" >
          <p>Product Id:{product.id}</p>
          <Image src={product.image} alt={product.title} width={400} height={200}/>
          <h2>Product name:{product.title}</h2>
          <p>Price ($):{product.price}</p>
          <p>Description:{product.description}</p>
          <p>Ratings:{JSON.stringify(product.rating)}</p>

          
        </div>
      ))}
    </div>
  );
};

export default ClientPage;