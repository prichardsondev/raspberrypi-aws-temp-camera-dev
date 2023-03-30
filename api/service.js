//preform logic -> return response to controller
require('dotenv').config();

const sensor = require("node-dht-sensor").promises;
const libcamera = require('node-libcamera')


const service = {
    getTemp: async () => {
        const res = await sensor.read(11, 4);

        return {
            temp: res.temperature.toFixed(2),
            timestamp: new Date().toISOString(),
            machineID: process.env.MACHINE_ID
        };
    },
    getImage: async () => {

        try {
            const timestamp = Date.now();
            let output = `${__dirname}/public/images/${timestamp}.jpg`;

            const config = {
                output, // output file path
                timeout: 500, // timeout before taking the picture
                width: 640, // image width
                height: 480, // image height
                nopreview: true,
            };

            await libcamera.still(config);

            return {
                output: config.output,
                timestamp,
                machineID: process.env.MACHINE_ID
            }
        } catch (err) {
            console.log('service.js err', err);
        }

    }
};

module.exports = {
    service,
};