import express from "express";
const PORT = 5000;
import router from "./routes/index.js";
const app = express();

import ejs from "ejs";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

// Setup for static files
app.use(express.static(path.join(__dirname, "../public")));

// Set up EJS and layouts
app.set("views", path.join(__dirname, "views"));
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");
app.use(expressEjsLayouts);

// Set up routes
app.use(router);

app.listen(PORT, () => {
    console.log(`Example app listening on http://localhost:${PORT}/`);
});
