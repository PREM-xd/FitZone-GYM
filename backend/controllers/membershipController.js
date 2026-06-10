const Membership = require("../models/Membership");

const createMembership = async (req, res) => {
  try {
    const membership =
      await Membership.create(req.body);

    res.status(201).json(membership);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getMemberships = async (req, res) => {
  try {
    const memberships =
      await Membership.find();

    res.status(200).json(memberships);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteMembership = async (
  req,
  res
) => {
  try {
    await Membership.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: "Plan Deleted",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const updateMembership = async (
  req,
  res
) => {
  try {

    const membership =
      await Membership.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.status(200).json(
      membership
    );

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};
module.exports = {
  createMembership,
  getMemberships,
  deleteMembership,
  updateMembership,
};
