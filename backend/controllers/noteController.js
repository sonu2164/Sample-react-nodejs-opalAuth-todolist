const Note = require('../models/Note');

exports.createNote = async (req, res) => {
    const { title, description } = req.body;

    try {
        const newNote = new Note({
            title,
            content: description,
            user: req.user.id,
        });

        const note = await newNote.save();
        res.json(note);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getNotes = async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id }).sort({ date: -1 });
        res.json(notes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
exports.deleteNote = async (req, res) => {
    try {
        const noteId = req.body.noteId;

        if (!noteId) {
            return res.status(400).json({ msg: 'Note ID is required' });
        }

        const note = await Note.findById(noteId);

        if (!note) {
            return res.status(404).json({ msg: 'Note not found' });
        }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        // Delete the note
        await Note.findByIdAndDelete(noteId);

        return res.json({ msg: 'Note removed' });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ msg: 'Server Error' });
    }
};
