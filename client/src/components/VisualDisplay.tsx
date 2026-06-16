interface FlightData {
  altitude: number;
  his: number;
  adi: number;
}

interface VisualDisplayProps {
  data: FlightData | null;
}

export default function VisualDisplay({ data }: VisualDisplayProps) {
  if (!data) {
    return <div style={{ textAlign: 'center', marginTop: '20px' }}>No data to display.</div>;
  }
  
 
  const altPercent = Math.min(100, Math.max(0, (data.altitude / 3000) * 100));
  const hisRotation = -data.his;
  const skyPercent = 50 + (data.adi / 100) * 50;

  return (
    <div style={{ display: 'flex', gap: '50px', justifyContent: 'center', alignItems: 'flex-end', marginTop: '40px', flexWrap: 'wrap' }}>
      
      {/* --- Altitude --- */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ marginBottom: '10px' }}>Altitude</h3>
        <div style={{ position: 'relative', height: '200px', width: '50px', border: '3px solid #333', background: '#f0f0f0', borderRadius: '8px' }}>
          <div style={{
            position: 'absolute',
            bottom: `${altPercent}%`,
            left: 0,
            width: '100%',
            height: '4px',
            background: 'red',
            transform: 'translateY(50%)',
            transition: 'bottom 0.5s ease-out'
          }}></div>
        </div>
        <p style={{ fontWeight: 'bold', marginTop: '10px' }}>{data.altitude}</p>
      </div>
      {/* --- HIS --- */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ marginBottom: '10px' }}>HIS</h3>
        <div style={{ position: 'relative', height: '160px', width: '160px', borderRadius: '50%', border: '4px solid #333', background: '#fff' }}>

          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -100%)', width: '0', height: '0', borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderBottom: '40px solid red', zIndex: 10 }}></div>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '8px', height: '8px', background: 'red', borderRadius: '50%', zIndex: 10 }}></div>

          <div style={{
            width: '100%', height: '100%',
            position: 'relative',
            transform: `rotate(${hisRotation}deg)`,
            transition: 'transform 0.5s ease-out'
          }}>
            <div style={{ position: 'absolute', top: '5px', left: '50%', transform: 'translateX(-50%)', fontWeight: 'bold' }}>0</div>
            <div style={{ position: 'absolute', bottom: '5px', left: '50%', transform: 'translateX(-50%)', fontWeight: 'bold' }}>180</div>
            <div style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', fontWeight: 'bold' }}>90</div>
            <div style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', fontWeight: 'bold' }}>270</div>
          </div>
        </div>
        <p style={{ fontWeight: 'bold', marginTop: '10px' }}>{data.his}°</p>
      </div>

      {/* --- ADI --- */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ marginBottom: '10px' }}>ADI</h3>
        <div style={{
          width: '160px', height: '160px', borderRadius: '50%', border: '4px solid #333', position: 'relative', overflow: 'hidden',
          background: `linear-gradient(to bottom, #4facfe ${skyPercent}%, #8B4513 ${skyPercent}%)`,
          transition: 'background 0.5s ease-out'
        }}>
          <div style={{ position: 'absolute', top: '50%', left: '15%', width: '70%', height: '2px', background: 'white' }}></div>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '10px', height: '10px', background: 'yellow', borderRadius: '50%' }}></div>
        </div>
        <p style={{ fontWeight: 'bold', marginTop: '10px' }}>{data.adi}</p>
      </div>

    </div>
  );
}







