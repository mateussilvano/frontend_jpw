import React from "react";
import ProfessorList from "./ProfessorList";
import Axios from 'axios'

export default class ProfessorPage extends React.Component {
    
    constructor(props){
        super(props)
        this.API_URL = "http://localhost:5050/api/professor"

        this.state = {
            professorList: []
        }
    }

    componentDidMount = async () => {
       let professorList = await this.getAllProfessor()
       this.setState({
            professorList 
       })
    }

    getAllProfessor = async () => {
         let response = await Axios.get(this.API_URL)
         return response.data
    }
    
    render() {
        return <>
            <section>
                <h2>Listagem de Professores</h2>
                <ProfessorList list={this.state.professorList}> </ProfessorList>
            </section>
        </>
    }
}