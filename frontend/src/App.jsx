import React from "react";
import { useProducts } from "./hooks/useProducts";
import ProductList from "./components/ProductList";

const App = () => {
    const { products, handleSearch } = useProducts();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => handleSearch(e.target.value)}
                className="border p-2 w-full mb-4 rounded"
            />
            <ProductList products={products} />
        </div>
    );
};

export default App;
