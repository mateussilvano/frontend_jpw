import React from "react";
import TurmaList from "./TurmaList";
import TurmaForm from "./TurmaForm";
import Axios from 'axios'
import { Snackbar } from '@mui/material'

export default class TurmaPage extends React.Component {

    constructor(props) {
        super(props)
        this.API_URL = "http://localhost:5050/api/turma"

        this.state = {
            turmaList: [],
            errorMessage: null,
            snake: false
        }
    }

    componentDidMount = async () => {
        await this.updateTurmaList()
    }

    updateTurmaList = async () => {
        let turmaList = await this.getAllTurma()
        this.setState({
            turmaList
        })
    }

    getAllTurma = async () => {
        let response = await Axios.get(this.API_URL)
        return response.data
    }

    insertTurma = async (turma) => {
        try {
            let response = await Axios.post(this.API_URL, turma)
            if (response.status === 200) {
                await this.updateTurmaList()
            }

            this.setState({
                errorMessage: null
            })



        } catch (err) {
            this.openSnackbar(err.message)
        }
    }

    deleteTurma = async (id) => {
        try {
            let response = await Axios.delete(`${this.API_URL}/${id}`)
            if (response.status === 200) {
                await this.updateTurmaList()
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

    putTurma = async (id, user) => {
        try {
            let response = await Axios.put(`${this.API_URL}/${id}`, user)
            if (response.status === 200) {
                await this.updateTurmaList()
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
                <h2>Cadastro de Turmas</h2>
                <TurmaForm action={this.insertTurma}></TurmaForm>
            </section>
            <section>
                <h2>Listagem de Turmas</h2>
                <TurmaList list={this.state.turmaList} deleteRequest={this.deleteTurma} putRequest={this.putTurma}></TurmaList>
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