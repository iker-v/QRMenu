import { getByText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {HomePage} from '../pages/HomePage';

it("The loading message is displayed", () => {
    render(<HomePage/>)
    const message = "Loading.."
    expect(screen.getByText(message)).toBeInTheDocument()
})