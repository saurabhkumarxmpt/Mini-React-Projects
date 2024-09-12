import { useState } from "react";
import { Data } from './Data';
import Chip from '@mui/material/Chip';

const Table = () => {
    const getStatusChip = (status) => {
        if (status === "Paid") {
            return <Chip label="Paid" color="primary" />;
        } else if (status === "Pending") {
            return <Chip label="Pending" color="warning" />;
        } else if (status === "Cancelled") {
            return <Chip label="Cancelled" color="error" />;
        } else if (status === "Processing") {
            return <Chip label="Processing" color="info" />;
        } else {
            return <Chip label="Unknown" color="default" />;
        }
    };

    const tableItem = Data.map((Order) => (
        <tr key={Order.orderId} className="border-b">
            <td className="px-4 py-2">{Order.orderId}</td>a
            <td className="px-4 py-2">{Order.product}</td>
            <td className="px-4 py-2">{Order.customer}</td>
            <td className="px-4 py-2">{Order.date[0]} {Order.date[1]}</td>
            <td className="px-4 py-2">{getStatusChip(Order.Status)}</td>
            <td className="px-4 py-2">{Order.Total}</td>
        </tr>
    ));

    return (
        <table className="w-full text-left bg-white shadow-md">
            <thead className="bg-white border-b">
                <tr className="text-sm font-semibold">
                    <th className="px-4 py-2">Order</th>
                    <th className="px-4 py-2">Product</th>
                    <th className="px-4 py-2">Customer</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Total</th>
                </tr>
            </thead>
            <tbody>
                {tableItem}
            </tbody>
        </table>
    );
};

export default Table;
