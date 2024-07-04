import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DeleteProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    const response = await axios.get(`http://localhost:8000/products/${id}`);
    setProduct(response.data);
  };

  const deleteProduct = async () => {
    await axios.delete(`http://localhost:8000/products/${id}`);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>{product.title}</h2>
      <button onClick={deleteProduct}>Delete Product</button>
    </div>
  );
};

export default DeleteProduct;
