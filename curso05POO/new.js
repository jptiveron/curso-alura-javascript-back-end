function User(nome, email) {
  this.nome = nome;
  this.email = email;

  this.exibirInfos = function () {
    return `${this.nome}, ${this.email}`;
  };
}

const novoUser = new User("João", "j@j.com");
console.log(novoUser.exibirInfos());
