import React from "react";

export default class ProfessorItem extends React.Component {
    render() {
        return <li>{this.props.professor.nome} ({this.props.professor.senha}) {this.props.professor.email}</li>

    }
}