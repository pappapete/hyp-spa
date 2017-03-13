var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

var config = require('../config/emailConfig').config;

var makeSendGridData = function (data) {
    var response = {
        personalizations:[{ to:[ { email: data.to } ] }],
        from: { email: data.from },
        subject :  data.subject,
        content : [ { type: 'text/plain', value: data.body } ]
    };

    if(data.cc) {
        response.personalizations[0].cc = [ { email: data.cc } ] ;
    }

    if(data.bcc) {
        response.personalizations[0].bcc = [ { email: data.bcc } ] ;
    }
    return JSON.stringify(response);
};

var makeMailGunData = function (data) {
    var response = 'from=' + data.from;
    response +=  '&to=' + data.to;
    response +=  '&subject=' + data.subject;
    response +=  '&text=' + data.body;

    if(data.cc) {
        response += '&cc=' + data.cc;
    }

    if(data.bcc) {
        response += '&bcc=' + data.bcc;
    }
    return response;
};

var sendEmail = function (type, params) {
    var url = (type === config.mailGun.name) ? config.mailGun.url : config.sendGrid.url;
    var auth = (type === config.mailGun.name) ? config.mailGun.auth : config.sendGrid.auth;
    var contentType = (type === config.mailGun.name) ? config.mailGun.contentType : config.sendGrid.contentType;
    var successStatus = (type === config.mailGun.name) ? 200  : 202;

    return new Promise( function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Authorization', auth);
        xhr.setRequestHeader('Content-Type', contentType);
        xhr.onload = function() {
            if (xhr.readyState === 4 && xhr.status === successStatus) {
                resolve('Delivered via ' + type);
            }
            reject('Delivery FAILED via ' + type);
        };
        xhr.onerror = function () {
            reject('Delivery FAILED via ' + type);
        };
        xhr.send(params);
    });
};

module.exports = {
    makeMailGunData: makeMailGunData,
    makeSendGridData: makeSendGridData,
    sendEmail: sendEmail
};