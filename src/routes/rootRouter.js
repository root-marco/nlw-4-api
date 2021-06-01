import express from "express";

import * as rootController
from "../controllers/rootController.js";

const router = express.Router();

router.get("/", rootController.rootGet);

export default router;
