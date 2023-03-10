//call service <-> call db/controller/... <-> return response
const { service } = require("./service");
const {tempController, cameraController} = require('../db/controllers');

const controller = {

  getHome: (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
  },

  getHealth: (req, res) => {
    const data = {
      uptime: process.uptime(),
      message: 'Ok',
      timestamp: new Date().toISOString()
    }
    res.status(200).send(data);
  },

  getTemp: async (req, res) => {
    try {
      let temp = await service.getTemp();
      tempController.putTemp(temp);
      res.send(temp);
    } catch (err) {
      console.log("controller.js");
      res.sendStatus(500);
    }
  },
  
  getImage: async (req, res) => {
    try {
      let imageUrl = await service.getImage();
      let s3data = await cameraController.putImage(imageUrl.output);
      res.send( {...imageUrl,...s3data} );
    } catch (err) {
      console.log('controller.getimage err');
      res.sendStatus(500);
    }
  }
};

module.exports = {
  controller,
};