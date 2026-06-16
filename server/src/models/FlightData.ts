import mongoose, { Schema, Document } from 'mongoose';

export interface IFlightData extends Document {
  altitude: number;
  his: number;
  adi: number;
  createdAt: Date;
}

const FlightDataSchema: Schema = new Schema({
  altitude: { type: Number, required: true, min: 0, max: 3000 },
  his: { type: Number, required: true, min: 0, max: 360 },
  adi: { type: Number, required: true, min: -100, max: 100 },
}, { timestamps: true });

export default mongoose.model<IFlightData>('FlightData', FlightDataSchema);