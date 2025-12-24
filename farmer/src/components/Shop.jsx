import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample shops data for each area, including images
const shopsData = {
  Gandhipuram: [
    {
      name: 'Gandhi Grocery Store',
      address: '123 Main St, Gandhipuram',
      image: 'https://content.jdmagicbox.com/v2/comp/delhi/y9/011pxx11.xx11.190402000216.k3y9/catalogue/jaiswal-vegetables-shop-dakshinpuri-delhi-vegetable-vendors-t2daulcxxo.jpg',
    },
  ],
  Singanallur: [
    {
      name: 'Singanallur Supermarket',
      address: '789 Park St, Singanallur',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzwWZgAFsSIu29oHIVI-6hwSvPt150-9ttVw&s',
    },
  ],
  Peelamedu: [
    {
      name: 'Peelamedu Veggies',
      address: '121 Elm St, Peelamedu',
      image: 'https://thumbs.dreamstime.com/b/vegetable-market-6333220.jpg',
    },
  ],
  Ukkadam: [
    {
      name: 'Ukkadam Grocery Store',
      address: '151 Pine St, Ukkadam',
      image: 'https://posbytz.com/wp-content/uploads/2023/10/slide-04-min-2.png',
    },
  ],
};

const CoimbatoreShops = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [areas, setAreas] = useState([]);

  const handleSearch = () => {
    const areaNames = ['Gandhipuram', 'Singanallur', 'Peelamedu', 'Ukkadam'];
    if (searchTerm.toLowerCase() === 'coimbatore') {
      setAreas(areaNames);
    } else {
      setAreas([]);
    }
  };

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '20px',
        color: '#333',
        backgroundImage: `url("file:///C:/Users/91807/Pictures/Screenshots/e.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          width: '80%',
          maxWidth: '600px',
        }}
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            width: '100%',
            marginBottom: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px',
          }}
        >
          Search
        </button>

        {areas.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            {areas.map((area) => (
              <div
                key={area}
                style={{
                  margin: '20px auto',
                  backgroundColor: 'rgba(240, 248, 255, 0.9)',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  width: '100%',
                  textAlign: 'left',
                }}
              >
                <h3 style={{ color: '#2E8B57', textAlign: 'center' }}>
                  {area === 'Gandhipuram' ? (
                    <Link to="/shop1" style={{ color: '#2E8B57', textDecoration: 'none' }}>
                      {area}
                    </Link>
                  ) : (
                    area
                  )}
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                  {shopsData[area].map((shop, index) => (
                    <div
                      key={index}
                      style={{
                        width: '45%',
                        margin: '10px 0',
                        border: '1px solid #ddd',
                        padding: '10px',
                        borderRadius: '5px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <img
                        src={shop.image}
                        alt={shop.name}
                        style={{
                          width: '100px',
                          height: '100px',
                          objectFit: 'cover',
                          borderRadius: '5px',
                          marginBottom: '10px',
                        }}
                      />
                      <h4 style={{ color: '#4CAF50', textAlign: 'center' }}>{shop.name}</h4>
                      <p style={{ color: '#555', textAlign: 'center' }}>{shop.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CoimbatoreShops;
