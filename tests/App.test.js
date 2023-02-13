/**
 * @jest-environment jsdom
 */

import React from 'react';
import { cleanup, render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from '../src/components/admin/Pagination';

afterEach(cleanup);

describe('Pagination component', () => {
    const items = [
        {
            name: 'Instance 1', id: '1', type: 't2.micro', state: 'running', az: 'us-west-1a', public_ip: '1.1.1.1', private_ip: '10.0.0.1', monitoring: 'enabled'
        },
        {
            name: 'Instance 2', id: '2', type: 't2.small', state: 'stopped', az: 'us-west-1b', public_ip: '1.1.1.2', private_ip: '10.0.0.2', monitoring: 'disabled'
        },
        {
            name: 'Instance 3', id: '3', type: 't2.medium', state: 'running', az: 'us-west-1c', public_ip: '1.1.1.3', private_ip: '10.0.0.3', monitoring: 'enabled'
        },
    ];

    it('renders correctly with default values', () => {
        const { getByText } = render(
            <Pagination itemsPerPage={2} page={0} items={items} setPage={() => {}} handleSort={() => {}} />
        );
        expect(getByText('Instance 1')).toBeInTheDocument();
        expect(getByText('Instance 2')).toBeInTheDocument();
        expect(screen.queryByText('Previous')).toBeNull();
        expect(getByText('Next')).toBeEnabled();
    });

    it('handles sorting correctly', () => {
        const { getByText } = render(
            <Pagination itemsPerPage={2} page={0} items={items} setPage={() => {}} handleSort={() => {}} />
        );
        const header = getByText('Name');
        fireEvent.click(header);

        expect(getByText('Instance 1')).toBeInTheDocument();
        expect(getByText('Instance 2')).toBeInTheDocument();
        expect(screen.queryByText('Instance 3')).toBeNull();
    });

    xit('handles pagination correctly', async () => {
        const setPage = jest.fn();
        const { getByText } = render(
            <Pagination itemsPerPage={2} page={0} items={items} setPage={setPage} handleSort={() => {}} />
        );
        const header = getByText('Name');
        fireEvent.click(header);
        const nextButton = screen.queryByText('Next');
        fireEvent.click(nextButton);

        expect(getByText('Instance 3')).toBeInTheDocument();
        expect(getByText('Previous')).toBeEnabled();
        expect(screen.queryByText('Next')).toBeNull();
        expect(setPage).toHaveBeenCalledWith(1);

    });
});
