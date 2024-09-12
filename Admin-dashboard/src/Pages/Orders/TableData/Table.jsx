import { useState } from "react"
import {Data} from './Data';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
    const tableItem=Data.map(Order =>
            <tr className="py-[100px]">
                <td>{Order.orderId}</td>
                <td>{Order.product}</td>
                <td>{Order.customer}</td>
                <td>{Order.date[0]}{Order.date[1]}</td>
                <td><Chip label={Order.Status} color="primary" /></td>
                <td>{Order.Total}</td>
                
            </tr>
            
    )

const Table=()=>{
    return(
        <>
        <table className=" w-[1060px] text-left bg-white shadow ">
                <tr className="py-[20px]">
                    <th>order</th>
                    <th>product</th>
                    <th>customer</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Total</th>
                </tr>
                
                {tableItem}
            </table>
        </>
    )
}

export default Table