'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require("dialogflow-fulfillment");
const axios = require('axios');
const requestNode = require('request');
const ANY_ARGUMENT = 'any';process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statementsfunction 
const {
dialogflow,
Permission
} = require('actions-on-google');
 
const app = dialogflow();
 
app.intent('location', (conv) => {
 
conv.data.requestedPermission = 'DEVICE_PRECISE_LOCATION';
return conv.ask(new Permission({
context: 'to locate you',
permissions: conv.data.requestedPermission,
}));
 
});
app.intent('user_info', (conv, params, permissionGranted) => {
if (permissionGranted) {
const {
requestedPermission
} = conv.data;
if (requestedPermission === 'DEVICE_PRECISE_LOCATION') {
 
const {
coordinates
} = conv.device.location;
// const city=conv.device.location.city;
 
if (coordinates) {
return conv.close(`You're location coordinates are ${coordinates.latitude},${coordinates.longitude}.Your Message and your location has been recorded. Please wait until our Officials reach out to you. Stay Home. Stay Safe`);
} else {
// Note: Currently, precise locaton only returns lat/lng coordinates on phones and lat/lng coordinates
// and a geocoded address on voice-activated speakers.
// Coarse location only works on voice-activated speakers.
return conv.close('Sorry, I could not figure out where you are.');
}
 
}
} else {
return conv.close('Sorry, permission denied.');
}
});
function saveToDb(anyToSave){
    const options = {
        url: 'https://disha-ec136.firebaseio.com/Name.json',
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            "any" : anyToSave
        })
    };
  
    requestNode(options, function(error, requestInternal, body){
        console.log(body);
 });
}
function saveToDb1(anyToSave){
    const options = {
       url: 'https://disha-ec136.firebaseio.com/Age.json',
        method: 'PUT',
        headers: {
           'Content-Type': 'application/json'
        },
        body : JSON.stringify({
          "any" : anyToSave
       })
   };
  
   requestNode(options, function(error, requestInternal, body){
       console.log(body);
 });
}
function saveToDb2(anyToSave){
    const options = {
       url: 'https://disha-ec136.firebaseio.com/City.json',
        method: 'PUT',
        headers: {
           'Content-Type': 'application/json'
        },
        body : JSON.stringify({
          "any" : anyToSave
       })
   };
  
   requestNode(options, function(error, requestInternal, body){
       console.log(body);
 });
}
function saveToDb3(anyToSave){
    const options = {
       url: 'https://disha-ec136.firebaseio.com/Travel.json',
        method: 'PUT',
        headers: {
           'Content-Type': 'application/json'
        },
        body : JSON.stringify({
          "any" : anyToSave
       })
   };
  
   requestNode(options, function(error, requestInternal, body){
       console.log(body);
 });
}
function saveToDb4(anyToSave){
    const options = {
       url: 'https://disha-ec136.firebaseio.com/Cold.json',
        method: 'PUT',
        headers: {
           'Content-Type': 'application/json'
        },
        body : JSON.stringify({
          "any" : anyToSave
       })
   };
  
   requestNode(options, function(error, requestInternal, body){
       console.log(body);
 });
}
function saveToDb5(anyToSave){
    const options = {
       url: 'https://disha-ec136.firebaseio.com/Fever.json',
        method: 'PUT',
        headers: {
           'Content-Type': 'application/json'
        },
        body : JSON.stringify({
          "any" : anyToSave
       })
   };
  
   requestNode(options, function(error, requestInternal, body){
       console.log(body);
 });
}
function saveToDb6(anyToSave){
    const options = {
       url: 'https://disha-ec136.firebaseio.com/Diarrhea.json',
        method: 'PUT',
        headers: {
           'Content-Type': 'application/json'
        },
        body : JSON.stringify({
          "any" : anyToSave
       })
   };
  
   requestNode(options, function(error, requestInternal, body){
       console.log(body);
 });
}
function saveToDb7(anyToSave){
    const options = {
       url: 'https://disha-ec136.firebaseio.com/Throat Pain.json',
        method: 'PUT',
        headers: {
           'Content-Type': 'application/json'
        },
        body : JSON.stringify({
          "any" : anyToSave
       })
   };
  
   requestNode(options, function(error, requestInternal, body){
       console.log(body);
 });
}
//exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  function welcome(agent) {
    agent.add(`Welcome to the Google Home integration with tableau developed by Nihal Konan `);
  }
 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }

function getspreadsheetdata(){
    return axios.get('https://sheetdb.io/api/v1/rskupde2821dz');
  }

function trialWithin() {
    const name = agent.parameters.name;
    return getspreadsheetdata().then(res=> {
        res.data.map(person => {
            if(person.Name === name)
            agent.add(`The details of ${name} is ${person.Data}`);

});
    });

}  
  function namenew() {
      let any = request.body.queryResult.parameters[ANY_ARGUMENT];
      saveToDb(any);
    }
  function agenew() {
      let any = request.body.queryResult.parameters[ANY_ARGUMENT];
      saveToDb1(any);
    }
  function citynew() {
      let any = request.body.queryResult.parameters[ANY_ARGUMENT];
      saveToDb2(any);
    }
  function traveledcountrynew() {
      let any = request.body.queryResult.parameters[ANY_ARGUMENT];
      saveToDb3(any);
    }
  function coldnew() {
      let any = request.body.queryResult.parameters[ANY_ARGUMENT];
      saveToDb4(any);
    }
   function fevernew() {
      let any = request.body.queryResult.parameters[ANY_ARGUMENT];
      saveToDb5(any);
    }
  function diarrheanew() {
      let any = request.body.queryResult.parameters[ANY_ARGUMENT];
      saveToDb6(any);
    }
  function throatpainnew() {
      let any = request.body.queryResult.parameters[ANY_ARGUMENT];
      saveToDb7(any);
    }// Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
intentMap.set('trialwithin', trialWithin);
  // Here you pass as first argument the name of the Intent
  intentMap.set('nameofperson', namenew);
  intentMap.set('ageofperson', agenew);
  intentMap.set('cityofperson', citynew);
  intentMap.set('traveledcountryofperson', traveledcountrynew);
  intentMap.set('coldorflu', coldnew);
  intentMap.set('feverofperson', fevernew);
  intentMap.set('diarrheaornausea', diarrheanew);
  intentMap.set('throatpain', throatpainnew);
  // intentMap.set('your intent name here', yourFunctionHandler);
  // intentMap.set('your intent name here', googleAssistantHandler);
  agent.handleRequest(intentMap);
});
