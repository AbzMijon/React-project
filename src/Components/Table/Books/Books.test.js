import React from 'react';
import {render,  screen, fireEvent, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom';

import Books from './Books';

describe('book unit testing', () => {
    test('is book exists', () => {
        render(<Books/>);
        const helloWorldElement = screen.getByText(/Hello world testing/i)
        expect(helloWorldElement).toBeInTheDocument();
    })
})