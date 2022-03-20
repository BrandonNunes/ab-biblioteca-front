import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "../views/home";
import Locacoes from "../views/locacoes";
import Livros from "../views/livros";
import BookDetails from "../views/livros/bookDetails";
import ChangeBook from "../views/livros/AlterBook";
import Alunos from "../views/alunos";
import StudentsDetails from "../views/alunos/studentDetails";
import ChangeStudent from "../views/alunos/AlterStudent";


export default function MyRoutes() {

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/locacoes" element={<Locacoes />} />
            <Route path="/livros" element={<Livros />} />
            <Route path="/livros/:id_livro" element={<BookDetails />} />
            <Route path="/livros/edit/:id_livro" element={<ChangeBook />} />
            <Route path="/alunos" element={<Alunos />} />
            <Route path="/alunos/:id" element={<StudentsDetails />} />
            <Route path="/alunos/edit/:id" element={<ChangeStudent />} />
        </Routes>
    )
}