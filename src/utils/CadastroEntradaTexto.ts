const seccoes = [
    {
      id: 1,
      titulo: 'Insira seus dados',
      entradaTexto: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Nome completo'
        },
        {
          id: 2,
          label: 'Email',
          placeholder: 'Digite seu email'
        }
      ],
      checkbox: []
    },
    {
      id: 2,
      titulo: 'Dados do veículo',
      entradaTexto: [
        {
          id: 3,
          label: 'Placa',
          placeholder: 'Placa do Veículo'
        }
      ],
      checkbox: [] // corrigido o erro de digitação aqui
    },
    {
      id: 3,
      titulo: 'Selecione a sua lavação',
      entradaTexto: [],
      checkbox: [
        {
          id: 1,
          value: 'Lavação Básica - Carro Pequeno'
        },
        {
          id: 2,
          value: 'Lavação Básica - Carro Médio'
        },
        {
          id: 3,
          value: 'Lavação Básica - Carro Grande'
        }
      ]
    }
  ]

  export{seccoes}