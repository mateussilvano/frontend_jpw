import React from "react";
import TurmaForm from "./TurmaForm";
import { Button, TableRow, TableCell } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export default class TurmaItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isUpdating: false
        }
    }

    setUpdateTrigger = () => {
        this.setState({
            isUpdating: !this.state.isUpdating
        })
    }

    handleDelete = () => {
        this.props.delete()
    }

    confirm = (user) => {
        this.props.edit(user)
        this.setUpdateTrigger()
    }

    render() {
        let form = this.state.isUpdating ? <TableRow><TableCell colSpan={3}><TurmaForm curso={this.props.turma.curso} action={this.confirm}></TurmaForm></TableCell></TableRow> : null

        let buttonDelete = <Button type="button" variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={this.handleDelete}>Deletar</Button>
        let buttonEdit = <Button type="button" variant="outlined" startIcon={<EditOutlinedIcon />} onClick={this.setUpdateTrigger}>Editar</Button>
        let buttonContainer = <span>{buttonEdit} {buttonDelete}</span>

        return <>
            <TableRow>
                <TableCell>{this.props.turma.turma}</TableCell>
                <TableCell>{this.props.turma.serie}</TableCell>
                <TableCell>{buttonContainer}</TableCell>
            </TableRow>
            {form}
        </>
    }
}