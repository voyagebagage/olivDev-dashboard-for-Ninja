// const AWS = require("aws-sdk");
// const docClient = new AWS.DynamoDB.DocumentClient();

// const getCampaigns = async () => {
//   const params = {
//     TableName: "CampaignTable",
//   };
//   try {
//     const campaigns = await docClient.get(params).promise();
//     console.log("there are the :", campaigns);
//     return campaigns;
//   } catch (error) {
//     console.log("Error with lambda", error);
//   }
// };

exports.handler = async (event) => {
  //   await getCampaigns();
  console.log(event, JSON.stringify("event"));
  const response = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify("Hello from Lambda!"),
  };
  return response;
};
