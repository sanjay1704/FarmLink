// src/GroceryPage.jsx
import React, { useEffect, useState } from 'react';

const GroceryPage = () => {
  const [groceries, setGroceries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGroceries = async () => {
      const apiKey = 'b9b63170fdmsha2385364405243cp1e0fdcjsn339cef604909'; // Your API key
      const url = 'https://grocery-products.p.rapidapi.com/products/search?query=vegetables'; // Adjust this if needed

      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'grocery-products.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.log('API Response:', data); // Debugging output

        // Adjust according to the actual structure of the API response
        const fetchedGroceries = data.products || data.data?.products || [];
        
        setGroceries(fetchedGroceries);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGroceries();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (groceries.length === 0) return <div>No groceries found.</div>;

  return (
    <div>
      <h1>Grocery List (Vegetables)</h1>
      <ul>
        {groceries.map((grocery, index) => (
          <li key={index}>
            {grocery.name || 'Unnamed Item'} - ₹{grocery.price || 'N/A'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryPage;
