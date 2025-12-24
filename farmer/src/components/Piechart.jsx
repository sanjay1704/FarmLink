import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const VegetablePriceChart = () => {
  const [pricesHistory, setPricesHistory] = useState([]);
  const [inputValues, setInputValues] = useState({
    tomato: '',
    potato: '',
    onion: '',
    carrot: ''
  });
  const [date, setDate] = useState('');
  const [selectedDateData, setSelectedDateData] = useState(null);

  useEffect(() => {
    const fetchPricesHistory = async () => {
      try {
        const response = await axios.get('http://localhost:8080/vegetable-prices');
        setPricesHistory(response.data);
      } catch (error) {
        console.error("Error fetching prices history:", error);
      }
    };
    fetchPricesHistory();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPrices = [
      { name: 'Tomato', price: parseFloat(inputValues.tomato) || 0 },
      { name: 'Potato', price: parseFloat(inputValues.potato) || 0 },
      { name: 'Onion', price: parseFloat(inputValues.onion) || 0 },
      { name: 'Carrot', price: parseFloat(inputValues.carrot) || 0 }
    ];

    const priceWithDate = {
      date,
      prices: newPrices
    };

    try {
      await axios.post('http://localhost:8080/vegetable-prices', priceWithDate, {
        headers: { 'Content-Type': 'application/json' }
      });
      setPricesHistory([...pricesHistory, priceWithDate]);
      setInputValues({
        tomato: '',
        potato: '',
        onion: '',
        carrot: ''
      });
      setDate('');
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const handleDateSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/vegetable-prices/date/${date}`);
      setSelectedDateData(response.data);
    } catch (error) {
      console.error("Error fetching price data by date:", error);
      setSelectedDateData(null);
    }
  };

  const chartData = selectedDateData
    ? {
        labels: selectedDateData.prices.map(item => item.name),
        datasets: [
          {
            label: 'Vegetable Prices',
            data: selectedDateData.prices.map(item => item.price),
            backgroundColor: selectedDateData.prices.map(item =>
              item.price === Math.max(...selectedDateData.prices.map(p => p.price)) ? 'rgba(255, 99, 132, 0.6)' : 'rgba(75, 192, 192, 0.6)'
            ),
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      }
    : {};

  return (
    <div style={{ 
      backgroundImage: 'url(https://img.freepik.com/free-photo/green-leaves_53876-108331.jpg)', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      padding: '20px' 
    }}>
      <h2>Enter Vegetable Prices</h2>

      <form onSubmit={handleDateSubmit} style={{ textAlign: 'center' }}>
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          placeholder="Select Date for Data"
          style={{ display: 'block', margin: '0 auto' }}
        />
        <button type="submit" style={{ marginTop: '10px' }}>Fetch Data</button>
      </form>

      {selectedDateData && (
        <div>
          <h3>Data for {selectedDateData.date}</h3>
          <Bar data={chartData} />
        </div>
      )}

      <div>
        <h3>Price History</h3>
        <ul>
          {pricesHistory.map((entry, index) => (
            <li key={index}>
              {entry.date}: {entry.prices.map(p => `${p.name}: ₹${p.price}`).join(', ')}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VegetablePriceChart;
