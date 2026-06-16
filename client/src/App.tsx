import { useState, useEffect } from 'react';
import axios from 'axios';
import Dialog from './components/Dialog';
import TextDisplay from './components/TextDisplay';
import VisualDisplay from './components/VisualDisplay';

interface FlightData {
  altitude: number;
  his: number;
  adi: number;
}

export default function App() {
  const [activeView, setActiveView] = useState<'visual' | 'text' | 'dialog'>('dialog');
  const [flightData, setFlightData] = useState<FlightData | null>(null);

  const fetchLatestData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/flight-data');
      if (response.data) {
        setFlightData(response.data);
      }
    } catch (error) {
      console.error('Error fetching data from server:', error);
    }
  };

  useEffect(() => {
    if (activeView === 'text' || activeView === 'visual') {
      fetchLatestData();
    }
  }, [activeView]);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Flight Instruments Monitor</h1>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', justifyContent: 'center' }}>
        <button 
          onClick={() => setActiveView('visual')}
          style={{ padding: '10px 20px', cursor: 'pointer', background: activeView === 'visual' ? '#007bff' : '#f0f0f0', color: activeView === 'visual' ? 'white' : 'black', border: 'none', borderRadius: '5px' }}
        >
          Visual
        </button>
        <button 
          onClick={() => setActiveView('text')}
          style={{ padding: '10px 20px', cursor: 'pointer', background: activeView === 'text' ? '#007bff' : '#f0f0f0', color: activeView === 'text' ? 'white' : 'black', border: 'none', borderRadius: '5px' }}
        >
          Text
        </button>
        <button 
          onClick={() => setActiveView('dialog')}
          style={{ padding: '10px 20px', cursor: 'pointer', background: activeView === 'dialog' ? '#007bff' : '#f0f0f0', color: activeView === 'dialog' ? 'white' : 'black', border: 'none', borderRadius: '5px', fontWeight: 'bold' }}
        >
          +
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {activeView === 'dialog' && <Dialog />}
        
       {activeView === 'text' && (
         <TextDisplay data={flightData} />
    )}

        {activeView === 'visual' && (
          <VisualDisplay data={flightData} />
        )}
      </div>

    </div>
  );
}