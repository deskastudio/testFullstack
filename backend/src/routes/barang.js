import express from "express";
const barangRouter = express.Router();

barangRouter
    .route("/")
    .get((req, res) => {
    res.send("ini metode get barangs");
})
    .post((req, res) => {
    res.send("ini metode post barangs");
})
    .put((req, res) => {
    res.send("ini metode put barang");
});

barangRouter
    .delete("/:id", (req, res) => {
    res.send("ini metode delete barang dengan id = " + req.params.id);
});

export default barangRouter;