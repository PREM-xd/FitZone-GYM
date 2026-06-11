const express =
  require("express");

const router =
  express.Router();

const {
  generateFitnessPlan,
} = require(
  "../controllers/aiController"
);

router.post(
  "/fitness-plan",
  generateFitnessPlan
);

module.exports =
  router;