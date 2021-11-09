const dbService = require('./services/db-services');

const httpResponse = (statusCode, resData) => {
  const response = {
    statusCode: statusCode,
    body: JSON.stringify(resData),
  };
  return response;
}

module.exports.handler = async (event, context) => {

  try {
    const products = await dbService.getProductsFromDB();
    return httpResponse(200, products);
  } catch (error) {
    return httpResponse(500, error);
  }
}