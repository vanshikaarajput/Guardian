const {
  createSOSAlert,
  getSOSHistory,
} = require("../services/sosService");

// ==========================
// Create SOS Alert
// ==========================
const createSOS = async (req, res) => {
  try {
    const { latitude, longitude } = req.body;

    // Validate request body
    if (latitude === undefined || longitude ===undefined) {
      return res.status(400).json({
        message: "Latitude and Longitude are required",
      });
    }

    const sos = await createSOSAlert(req.user.userId, {
      latitude,
      longitude,
    });

    return res.status(201).json({
      message: "SOS Alert created successfully",
      sos,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// ==========================
// Get SOS History
// ==========================
const getAllSOSAlerts = async (req, res) => {
  try {
    const sosAlerts = await getSOSHistory(req.user.userId);

    return res.status(200).json({
      success: true,
      count: sosAlerts.length,
      sosAlerts,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  createSOS,
  getAllSOSAlerts,
};