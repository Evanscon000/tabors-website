import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SellingPage from "../page";


const renderPage = () => {
    render(<SellingPage/>)
}

describe("Selling Page", () => {
    it("should render selling page", () => {
        renderPage()
    });
});
