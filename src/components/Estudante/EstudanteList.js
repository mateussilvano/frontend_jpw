import React from "react";
import EstudanteItem from "./EstudanteItem";
import { Table, TableRow, TableHead, TableBody, TableCell } from '@mui/material'

export default class EstudanteList extends React.Component {
    render() {
        if (this.props.list.length === 0) return <p>Não há Estudante cadastrados</p>

        let estudanteList = this.props.list.map(item => {
            return <EstudanteItem estudante={item} key={item._id}
                delete={() => { this.props.deleteRequest(item._id) }}
                edit={(user) => { this.props.putRequest(item._id, user) }}></EstudanteItem>

        })

        return <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Nome</TableCell>
                    <TableCell>E-mail</TableCell>
                    <TableCell>Ações</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {estudanteList}
            </TableBody>
        </Table>
    }
}