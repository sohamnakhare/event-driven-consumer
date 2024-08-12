const handle = function(event) {
  console.log('Received event:', JSON.stringify(event, null, 2));
};

exports.handler = handle;
