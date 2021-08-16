const mongoose = require("mongoose");

const notesSchema = {
    type: String,
    item: String,
    quantity: String,
    date: {
        type: Date,
        default: new Date(),
    },
    description: String,
}

const Note = mongoose.model("Note", notesSchema);

module.exports = Note;