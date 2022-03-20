import React, { useState, useEffect } from 'react'
import { Container, Content } from '../../components/containers/Containers'
import { TableBooks, TableBooksHeader, TableBooksTbody, TableBooksRows, TableBooksTd, TableBooksTh, BoxActions } from './styles'
import {Students} from './types'
import { ActionButton, AddButton } from '../../components/Inputs'
import { FaRegEdit, FaInfoCircle, FaTrashAlt, FaPlus } from 'react-icons/fa'
import ConfirmDel from './confirmModal'
import NewStudent from './newStudent'

import colors from '../../utils/colors'

import { useNavigate } from 'react-router-dom'

import api from '../../services/api'


function Alunos() {

  const [ students, setStudents ] = useState<Students[]>();
  const [ openNewStudent , setOpenNewStudent ] = useState(false)
  const [ confirm, setConfirm ] = useState(false)
  const [ studentName, setStudentName ] = useState('')
  const [ studentId, setStudentID ] = useState(1)

  const navigate = useNavigate()

  async function getDataStudents (){
      const resp = await api.get('alunos')
      setStudents(resp.data.response)
  }

function deletStudent(id: number, name: string){
  setConfirm(true)
  setStudentName(name)
  setStudentID(id)
}
  
  

  useEffect(() => {
    getDataStudents()
  }, [])

  return (
    <Container>
      <Content>
        <AddButton onClick={() => setOpenNewStudent(true)} ><FaPlus size='20px' />     Adicionar Aluno</AddButton>
        <TableBooks>
          <TableBooksHeader>
            <TableBooksRows>
              <TableBooksTh>Nome</TableBooksTh>
              <TableBooksTh>Ano</TableBooksTh>
              <TableBooksTh>Turma</TableBooksTh>
              <TableBooksTh>Ações</TableBooksTh>
            </TableBooksRows>         
          </TableBooksHeader>          
          <TableBooksTbody>           
            { students && students.map((student) => (
                <TableBooksRows key={student.id}>
                <TableBooksTd>{ student.nome }</TableBooksTd>
                <TableBooksTd>{ student.ano }</TableBooksTd>
                <TableBooksTd>{ student.turma }</TableBooksTd>
                <TableBooksTd style={{width:'210px'}}>
                  <BoxActions>
                    <ActionButton title='Informações' color={colors.blue_info} onClick={() => navigate(`/alunos/${student.id}`)} >
                      <FaInfoCircle  size='20px' />
                    </ActionButton>              
                    <ActionButton title='Editar' color={colors.yellow_warning} onClick={() => navigate(`/alunos/edit/${student.id}`)}>
                      <FaRegEdit  size='20px' />
                    </ActionButton>
                    <ActionButton title='Apagar Livro' color={colors.primary_red} onClick={() => deletStudent(student.id, student.nome)}>
                      <FaTrashAlt  size='20px' />
                    </ActionButton>
                  </BoxActions>
                </TableBooksTd>
              </TableBooksRows>
              )) 
            }
          </TableBooksTbody>

        </TableBooks>
        <NewStudent openNewStudent={openNewStudent} setOpenNewStudent={setOpenNewStudent} />
        <ConfirmDel confirm={confirm} setConfirm={setConfirm} studentName={studentName} studentId={studentId } />
      </Content>
    </Container>
  )
}

export default Alunos;