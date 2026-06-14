const express = require("express");

const router = express.Router();

const {
  getMyStats,
  updateStats,
} = require("../controllers/userStatsController");

const protect = require("../middleware/authMiddleware");

router.get(
  "/my-stats",
  protect,
  getMyStats
);

router.put(
  "/update",
  protect,
  updateStats
);

module.exports = router;