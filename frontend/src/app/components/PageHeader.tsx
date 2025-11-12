import Link from "next/link";

const PageHeader = () => {
    return (
        <div
            aria-label="mainPageHeaderDiv"
            className="bg-gray-600 h-14 px-4 flex items-center justify-between rounded-b"
        >
            <Link
                className="bg-blue-300 text-black font-bold rounded px-2"
                aria-label="headerTitle"
                href="/"
            >
                Fr333qu3ncy Nails
            </Link>
            <Link
                className="bg-blue-300 text-black font-bold rounded px-2"
                aria-label="nailsForSaleLink"
                href="/selling"
            >
                What's For Sale?
            </Link>
        </div>
    )
}

export default PageHeader;