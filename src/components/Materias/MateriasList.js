import React from "react";
import MateriasItem from "./MateriasItem";
import { Table, TableRow, TableHead, TableBody, TableCell } from '@mui/material'

export default class MateriasList extends React.Component {
    render() {
        if (this.props.list.length === 0) return <p>Não há Materias cadastrada</p>

        let materiasList = this.props.list.map(item => {
            return <MateriasItem materias={item} key={item._id}
                delete={() => { this.props.deleteRequest(item._id) }}
                edit={(user) => { this.props.putRequest(item._id, user) }}></MateriasItem>

        })

        return <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Código</TableCell>
                    <TableCell>Nome</TableCell>
                    <TableCell>Ações</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {materiasList}
            </TableBody>
        </Table>
    }
}