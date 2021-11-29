import React from "react";
import {Box, Button, TextField} from '@mui/material'

export default class ProfessorForm extends React.Component{

    constructor(props){
        super (props)

        this.state = {
            
            nome: this.props.nome || "",
            email: "",
            senha: "",
            dtNascimento: "",
            cpf: "",
            telefone: "",
            nacionalidade: "",
            sexo: "",
            função: "",
            escolaridade: ""

        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let professor = {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha,
            dtNascimento: this.state.dtNascimento,
            cpf: this.state.cpf,
            telefone: this.state.telefone,
            nacionalidade: this.state.nacionalidade,
            sexo: this.state.sexo,
            função: this.state.função,
            escolaridade: this.state.escolaridade
        }
        this.props.action(professor)
    }

    render(){
        return <form onSubmit={this.handleSubmit} sx={{ m: 1, minWidth: '120' }}>
            <Box sx={{'& > :not(style)': { m: 1, width: '25ch' },}}/*display='flex' flexDirection="column"*/>
            <TextField type="text" required variant="standard" name="nome" label="Nome" onChange={this.handleChange} value={this.state.nome}></TextField>
            <TextField type="text" required variant="standard" name="email" label="E-mail" onChange={this.handleChange} value={this.state.email}></TextField>
            <TextField type="password" required variant="standard" name="senha" label="Senha" onChange={this.handleChange} value={this.state.senha}></TextField>
            <TextField type="number" required variant="standard" name="dtNascimento" label="Data de Nascimento" onChange={this.handleChange} value={this.state.dtNascimento}></TextField>
            <TextField type="number" required variant="standard" name="cpf" label="CPF" onChange={this.handleChange} value={this.state.cpf}></TextField>
            <TextField type="number" variant="standard" name="telefone" label="Telefone" onChange={this.handleChange} value={this.state.telefone}></TextField>
            <TextField type="text" variant="standard" name="nacionalidade" label="Nacionalidade" onChange={this.handleChange} value={this.state.nacionalidade}></TextField>
            <TextField type="text" variant="standard" name="sexo" label="Sexo" onChange={this.handleChange} value={this.state.sexo}></TextField>
            <TextField type="text" required variant="standard" name="função" label="Função" onChange={this.handleChange} value={this.state.função}></TextField>
            <TextField type="text" required variant="standard" name="escolaridade" label="Escolaridade" onChange={this.handleChange} value={this.state.escolaridade}></TextField>
            <Button type="submit" name="confirm" >Confirmar</Button>
            </Box>
        </form>
    }
}