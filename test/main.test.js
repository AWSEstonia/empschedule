var supertest = require('supertest');
var expect = require('chai').expect;

var gateway = 'https://0j80wtdpy9.execute-api.us-west-2.amazonaws.com/dev/empschedule';

//var gateway = 'https://bdfadsa';

var server = supertest.agent(gateway);
//var expect = chai.expect;

describe("Test EmpSchedule Lambda", function(done){
    it("Enpoint is up and running.", function(done){
        server
            .get('?empID=102')
            //.expect("Content-type",/json/)
            .expect(200)    
            .end(function(err,res){
                //expect(res).to.have.status(200);
                //res.body.should.have.property('name');
                //res.status.should.equal(200);
                //expect(err).be.null;
                console.log(res + ' TEESTTTINNG');
                done();
            });
    });
    it("Data Response.", function(done){
        server
            .get('?empID=102')
            //.expect("Content-type",/json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('array');
                console.log(response.body);
                done();
            });
    });


});