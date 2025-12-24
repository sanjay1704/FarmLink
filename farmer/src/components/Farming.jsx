import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VegetablePrices = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVegetablePrices = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get('https://api.data.gov.in/resource/579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b', {
          headers: {
            'api-key': '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b',
          },
          params: {
            // Add any specific parameters if needed
            // For example, to filter by specific vegetable
          }
        });

        console.log(response.data); // Inspect the structure of the data
        setData(response.data.records || []); // Adjust based on the actual structure
      } catch (err) {
        console.error("Error fetching vegetable prices:", err);
        setError("Error fetching vegetable prices.");
      } finally {
        setLoading(false);
      }
    };

    fetchVegetablePrices();
  }, []);

  return (
    <div>
      <h2>Current Daily Prices of Vegetables</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {data.length > 0 && (
        <table border="1">
          <thead>
            <tr>
              <th>Commodity</th>
              <th>Market</th>
              <th>Min Price</th>
              <th>Max Price</th>
              <th>Average Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.commodity || "N/A"}</td>
                <td>{item.market || "N/A"}</td>
                <td>{item.min_price || "N/A"}</td>
                <td>{item.max_price || "N/A"}</td>
                <td>{item.avg_price || "N/A"}</td>
                <td>{item.date || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default VegetablePrices;
