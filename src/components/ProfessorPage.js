import React from "react";
import ProfessorList from "./ProfessorList";
import ProfessorForm from "./ProfessorForm";
import Axios from 'axios'

export default class ProfessorPage extends React.Component {

    constructor(props) {
        super(props)
        this.API_URL = "http://localhost:5050/api/professor"

        this.state = {
            professorList: [],
            errorMessage: null
        }
    }

    componentDidMount = async () => {
        await this.updateProfessorList()
    }

    updateProfessorList = async () => {
        let professorList = await this.getAllProfessor()
        this.setState({
            professorList
        })
    }

    getAllProfessor = async () => {
        let response = await Axios.get(this.API_URL)
        return response.data
    }

    insertProfessor = async (professor) => {
        try {
            let response = await Axios.post(this.API_URL, professor)
            if (response.status === 200) {
                await this.updateProfessorList()
            }

            this.setState({
                errorMessage: null
            })
        } catch (err){ 
            this.setState({
                errorMessage: err.message
            })
        }
    }

    deleteProfessor = async (id) => {
        try {
            let response = await Axios.delete(`${this.API_URL}/${id}`)
            if (response.status === 200) {
                await this.updateProfessorList()
            }

            this.setState({
                errorMessage: null
            })
        } catch (err){ 
            this.setState({
                errorMessage: err.message
            })
        }
    }

    render() {
        return <>
            <section>
                <h2>Cadastro de  Professor</h2>
                <ProfessorForm action={this.insertProfessor}></ProfessorForm>
                {this.state.errorMessage}
            </section>
            <section>
                <h2>Listagem de Professores</h2>
                <ProfessorList list={this.state.professorList} deleteRequest={this.deleteProfessor}></ProfessorList>
            </section>
        </>
    }
}