const chai = require('chai');
chai.should();
const request = require('supertest-as-promised');
const app = require('../server').server;

describe('main server', function() {
    it('is running', () =>
        request(app)
            .get('/')
            .expect(200)
    );

    it('get count', () =>
        request(app)
            .get('/api/count')
            .expect(200)
            .then((res) => res.body.should.be.a.equal(0))
    );

    it('increment count', () =>
        request(app)
            .post('/api/count')
            .expect(200)
            .then((res) => res.body.should.be.a.equal(1))
    );
});
