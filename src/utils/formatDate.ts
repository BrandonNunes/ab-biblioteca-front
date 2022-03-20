export default function formateDate (date:string | undefined ){

        const data = date?.split('T')[0].split('-')
        const hours = date?.split('T')[1].replace('.000Z', '')
        const ano = date?.split('T')[0].split('-')[0]
        const mes = date?.split('T')[0].split('-')[1]
        const dia = date?.split('T')[0].split('-')[2]
        const dataFormate = `${dia}/${mes}/${ano} - ${hours}`  
        return dataFormate;   
}