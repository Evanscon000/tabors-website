"use client";
import {useState} from "react";
import NailsForSaleTable from "@/app/selling/components/NailsForSaleTable";

const NailsForSale = () => {
    const [tableOpen, setTableOpen] = useState<boolean>(false)

    const handleViewNailsForSaleClick = () => {
        setTableOpen(!tableOpen)
    }

    return (
        <div>
            <button
                onClick={handleViewNailsForSaleClick}
                aria-label="currentNailsForSaleButton"
            >Click to view nails for sale
            </button>
            {tableOpen &&
                <NailsForSaleTable/>}
        </div>
    )
}

export default NailsForSale