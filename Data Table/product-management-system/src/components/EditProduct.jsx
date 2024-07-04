import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    const response = await axios.get(`http://localhost:8000/products/${id}`);
    const product = response.data;
    setTitle(product.title);
    setPrice(product.price);
    setCategory(product.category);
    setDescription(product.description);
    setImage(product.image);
  };

  const updateProduct = async () => {
    await axios.put(`http://localhost:8000/products/${id}`, {
      title,
      price,
      category,
      description,
      image,
    });
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button onClick={updateProduct}>Update Product</button>
    </div>
  );
};

export default EditProduct;
