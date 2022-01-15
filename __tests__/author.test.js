
const app = require('../app');
const request = require('supertest');
jest.setTimeout(1000000);

const first_name = 'Qusai';
const last_name = 'Tamer';

describe(' adding auhtor ', function async() {

    describe('adding author that is not exist in DB  ', () => {

        test('should response with Status 200', async () => {

            const response = await request(app).post('/authors/add-author').send(
                {
                    first_name,
                    last_name
                }

            )
            expect(response.statusCode).toBe(200)
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))

        })


    })
 
    describe('a  missing first name or last name or both, first name or last name less than 1 or more than 10 characters', () => {
        test("should return a 400 status code", async () => {
            const bodies = [
                { first_name: "aaa" },
                { last_name: "ccc" },
                {},
                {first_name: "",   last_name: "aa" },
                {first_name: "a1",last_name: "12345678910" }
            ]
            for (const body of bodies) {
                const response = await request(app).post("/authors/add-author").send(body)
                expect(response.statusCode).toBe(400);
            
                
            }
            
        })
    })
 

});


describe(' get auhtors  ', function () {

    describe('getting all of auhtors ', () => {
        test('should response with Status 200 and Return Json Header', async () => {

            const response = await request(app).get('/authors/get-authors').send()
            expect(response.statusCode).toBe(200)
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))


        })



    })

});
 
 