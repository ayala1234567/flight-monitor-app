interface FlightData {
  altitude: number;
  his: number;
  adi: number;
}

interface TextDisplayProps {
  data: FlightData | null;
}

export default function TextDisplay({ data }: TextDisplayProps) {
  if (!data) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px', color: '#666' }}>
        No data to display. 
      </div>
    );
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', width: '300px', borderRadius: '8px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
      <h2>Current Flight Data</h2>
      <div style={{ fontSize: '20px', lineHeight: '2' }}>
        <div><strong>Altitude:</strong> {data.altitude}</div>
        <div><strong>HIS:</strong> {data.his}</div>
        <div><strong>ADI:</strong> {data.adi}</div>
      </div>
    </div>
  );
}