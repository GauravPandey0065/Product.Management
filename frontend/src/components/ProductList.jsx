import React from "react";

const ProductList = ({ products }) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {products.map((p) => (
                <div key={p._id} className="p-4 border rounded shadow">
                    <img src={p.image} alt={p.name} className="w-full h-32 object-cover rounded" />
                    <h3 className="font-bold mt-2">{p.name}</h3>
                    <p className="text-gray-600">${p.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
