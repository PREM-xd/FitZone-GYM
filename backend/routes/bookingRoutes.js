const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");


const {
  createBooking,
  getBookings,
  getMyBookings,
  deleteBooking,
  updateStatus,
} = require("../controllers/bookingController");
const adminOnly =
  require("../middleware/adminMiddleware");

router.post("/", protect, createBooking);
router.get(
  "/my-bookings",
  protect,
  getMyBookings
);
router.get(
  "/",
  protect,
  adminOnly,
  getBookings
);

router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteBooking
);

router.put(
  "/:id",
  protect,
  adminOnly,
  updateStatus
);

module.exports = router;