import express from 'express'


const router = express.Router()
const prisma = require('../../prisma/prisma')

router.post('/user', async (req, res) => {
  try {
    const usuario = await prisma.usuario.create({
      data: req.body,
      select: { criadoEm: true },
    })
    res.status(201).json(usuario)
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar usuário' })
  }
})

module.exports = router
