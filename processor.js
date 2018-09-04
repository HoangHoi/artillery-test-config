module.exports = {
    generateRandomData
};

const Faker = require('faker/locale/vi');

function generateRandomData(userContext, events, done) {
    const name = `${Faker.name.firstName()} ${Faker.name.lastName()}`;
    const sentence = Faker.lorem.sentence();
    userContext.vars.name = name;
    userContext.vars.sentence = sentence;
    return done();
}
