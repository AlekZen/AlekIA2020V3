const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });

 exports.webhook = functions.https.onRequest((request, response) => {
    
    console.log("request.body.result.parameters: ", request.body.result.parameters);
    // {
    //     name: "john",
    //     persons: "3"
    // }

    let params = request.body.result.parameters;

    response.send({
        speech:
            `${params.nombre} your hotel booking request for ${params.apellido} room is forwarded for
             ${params.telefono} persons, we will contact you on  soon`
    });
});