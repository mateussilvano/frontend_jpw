import React from "react";
import ProfessorForm from "./ProfessorForm";

export default class ProfessorItem extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            isUpdating: false
        }
    }

    setUpdate = () => {
        this.setState({
            isUpdating: !this.state.isUpdating
        })
    }

    handleDelete = () => {
        this.props.delete()
    }

    render() {
        let form = this.state.isUpdating ? <ProfessorForm></ProfessorForm> : null

        let buttonDelete = <input type="button" value="Deletar" onClick={this.handleDelete}></input>
        let buttonEdit =  <input type="button" value="Editar" onClick={this.setUpdate}></input>
        let buttonContainer = <span>{buttonDelete} {buttonEdit}</span>

        return <li>{this.props.professor.nome} ({this.props.professor.senha}) {this.props.professor.email} {buttonContainer} {form}</li>

    }
}