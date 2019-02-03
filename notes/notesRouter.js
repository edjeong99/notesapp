const router = require('express').Router();
const nc = require('./notesController.js');

// ENDPOINT for each features

// return all notes
router.get('/allnotes/:id', nc.getNotes);

// return a note with matching id
router.get('/notes/:id', nc.getANote);

// add a new note
router.post('/addnote', nc.createNote);

// edit a note
router.put('/notes/:id', nc.editNote);

// delete a note with the matching id
router.delete('/notes/:id', nc.deleteNote);

// return notes with the matching query
router.get('/search', nc.searchNote);

module.exports = router;
