import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import * as sellingClient from '@/clients/sellingClient';
import NailsForSale from '../components/NailsForSale';

const sample = [
    { id: 'n1', style: 'Coffin', theme: 'Halloween Skull', color: 'Black', size: 'M', priceCents: 3500, qty: 5 },
    { id: 'n2', style: 'Almond', theme: 'Christmas tree',  color: 'Blue',  size: 'L', priceCents: 4000, qty: 5 },
];

beforeEach(() => {
    vi.restoreAllMocks();
    vi.spyOn(sellingClient, 'getNailsForTabor').mockResolvedValue(sample as any);
});

describe('Nails for sale page', () => {
    it('renders the page', () => {
        render(<NailsForSale />);
    });

    it('shows the “current nails for sale” button', () => {
        render(<NailsForSale />);
        const btn = screen.getByLabelText('currentNailsForSaleButton');
        expect(btn).toBeVisible();
    });
});
