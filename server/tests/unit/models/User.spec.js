const User = require('../../../model/User');
const Habit = require('../../../model/Habit');

jest.mock('../../../model/Habit');

const pg = require('pg');
jest.mock('pg');

const db = require('../../../db/db');

const testUser = {
    user_id: 'testing',
    username: 'test_usr',
    email: 'test:test.com',
    usr_password: '123'
}
describe('Habit', () =>{
    beforeEach(() => jest.clearAllMocks())
    
    afterAll(() => jest.resetAllMocks())

    describe('all', ()=>{
        test('resolves all users on success', async () =>{
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [{}, {}, {}]})
            const result = await User.all;
            expect(result).toHaveLength(3)
        })
    })

    describe('exists', ()=>{
        test('resolves user if it exists in db', async () =>{
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: testUser})
            const result = await User.exists(testUser.username)
            expect(result.rows).toHaveProperty('user_id', 'testing');
        })
    })

    describe('register', ()=>{
        test('resolves all users', async () =>{
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [testUser]})
            const result = await User.register(testUser.username, testUser.email, testUser.usr_password)
            expect(result).toHaveProperty('user_id', 'testing');
        })
    })

    describe('findByEmail', ()=>{
        test('resolves all users', async () =>{
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [testUser]})
            const result = await User.register(testUser.username, testUser.email, testUser.usr_password)
            expect(result).toHaveProperty('user_id', 'testing');
        })
    })
})