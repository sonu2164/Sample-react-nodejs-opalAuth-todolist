const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
    createNote,
    getNotes,
    deleteNote,
} = require('../controllers/noteController');

router.get('/', auth, getNotes);
router.post('/', auth, createNote);
router.post('/update', auth, createNote);
router.post('/deletenote', auth, deleteNote);
// router.delete('/:id', auth, deleteNote);

module.exports = router;
