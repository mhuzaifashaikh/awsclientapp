
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */


// exports.handler = async (event) => {
//     console.log(`EVENT: ${JSON.stringify(event)}`);// thi s goes to cloud watch, not broswerrs console
//     const clientId = event.pathParameters.clientId;
//     const client = {'clientId':clientId, 'clientName': "Client #" + clientId};

//     return {
        
//         statusCode: 200,
//     //  Uncomment below to enable CORS requests
//      headers: {
//          "Access-Control-Allow-Origin": "*",
//          "Access-Control-Allow-Headers": "*",
//          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH"
//      },
//         body: JSON.stringify(client),
//     };

// };


exports.handler = async (event) =>  {
    console.log(`EVENT: ${JSON.stringify(event)}`);// thi s goes to cloud watch, not broswerrs console

    console.log(event.queryStringParameters);
    console.log('body: ', event.body);

    const clientId = event.queryStringParameters.id;
    const clientName = event.queryStringParameters.name;

    //the user/business who created this client
    const clientCreator = event.queryStringParameters.creator;


    const client = {'clientId':clientId, 
                    'clientName': clientName,
                    'creator': clientCreator};
                    
    console.log('!------client---!', client);

    return {

        statusCode: 200,

        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH"
        },

        body: JSON.stringify(client)
    }
  };


