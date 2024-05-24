const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  notes: {
    type: Array,
    default: []
  },
  date:{
    type:Date,
    default:Date.now
  }
});

module.exports = mongoose.model('Note', NoteSchema);
