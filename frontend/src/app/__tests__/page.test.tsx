import {render, screen} from "@testing-library/react";
import Home from "../page";
import {describe, expect, it, vi} from "vitest";
import userEvent from '@testing-library/user-event';

const renderPage = () => {
    render(<Home/>)
}

describe('Main landing page', () => {
    it("should render the main landing page", () => {
        renderPage()
    });
    it('should display the global header', () => {
        renderPage()

        const mainPageHeaderDiv = screen.getByLabelText("mainPageHeaderDiv")
        expect(mainPageHeaderDiv).toBeInTheDocument()
    });
});