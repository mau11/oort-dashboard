import { faker } from '@faker-js/faker/locale/en_US';

export const fakeInstances = [];

function createFakeInstance() {
    const instanceTypes = [
        't1.micro','t2.nano','t2.micro','t2.small','t2.medium','t2.large','t2.xlarge','t2.2xlarge','t3.nano','t3.micro','t3.small','t3.medium','t3.large','t3.xlarge','t3.2xlarge','a1.medium','a1.large','a1.xlarge','a1.2xlarge','a1.4xlarge','a1.metal','c1.medium','c1.xlarge','c3.large','c3.xlarge','c3.2xlarge','c3.4xlarge','c3.8xlarge','c4.large','c4.xlarge','c4.2xlarge','c4.4xlarge','c4.8xlarge','c5.large','c5.xlarge','c5.2xlarge','c5.4xlarge','c5.9xlarge','c5.12xlarge','c5.18xlarge','c5.24xlarge','c5.metal','c5a.large','c5a.xlarge','c5a.2xlarge','c5a.4xlarge','c5a.8xlarge','c5a.12xlarge','c5a.16xlarge','c5a.24xlarge'
    ];

    const selectRandom = (arr) => {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    return {
        name: faker.word.noun(10),
        id: faker.internet.password(19, false, /[a-z0-9]/, 'i-0'),
        type: selectRandom(instanceTypes),
        state: selectRandom(['running', 'stopping', 'terminated']),
        az: selectRandom(['us-east-1a', 'us-east-1e', 'us-west-2c', 'us-west-2d']),
        public_ip: faker.internet.ipv4(),
        private_ip: '10.20.30.40',
        monitoring: selectRandom(['enabled', 'disabled']),
        launch_time: faker.date.past(5, '2020-01-01T00:00:00.000Z'),
    };
}

Array.from({ length: 125 }).forEach(() => {
    fakeInstances.push(createFakeInstance());
});
