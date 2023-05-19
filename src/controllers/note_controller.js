import Note from '../models/note';

export const getNotes = () => {
  return Note.find({}).then((notes) => {
    return notes.reduce((result, item) => {
      // eslint-disable-next-line no-param-reassign
      result[item.id] = item;
      return result;
    }, {});
  });
};

export const deleteNote = (id) => {
  return Note.findByIdAndRemove(id);
};

export const createNote = (note) => {
  const newNote = new Note(note);
  return newNote.save();
};

// chatGPT proposed this way
export const updateNote = (id, updatedNote) => {
  return Note.findByIdAndUpdate(id, updatedNote, { new: true });
};

/*
export const updateNote = (id, fields) => {
  return Note.findById(id)
  .then((note) => {
    // check out this classy way of updating only the fields necessary
    Object.keys(fields).forEach((k) => {
      note[k] = fields[k];
    });
    return note.save();
  });
};
*/
