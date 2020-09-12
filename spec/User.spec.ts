import App from '@providers/App';
import EApp from '@providers/Express';
import supertest from 'supertest';
import * as http_status_codes from 'http-status-codes';
import { Response, SuperTest, Test } from 'supertest';
import { NOTFOUND } from 'dns';

describe('Users Routes', () => {

    let agent: SuperTest<Test>;

    beforeAll((done) => {
        agent = supertest.agent(EApp.express);
        done();
    });

    describe('POST:/api/v1/parse', () => {
        it('should parse v1 user details', (done) => {
            agent.post("/api/v1/parse").send({"data":"JOHN0000MICHAEL0009994567"}).end((err: Error, res: Response) => {
                expect(res.status).toBe(http_status_codes.OK);
                done();
            });
        });        
    });

    describe('POST:/api/v2/parse', () => {
        it('should parse v2 user details', (done) => {
            agent.post("/api/v2/parse").send({"data":"JOHN0000MICHAEL0009994567"}).end((err: Error, res: Response) => {
                expect(res.status).toBe(http_status_codes.OK);
                done();
            });
        });        
    });
});