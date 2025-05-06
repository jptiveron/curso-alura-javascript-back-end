const user = {
  nome: "Juliana",
  email: "j@j.com",
  nascimento: "2024-01-01",
  role: "estudante",
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
};

// user.exibirInfos();
// const exibir = user.exibirInfos;
// exibir(); // undefined undefined
// O this não se refere mais ao objeto user, mas sim ao contexto global
// Para resolver isso, podemos usar o bind
const exibir = function () {
  console.log(this.nome, this.email);
};
const exibirNome = exibir.bind(user);
exibirNome(); // Juliana
