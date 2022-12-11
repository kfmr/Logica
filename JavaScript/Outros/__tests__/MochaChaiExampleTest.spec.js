/* 
Instalar mocha, chai e chai-http

npm install mocha chai chai-http

Execução do script no package.json


  "scripts": {
   // "test": "./node_modules/.bin/mocha __tests__/**/ //*.spec.js",
// "test:tdd": "./node_modules/.bin/mocha __tests__/**/*.spec.js --watch"
//}





const {
    expect
} = require("chai")
const chai = require('chai')
const chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp)
describe('main', () => {
    it('should return 1+1', () => {
        expect(2 + 2).equal(4)
    })
})

describe('Test bored API', () => {


    describe('/GET an activity when bored', () => {
        it('Get an activity', (done) => {
            chai.request('https://www.boredapi.com')
                .get('/api/activity')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });

})