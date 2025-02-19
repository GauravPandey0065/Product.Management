import { useState, useEffect } from "react";
import axios from "axios";
import debounce from "lodash.debounce";

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState("");

    const fetchProducts = async () => {
        try {
            const { data } = await axios.get(import.meta.env.VITE_API_URL + "/api/products");
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleSearch = debounce((q) => {
        setQuery(q);
    }, 300);

    return { products: products.filter(p => p.name.toLowerCase().includes(query.toLowerCase())), handleSearch };
};
