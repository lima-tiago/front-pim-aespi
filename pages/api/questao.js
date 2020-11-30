// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json([
    {
      id: 1,
      questao: 'Como você avalia o comportamento do(a) coordenador(a) do curso em relação a comunicação com os alunos?',
    },
    {
      id: 2,
      questao: 'Como você avalia o(a) professor(a) de 229S - Banco de Dados em relação à didática?',
    },
  ])
}
