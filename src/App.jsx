import React, { useState, useEffect } from 'react';
import { asyncdata } from './store/Api'; 
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from './store/ProductSlice'; 
import "./App.css";

export default function App() {
  const data = useSelector((state) => state.Productstore.Product);
  const dispatch = useDispatch();
  const [Count, setCount] = useState(6);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
       dispatch(asyncdata());
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); 
      }
    };
    fetchData();
  }, [dispatch]);

  const handleNext = () => {
    setCount((prevCount) => prevCount + 6);
  }; 

  const handleBack = () => {
    setCount((prevCount) => (prevCount - 6 >= 6 ? prevCount - 6 : 6));
  };

  const handleRemove = (id) => {
    dispatch(removeProduct(id)); 
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="App">
      <div className="card-content">
        {
          data.slice(0, Count).map((e) => (
            <div className="main" key={e.id}>
              <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" alt="" />
              <h1>Id: {e.id}</h1>
              <p>Title: {e.title}</p>
              <p>Body: {e.body}</p>
              <button onClick={() => handleRemove(e.id)}>X</button>
            </div>
          ))
        }
      </div>
      <div className="button">
        <button onClick={handleBack} disabled={Count === 6}>Back</button>
        <button onClick={handleNext} disabled={Count >= data.length}>Next</button>
      </div>
    </div>
  );
}
