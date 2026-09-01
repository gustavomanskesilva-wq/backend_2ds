// Importação moderna com ESM (import)
import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Home Ok!')
})
app.get('/livros',(req, res) => {
    res.send('Minha livros de sair...!')
})

app.listen(3000, ()=> (console.log('Servidor esta vivo!')))