// // const accountSid = process.env.TWILIO_ACCOUNT_SID;
// // const authToken = process.env.TWILIO_AUTH_TOKEN;
// // const client = require('twilio')(accountSid, authToken);

// const accountSid = "AC49d61757c500369280a089d0bc246bcf";
// const authToken = "c92caed7694f84a5e1b85e5bc5063888";
// const verifySid = "VA426ba735732a0421510c84e01a9d144d";
// const client = require("twilio")(accountSid, authToken);


// const sendotp = async (contact, otp) => {

//     const body = `<h1>${otp}</h1>`;


//     await client.messages
//         .create({
//             body: 'McAvoy or Stewart? These timelines can get so confusing.',
//             from: '+15017122661',
//             statusCallback: 'http://postb.in/1234abcd',
//             to: '+919359619652'
//         })
//         .then(message => console.log(message.sid));
// }