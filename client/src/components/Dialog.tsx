import { useState } from 'react';
import axios from 'axios';

export default function Dialog() {
  const [altitude, setAltitude] = useState<number | ''>('');
  const [his, setHis] = useState<number | ''>('');
  const [adi, setAdi] = useState<number | ''>('');

  const handleSend = async () => {
    if (altitude === '' || his === '' || adi === '') {
      alert('Please fill in all flight data before sending!');
      return; 
    }

    try {
      await axios.post('http://localhost:5000/api/flight-data', {
        altitude: Number(altitude),
        his: Number(his),
        adi: Number(adi)
      });
      alert('Data sent successfully!');
      setAltitude('');
      setHis('');
      setAdi('');
    } catch (error) {
      alert('Error sending data. Please ensure the values are within the correct ranges!');
      console.error(error);
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', width: '300px', borderRadius: '8px' }}>
      <h2>Enter Flight Data</h2>
      
      <div style={{ marginBottom: '10px' }}>
        <label>Altitude (0-3000): </label>
        <input 
          type="number" 
          value={altitude} 
          onChange={(e) => setAltitude(e.target.value === '' ? '' : Number(e.target.value))} 
          style={{ width: '100%', marginTop: '5px' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>HIS (0-360): </label>
        <input 
          type="number" 
          value={his} 
          onChange={(e) => setHis(e.target.value === '' ? '' : Number(e.target.value))} 
          style={{ width: '100%', marginTop: '5px' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>ADI (-100 to 100): </label>
        <input 
          type="number" 
          value={adi} 
          onChange={(e) => setAdi(e.target.value === '' ? '' : Number(e.target.value))} 
          style={{ width: '100%', marginTop: '5px' }}
        />
      </div>

      <button onClick={handleSend} style={{ width: '100%', padding: '10px', marginTop: '10px', cursor: 'pointer' }}>
        SEND
      </button>
    </div>
  );
}
