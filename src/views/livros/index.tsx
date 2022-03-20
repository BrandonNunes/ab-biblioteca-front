import React, { useState, useEffect } from 'react'
import { Container, Content } from '../../components/containers/Containers'
import { TableBooks, TableBooksHeader, TableBooksTbody, TableBooksRows, TableBooksTd, TableBooksTh, BoxActions } from './styles'
import { Booksprops } from './types'
import { ActionButton, AddButton } from '../../components/Inputs'
import { FaRegEdit, FaInfoCircle, FaTrashAlt, FaPlus } from 'react-icons/fa'
import NewBook from './newBook'
import colors from '../../utils/colors'
import ConfirmDel from './confirmModal'
import { useNavigate } from 'react-router-dom'

import api from '../../services/api'


function Livros() {

  const [ books, setBooks ] = useState<Booksprops[]>();
  const [ openNewBook , setOpenNewbook] = useState(false)
  const [ confirm, setConfirm ] = useState(false)
  const [ bookName, setBookName ] = useState('')
  const [ bookId, setBookID ] = useState(1)

  const navigate = useNavigate()

  async function getDataBooks (){
      const resp = await api.get('livros')
      setBooks(resp.data.response)
  }

function deletBook(id: number, name: string){
  setConfirm(true)
  setBookName(name)
  setBookID(id)
}
  
  

  useEffect(() => {
    getDataBooks()
  }, [])

  return (
    <Container>
      <Content>
        <AddButton onClick={() => setOpenNewbook(true)} ><FaPlus size='20px' />     Adicionar Livro</AddButton>
        <TableBooks>
          <TableBooksHeader>
            <TableBooksRows>
              <TableBooksTh>Titulo</TableBooksTh>
              <TableBooksTh>Autor</TableBooksTh>
              <TableBooksTh>Gênero</TableBooksTh>
              <TableBooksTh>Exemplares</TableBooksTh>
              <TableBooksTh>Disponiveis</TableBooksTh>
              <TableBooksTh>Estante</TableBooksTh>
              <TableBooksTh>Prateleira</TableBooksTh>
              <TableBooksTh>Ações</TableBooksTh>
            </TableBooksRows>         
          </TableBooksHeader>          
          <TableBooksTbody>           
            { books && books.map((book) => (
                <TableBooksRows key={book.id_livro}>
                <TableBooksTd>{ book.titulo }</TableBooksTd>
                <TableBooksTd>{ book.nome_autor }</TableBooksTd>
                <TableBooksTd>{ book.genero }</TableBooksTd>
                <TableBooksTd>{ book.exemplares }</TableBooksTd>
                <TableBooksTd>{ book.qtd_disponivel }</TableBooksTd>
                <TableBooksTd>{ book.estante }</TableBooksTd>
                <TableBooksTd>{ book.prateleira }</TableBooksTd>
                <TableBooksTd style={{width:'210px'}}>
                  <BoxActions>
                    <ActionButton title='Informações' color={colors.blue_info} onClick={() => navigate(`/livros/${book.id_livro}`)} >
                      <FaInfoCircle  size='20px' />
                    </ActionButton>              
                    <ActionButton title='Editar' color={colors.yellow_warning} onClick={() => navigate(`/livros/edit/${book.id_livro}`)}>
                      <FaRegEdit  size='20px' />
                    </ActionButton>
                    <ActionButton title='Apagar Livro' color={colors.primary_red} onClick={() => deletBook(book.id_livro, book.titulo)}>
                      <FaTrashAlt  size='20px' />
                    </ActionButton>
                  </BoxActions>
                </TableBooksTd>
              </TableBooksRows>
              )) 
            }
          </TableBooksTbody>

        </TableBooks>
        <NewBook openNewBook={openNewBook} setOpenNewbook={setOpenNewbook} />
        <ConfirmDel confirm={confirm} setConfirm={setConfirm} bookName={bookName} bookId={bookId } />
      </Content>
    </Container>
  )
}

export default Livros