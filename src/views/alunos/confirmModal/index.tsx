import React from "react";
import { ConfirmModal, Question, ContainerButtons, CloseButton, ConfirmButton } from './styles'
import colors from "../../../utils/colors";
import api from '../../../services/api';




export default function ConfirmDel( props: { confirm:boolean, setConfirm(e:boolean): void, studentName: string , studentId: number}) {

    

async function deleteStudent(id: number) {
    const payload = {
        id 
    }
    try {
       const resp = await api.delete('alunos/del', {
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
            <Question>Deseja realmente  apagar "<span style={{color: colors.blue_info}}>{props.studentName}</span>" ?</Question>
            <ContainerButtons>
                <CloseButton onClick={() => props.setConfirm(false)}> Cancelar</CloseButton>
                <ConfirmButton onClick={()=> deleteStudent(props.studentId)}>Sim, apagar</ConfirmButton>

            </ContainerButtons>
        
        </ConfirmModal>
    )
}