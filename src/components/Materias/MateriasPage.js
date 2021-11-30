import React from "react";
import MateriasList from "./MateriasList";
import MateriasForm from "./MateriasForm";
import Axios from 'axios'
import { Snackbar } from '@mui/material'

export default class MateriasPage extends React.Component {

    constructor(props) {
        super(props)
        this.API_URL = "http://localhost:5050/api/materias"

        this.state = {
            materiasList: [],
            errorMessage: null,
            snake: false
        }
    }

    componentDidMount = async () => {
        await this.updateMateriasList()
    }

    updateMateriasList = async () => {
        let materiasList = await this.getAllMaterias()
        this.setState({
            materiasList
        })
    }

    getAllMaterias = async () => {
        let response = await Axios.get(this.API_URL)
        return response.data
    }

    insertMaterias = async (materias) => {
        try {
            let response = await Axios.post(this.API_URL, materias)
            if (response.status === 200) {
                await this.updateMateriasList()
            }

            this.setState({
                errorMessage: null
            })



        } catch (err) {
            this.openSnackbar(err.message)
        }
    }

    deleteMaterias = async (id) => {
        try {
            let response = await Axios.delete(`${this.API_URL}/${id}`)
            if (response.status === 200) {
                await this.updateMateriasList()
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

    putMaterias = async (id, user) => {
        try {
            let response = await Axios.put(`${this.API_URL}/${id}`, user)
            if (response.status === 200) {
                await this.updateMateriasList()
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
                <h2>Cadastro de Materias</h2>
                <MateriasForm action={this.insertMaterias}></MateriasForm>
            </section>
            <section>
                <h2>Listagem de Materias</h2>
                <MateriasList list={this.state.materiasList} deleteRequest={this.deleteMaterias} putRequest={this.putMaterias}></MateriasList>
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