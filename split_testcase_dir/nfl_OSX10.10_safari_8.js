var chai = require("chai"),
    webdriverio = require("webdriverio");

var expect = chai.expect,
    url = "http://nfl.com/",
    sauceConfig = {
        desiredCapabilities: {"browserName": "safari", "version": "8", "platform": "OS X 10.10"},
        host: "ondemand.saucelabs.com",
        port: 80,
        user: process.env.SAUCE_USERNAME,
        key: process.env.SAUCE_ACCESS_KEY,
        logLevel: "silent"
    };

describe("NFL", function () {
    describe("Homepage", function () {
        this.timeout(99999999);
        var client = {};

        before(function (done) {
            client = webdriverio.remote(sauceConfig);
            client.init(done);
        });

        after(function (done) {
            client.end(done);
        });

        it("has the correct title", function (done) {
            client.call(done);
        });
        it("logs in the user", function (done) {
            client.call(done);
        });
    });
});