import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import FlightData from './models/FlightData';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || '';

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.post('/api/flight-data', async (req: Request, res: Response): Promise<void> => {
  try {
    const { altitude, his, adi } = req.body;
    const newData = new FlightData({ altitude, his, adi });
    const savedData = await newData.save();
    
    res.status(201).json(savedData);
  } catch (error) {
    res.status(400).json({ error: 'Failed to save data. Check values and ranges.' });
  }
});

app.get('/api/flight-data', async (req: Request, res: Response): Promise<void> => {
  try {
    const latestData = await FlightData.findOne().sort({ createdAt: -1 });
    res.status(200).json(latestData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch flight data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});