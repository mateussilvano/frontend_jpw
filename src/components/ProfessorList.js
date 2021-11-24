import React from "react";
import ProfessorItem from "./ProfessorItem";

export default class ProfessorList extends React.Component {
    render() {

        let professorList = this.props.list.map(item => {
            return <ProfessorItem professor={item} key={item.id}></ProfessorItem>
        })
        
        if(professorList.length === 0) return "Não há professores cadastrados"

        return <ul>
            {professorList}
        </ul>
    }
}