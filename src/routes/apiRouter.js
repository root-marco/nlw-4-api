import express from "express";

import * as apiController
from "../controllers/apiController.js";

const router = express.Router();

router.get("/hello", apiController.getHello);

export default router;
