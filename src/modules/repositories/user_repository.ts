const prisma = require('../../prisma/prisma')

export const create_user = async (data: any) => {
  const created_user = await prisma.usuario.create({
    data,
    select: {
      criadoEm: true, // Apenas esse campo será retornado
    },
  })

  return created_user
}
