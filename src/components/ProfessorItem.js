import React from "react";

export default class ProfessorItem extends React.Component {

    handleDelete = () => {
        this.props.delete()
    }

    render() {

        let buttonDelete = <input type="button" value="Deletar" onClick={this.handleDelete}></input>
        let buttonEdit = null;
        let buttonContainer = <span>{buttonDelete} {buttonEdit}</span>

        return <li>{this.props.professor.nome} ({this.props.professor.senha}) {this.props.professor.email} {buttonContainer}</li>

    }
}