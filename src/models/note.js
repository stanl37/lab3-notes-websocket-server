import mongoose, { Schema } from 'mongoose';

const NoteSchema = new Schema({
  title: { type: String },
  text: { type: String },
  x: { type: Number },
  y: { type: Number },
  z: { type: Number },
  done: { type: Boolean },
  timestamp: { type: Number },
}, {
  toJSON: { virtuals: true },
});

const NoteModel = mongoose.model('Note', NoteSchema);

export default NoteModel;
