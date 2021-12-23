var aws = require("aws-sdk");
var ddb = new aws.DynamoDB();
var cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider();

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
      UserPoolId:
        "arn:aws:cognito-idp:ap-southeast-1:847054957517:userpool/ap-southeast-1_IGu8uTXLT",
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
      cognitoidentityserviceprovider.adminAddUserToGroup(
        CognitoGroupParams,
        function (err, data) {
          if (err) {
            callback(err); // an error occurred
          }
          callback(null, event); // successful response
        }
      );
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
//--------------------------
//--------------------------
//--------------------------
//--------------------------
// var params = {
//   GroupName: "ROLE_ADMIN",
//   // UserPoolId: 'arn:aws:cognito-idp:us-east-1:23453453453:userpool/us-east-1_XXX',
//   UserPoolId: "us-east-1_XXX",
//   // Username: 'user@email.com'
//   Username: "ec12f604-a83c-4c76-856b-3acd9ca70562",
// };
// //--------------------------
// //--------------------------
// //--------------------------
// //--------------------------
// console.log("before");
// cognitoidentityserviceprovider.adminAddUserToGroup(
//   params,
//   function (err, data) {
//     console.log(params);
//     if (err) console.log("Error");
//     else console.log("Success");

//     // when the action finished
//     console.log("after");

//     console.log("Executed.");

//     context.succeed(event);
//   }
// );
// //--------------------------
// //--------------------------
// //--------------------------
// //--------------------------
// // console.log("howdy!",event);
// var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();
// var params = {
//   GroupName: "users", //The name of the group in you cognito user pool that you want to add the user to
//   UserPoolId: event.userPoolId,
//   Username: event.userName,
// };
// //some minimal checks to make sure the user was properly confirmed
// if (
//   !(
//     event.request.userAttributes["cognito:user_status"] === "CONFIRMED" &&
//     event.request.userAttributes.email_verified === "true"
//   )
// )
//   callback("User was not properly confirmed and/or email not verified");
// cognitoidentityserviceprovider.adminAddUserToGroup(
//   params,
//   function (err, data) {
//     if (err) {
//       callback(err); // an error occurred
//     }
//     callback(null, event); // successful response
//   }
// );
// if(! (event.request.userAttributes["cognito:user_status"]==="CONFIRMED" && event.request.userAttributes.email_verified==="true") )
//     callback("User was not properly confirmed and/or email not verified")
//   cognitoidentityserviceprovider.adminAddUserToGroup(params, function(err, data) {
//     if (err) {
//       callback(err) // an error occurred
//     }
//     callback(null, event);           // successful response
//   });
