const express = require("express");
const router = express.Router();
const Note = require("../models/Company_Post");

router.route("/company/componypost").post((req, res) => {
    const item = req.body.item;
    const type = req.body.type;
    const quantity = req.body.quantity;
    const date = req.body.date;
    const description = req.body.description;

    const newNote = new Note({
        item,
        type,
        quantity,
        date,
        description
    });

    newNote.save();
});

router.route("/company/ongoingp").get((req, res) => {
    Note.find()
    .then(foundNotes => res.json(foundNotes))
})

module.exports = router;