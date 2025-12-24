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

  // Fetch all stored price data from the backend when the component mounts
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

  // Handle input change for vegetable prices
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  // Handle date change
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  // Handle form submission to save new prices with date
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

  // Fetch price data for the selected date
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

  // Generate chart data if selected date is available
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
    <div>
      <h2>Enter Vegetable Prices</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="tomato"
          value={inputValues.tomato}
          onChange={handleChange}
          placeholder="Tomato Price"
        />
        <input
          type="number"
          name="potato"
          value={inputValues.potato}
          onChange={handleChange}
          placeholder="Potato Price"
        />
        <input
          type="number"
          name="onion"
          value={inputValues.onion}
          onChange={handleChange}
          placeholder="Onion Price"
        />
        <input
          type="number"
          name="carrot"
          value={inputValues.carrot}
          onChange={handleChange}
          placeholder="Carrot Price"
        />
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          placeholder="Select Date"
        />
        <button type="submit">Submit</button>
      </form>

      {/* <form onSubmit={handleDateSubmit}>
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          placeholder="Select Date for Data"
        />
        <button type="submit">Fetch Data</button>
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
      </div> */}
    </div>
  );
};

export default VegetablePriceChart;
