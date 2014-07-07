var request = require('./main');

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

