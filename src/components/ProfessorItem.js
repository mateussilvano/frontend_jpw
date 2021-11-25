import React from "react";
import ProfessorForm from "./ProfessorForm";

export default class ProfessorItem extends React.Component {

    constructor(props){
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
        let form = this.state.isUpdating ? <ProfessorForm codigo={this.props.professor.codigo} action={this.confirm}></ProfessorForm> : null

        let buttonDelete = <input type="button" value="Deletar" onClick={this.handleDelete}></input>
        let buttonEdit =  <input type="button" value="Editar" onClick={this.setUpdateTrigger}></input>
        let buttonContainer = <span>{buttonDelete} {buttonEdit}</span>

        return <li>{this.props.professor.nome} ({this.props.professor.senha}) {this.props.professor.email} {buttonContainer} {form}</li>

    }
}