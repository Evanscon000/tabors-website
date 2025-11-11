import { render, screen, within, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import NailsForSaleTable from "@/app/selling/components/NailsForSaleTable";

const sample = [
    {
        id: 'n1',
        style: 'Coffin',
        theme: 'Halloween Skull',
        color: 'Black',
        size: 'M',
        priceCents: 3500,
        qty: 5,
    },
    {
        id: 'n2',
        style: 'Almond',
        theme: 'Christmas tree',
        color: 'Blue',
        size: 'L',
        priceCents: 4000,
        qty: 5,
    },
];

describe('Nails-for-sale-table', () => {
    beforeEach(() => {
        vi.resetAllMocks()
    })

    it('should-render-the-nails-for-sale-component', () => {
        render(<NailsForSaleTable/>)
    });

    it('should display Tabors nails table with appropriate data to match each column from backend', async () => {
        global.fetch = vi.fn().mockResolvedValueOnce({
            ok: true,
            json: async () => sample
        } as Response)

        render(<NailsForSaleTable/>)

        await waitFor(() => expect(screen.getByText('Coffin')).toBeVisible())

        const table = screen.getByLabelText("currentNailsForSaleTable")
        const headers = within(table).getAllByRole('columnheader').map(h => h.textContent?.trim())
        expect(headers).toEqual(['Style', 'Theme', 'Color', 'Size', 'PriceCents', 'Qty'])

        const rows = within(table).getAllByRole('row').slice(1)
        expect(rows).toHaveLength(2)
        expect(within(rows[0]).getByText('Black')).toBeVisible()
    });
});