import React, { useState } from 'react';

const PincodeSearchDistrictTamilNadu = () => {
  const [pincode, setPincode] = useState('');
  const [district, setDistrict] = useState('');
  const [areas, setAreas] = useState([]); // State for areas in Coimbatore
  const [error, setError] = useState(null);
  const [coimbatoreInput, setCoimbatoreInput] = useState(''); // State for Coimbatore input
  const [areaSearchInput, setAreaSearchInput] = useState(''); // New state for area search input

  const fetchDistrictData = async (enteredPincode) => {
    try {
      const response = await fetch(`https://api.postalpincode.in/pincode/${enteredPincode}`);
      const data = await response.json();

      if (data[0].Status === 'Error') {
        throw new Error('Invalid pincode');
      }

      const postOfficeInfo = data[0].PostOffice[0];
      const stateName = postOfficeInfo.State;
      const districtName = postOfficeInfo.District;

      // Check if the state is Tamil Nadu
      if (stateName === 'Tamil Nadu') {
        setDistrict(districtName);
        setError(null);
        
        // Set areas if the district is Coimbatore
        if (districtName === 'Coimbatore') {
          setAreas(['Gandhipuram', 'Peelamedu', 'Ukkadam', 'Singanallur']);
        } else {
          setAreas([]); // Clear areas if not Coimbatore
        }
      } else {
        setError('This pincode is not in Tamil Nadu');
        setDistrict('');
        setAreas([]); // Clear areas on error
      }
    } catch (err) {
      setError(err.message);
      setDistrict('');
      setAreas([]); // Clear areas on error
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchDistrictData(pincode);
  };

  const handleCoimbatoreSubmit = (e) => {
    e.preventDefault();
    if (coimbatoreInput.toLowerCase() === 'coimbatore') {
      alert('You entered Coimbatore!');
    } else {
      alert('Please type "Coimbatore"');
    }
  };

  const handleAreaSearchSubmit = (e) => {
    e.preventDefault();
    if (areas.includes(areaSearchInput)) {
      alert(`You searched for area: ${areaSearchInput}`);
    } else {
      alert('Area not found in Coimbatore. Please try again.');
    }
    setAreaSearchInput(''); // Clear input after search
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Search for Tamil Nadu District by Pincode</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          placeholder="Enter Pincode"
        />
        <button type="submit">Search</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {district && (
        <div>
          <h3>District:</h3>
          <p>{district}</p>

          {/* Display areas if the district is Coimbatore */}
          {district === 'Coimbatore' && (
            <div>
              <h4>Areas in Coimbatore:</h4>
              <ul>
                {areas.map((area, index) => (
                  <li key={index}>{area}</li>
                ))}
              </ul>

              {/* New input field for typing Coimbatore */}
              <form onSubmit={handleCoimbatoreSubmit}>
                <input
                  type="text"
                  value={coimbatoreInput}
                  onChange={(e) => setCoimbatoreInput(e.target.value)}
                  placeholder="Type 'Coimbatore'"
                />
                <button type="submit">Submit</button>
              </form>

              {/* New search bar for areas in Coimbatore */}
              <h4>Search for an Area in Coimbatore:</h4>
              <form onSubmit={handleAreaSearchSubmit}>
                <input
                  type="text"
                  value={areaSearchInput}
                  onChange={(e) => setAreaSearchInput(e.target.value)}
                  placeholder="Enter Area Name"
                />
                <button type="submit">Search Area</button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PincodeSearchDistrictTamilNadu;
