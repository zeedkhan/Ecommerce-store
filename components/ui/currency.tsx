"use client";

import {useEffect, useState} from "react";

export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

interface CurrencyProps {
    value?: string | number;

}
const Currency : React.FC<CurrencyProps> = ({ value }) => {
    const [mounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (

        <div className="font-semibold">
            {formatter.format(Number(value))}
        </div>
    );
}

export default Currency;