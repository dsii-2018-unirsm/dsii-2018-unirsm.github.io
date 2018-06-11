const googleTrends = require('google-trends-api');
googleTrends.relatedQueries({ keyword: ['design'],startTime: new Date(Date.now() - (1 * 60 * 60 * 1000)), granularTimeResolution: true, timezone: 20})
.then(function(results){
  console.log(results);
})
.catch(function(err){
  console.error('Oh no there was an error', err);
});
