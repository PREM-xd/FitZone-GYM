const express = require("express");

const router = express.Router();

const protect =
  require("../middleware/authMiddleware");

const adminOnly =
  require("../middleware/adminMiddleware");


const {
  createMembership,
  getMemberships,
  deleteMembership,
  updateMembership,
} = require(
  "../controllers/membershipController"
);

router.get("/", getMemberships);

router.post(
  "/",
  protect,
  adminOnly,
  createMembership
);

router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteMembership
);
router.put(
  "/:id",
  protect,
  adminOnly,
  updateMembership
);
module.exports = router;