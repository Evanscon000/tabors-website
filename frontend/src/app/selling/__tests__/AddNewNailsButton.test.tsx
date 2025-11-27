import {describe, expect} from "vitest";
import {screen, render} from "@testing-library/react";
import NailsForSaleTable from "@/app/selling/components/NailsForSaleTable";


describe('Add New Nails Button', () => {
    it('should display a add new nails button when nails table is visible', () => {
        render(<NailsForSaleTable/>)

        const NewNailButton = screen.getByLabelText("NewNailsButton")

        expect(NewNailButton).toBeVisible()

    });

    it('should display a form when the NewNailsButton is clicked', () => {
        render(<NailsForSaleTable/>)

        const NewNailModal = screen.getByLabelText("NewNailsButton")
        expect(NewNailModal).toBeVisible()

    });
});