import React from "react";
import ProfessorList from "./ProfessorList";
import ProfessorForm from "./ProfessorForm";
import Axios from 'axios'
import { Snackbar } from '@mui/material'

export default class ProfessorPage extends React.Component {

    constructor(props) {
        super(props)
        this.API_URL = "http://localhost:5050/api/professor"

        this.state = {
            professorList: [],
            errorMessage: null,
            snake: false
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



        } catch (err) {
            this.openSnackbar(err.message)
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
        } catch (err) {
            this.setState({
                errorMessage: err.message
            })
        }
    }

    putProfessor = async (id, user) => {
        try {
            let response = await Axios.put(`${this.API_URL}/${id}`, user)
            if (response.status === 200) {
                await this.updateProfessorList()
            }

            this.setState({
                errorMessage: null
            })
        } catch (err) {
            this.setState({
                errorMessage: err.message
            })
        }
    }

    openSnackbar = (msg) => {
        this.setState({
            errorMessage: msg,
            snack: true
        })

    }

    closeSnackbar = () => {
        this.setState({
            errorMessage: null,
            snack: false
        })
    }

    render() {
        return <>
            <section>
                <h2>Cadastro de  Professor</h2>
                <ProfessorForm action={this.insertProfessor}></ProfessorForm>
            </section>
            <section>
                <h2>Listagem de Professores</h2>
                <ProfessorList list={this.state.professorList} deleteRequest={this.deleteProfessor} putRequest={this.putProfessor}></ProfessorList>
            </section>

            <Snackbar
                open={this.state.snack}
                autoHideDuration={5000}
                onClose={this.closeSnackbar}
                message={this.state.errorMessage}

            />
        </>
    }
}