import User from "./User.js";

export default class Docente extends User {
  constructor(nome, email, nascimento, role = "docente", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  aprovarEstudante(estudante, curso) {
    return `Estudante ${estudante} aprovado no curso de ${curso} - Responsável: ${this.nome}`;
  }
}

// const newDocente = new Docente("Carlos", "c@c", "2025-01-01");
// console.log(newDocente.aprovarEstudante("Ana", "JavaScript"));
