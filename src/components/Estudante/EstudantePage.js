import React from "react";
import EstudanteList from "./EstudanteList";
import EstudanteForm from "./EstudanteForm";
import Axios from 'axios'
import { Snackbar } from '@mui/material'

export default class EstudantePage extends React.Component {

    constructor(props) {
        super(props)
        this.API_URL = "http://localhost:5050/api/estudante"

        this.state = {
            estudanteList: [],
            errorMessage: null,
            snake: false
        }
    }

    componentDidMount = async () => {
        await this.updateEstudanteList()
    }

    updateEstudanteList = async () => {
        let estudanteList = await this.getAllEstudante()
        this.setState({
            estudanteList
        })
    }

    getAllEstudante = async () => {
        let response = await Axios.get(this.API_URL)
        return response.data
    }

    insertEstudante = async (estudante) => {
        try {
            let response = await Axios.post(this.API_URL, estudante)
            if (response.status === 200) {
                await this.updateEstudanteList()
            }

            this.setState({
                errorMessage: null
            })



        } catch (err) {
            this.openSnackbar(err.message)
        }
    }

    deleteEstudante = async (id) => {
        try {
            let response = await Axios.delete(`${this.API_URL}/${id}`)
            if (response.status === 200) {
                await this.updateEstudanteList()
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

    putEstudante = async (id, user) => {
        try {
            let response = await Axios.put(`${this.API_URL}/${id}`, user)
            if (response.status === 200) {
                await this.updateEstudanteList()
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
                <h2>Cadastro de Estudante</h2>
                <EstudanteForm action={this.insertEstudante}></EstudanteForm>
            </section>
            <section>
                <h2>Listagem de Estudante</h2>
                <EstudanteList list={this.state.estudanteList} deleteRequest={this.deleteEstudante} putRequest={this.putEstudante}></EstudanteList>
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