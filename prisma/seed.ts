import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      id: '12345',
      email: 'alice@prisma.io',
      password: await hash('admin', 12),
      name: 'Alice',
      phone: '1234567',
      firstName: 'Alicia2',
      lastName: 'Smith',
      preferredLanguage: 'en',
      timeformat24: true,
      timezone: '5',
      weekStartDate: 'monday',
      photoId: 2,
      featureDiscovery: ['asdf1'],
      emailProvider: ['email1'],
      theme: 'a',
      notifications: { 'asdf': '1234' },
      updatedAt: new Date(),
    },
  })
  console.log({ alice })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })