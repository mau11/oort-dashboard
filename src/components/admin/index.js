import { useState } from 'react';
import { fakeInstances } from 'utils/fakeDataGenerator';
import Pagination from './Pagination';
import {
    Wrapper,
    Header,
    List,
} from './Admin.styled';

export default function Admin() {
    const [page, setPage] = useState(0);
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
        setInstances(sorted);
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
                <Header.Item lg onClick={() => handleSort('launch_time')}>Launch Time</Header.Item>
            </Header>
            <List>
                <Pagination
                    page={page}
                    setPage={setPage}
                    items={instances}
                    itemsPerPage={10}
                />
            </List>
        </Wrapper>
    )
}
