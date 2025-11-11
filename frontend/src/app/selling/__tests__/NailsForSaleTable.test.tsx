import { render, screen, within, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import * as client from '@/app/selling/client'
import NailsForSaleTable from '@/app/selling/components/NailsForSaleTable'

const sample = [
    { id: 'n1', style: 'Coffin', theme: 'Halloween Skull', color: 'Black', size: 'M', priceCents: 3500, qty: 5 },
    { id: 'n2', style: 'Almond',  theme: 'Christmas tree',  color: 'Blue',  size: 'L', priceCents: 4000, qty: 5 },
]

beforeEach(() => {
    vi.restoreAllMocks()
    vi.spyOn(client, 'getNailsForTabor').mockResolvedValue(sample as any)
})

describe('Nails for sale table', () => {
    it('should render the nails-for-sale component', () => {
        render(<NailsForSaleTable/>)
    })

    it('should render table with headers and rows from backend data', async () => {
        render(<NailsForSaleTable/>)

        await waitFor(() => expect(screen.getByText('Coffin')).toBeInTheDocument())

        const table = screen.getByLabelText('currentNailsForSaleTable')
        const headers = within(table).getAllByRole('columnheader').map(h => h.textContent?.trim())
        expect(headers).toEqual(['Style', 'Theme', 'Color', 'Size', 'Price', 'Qty'])

        const rows = within(table).getAllByRole('row').slice(1)
        expect(rows).toHaveLength(2)
        expect(within(rows[0]).getByText('Black')).toBeInTheDocument()
        expect(within(rows[1]).getByText('Blue')).toBeInTheDocument()
    })
})
