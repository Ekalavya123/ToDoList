const express = require('express');
const router = express.Router();
const noteFunctions = require('../routeFunctions/noteFunctions');

router.post("/addNote", noteFunctions.addNote);
router.get("/getNotes/:email", noteFunctions.getNotes);
router.delete("/deleteNote/:email/:id", noteFunctions.deleteNote);
router.put("/updateNote", noteFunctions.updateNote);

module.exports = router;
