
const app = require('../app');
const request = require('supertest');
jest.setTimeout(1000000)

//const faker = require('faker');

describe(' adding auhtor ', function () {

    describe('adding author that is not exist in DB  ', () => {
        test('should response with Status 200', async () => {

            //    var author_firstName = faker.name.findName().split(' ').slice(0, 1).join(' ');
            //  var author_last = faker.name.findName().split(' ').slice(0, 1).join(' ');
            //**** need some code  */
            const response = await request(app).post('/authors/add-author').send(
                {
                    first_name: 'grg',
                    last_name: 'zzz'
                }

            )
            expect(response.statusCode).toBe(200)
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))


        })


    })
    // should fix Joi and Validators
    describe('a missing first name or last name or both ', () => {
        test("should return a 400 status code", async () => {
            const bodies = [
                { first_name: "aaa" },
                { last_name: "ccc" },
                {}
            ]
            for (const body of bodies) {
                const response = await request(app).post("/authors/add-author").send(body)
                expect(response.statusCode).toBe(400)
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

/*
describe(' get auhtor details ', function () {

    describe('get exixted authoer ', () => {
        test('should response with Status 200 and Return Json contains the deatils', async () => {

            const response = await request(app).get('/authors/get-author/:id').send()


            expect(response.statusCode).toBe(200)
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))


        })
    })

    describe('requisting not existed ID  ', () => {
        test('should response with Status 404 ', async () => {

            const response = await request(app).get('/authors/get-author/:id').send()

            expect(response.statusCode).toBe(404)
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))


        })
    })
});

*/