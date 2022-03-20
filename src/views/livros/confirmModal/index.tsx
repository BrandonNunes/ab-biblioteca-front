import React from "react";
import { ConfirmModal, Question, ContainerButtons, CloseButton, ConfirmButton } from './styles'
import colors from "../../../utils/colors";
import api from '../../../services/api';




export default function ConfirmDel( props: { confirm:boolean, setConfirm(e:boolean): void, bookName: string , bookId: number}) {

    

async function deleteBook(id: number) {
    const payload = {
        id_livro: id 
    }
    try {
       const resp = await api.delete('livro/del', {
            data: payload
        } )
        window.location.reload()
        console.log(resp.data)
        
    } catch (error) {
        console.log(error)
        alert('Houve um erro'+' '+error)
    }
}


    return(
        <ConfirmModal isOpen={props.confirm} ariaHideApp={false}>
            <Question>Deseja realmente  apagar "<span style={{color: colors.blue_info}}>{props.bookName}</span>" ?</Question>
            <ContainerButtons>
                <CloseButton onClick={() => props.setConfirm(false)}> Cancelar</CloseButton>
                <ConfirmButton onClick={()=> deleteBook(props.bookId)}>Sim, apagar</ConfirmButton>

            </ContainerButtons>
        
        </ConfirmModal>
    )
}