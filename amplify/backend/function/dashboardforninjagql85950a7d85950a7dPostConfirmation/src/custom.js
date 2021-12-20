var aws = require("aws-sdk");
var ddb = new aws.DynamoDB();

function setParams(event, model, userType, tableName) {
  let date = new Date();
  return {
    Item: {
      id: { S: event.request.userAttributes.sub },
      __typename: { S: model }, //model name Appsync
      category: { S: userType },
      username: { S: event.userName },
      email: { S: event.request.userAttributes.email },
      createdAt: { S: date.toISOString() },
      updatedAt: { S: date.toISOString() },
    },
    TableName: `process.env.${tableName}`,
  };
}
exports.handler = async (event) => {
  console.log("event", event);

  if (event.request.userAttributes.sub) {
    let userType = event.request.userAttributes["custom:user_type"];
    let params = {};
    if (userType === "agent") {
      params = setParams(event, "Agent", userType, AGENTTABLE);
    }
    if (userType === "client") {
      params = setParams(event, "Client", userType, CLIENTTABLE);
    }
    console.log("PARAMS:", params);
    try {
      await ddb.putItem(params).promise(); //writing in dynamo
      console.log("Success");
    } catch (err) {
      console.log("Error", err);
    }
    console.log("Success: Everything executed correctly");
    return null;
  } else {
    console.log("Error: Nothing was written to DynamoDB");
    // context.done(null, event);
    return null;
  }
};
