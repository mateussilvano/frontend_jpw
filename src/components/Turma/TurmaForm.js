import React from "react";
import { Box, Button, TextField } from '@mui/material'

export default class TurmaForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

            curso: this.props.curso || "", //seleciona o cursp
            serie: "",
            turma: "",
            sala: "",
            limiteAlunos: "",
            turno: "",

        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleSubmit = (event) => {
        event.preventDefault()
        let turma = {
            curso: this.state.curso,
            serie: this.state.serie,
            turma: this.state.turma,
            sala: this.state.sala,
            limiteAlunos: this.state.limiteAlunos,
            turno: this.state.turno,
        }
        this.props.action(turma)
    }

    render() {
        return <form onSubmit={this.handleSubmit} sx={{ m: 1, minWidth: '120' }}>
            <Box sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}/*display='flex' flexDirection="column"*/>
                <TextField type="text" required variant="standard" name="curso" label="Curso" onChange={this.handleChange} value={this.state.curso}></TextField>
                <TextField type="number" required variant="standard" name="serie" label="Serie" onChange={this.handleChange} value={this.state.serie}></TextField>
                <TextField type="number" required variant="standard" name="turma" label="Turma" onChange={this.handleChange} value={this.state.turma}></TextField>
                <TextField type="number" variant="standard" name="sala" label="Sala" onChange={this.handleChange} value={this.state.sala}></TextField>
                <TextField type="number" variant="standard" name="limiteAlunos" label="Limite de Alunos" onChange={this.handleChange} value={this.state.limiteAlunos}></TextField>
                <TextField type="text" variant="standard" name="turno" label="Turno" onChange={this.handleChange} value={this.state.turno}></TextField>
                <Button type="submit" name="confirm" >Confirmar</Button>
            </Box>
        </form>
    }
}