var aws = require("aws-sdk");
var ddb = new aws.DynamoDB();
var cognitoISP = new aws.CognitoIdentityServiceProvider();

function setParams(event, model, userType, TABLE_NAME) {
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
    TableName: TABLE_NAME,
  };
}
exports.handler = async (event, context, callback) => {
  console.log("event", event);

  if (event.request.userAttributes.sub) {
    let userType = event.request.userAttributes["custom:user_type"];
    var CognitoGroupParams = {
      //The name of the group in you cognito user pool that you want to add the user to
      GroupName: userType.charAt(0).toUpperCase() + userType.slice(1),
      UserPoolId: event.userPoolId,
      Username: event.userName,
    };
    let params = {};
    if (userType === "agent") {
      params = setParams(event, "Agent", userType, process.env.AGENTTABLE);
    }
    if (userType === "client") {
      params = setParams(event, "Client", userType, process.env.CLIENTTABLE);
    }
    console.log("PARAMS:", params);
    try {
      await ddb.putItem(params).promise(); //writing in dynamo
      //some minimal checks to make sure the user was properly confirmed
      if (
        !(
          event.request.userAttributes["cognito:user_status"] === "CONFIRMED" &&
          event.request.userAttributes.email_verified === "true"
        )
      )
        callback("User was not properly confirmed and/or email not verified");

      console.log("CognitoGroupParams:", CognitoGroupParams);
      await cognitoISP.adminAddUserToGroup(CognitoGroupParams).promise();
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
