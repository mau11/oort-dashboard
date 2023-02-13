import {
    Header,
    Body,
    Row,
    Button,
} from './Admin.styled';

export default function Pagination({
    itemsPerPage,
    page,
    items,
    setPage,
    handleSort,
}) {
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

    return (
        <>
            <Body>
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
                {currentItems.map((row, i) => {
                    const {name, id, type, state, az, public_ip, private_ip, monitoring} = row;
                    return (
                        <Row key={id} color={i % 2}>
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
            </Body>
            <Button.Wrapper first={page === 0} last={page === endIndex}>
                {page > 0 && <Button onClick={() => setPage(page - 1)}>Previous</Button>}
                {endIndex < items.length && <Button onClick={() => setPage(page + 1)}>Next</Button>}
            </Button.Wrapper>
        </>
    )
};
