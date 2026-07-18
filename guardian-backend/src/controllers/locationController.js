const {
    updateLocation,
    getLocation,
} = require("../services/locationService");

const updateUserLocation = async (req, res) => {
    try {
        const { latitude, longitude } = req.body;

        const location = await updateLocation(
            req.user.userId,
            latitude,
            longitude
        );

        res.status(200).json({
            message: "Location updated successfully",
            location,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to update location",
        });
    }
};

const getUserLocation = async (req, res) => {
    try {
        const location = await getLocation(req.user.userId);

        if (!location) {
            return res.status(404).json({
                message: "Location not found",
            });
        }

        res.status(200).json(location);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch location",
        });
    }
};

module.exports = {
    updateUserLocation,
    getUserLocation,
};