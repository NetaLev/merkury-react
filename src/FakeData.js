import _ from 'lodash'
import faker from 'faker'
import { activitySubjectType, activityActionType } from './dataTypes';

const getRandomDate = (suffix) => {
    return faker.random.arrayElement(
        [
            `${faker.random.number({ min: 1, max: 6 })} days ${suffix}`,
            `${faker.random.number({ min: 1, max: 23 })} hours ${suffix}`,
            `${faker.random.number({ min: 1, max: 59 })} minutes ${suffix}`
        ]);
};

const tasks = _.times(3, () => ({
    key: faker.random.uuid(),
    title: faker.lorem.sentence(),
    date: getRandomDate('left')
}));

const messages = _.times(3, () => ({
    key: faker.random.uuid(),
    sender: {
        name: faker.name.findName(),
        avatar: faker.image.avatar()
    },
    message: faker.lorem.sentence(),
    date: getRandomDate('ago')
}))

const activities = _.times(4, () => ({
    key: faker.random.uuid(),
    user: {
        name: faker.name.findName(),
        avatar: faker.image.avatar()
    },
    subject: faker.random.arrayElement([activitySubjectType.PROJECT, activitySubjectType.TASK]),
    action: faker.random.arrayElement([activityActionType.ADD, activityActionType.COMMENT, activityActionType.COMPLETE]),
    date: getRandomDate('ago')
}))

const sales = {
    data: [
        { name: 'Websites', value: faker.random.number({ min: 100, max: 500 }) },
        { name: 'Logo', value: faker.random.number({ min: 100, max: 500 }) },
        { name: 'Social Media', value: faker.random.number({ min: 100, max: 500 }) },
        { name: 'Adwords', value: faker.random.number({ min: 100, max: 500 }) },
        { name: 'E-Commerce', value: faker.random.number({ min: 100, max: 500 }) }
    ]
}

const report = {
    data: [
        { pv: 2400, amt: 2400 },
        { pv: 1398, amt: 2210 },
        { pv: 9800, amt: 2290 },
        { pv: 3908, amt: 2000 },
        { pv: 4800, amt: 2181 },
        { pv: 3800, amt: 2500 },
        { pv: 4300, amt: 2100 }
    ]
}

export const pageHomeData = {
    'tasks': {
        'activeCount': faker.random.number({ min: 1, max: 9 }),
        'data': tasks
    },
    'messages': {
        'activeCount': faker.random.number({ min: 1, max: 9 }),
        'data': messages
    },
    'activities': {
        'activeCount': faker.random.number({ min: 1, max: 9 }),
        'data': activities
    },
    sales,
    report
};

