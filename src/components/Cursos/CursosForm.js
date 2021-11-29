import React from "react";
import { Box, Button, TextField } from '@mui/material'

export default class CursosForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

            nome: this.props.nome || "",
            grau: "",
            serieInicial: "",
            serieFinal: "",
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
            grau: this.state.grau,
            serieInicial: this.state.serieInicial,
            serieFinal: this.state.serieFinal,
        }
        this.props.action(cursos)
    }

    render() {
        return <form onSubmit={this.handleSubmit} sx={{ m: 1, minWidth: '120' }}>
            <Box sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}/*display='flex' flexDirection="column"*/>
                <TextField type="number" required variant="standard" name="codigo" label="Codigo" onChange={this.handleChange} value={this.state.codigo}></TextField>
                <TextField type="text" required variant="standard" name="nome" label="Nome do Curso" onChange={this.handleChange} value={this.state.nome}></TextField>
                <TextField type="number" required variant="standard" name="grau" label="Grau" onChange={this.handleChange} value={this.state.grau}></TextField>
                <TextField type="number" variant="standard" name="serieInicial" label="Serie Inicial" onChange={this.handleChange} value={this.state.serieInicial}></TextField>
                <TextField type="number" variant="standard" name="serieFinal" label="Serie Final" onChange={this.handleChange} value={this.state.serieFinal}></TextField>
                <Button type="submit" name="confirm" >Confirmar</Button>
            </Box>
        </form>
    }
}