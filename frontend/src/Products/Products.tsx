import { useEffect, useState } from "react";
import axios from "axios";

type Product = {
  id: number;
  name: string;
  description?: string;
  brand?: string;
  price?: number;
  imageUrl?: string;
};

function Products() {
  const [products, setProducts] = useState<Product[]>([] as Product[]);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL ?? "http://127.0.0.1:7250"; // adjustable via env
    axios
      .get<Product[]>(`${apiUrl}/catalog`, {
        headers: { Accept: "application/json" },
      })
      .then((response) => {
        setProducts(response.data || []);
      })
      .catch((err) => {
        // for now, log the error to console
        // In production, surface to user via UI
        console.error("Failed to load products:", err);
      });
  }, []);

  return (
    <div className="content">
      <ul className="products">
        {products.map((product) => (
          <li key={product.id}>
            <div className="product">
              <img
                className="product-image"
                src={product.imageUrl ?? "/images/d1.jpg"}
                alt={product.name}
              />
              <div className="product-name">
                <a href={`/product/${product.id}`}>{product.name}</a>
              </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">${product.price}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
