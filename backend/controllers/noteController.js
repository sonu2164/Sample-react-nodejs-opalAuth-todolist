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
        const note = await Note.findById(req.params.id);

        if (!note) {
            return res.status(404).json({ msg: 'Note not found' });
        }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        await note.remove();
        res.json({ msg: 'Note removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
