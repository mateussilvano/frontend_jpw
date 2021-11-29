import React from "react";
import CursosForm from "./CursosForm";
import { Button, TableRow, TableCell } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export default class CursosItem extends React.Component {

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
        let form = this.state.isUpdating ? <TableRow><TableCell colSpan={3}><CursosForm codigo={this.props.cursos.codigo} action={this.confirm}></CursosForm></TableCell></TableRow> : null

        let buttonDelete = <Button type="button" variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={this.handleDelete}>Deletar</Button>
        let buttonEdit = <Button type="button" variant="outlined" startIcon={<EditOutlinedIcon />} onClick={this.setUpdateTrigger}>Editar</Button>
        let buttonContainer = <span>{buttonEdit} {buttonDelete}</span>

        return <>
            <TableRow>
                <TableCell>{this.props.cursos.codigo}</TableCell>
                <TableCell>{this.props.cursos.nome}</TableCell>
                <TableCell>{buttonContainer}</TableCell>
            </TableRow>
            {form}
        </>
    }
}