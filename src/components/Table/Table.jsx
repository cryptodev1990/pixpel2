import React from "react";
import "./Table.scss"
import TableCell from './TableCell/TableCell'
import TableRow from './TableRow/TableRow'
const Table = (props) => {
    let className = 'table'
    if (props.classes) className += ` ${props.classes}`
    return (<div className={className}></div>)
}
export default {Table, TableCell, TableRow}