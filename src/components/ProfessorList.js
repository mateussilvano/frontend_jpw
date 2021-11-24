import React from "react";
import ProfessorItem from "./ProfessorItem";

export default class ProfessorList extends React.Component {
    render() {
        if (this.props.list.length === 0) return <p>Não há professores cadastrados</p>

        let professorList = this.props.list.map(item => {
            return <ProfessorItem professor={item} key={item._id}
                delete={() => { this.props.deleteRequest(item._id) }}
                edit={(user) => { this.props.putRequest(item._id, user) }}></ProfessorItem>

        })

        return <ul>
            {professorList}
        </ul>
    }
}