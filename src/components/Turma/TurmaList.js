import React from "react";
import TurmaItem from "./TurmaItem";
import { Table, TableRow, TableHead, TableBody, TableCell } from '@mui/material'

export default class TurmaList extends React.Component {
    render() {
        if (this.props.list.length === 0) return <p>Não há Turma cadastrada</p>

        let turmaList = this.props.list.map(item => {
            return <TurmaItem turma={item} key={item._id}
                delete={() => { this.props.deleteRequest(item._id) }}
                edit={(user) => { this.props.putRequest(item._id, user) }}></TurmaItem>

        })

        return <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Turma</TableCell>
                    <TableCell>serie</TableCell>
                    <TableCell>Ações</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {turmaList}
            </TableBody>
        </Table>
    }
}