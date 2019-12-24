const {google} = require('googleapis');
var sheets = google.sheets('v4');
//
// authorize(function(authClient) {
//     var request = {
//         // The ID of the spreadsheet to retrieve data from.
//         spreadsheetId: '1dWcQSzmeFpVPNno01WXovj6072xW0JbRQzg0IVjYFbQ',  // TODO: Update placeholder value.
//
//         // The A1 notation of the values to retrieve.
//         range: 'Sheet1!E4:G5',  // TODO: Update placeholder value.
//
//         // How values should be represented in the output.
//         // The default render option is ValueRenderOption.FORMATTED_VALUE.
//         valueRenderOption: '',  // TODO: Update placeholder value.
//
//         // How dates, times, and durations should be represented in the output.
//         // This is ignored if value_render_option is
//         // FORMATTED_VALUE.
//         // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
//         dateTimeRenderOption: '',  // TODO: Update placeholder value.
//
//         auth: authClient,
//     };
//
//     sheets.spreadsheets.values.get(request, function(err, response) {
//         if (err) {
//             console.error(err);
//             return;
//         }
//
//         // TODO: Change code below to process the `response` object:
//         console.log(JSON.stringify(response, null, 2));
//     });
// });
//
// function authorize(callback) {
//     // TODO: Change placeholder below to generate authentication credentials. See
//     // https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
//     //
//     // Authorize using one of the following scopes:
//     //   'https://www.googleapis.com/auth/drive'
//     //   'https://www.googleapis.com/auth/drive.file'
//     //   'https://www.googleapis.com/auth/drive.readonly'
//     //   'https://www.googleapis.com/auth/spreadsheets'
//     //   'https://www.googleapis.com/auth/spreadsheets.readonly'
//     var authClient = null;
//
//     if (authClient == null) {
//         console.log('authentication failed');
//         return;
//     }
//     callback(authClient);
// }












// export default {
//     apiKey: "AIzaSyA-UXoZqJhkIXOK0RaGOQXAubeX1QXAUSM",
//     discoveryDocs:
//         ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
//     spreadsheetId: "1dWcQSzmeFpVPNno01WXovj6072xW0JbRQzg0IVjYFbQ"
// }
