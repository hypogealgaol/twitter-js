var _ = require('underscore');

var tweetData = []; //will store tweetz, want this to be private

var add = function (name, text) {
	tweetData.push({ name: name, text: text });
};

var list = function () {
	return _.clone(tweetData);
};

var find = function (properties) {
	return _.where(tweetData, properties);
};

module.exports = { add: add, list: list, find: find };


/*
GET: give me this resource
PUT: update the resource with this data
POST: create a resource using this data
DELETE: delete the resource

*/ 

//---------------
//random tweet generating
//----------------
/*
var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Will', 'Charlotte', 'Jacob','Ethan','Sophia','Emma','Madison'];
  var fakeLasts = ["Alley", 'Stacky', 'Fullstackerson', 'Nerd', 'Ashby', 'Gatsby', 'Hazelnut', 'Cookie', 'Tilde', 'Dash'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome','breathtaking','amazing','sexy','sweet','cool','wonderful','mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for(var i=0; i<10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );

}
*/ 
