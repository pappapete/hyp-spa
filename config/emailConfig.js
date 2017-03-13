var btoa = require('btoa');

const MAILGUN_DOMAIN = 'sandbox43f3f1148e58479687ce57f04a9c73cf.mailgun.org';
const MAILGUN_URL = 'https://api.mailgun.net/v3/' + MAILGUN_DOMAIN + '/messages';
const MAILGUN_API_KEY = 'key-6ec25c95a65b5cff7143147c0133348d';
const MAILGUN_AUTH = 'Basic ' + btoa('api\:' + MAILGUN_API_KEY );

const SEND_GRID_URL = 'https://api.sendgrid.com/v3/mail/send';
const SEND_GRID_API_KEY = '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';
const SEND_GRID_AUTH = 'Bearer ' + SEND_GRID_API_KEY;

var config = {
    mailGun: {
        name: 'MailGun',
        url: MAILGUN_URL,
        auth: MAILGUN_AUTH,
        contentType: 'application/x-www-form-urlencoded'
    },
    sendGrid: {
        name: 'SendGrid',
        url: SEND_GRID_URL,
        auth: SEND_GRID_AUTH,
        contentType: 'application/json'
    }
};

module.exports.config = config;