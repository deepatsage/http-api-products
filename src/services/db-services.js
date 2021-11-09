const AWS = require("aws-sdk");
const uuid = require("node-uuid");

function getProductsFromDB() {
  return new Promise((resolve, reject) => {

    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: process.env.DYNAMODB_TABLE || "productdetails"
    };

    dynamoDb.scan(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.Items);
      }
    });
  });
}

module.exports = {
  getProductsFromDB
};