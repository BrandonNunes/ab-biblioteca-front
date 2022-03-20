import React, { useState, useEffect } from 'react'
import { Container, Content } from '../../../components/containers/Containers';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../../services/api';
import { Booksprops } from '../types';
import { ContainerDetails, LabelBookDetail, ValueBookDetail, CardDetails } from './styles';
import { ReturnArrow } from '../../../components/Inputs';
import { FaArrowLeft } from 'react-icons/fa';
import formateDate from '../../../utils/formatDate';

function BookDetails() {

    const { id_livro } = useParams()
    const [ book, setBook ] = useState<Booksprops>()
    const navigate = useNavigate()
    

async function getBook() {
    const resp = await api.get(`livro/${id_livro}`)
    setBook(resp.data.response[0])
}


useEffect(() => {
    getBook()
},[])

  return (
    <Container>
      <Content>
          <ReturnArrow onClick={() => navigate('/livros')} >
              <FaArrowLeft size='20px' />
          </ReturnArrow>
        <ContainerDetails>
            <CardDetails>
                <LabelBookDetail>ID:  </LabelBookDetail>
                <ValueBookDetail>{book?.id_livro}</ValueBookDetail>
            </CardDetails>
            <CardDetails>
                <LabelBookDetail>Titulo:  </LabelBookDetail>
                <ValueBookDetail>{book?.titulo}</ValueBookDetail>
            </CardDetails>
            <CardDetails>
                <LabelBookDetail>Autor:  </LabelBookDetail>
                <ValueBookDetail>{book?.nome_autor}</ValueBookDetail>
            </CardDetails>
            <CardDetails>
                <LabelBookDetail>Genero:  </LabelBookDetail>
                <ValueBookDetail>{book?.genero}</ValueBookDetail>
            </CardDetails>
            <CardDetails>
                <LabelBookDetail>Exemplares:  </LabelBookDetail>
                <ValueBookDetail>{book?.exemplares}</ValueBookDetail>
            </CardDetails>
            <CardDetails>
                <LabelBookDetail>Qtd. Disponivel:  </LabelBookDetail>
                <ValueBookDetail>{book?.qtd_disponivel}</ValueBookDetail>
            </CardDetails>
            <CardDetails>
                <LabelBookDetail>Estante:  </LabelBookDetail>
                <ValueBookDetail>{book?.estante}</ValueBookDetail>
            </CardDetails>
            <CardDetails>
                <LabelBookDetail>Prateleira:  </LabelBookDetail>
                <ValueBookDetail>{book?.prateleira}</ValueBookDetail>
            </CardDetails>
            <CardDetails>
                <LabelBookDetail>Data de Inclusão:  </LabelBookDetail>
                <ValueBookDetail>{formateDate(book?.data_inclusao) }</ValueBookDetail>
            </CardDetails>
        </ContainerDetails>
      </Content>
    </Container>
  )
}

export default BookDetails