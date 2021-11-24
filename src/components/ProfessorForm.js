import React from "react";

export default class ProfessorForm extends React.Component{

    constructor(props){
        super (props)

        this.state = {
            codigo: "",
            nome: "",
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
            codigo: this.state.codigo,
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
        return <form onSubmit={this.handleSubmit}>
            <input type="number" name="codigo" placeholder="Codigo" onChange={this.handleChange} value={this.state.codigo}></input>
            <input type="text" name="nome" placeholder="Nome" onChange={this.handleChange} value={this.state.nome}></input>
            <input type="text" name="email" placeholder="E-mail" onChange={this.handleChange} value={this.state.email}></input>
            <input type="password" name="senha" placeholder="Senha" onChange={this.handleChange} value={this.state.senha}></input>
            <input type="number" name="dtNascimento" placeholder="Data de Nascimento" onChange={this.handleChange} value={this.state.dtNascimento}></input>
            <input type="number" name="cpf" placeholder="CPF" onChange={this.handleChange} value={this.state.cpf}></input>
            <input type="number" name="telefone" placeholder="Telefone" onChange={this.handleChange} value={this.state.telefone}></input>
            <input type="text" name="nacionalidade" placeholder="Nacionalidade" onChange={this.handleChange} value={this.state.nacionalidade}></input>
            <input type="text" name="sexo" placeholder="Sexo" onChange={this.handleChange} value={this.state.sexo}></input>
            <input type="text" name="função" placeholder="Função" onChange={this.handleChange} value={this.state.função}></input>
            <input type="text" name="escolaridade" placeholder="Escolaridade" onChange={this.handleChange} value={this.state.escolaridade}></input>
            <input type="submit" name="confirm" value="Confirmar"></input>
        </form>
    }
}

