import { useState } from 'react';
import { fakeInstances } from 'utils/fakeDataGenerator';
import {
    Wrapper,
    Header,
    List,
    Row
} from './Admin.styled';

export default function Admin() {
    const [instances, setInstances] = useState(fakeInstances);
    const [sortOrder, setSortOrder] = useState({
        name: 1,
        id: 1,
        type: 1,
        state: 1,
        az: 1,
        public_ip: 1,
        private_ip: 1,
        monitoring: 1,
    });

    const handleSort = (attr) => {
        const sorted = [...instances].sort((a, b) => {
            if (sortOrder[attr] === 1) {
                if (a[attr] > b[attr]) return 1;
                if (a[attr] < b[attr]) return -1;
            } else {
                if (a[attr] < b[attr]) return 1;
                if (a[attr] > b[attr]) return -1;
            }
            return 0;
        })

        setSortOrder({...sortOrder, [attr]: sortOrder[attr] * -1});
        setInstances([...sorted]);
    }

    return (
        <Wrapper>
            <Header>
                <Header.Item onClick={() => handleSort('name')}>Name</Header.Item>
                <Header.Item lg onClick={() => handleSort('id')}>Instance ID</Header.Item>
                <Header.Item onClick={() => handleSort('type')}>Instance Type</Header.Item>
                <Header.Item onClick={() => handleSort('state')}>State</Header.Item>
                <Header.Item onClick={() => handleSort('az')}>Availability Zone</Header.Item>
                <Header.Item onClick={() => handleSort('public_ip')}>Public IP</Header.Item>
                <Header.Item onClick={() => handleSort('private_ip')}>Private IP</Header.Item>
                <Header.Item onClick={() => handleSort('monitoring')}>Monitoring</Header.Item>
            </Header>
            <List>
                {instances.map(row => {
                    const {name, id, type, state, az, public_ip, private_ip, monitoring} = row;
                    return (
                        <Row key={id}>
                            <Row.Item>{name}</Row.Item>
                            <Row.Item lg>{id}</Row.Item>
                            <Row.Item>{type}</Row.Item>
                            <Row.Item>{state}</Row.Item>
                            <Row.Item>{az}</Row.Item>
                            <Row.Item>{public_ip}</Row.Item>
                            <Row.Item>{private_ip}</Row.Item>
                            <Row.Item>{monitoring}</Row.Item>
                        </Row>
                    )
                })}
            </List>
        </Wrapper>
    )
}
