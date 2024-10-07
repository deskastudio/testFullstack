import express from "express";
const router = express.Router();
import barangRouter from "./barang.js";

router.use("/", (req, res) => {
    const data={
        title: "Deska",
        layout: "layouts/main-layout",
        data: [
            {
                id: 1,
                name: "Deska",
                description: "Deska ini sangat bagus",
                stock: 10,
            },
            {
                id: 2,
                name: "Tri",
                description: "Deska ini sangat bagus sangat bagus",
                stock: 10,
            },
            {
                id: 3,
                name: "Mulyana",
                description: "Deska ini sangat bagus sangat bagus sangat bagus",
                stock: 10,
            },

        ],
    }
    res.render("app.html", data);
});

router.use("/barangs", barangRouter);

router.use("*", (req, res) => {
    res.status(404).send("404 not found");
});

export default router;