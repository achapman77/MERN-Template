const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    _riverSectionID: {
        type: Schema.Types.ObjectId,
        ref: "RiverSection"
    },
    date: String,
    noteText: String
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;