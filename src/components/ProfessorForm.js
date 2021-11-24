import React from "react";

export default class ProfessorForm extends React.Component{

    constructor(props){
        super (props)

        this.state = {
            nome: " ",
            email: " ",
            senha: " ",
            dtNascimento: " ",
            cpf: " ",
            telefone: " ",
            nacionalidade: " ",
            sexo: " ",
            função: " ",
            escolaridade: " "

        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.nome]: event.target.value
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
        return <form onSubmit ={this.handleSubmit}>
            <input type="text" name="nome" placeholder="Nome"></input>
            <input type="text" name="email" placeholder="E-mail"></input>
            <input type="text" name="senha" placeholder="Senha"></input>
            <input type="text" name="dtNascimento" placeholder="Data de Nascimento"></input>
            <input type="text" name="cpf" placeholder="CPF"></input>
            <input type="text" name="telefone" placeholder="Telefone"></input>
            <input type="text" name="nacionalidade" placeholder="Nacionalidade"></input>
            <input type="text" name="sexo" placeholder="Sexo"></input>
            <input type="text" name="função" placeholder="Função"></input>
            <input type="text" name="escolaridade" placeholder="Escolaridade"></input>
            <input type="submit" name="confirm" value="Confirmar"></input>
        </form>
    }
}

