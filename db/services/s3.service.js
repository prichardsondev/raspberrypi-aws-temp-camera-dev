
//upload file to S3

require('dotenv').config();
let AWS = require('../credentials');
const fs = require('fs/promises');
const path = require('path');
const { CloudWatchLogs } = require('../credentials');

AWS.config.update({
  region: "us-east-1",
  endpoint: "https://s3.amazonaws.com"
});

const S3 = new AWS.S3();

const uploadS3 = async (filePath) => {
    
    //verbose for testing
    const newFile =  `${path.basename(filePath)}`;
    const pathToFile = path.resolve(filePath);
    const file = await fs.readFile(pathToFile);

    const params = {
        Bucket: process.env.S3_BUCKET,
        Key: `${process.env.CLIENT}/${newFile}`,
        Body: file
    };

    console.log("Params    ", "\n",params);

    try {
        let data = await S3.upload(params).promise();
        console.log("DATA         ", data);
        return data;
    } catch (err) {
        console.log('s3.service.js err, ', "\n", err);
    }
};

module.exports = { uploadS3 }