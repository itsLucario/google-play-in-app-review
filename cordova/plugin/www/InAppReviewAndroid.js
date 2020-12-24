var exec = require('cordova/exec');

exports.initGooglePlayReview = function (success, error) {
    exec(success, error, 'InAppReviewAndroid', 'initGooglePlayReview', []);
};
