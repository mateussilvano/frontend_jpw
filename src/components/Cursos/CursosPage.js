import React from "react";
import CursosList from "./CursosList";
import CursosForm from "./CursosForm";
import Axios from 'axios'
import { Snackbar } from '@mui/material'

export default class CursosPage extends React.Component {

    constructor(props) {
        super(props)
        this.API_URL = "http://localhost:5050/api/cursos"

        this.state = {
            cursosList: [],
            errorMessage: null,
            snake: false
        }
    }

    componentDidMount = async () => {
        await this.updateCursosList()
    }

    updateCursosList = async () => {
        let cursosList = await this.getAllCursos()
        this.setState({
            cursosList
        })
    }

    getAllCursos = async () => {
        let response = await Axios.get(this.API_URL)
        return response.data
    }

    insertCursos = async (cursos) => {
        try {
            let response = await Axios.post(this.API_URL, cursos)
            if (response.status === 200) {
                await this.updateCursosList()
            }

            this.setState({
                errorMessage: null
            })



        } catch (err) {
            this.openSnackbar(err.message)
        }
    }

    deleteCursos = async (id) => {
        try {
            let response = await Axios.delete(`${this.API_URL}/${id}`)
            if (response.status === 200) {
                await this.updateCursosList()
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

    putCursos = async (id, user) => {
        try {
            let response = await Axios.put(`${this.API_URL}/${id}`, user)
            if (response.status === 200) {
                await this.updateCursosList()
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
                <h2>Cadastro de Cursos</h2>
                <CursosForm action={this.insertCursos}></CursosForm>
            </section>
            <section>
                <h2>Listagem de Cursos</h2>
                <CursosList list={this.state.cursosList} deleteRequest={this.deleteCursos} putRequest={this.putCursos}></CursosList>
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