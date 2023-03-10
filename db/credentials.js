//note
const AWS = require("aws-sdk");
require('dotenv').config();

const credentials = new AWS.SharedIniFileCredentials({
  profile: process.env.PROFILE
});

AWS.config.credentials = credentials;

// AWS.config.update({
//   region: "us-east-1",
//   endpoint: "http://dynamodb.us-east-1.amazonaws.com",
// });

module.exports = AWS;
