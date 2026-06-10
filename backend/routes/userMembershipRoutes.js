
const {
  buyMembership,
  getMyMembership,
  createPaymentOrder,
  createRenewalOrder,
  verifyPayment,
  getRevenueStats,
  renewMembership,
  getPaymentHistory,
} = require(
  "../controllers/userMembershipController"
);
const express = require("express");

const router = express.Router();

const protect =
  require("../middleware/authMiddleware");


router.get(
  "/payment-order/:id",
  protect,
  createPaymentOrder
);
router.post(
  "/verify-payment",
  protect,
  verifyPayment
);
router.post(
  "/buy/:id",
  protect,
  buyMembership
);

router.get(
  "/my-membership",
  protect,
  getMyMembership
);
router.get(
  "/revenue",
  protect,
  getRevenueStats
);
router.post(
  "/renew/:id",
  protect,
  renewMembership
);
router.get(
  "/renew-order/:id",
  protect,
  createRenewalOrder
);
router.get(
  "/payment-history",
  protect,
  getPaymentHistory
);
module.exports = router;