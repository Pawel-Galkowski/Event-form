import mongoose from 'mongoose';

const EventsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  eventName: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
});

export default mongoose.model('events', EventsSchema);
