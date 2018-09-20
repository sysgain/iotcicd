var should = require('should');
var request = require('supertest');
var expect = require('chai').expect;

describe('Service', function () {
    it('Should write tests', function (done) {
        expect(true).to.equal(true);
        done();
    });

});

after(function () {
    process.exit(0)
});

