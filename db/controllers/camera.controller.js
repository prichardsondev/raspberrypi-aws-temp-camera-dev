require('dotenv').config();
let { Camera } = require('../models');
let {putDynamo, uploadS3} = require('../services');

const cameraController = {
    putImage: async (data) => {
        try {
            let s3data = await uploadS3(data);

            const camera = new Camera({
                client: process.env.CLIENT,
                machineid: process.env.MACHINE_ID,
                address: s3data.Location,
                timestamp: new Date().toISOString()
            });

            await putDynamo(camera);

            return s3data;

        } catch (err) {
            console.log('camera.controller.js', err);
        }
    }
};

module.exports = {
    cameraController,
};