import React, { useState, useEffect } from "react";
import { Container, Content } from "../../../components/containers/Containers";
import { FaArrowLeft } from 'react-icons/fa'
import { FormBook } from "./styles";
import { LabelFormDefault, InputFormDefault, SendButton, ReturnArrow } from "../../../components/Inputs";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { Booksprops } from "../types";
import ModalSucess from "../../../utils/modais/modalsucess";
import ModalError from "../../../utils/modais/modalerror";


export default function ChangeBook() {

    const {id_livro} = useParams()
    const navigate = useNavigate()
    const [ book, setBook ] = useState<Booksprops>();
    const [ titulo, setTitulo ] = useState<string>(book?.titulo || '');
    const [ autor, setAutor ] = useState<string>(book?.nome_autor || '');
    const [ genero, setGenero ] = useState<string>(book?.genero || '');
    const [ exemplares, setExemplares ] = useState<number>(book?.exemplares || 0);
    const [ qtd_Disponivel, setQtd_Disponivel ] = useState<number>(book?.qtd_disponivel || 0);
    const [ estante, setEstante ] = useState<number>(book?.estante || 0);
    const [ prateleira, setPrateleira ] = useState<number>(book?.prateleira || 0);

    const [modalSucess, setModaSucess] = useState(false)
    const [modalError, setModaError] = useState(false)
    const messageSucess = 'Livro alterado com Sucesso!';
    const messageError = 'Falha ao alterar Livro!';
    const [error, setError] = useState('')
    
async function getBook() {
        const resp = await api.get(`livro/${id_livro}`)
        setBook(resp.data.response[0])
        setTitulo(resp.data.response[0].titulo)
        setAutor(resp.data.response[0].nome_autor)
        setGenero(resp.data.response[0].genero)
        setExemplares(resp.data.response[0].exemplares)
        setQtd_Disponivel(resp.data.response[0].qtd_disponivel)
        setEstante(resp.data.response[0].estante)
        setPrateleira(resp.data.response[0].prateleira)
    }

async function ChangeBook() {
    const payload = {
        titulo, 
        nome_autor: autor, 
        exemplares, 
        qtd_disponivel: qtd_Disponivel, 
        genero,
        prateleira,
        estante,
        id_livro
    }
    try {
        const resp = await api.put('livro/edit', payload )
        console.log(resp.data)
        setModaSucess(true)
        
    } catch (error: any) {
        console.log(error)
        setModaError(true)
        setError(error)
    }

}

useEffect(() => {
    getBook()
}, [])

    return(
        <Container>
            <Content>
                <ReturnArrow onClick={()=> navigate('/livros')}>
                    <FaArrowLeft size='20px' />
                </ReturnArrow>
                <FormBook>
                    <LabelFormDefault>Titulo:</LabelFormDefault>
                    <InputFormDefault value={titulo} onChange={(e) => setTitulo(e.target.value) } />
                    <LabelFormDefault>Autor:</LabelFormDefault>
                    <InputFormDefault value={autor} onChange={(e) => setAutor(e.target.value) } />
                    <LabelFormDefault>Genero:</LabelFormDefault>
                    <InputFormDefault value={genero} onChange={(e) => setGenero(e.target.value) } />
                    <LabelFormDefault>Exemplares:</LabelFormDefault>
                    <InputFormDefault value={exemplares} 
                    onChange={(e) => setExemplares(Number(e.target.value)) } />
                    <LabelFormDefault>Quantidade Disponivel:</LabelFormDefault>
                    <InputFormDefault value={qtd_Disponivel} 
                    onChange={(e) => setQtd_Disponivel(Number(e.target.value)) }/>
                    <LabelFormDefault>Estante:</LabelFormDefault>
                    <InputFormDefault value={estante} 
                    onChange={(e) => setEstante(Number(e.target.value)) } />
                    <LabelFormDefault>Prateleira:</LabelFormDefault>
                    <InputFormDefault value={prateleira} 
                    onChange={(e) => setPrateleira(Number(e.target.value))} />
                    <SendButton onClick={ChangeBook} >Enviar</SendButton>
                </FormBook>
            </Content>
            <ModalSucess message={messageSucess} open={modalSucess} setIsOpen={setModaSucess} />
            <ModalError message={messageError} open={modalError} setIsOpen={setModaError} error={error} />
        </Container>
    );
}