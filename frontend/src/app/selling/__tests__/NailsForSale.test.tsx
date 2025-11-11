import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import NailsForSale from "../components/NailsForSale";
import userEvent from "@testing-library/user-event";

describe('Nails for sale page', () => {

    it('should display the page', () => {
        render(<NailsForSale/>)
    });

    it('should render page with a nails for sale button', async () => {
        render(<NailsForSale/>)

        const currentNailsForSaleButton = screen.getByLabelText("currentNailsForSaleButton")

        expect(currentNailsForSaleButton).toBeVisible()
    });
});