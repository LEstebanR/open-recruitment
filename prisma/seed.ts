import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      id: '12345',
      email: 'admin@admin.ad',
      password: await hash('admin', 12),
      name: 'Admin',
      phone: '1234567',
      firstName: 'Admin',
      lastName: 'Smith',
      preferredLanguage: 'en',
      timeformat24: true,
      timezone: '5',
      weekStartDate: 'monday',
      featureDiscovery: ['asdf1'],
      emailProvider: ['email1'],
      theme: 'light',
      notifications: { 'asdf': '1234' },
      updatedAt: new Date(),
      userRole: 'SUPERADMIN',
    },
  })
  console.log({ alice })

  const company1 = await prisma.company.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Testing Company Co',
      ownerId: '12345',
    },
  })
  console.log({ company1 })

  const alicePhoto = '1' || await prisma.attachment.upsert({
    where: { id: 1 },
    update: {},
    create: {
      contentType: 'profilePhoto',
      filename: 'photo1.png',
      path: '/images/photo1.png',
      uploaderId: 1,
      updatedAt: new Date(),
    },
  })
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