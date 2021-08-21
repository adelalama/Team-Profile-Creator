const Manager = require('../lib/Manager');
 
test('creates an Manager object', () => {
    const manager = new Manager('Alejandro', 7, 'alej@email.com', 1);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Alejandro', 7, 'alej@email.com');

    expect(manager.getRole()).toEqual("Manager");
}); 