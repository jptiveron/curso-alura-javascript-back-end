export default class User {
  #nome;
  #email;
  #nascimento;
  #role;
  #ativo;
  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "estudante";
    this.#ativo = ativo;
  }

  get nome() {
    return this.#nome;
  }

  set nome(novoNome) {
    if (novoNome === "") {
      throw new Error("Nome não pode ser vazio");
    }
    this.#nome = novoNome;
  }

  get email() {
    return this.#email;
  }

  get nascimento() {
    return this.#nascimento;
  }

  get role() {
    return this.#role;
  }

  get ativo() {
    return this.#ativo;
  }

  // exibirInfos() {
  //   return `${this.nome}, ${this.email}`;
  // }

  exibirInfos() {
    if (this.role === "estudante") {
      return `Dados do estudante: ${this.nome}`;
    }

    if (this.role === "admin") {
      return `Dados do admin: ${this.nome}, ${this.role}`;
    }

    if (this.role === "docente") {
      return `Dados do docente: ${this.nome}, ${this.#email}`;
    }
  }

  static exibirInfosGenericas(nome, email) {
    return `Dados do usuário: ${nome}, ${email}`;
  }
}

// const newUser = new User("João", "j@j", "2025-01-01");
// console.log(newUser);
// console.log(newUser.exibirInfos());

// console.log(User.prototype.isPrototypeOf(newUser));
