import { createContext } from "react";

export const CoinContext =createContext();
const CoinContextProvidor =(props)=>{
    const contextValue={}
    return(
        <CoinContext.Providor value={contextValue}>
            {props.children}
        </CoinContext.Providor>
    )
}
export default CoinContextProvidor;