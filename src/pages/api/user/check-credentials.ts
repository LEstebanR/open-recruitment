import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/prisma'
import { hash, compare } from 'bcrypt'
import { omit } from 'lodash'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    await handlePOST(res, req)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    )
  }
}

const hashPassword = async (password: string) => {
  return await hash(password, 12)
}

// POST /api/user
async function handlePOST(res: NextApiResponse, req: NextApiRequest) {
  const user = await prisma.user.findUnique({
    where: { email: req.body.email },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      password: true,
    },
  })

  if (user && await compare(req.body.password, user.password)) {
    res.json(omit(user, 'password'))
  } else {
    res.status(400).end('Invalid credentials')
  }
}