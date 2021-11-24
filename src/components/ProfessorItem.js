import React from "react";

export default class ProfessorItem extends React.Component {
    render() {
        return <li>{this.props.professor.nome} ({this.props.professor.senha})</li>

    }
}