const prisma = require("../config/prisma");

const updateLocation = async (userId, latitude, longitude) => {
    const existingLocation = await prisma.location.findUnique({
        where: {
            userId,
        },
    });

    if (existingLocation) {
        return await prisma.location.update({
            where: {
                userId,
            },
            data: {
                latitude,
                longitude,
            },
        });
    }

    return await prisma.location.create({
        data: {
            latitude,
            longitude,
            userId,
        },
    });
};

const getLocation = async (userId) => {
    return await prisma.location.findUnique({
        where: {
            userId,
        },
    });
};

module.exports = {
    updateLocation,
    getLocation,
};