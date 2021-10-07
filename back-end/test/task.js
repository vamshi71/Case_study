const chai=require('chai')
const server=require("../app")
let chaiHttp = require('chai-http');
const { request } = require('http');
//const { response } = require('./back-end/app');

chai.should();
 
//can call Api using Http protocol
chai.use(chaiHttp)

describe('Task Api',()=>{
    describe("get /booking",()=>{
        it('it should Get all the booking',(done)=>{
            chai.request(server)
            .get("/booking")
            .end((err,response)=>{
                response.should.have.status(201);
                response.body.should.be.a('array');
           
            })
            done();
        })
        it('it should not Get all the booking',(done)=>{
            chai.request(server)
            .get("/bookings")
            .end((err,response)=>{
                response.should.have.status(404);
            
            })
            done();
        })
        
        it('it should Get all the rooms',(done)=>{
            chai.request(server)
            .get("/room")
            .end((err,response)=>{
                response.should.have.status(200);
                response.body.should.be.a('array');
           
            })
            done();
        })
        it('it should not Get all the rooms',(done)=>{
            chai.request(server)
            .get("/romms")
            .end((err,response)=>{
                response.should.have.status(404);
            
            })
            done();
        })
    
    })
})