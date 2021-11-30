import React from "react";
import { Box, Button, TextField } from '@mui/material'

export default class MateriasForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            codigo: this.props.codigo ||"",
            nome: this.props.nome || "",
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleSubmit = (event) => {
        event.preventDefault()
        let cursos = {
            codigo: this.state.codigo,
            nome: this.state.nome,
        }
        this.props.action(cursos)
    }

    render() {
        return <form onSubmit={this.handleSubmit} sx={{ m: 1, minWidth: '120' }}>
            <Box sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}/*display='flex' flexDirection="column"*/>
                <TextField type="number" required variant="standard" name="codigo" label="Código" onChange={this.handleChange} value={this.state.codigo}></TextField>
                <TextField type="text" required variant="standard" name="nome" label="Nome da Matéria" onChange={this.handleChange} value={this.state.nome}></TextField>
                <Button type="submit" name="confirm" >Confirmar</Button>
            </Box>
        </form>
    }
}