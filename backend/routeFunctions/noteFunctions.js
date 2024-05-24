const NoteCollection = require('../routeCollection/noteCollection');

const addNote = async (req, res) => {
    const response = await NoteCollection.addNote(req.body.email, req.body.note);
    //console.log(response)
    res.status(201).json(response);
};

const getNotes = async (req, res) => {
    const email = req.params.email;
    const response = await NoteCollection.getNotes(email);
    //console.log(response)
    res.status(200).json(response);
};

const deleteNote = async (req, res) => {
    const { email, id } = req.params;
    const response = await NoteCollection.deleteNote(email, id);
    res.status(200).json(response);
};

const updateNote = async (req, res) => {
    const { email, id ,note} = req.body;
    const response = await NoteCollection.updateNote(email,id,note);
    res.status(200).json(response);
};

module.exports = {
    addNote,
    getNotes,
    deleteNote,
    updateNote,
};
