import React, { useState, useEffect } from 'react'
import { Container, Content } from '../../../components/containers/Containers';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../../services/api';
import { Students } from '../types';
import { ContainerDetails, LabelBookDetail, ValueBookDetail, CardDetails } from './styles';
import { ReturnArrow } from '../../../components/Inputs';
import { FaArrowLeft } from 'react-icons/fa';


function StudentsDetails() {

    const { id } = useParams()
    const [ student, setStudent ] = useState<Students>()
    const navigate = useNavigate()
    

async function getAluno() {
    const resp = await api.get(`alunos/${id}`)
    setStudent(resp.data.response[0])
}


useEffect(() => {
    getAluno()
},[])

  return (
    <Container>
      <Content>
          <ReturnArrow onClick={() => navigate('/alunos')} >
              <FaArrowLeft size='20px' />
          </ReturnArrow>
        <ContainerDetails>
            <CardDetails>
                <LabelBookDetail>ID:  </LabelBookDetail>
                <ValueBookDetail>{student?.id}</ValueBookDetail>
            </CardDetails>
            <CardDetails>
                <LabelBookDetail>Nome Aluno:  </LabelBookDetail>
                <ValueBookDetail>{student?.nome}</ValueBookDetail>
            </CardDetails>
            <CardDetails>
                <LabelBookDetail>Ano:  </LabelBookDetail>
                <ValueBookDetail>{student?.ano}</ValueBookDetail>
            </CardDetails>
            <CardDetails>
                <LabelBookDetail>Turma:  </LabelBookDetail>
                <ValueBookDetail>{student?.turma}</ValueBookDetail>
            </CardDetails>
        </ContainerDetails>
      </Content>
    </Container>
  )
}

export default StudentsDetails