'use client';
import React, {useEffect, useState} from 'react';
import {getAllNails} from "@/clients/sellingClient";

type NailsForSale = {
    id: string;
    style: string;
    theme: string;
    color: string;
    size: string;
    priceCents: number;
    qty: number;
};

const formatPrice = (cents: number) => {
    return (cents / 100).toLocaleString(undefined, {style: 'currency', currency: 'USD'});
}

const NailsForSaleTable = () => {

    const [rows, setRows] = useState<NailsForSale[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [newNailsModal, setNewNailsModal] = useState<boolean>(false);
    const [form, setForm] = useState({
        style: "",
        theme: "",
        color: "",
        size: "",
        priceCents: "",
        qty: ""
    })

    const handleGroupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setForm(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleAddNewNailsButton = () => {
        setNewNailsModal(!newNailsModal)
    }

    useEffect(() => {
        getAllNails().then(setRows).catch(event => setError(event.message));
    }, []);

    if (error) return <div role="alert">Failed to load nails</div>
    // if (!rows) return <div role="status">Loading</div>;

    return (
        <>
            <table role="table"
                   aria-label="currentNailsForSaleTable"
                   className="border-separate border-spacing-x-6 border-2">
                <thead
                    aria-label="Table Header">
                <tr>
                    <th>Style</th>
                    <th>Theme</th>
                    <th>Color</th>
                    <th>Size</th>
                    <th>Price</th>
                    <th>Qty</th>
                </tr>
                </thead>
                <tbody>
                {rows?.map(r => (
                    <tr key={r.id}>
                        <td>{r.style}</td>
                        <td>{r.theme}</td>
                        <td>{r.color}</td>
                        <td>{r.size}</td>
                        <td>{formatPrice(r.priceCents)}</td>
                        <td>{r.qty}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button
                aria-label={"NewNailsButton"}
                onClick={handleAddNewNailsButton}
            >Add New Nails
            </button>
            {newNailsModal === true &&
                <>
                    <div className={"flex flex-col space-y-4 text-black"}>
                        <input name={"style"}
                               placeholder={"Style"}
                               onChange={handleGroupChange}
                               value={form.style}
                        >
                        </input>
                        <input name={"theme"}
                               placeholder={"Theme"}
                               onChange={handleGroupChange}
                               value={form.theme}
                        >
                        </input>
                        <input name = {"color"}
                               placeholder={"Color"}
                               onChange={handleGroupChange}
                               value={form.color}
                        >
                        </input>
                        <input name={"size"}
                               placeholder={"Size"}
                               onChange={handleGroupChange}
                               value={form.size}
                        >
                        </input>
                        <input name={"priceCents"}
                               placeholder={"PriceInCents"}
                               onChange={handleGroupChange}
                               value={form.priceCents}
                        >
                        </input>
                        <input name={"qty"}
                               placeholder={"Quantity"}
                               onChange={handleGroupChange}
                               value={form.qty}
                        >
                        </input>
                    </div>
                </>}
        </>
    )
}
export default NailsForSaleTable;