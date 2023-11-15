# Learning-Api-Node
## O Projeto consiste em um CRUD simples de usuario com NODE, express e Mongoose

Modelo de dados
id: {
  type: String,
  unique: true,
  required: true,
  lowercase: true
},
name: {
  type: String,
  required: true
},
email: {
  type: String,
  unique: true,
  required: true,
  lowercase: true
},
createdAt: {
  type: Date,
  default: Date.now
}

## Como rodar

Instalar projeto:
`npm install`

Iniciar projeto:
`npm run dev`
