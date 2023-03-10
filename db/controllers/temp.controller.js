
let { Temp } = require('../models');
let {putDynamo} = require('../services');

const tempController = {
    putTemp: async (data) => {
        console.log('tempcontroller: ', data)
        
        try {
            const temp = new Temp({
                client: process.env.CLIENT,
                machineid: process.env.MACHINE_ID,
                celsius: data.temp,
                timestamp: new Date().toISOString()
            });
            putDynamo(temp);
        } catch (err) {
            console.log('temp.controller.js err');
        }
    }
};

module.exports = {
    tempController,
};