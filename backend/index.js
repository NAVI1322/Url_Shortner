import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'postgresql://url_db_owner:p2GM0ZyQKNJR@ep-holy-breeze-a5j0f68q-pooler.us-east-2.aws.neon.tech/url_db?sslmode=require'
    }
  }
});

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'a@prisma.io',
    },
  })
  console.log(user)
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
