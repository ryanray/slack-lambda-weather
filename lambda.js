var config = require('./config.json');
var weather = require('./lib/weather.js');

// example event payload from slack slash command
// token=asdfghjklzxcvbnm
// team_id=T0001
// team_domain=example
// channel_id=C2147483705
// channel_name=test
// user_id=U2147483697
// user_name=Steve
// command=/weather
// text=94070

// Entrypoint for AWS Lambda
exports.handler = function(event, context) {
  var zipCode = event.text ? event.text.trim() : null;

  console.log('[EVENT] ', event);

  // verify request came from slack - could also check that event.command === /weather
  if(event.token !== config.slashCommandToken) {
    return context.fail('Unauthorized request. Check config.slashCommandToken.');
  }

  // validate zip code
  if(!isValidZip(zipCode)) {
    return context.fail('Must be a valid 5 digit zip code.');
  }

  // get weather && respond to slack request
  weather.byZip(zipCode).then(function(response) {
    context.succeed(response);
  }).catch(function(reason) {
    console.log('[FAIL] Unable to get weather: ', reason);
    context.fail('Unable to get weather. Try again later.');
  });
};

function isValidZip(zip) {
  return zip && zip.length === 5 && !isNaN(zip);
}