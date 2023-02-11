import { Row } from './Admin.styled';

export default function Pagination({ itemsPerPage, page, items, setPage }) {
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

    return (
        <>
            {currentItems.map(row => {
                const {name, id, type, state, az, public_ip, private_ip, monitoring, launch_time} = row;
                const time = launch_time.toString();
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
                        <Row.Item lg>{time}</Row.Item>
                    </Row>
                )
            })}
            {page > 0 && <button onClick={() => setPage(page - 1)}>Previous</button>}
            {endIndex < items.length && <button onClick={() => setPage(page + 1)}>Next</button>}
        </>
    )
};
