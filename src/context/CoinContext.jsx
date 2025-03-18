import { createContext, useEffect, useState } from "react";

const CoinContext = createContext(); // No named export

const CoinContextProvider = ({ children }) => {
    const [allCoin, setALLCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$",
    });

    const fetchAllCoin = async () => {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                "x-cg-demo-api-key": "CG-zY1gRmZyGv4HfqDyTF9eSHpH",
            },
        };

        try {
            const res = await fetch(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
                options
            );
            const data = await res.json();
            setALLCoin(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchAllCoin();
    }, [currency]);

    return (
        <CoinContext.Provider value={{ allCoin, currency, setCurrency }}>
            {children}
        </CoinContext.Provider>
    );
};

export { CoinContext }; // Named export for useContext
export default CoinContextProvider; // Default export for provider
