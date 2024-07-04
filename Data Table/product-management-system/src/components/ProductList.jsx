import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  const [limit] = useState(5);

  useEffect(() => {
    fetchProducts();
  }, [search, sort, page]);

  const fetchProducts = async () => {
    const response = await axios.get(`http://localhost:8000/products`, {
      params: {
        q: search,
        _sort: sort,
        _page: page,
        _limit: limit,
      },
    });
    setProducts(response.data);
  };

  return (
    <div>
      <h2>Product List</h2>
      <input
        type="text"
        placeholder="Search Products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort By</option>
        <option value="price">Price</option>
        <option value="name">Name</option>
      </select>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} width="50" />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default ProductList;
