var utils = require('./af-session-utils');
var dwr = require('./engine');
var sessionCookie;
/*
request.request({
	protocol: 'http',
	hostname: 'httpbin.org',
    port: 80,
    path: '/get',
    method: 'GET',
    data: 'id=2&name=nitesh'
}).then(function(response) {
	console.log('solved response', response);
}, function(p) {
	console.log('it failed', p);
});

request.request({
	protocol: 'http',
	hostname: 'httpbin.org',
    port: 80,
    path: '/post',
    method: 'POST',
    data: 'id=2&name=nitesh'
}).then(function(response) {
	console.log('solved response', response);
}, function(p) {
	console.log('it failed', p);
});
*//*
request.request({
	protocol: 'http',
	hostname: 'mbp.messageone.com',
    port: 8000,
    path: '/af/login.do',
    method: 'POST',
    data: 'password=password&username=tl@bitstacker.com'
}).then(function(response) {
  *///sessionCookie = response.response.headers['set-cookie'][0].replace(/\sPath.*/,'');
  /*dwr.engine.setSessionId(sessionCookie);
  dwr.engine.setScriptSessionId('sessionInfo.scriptSessionId');
  dwr.engine._execute('/af/dwr', 'UserService', 'load', 1005, {"af_populatePropertyConfigs":true,"af_populateCustom":true}, function(){}).then(function(data) {
    console.log('dwr data', data);
  });
}, function(resp, resp2) {
  console.log('failed?', resp, resp2);
});
*/

var UserService = {};
UserService._path = '/af/dwr';
var SiteService = {};
SiteService._path = '/af/dwr';

UserService.load = function(p0, p1, callback) {
    return dwr.engine._execute('/af/dwr', 'UserService', 'load', p0, p1);
};

UserService.load(522871, {"af_populatePropertyConfigs":true,"af_populateCustom":true}).then(function(data) {
  console.log('I have user as ', data.af_name);
}, function(e) {
  console.log('User request erred!', e);
});

UserService.load(522870, {"af_populatePropertyConfigs":true,"af_populateCustom":true}).then(function(data) {
  console.log('I have user as ', data.af_name);
}, function(e) {
  console.log('User request erred!', e);
});

UserService.load(522872, {"af_populatePropertyConfigs":true,"af_populateCustom":true}).then(function(data) {
  console.log('I have user as ', data.af_name);
}, function(e) {
  console.log('User request erred!', e);
});

UserService.load(522869, {"af_populatePropertyConfigs":true,"af_populateCustom":true}).then(function(data) {
  console.log('I have user as ', data.af_name);
}, function(e) {
  console.log('User request erred!', e);
});

UserService.load(522868, {"af_populatePropertyConfigs":true,"af_populateCustom":true}).then(function(data) {
  console.log('I have user as ', data.af_name);
}, function(e) {
  console.log('User request erred!', e);
});

UserService.load(522867, {"af_populatePropertyConfigs":true,"af_populateCustom":true}).then(function(data) {
  console.log('I have user as ', data.af_name);
}, function(e) {
  console.log('User request erred!', e);
});

SiteService.load = function(p0, callback) {
  return dwr.engine._execute(SiteService._path, 'SiteService', 'load', p0);
};

setTimeout(function() {
  SiteService.load(2976).then(function(data) {
    console.log('I have site as ', data.af_name);
  }, function(message) {
    console.log('Site erroed?', message);
  });
}, 3000);