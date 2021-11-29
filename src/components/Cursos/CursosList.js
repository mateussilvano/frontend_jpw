import React from "react";
import CursosItem from "./CursosItem";
import { Table, TableRow, TableHead, TableBody, TableCell } from '@mui/material'

export default class CursosList extends React.Component {
    render() {
        if (this.props.list.length === 0) return <p>Não há Cursos cadastrados</p>

        let cursosList = this.props.list.map(item => {
            return <CursosItem cursos={item} key={item._id}
                delete={() => { this.props.deleteRequest(item._id) }}
                edit={(user) => { this.props.putRequest(item._id, user) }}></CursosItem>

        })

        return <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Codigo</TableCell>
                    <TableCell>Nome</TableCell>
                    <TableCell>Ações</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {cursosList}
            </TableBody>
        </Table>
    }
}