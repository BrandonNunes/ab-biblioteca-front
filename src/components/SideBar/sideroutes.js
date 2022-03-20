import React from "react"
import * as Icons from 'react-icons/fa'



export const SideBarRoutes = [

    {
     tittle: 'Home',
     path: '/',
     icon: <Icons.FaHome />, 
    },
    {
     tittle: 'Locações',
     path: '/locacoes',
     icon: <Icons.FaBookmark />, 
    },
    {
        tittle: 'Livros',
        path: '/livros',
        icon: <Icons.FaBook />, 
    },
    {
        tittle: 'Alunos',
        path: '/alunos',
        icon: <Icons.FaGraduationCap />, 
    }
]

  