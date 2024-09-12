import { useState } from "react"
import {Data} from './Data';
    const tableItem=Data.map(Order =>
            <tr>
                <td>{Order.orderId}</td>
                <td>{Order.product}</td>
                <td>{Order.customer}</td>
                <td>{Order.date[0]}{Order.date[1]}</td>
                <td>{Order.Status}</td>
                <td>{Order.Total}</td>
            </tr>
    )

const Table=()=>{
    return(
        <>
        <table>
                <tr>
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