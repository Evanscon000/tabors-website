import {beforeEach, describe, expect, vi} from "vitest";
import {render, screen} from "@testing-library/react";
import PageHeader from "@/app/components/PageHeader";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
    vi.restoreAllMocks()
})

describe('Page Header', () => {
    it("should render the page header page", () => {
        render(<PageHeader/>)
    });

    it("should display a global header when you are in Tabors Website", () => {
        render(<PageHeader/>)

        const mainPageHeaderDiv = screen.getByLabelText("mainPageHeaderDiv")
        expect(mainPageHeaderDiv).toBeInTheDocument()
    })

    it('should display the title in the global header', () => {
        render(<PageHeader/>)

        const headerTitle =  screen.getByLabelText("headerTitle")
        expect(headerTitle).toBeVisible()
    });

    it("should display a what's for sale link that can be clicked to display current nails for sale table", async () => {
        render(<PageHeader/>)

        const nailsForSaleLink = screen.getByLabelText("nailsForSaleLink")
        expect(nailsForSaleLink).toBeVisible()

    });
});