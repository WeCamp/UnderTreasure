import User from '../src/js/objects/user.js'
describe('user', function () {
    // require source module

    it('should have a user class', function () {
        expect(typeof User).toBe('function');
    })

    it('should have an position object', function () {
        var defaultData = new User();
        expect(typeof defaultData.position).toBe('object')
    })
})
