//write to dynamobd

var AWS = require('../credentials');
require('dotenv').config();


AWS.config.update({
  region: "us-east-1",
  endpoint: "http://dynamodb.us-east-1.amazonaws.com",
});

let documentClient = new AWS.DynamoDB.DocumentClient();

const putDynamo = async (data) => {

  try {
    const params = {
      TableName: process.env.TABLE_NAME,
      Item: data.toItem()
    };

    await documentClient.put(params).promise();
  } catch (err) {
    console.log(`db.service.js err`, err);
  }
};

  module.exports = {putDynamo};