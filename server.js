import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

// APP
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors({optionsSuccessStatus: 200}));
app.use(express.static(`${process.cwd()}/src/public`));

// ROUTES
app.get("/", (req, res) => {
  res.sendFile(`${process.cwd()}/src/views/index.html`);
});
import apiRouter from "./src/routes/apiRouter.js";
app.use("/api", apiRouter);

// LISTEN
app.listen(3000, function () {
  console.info(`server running: localhost:${PORT}`);
});
