import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User("Julia", "g@g", "2025-01-01");
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin("Carlos", "c@c", "2025-01-01");
console.log(novoAdmin.exibirInfos());

const novoDocente = new Docente("Ana", "a@a", "2025-01-01");
console.log(novoDocente.exibirInfos());

const dadosFicticios = User.exibirInfosGenericas("Cássio", "c@c");
console.log(dadosFicticios);
