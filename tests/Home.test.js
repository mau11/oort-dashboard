/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Home from '../src/components/layout';

afterEach(cleanup);

describe('Home component', () => {
    it('renders correctly', () => {
        const { asFragment } = render(<Home />);
        expect(asFragment()).toMatchSnapshot();
    });
});


// admin
// securePW23!

// test
// Password1!
