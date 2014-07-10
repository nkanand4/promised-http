/**
 * Created by nitesh on 7/10/14.
 */

var appserver = 'http://frioaf.qa.messageone.com';

var credentials = {
  password: 'password',
  username: 'jason.reid@devtest'
};

var logon = function logon() {
  var ssid;
  // Get the login page
  if(sessionId) {
    loginSuccess.resolve();
    return loginSuccess.promise;
  }else {
    return followRedirects(appserver).then(function(response) {
      // Parse the login page for token and submit path
      var defer = future.defer();
      ssid = getJSession(response.response.headers);
      jsdom.env(response.text, ["http://code.jquery.com/jquery.js"], function(ignoreVar, win) {
        var $ = win.jQuery;
        var action = $('form').attr('action');
        var lt = $('input[name="lt"]').val();
        defer.resolve({
          action: action,
          lt: lt,
          cookie: ssid,
          url: response.reqURL
        });
      });
      return defer.promise;
    }).then(function(data) {
        // submit the form
        var url = urlparser.parse(data.url);
        return browser.request({
          protocol: url.protocol,
          hostname: url.hostname,
          path: '/sso/'+data.action,
          method: 'POST',
          headers: {
            'Cookie': data.cookie
          },
          data: serialize({
            lt: data.lt,
            '_eventId': 'submit',
            username: credentials.username,
            password: credentials.password,
            'Submit': 'Sign In'
          })
        });

      }).then(function(response) {
        // follow redirect after successful login
        var url;
        if('location' in response.response.headers) {
          url = urlparser.parse(response.response.headers.location);
          hostname = url.hostname;
          return browser.request({
            protocol: url.protocol,
            hostname: url.hostname,
            path: url.path,
            method: 'GET',
            headers: {
              'Cookie': ssid
            }
          });
        }
        return false;
      }).then(function(response) {
        if(response) {
          sessionId = getJSession(response.response.headers);
          loginSuccess.resolve();
        }else {
          loginSuccess.reject('Unable to login');
        }
      });
  }
  return loginSuccess.promise;
}

module.exports = {
  login: logon
};