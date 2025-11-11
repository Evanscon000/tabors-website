import {render, screen} from "@testing-library/react";
import Home from "../page";
import {describe, expect, it, vi} from "vitest";
import userEvent from '@testing-library/user-event';

const renderPage = () => {
    render(<Home/>)
}

describe('Main landing page', () => {
    it("should display a button when clicked takes you to the selling page", async () => {
        renderPage()

        const link = screen.getByLabelText('link')
        const sellingButton = screen.getByLabelText("sellingButton")

        expect(link).toBeVisible();
        expect(sellingButton).toBeVisible();
        await userEvent.click(sellingButton);
    });
});