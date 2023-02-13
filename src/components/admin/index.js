import { useState } from 'react';
import { fakeInstances } from 'utils/fakeDataGenerator';
import Pagination from './Pagination';
import {
    Wrapper,
    Nav,
    Title,
    Button,
    List,
} from './Admin.styled';

export default function Admin({signOut, username}) {
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
            <Nav>
                <Nav.Text>Logged in as: {username}</Nav.Text>
                <Button onClick={signOut}>Sign out</Button>
            </Nav>
            <Title>EC2 Instances</Title>
            <List>
                <Pagination
                    page={page}
                    setPage={setPage}
                    items={instances}
                    itemsPerPage={12}
                    handleSort={handleSort}
                />
            </List>
        </Wrapper>
    )
}
