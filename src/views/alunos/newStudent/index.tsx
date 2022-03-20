import React, { useState } from "react";
import { NewBookContainer, NewBookTittle, CloseButton, MessageError } from "./styles";
import { InputFormDefault,
         LabelFormDefault,
         SendButton,
         SelectFormDefault  } from "../../../components/Inputs";
import { generos } from "../../../utils/modais/constants/generos";
import { useForm } from "react-hook-form";
import {Students} from '../types'
import api from "../../../services/api";
import ModalSucess from "../../../utils/modais/modalsucess";
import ModalError from "../../../utils/modais/modalerror";
import { useNavigate } from 'react-router-dom'
import { turmas } from "../../../utils/turmas";



export default function NewStudent(props:{ openNewStudent:boolean, setOpenNewStudent(e: boolean): void }) {

    const messageSucess = 'Aluno Adicionado com Sucesso!';
    const messageError = 'Erro ao Adicionar Aluno!';

    const [ modalsucess, setModaSucess ] = useState(false);
    const [ modalError, setModaError ] = useState(false);
    const [ error, setError ] = useState('');
    const navigate = useNavigate()

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<Students>({
        defaultValues:{
            ano: "1",
            turma: "A"
        }
    });

    const createBook = async (data: Students) => {
        try {
            const resp = await api.post('add/alunos', data)
            setModaSucess(true)
            setValue('nome', '')
            setValue('ano', '')
            setValue('turma', '')
            
        } catch (error: any) {
            setError(error.response.data.mensagem)
            setModaError(true)
        }
    }

    return(
        <NewBookContainer  isOpen={props.openNewStudent} ariaHideApp={false} >
            <CloseButton onClick={()=>props.setOpenNewStudent(false)} >X</CloseButton>
            <NewBookTittle>Adicionar Novo Aluno</NewBookTittle>
            <LabelFormDefault>Nome:</LabelFormDefault>
            <InputFormDefault {...register("nome", { required: true })} />
            {errors.nome?.type === 'required' && <MessageError>*campo obrigatório!</MessageError>}
            <LabelFormDefault>Ano:</LabelFormDefault>
            <SelectFormDefault {...register("ano", { required: true })} >
                        <option value="1">1º</option>
                        <option value="2">2º</option>
                        <option value="3">3º</option>
            </SelectFormDefault>
            {errors.ano?.type === 'required' && <MessageError>*campo obrigatório!</MessageError>}
            <LabelFormDefault>Turma:</LabelFormDefault>
            <SelectFormDefault {...register("turma", { required: true })} >
                { turmas.map((turma) => (
                            <option key={turma} value={turma} >{turma}</option>
                        )) }
            </SelectFormDefault>
            {errors.turma?.type === 'required' && <MessageError>*campo obrigatório!</MessageError>}
            <LabelFormDefault>Exemplares:</LabelFormDefault>
            
            <SendButton onClick={handleSubmit(createBook)}>Adicionar</SendButton>

            <ModalSucess message={messageSucess} open={modalsucess} setIsOpen={setModaSucess} />
            <ModalError message={messageError} open={modalError} setIsOpen={setModaError} error={error} />

        </NewBookContainer>
    )
}