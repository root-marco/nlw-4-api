import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

// APP
const app = express();
const PORT = process.env.PORT;

app.use(cors({optionsSuccessStatus: 200}));
app.use(express.static(`${process.cwd()}/src/public`));

// ROUTES
import rootRouter from "./src/routes/rootRouter.js";
app.use("/", rootRouter);
import apiRouter from "./src/routes/apiRouter.js";
app.use("/api", apiRouter);

app.listen(3000, function () {
  console.info("server running");
});
