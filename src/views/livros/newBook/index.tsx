import React, { useState } from "react";
import { NewBookContainer, NewBookTittle, CloseButton, MessageError } from "./styles";
import { InputFormDefault,
         LabelFormDefault,
         SendButton,
         SelectFormDefault  } from "../../../components/Inputs";
import { generos } from "../../../utils/modais/constants/generos";
import { useForm } from "react-hook-form";
import {Booksprops} from '../types'
import api from "../../../services/api";
import ModalSucess from "../../../utils/modais/modalsucess";
import ModalError from "../../../utils/modais/modalerror";
import { useNavigate } from 'react-router-dom'



export default function NewBook(props:{ openNewBook:boolean, setOpenNewbook(e: boolean): void }) {

    const messageSucess = 'Livro Adicionado com Sucesso!';
    const messageError = 'Erro ao Adicionar Livro!';

    const [ modalsucess, setModaSucess ] = useState(false);
    const [ modalError, setModaError ] = useState(false);
    const [ error, setError ] = useState('');
    const navigate = useNavigate()

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<Booksprops>();

    const createBook = async (data: Booksprops) => {
        try {
            const resp = await api.post('add/livro', data)
            setModaSucess(true)
            setValue('titulo', '')
            setValue('nome_autor', '')
            setValue('genero', '')
            setValue('estante', 0)
            setValue('exemplares', 0)
            setValue('prateleira', 0)
            setValue('qtd_disponivel', 0)
        } catch (error: any) {
            setError(error)
            setModaError(true)
        }
    }

    return(
        <NewBookContainer  isOpen={props.openNewBook} ariaHideApp={false} >
            <CloseButton onClick={()=>props.setOpenNewbook(false)} >X</CloseButton>
            <NewBookTittle>Adicionar Novo Livro</NewBookTittle>
            <LabelFormDefault>Titulo:</LabelFormDefault>
            <InputFormDefault {...register("titulo", { required: true })} />
            {errors.titulo?.type === 'required' && <MessageError>*campo obrigatório!</MessageError>}
            <LabelFormDefault>Autor:</LabelFormDefault>
            <InputFormDefault {...register("nome_autor", { required: true })} />
            {errors.nome_autor?.type === 'required' && <MessageError>*campo obrigatório!</MessageError>}
            <LabelFormDefault>Genero:</LabelFormDefault>
            <SelectFormDefault {...register("genero", { required: true })} >
                <option >- - - Escolha um genero - - -</option>
                {generos.map((genero, index) => {
                    return(
                        <option key={index} value={ genero }>{ genero }</option>
                    )
                })}
            </SelectFormDefault>
            {errors.genero?.type === 'required' && <MessageError>*campo obrigatório!</MessageError>}
            <LabelFormDefault>Exemplares:</LabelFormDefault>
            <InputFormDefault type="number" {...register("exemplares", { required: true })} />
            {errors.exemplares?.type === 'required' && <MessageError>*campo obrigatório!</MessageError>}
            <LabelFormDefault>Quantidade Disponivel:</LabelFormDefault>
            <InputFormDefault type="number" {...register("qtd_disponivel", { required: true })} />
            {errors.qtd_disponivel?.type === 'required' && <MessageError>*campo obrigatório!</MessageError>}
            <LabelFormDefault>Estante:</LabelFormDefault>
            <InputFormDefault type="number" {...register("estante", { required: true })} />
            {errors.estante?.type === 'required' && <MessageError>*campo obrigatório!</MessageError>}
            <LabelFormDefault>Prateleira:</LabelFormDefault>
            <InputFormDefault type="number" {...register("prateleira", { required: true })} />
            {errors.prateleira?.type === 'required' && <MessageError>*campo obrigatório!</MessageError>}
            <SendButton onClick={handleSubmit(createBook)}>Adicionar</SendButton>

            <ModalSucess message={messageSucess} open={modalsucess} setIsOpen={setModaSucess} />
            <ModalError message={messageError} open={modalError} setIsOpen={setModaError} error={error} />

        </NewBookContainer>
    )
}