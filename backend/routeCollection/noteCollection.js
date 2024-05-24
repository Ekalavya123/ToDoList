const Note = require('../models/Note');



const addNote = async (email, note) => {
    try {
        console.log(email,note);
        const userNotes = await Note.findOneAndUpdate(
            { email: email },
            { $push: { notes: note } },
            { new: true, upsert: true }  // `upsert` creates the document if it doesn't exist
        );
        //console.log(userNotes)
        return { success: true, message: "Note added successfully", data: userNotes };
    } catch (error) {
        console.log(error);
        return { success: false, message: "Something went wrong, try again later" };
    }
};

const getNotes = async (email) => {
    try {
        //console.log("email",email)
        let userNotes = await Note.findOne({ email: email });
        if (!userNotes) {
            // Create a new Note document with an empty notes array if none exists
            userNotes = await Note.create({ email: email, notes: [] });
        }
        //else console.log("notes",userNotes)
        return { success: true, data: userNotes.notes };
    } catch (error) {
        console.log(error);
        return { success: false, message: "Something went wrong, try again later" };
    }
};

const deleteNote = async (email, index) => {
    try {
        // Find the user notes document by email
        const userNotes = await Note.findOne({ email: email });

        if (!userNotes) {
            return { success: false, message: "No notes found" };
        }

        // Check if the index is within the range of the notes array
        if (index < 0 || index >= userNotes.notes.length) {
            return { success: false, message: "Invalid note index" };
        }
        userNotes.notes.splice(index, 1);
        await userNotes.save();
        return { success: true, message: "Note deleted successfully" };
    } catch (error) {
        console.error("Error deleting note:", error);
        return { success: false, message: "Something went wrong, try again later" };
    }
}

const updateNote = async (email, index, note) => {
    try {
      const user = await Note.findOne({ email: email });
      if (user) {
        if (user.notes.length > index) {
          user.notes[index] = note;
          await user.save();
          return { success: true, message: "Note updated successfully" };
        } else {
          return { success: false, message: "No note found at the given index" };
        }
      } else {
        return { success: false, message: "No user found with the given email" };
      }
    } catch (error) {
      console.log(error);
      return { success: false, message: "Something went wrong, try again later" };
    }
  };
  

module.exports = {
    addNote,
    getNotes,
    deleteNote,
    updateNote,
};
