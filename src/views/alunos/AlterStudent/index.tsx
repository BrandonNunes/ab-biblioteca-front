import React, { useState, useEffect } from "react";
import { Container, Content } from "../../../components/containers/Containers";
import { FaArrowLeft } from 'react-icons/fa'
import { FormBook } from "./styles";
import { LabelFormDefault, InputFormDefault, SendButton, ReturnArrow, SelectFormDefault } from "../../../components/Inputs";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { turmas } from "../../../utils/turmas";
import { Students } from "../types";
import ModalSucess from "../../../utils/modais/modalsucess";
import ModalError from "../../../utils/modais/modalerror";


export default function ChangeStudent() {

    const { id } = useParams()
    const navigate = useNavigate()
    const [ student, setStudent ] = useState<Students>();
    const [ nome, setNome ] = useState<string>(student?.nome || '');
    const [ ano, setAno ] = useState<string>(student?.ano || '');
    const [ turma, setTurma ] = useState<string>(student?.turma || '');
   
    const [modalSucess, setModaSucess] = useState(false)
    const [modalError, setModaError] = useState(false)
    const messageSucess = 'Aluno alterado com Sucesso!';
    const messageError = 'Falha ao alterar Aluno!';
    const [error, setError] = useState('')
    
async function getStudent() {
        const resp = await api.get(`alunos/${id}`)
        setStudent(resp.data.response[0])
        setNome(resp.data.response[0].nome)
        setAno(resp.data.response[0].ano)
        setTurma(resp.data.response[0].turma)
    }

async function ChangeStudent() {
    const payload = {
        nome, 
        ano,
        turma,     
        id
    }
    try {
        const resp = await api.put('alunos/edit', payload )
        console.log(resp.data)
        setModaSucess(true)
        
    } catch (error: any) {
        console.log(error.response)
        console.log(error.response.data.mensagem)
        if(error.response.status === 401)  setError(error.response.data.mensagem)
        setModaError(true)
       
    }

}

useEffect(() => {
    getStudent()
}, [])

    return(
        <Container>
            <Content>
                <ReturnArrow onClick={()=> navigate('/alunos')}>
                    <FaArrowLeft size='20px' />
                </ReturnArrow>
                <FormBook>
                    <LabelFormDefault>Nome:</LabelFormDefault>
                    <InputFormDefault value={nome} onChange={(e) => setNome(e.target.value) } />
                    <LabelFormDefault>Ano:</LabelFormDefault>
                    <SelectFormDefault value={ano} onChange={(e) => setAno(e.target.value) } >
                        <option value="1" >1º</option>
                        <option value="2">2º</option>
                        <option value="3">3º</option>
                    </SelectFormDefault>
                    <LabelFormDefault>Turma:</LabelFormDefault>
                     <SelectFormDefault value={turma} onChange={(e) => setTurma(e.target.value) } >
                        { turmas.map((turma) => (
                            <option key={turma} value={turma} >{turma}</option>
                        )) }
                    </SelectFormDefault>
                   
                    <SendButton onClick={ChangeStudent} >Enviar</SendButton>
                </FormBook>
            </Content>
            <ModalSucess message={messageSucess} open={modalSucess} setIsOpen={setModaSucess} />
            <ModalError message={messageError} open={modalError} setIsOpen={setModaError} error={error} />
        </Container>
    );
}