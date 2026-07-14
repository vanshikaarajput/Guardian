const {
  getUserProfile,
  updateUserProfile,
} = require("../services/profileService");

// ==========================
// Get Profile
// ==========================
const getProfile = async (req, res) => {
  try {
    const user = await getUserProfile(req.user.userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// ==========================
// Update Profile
// ==========================
const updateProfile = async (req, res) => {
  try {
    const { name, phone } = req.body;

    const user = await updateUserProfile(req.user.userId, {
      name,
      phone,
    });

    return res.status(200).json({
      message: "Profile updated successfully",
      user,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  getProfile,
  updateProfile,
};