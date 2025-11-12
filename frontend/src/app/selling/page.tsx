import NailsForSale from "./components/NailsForSale";
import PageHeader from "@/app/components/PageHeader";

export default function Selling() {
    return (
        <>
            <PageHeader/>
        <div>
            <h1>Welcome to our selling page below you will find photos of some of Tabes favorite nails she has done.
            If you are curious whats currently for sale just click the button below</h1>
            <NailsForSale/>
        </div>
        </>
    )
}