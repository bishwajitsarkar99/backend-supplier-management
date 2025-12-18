// index.ts
import 'dotenv/config'
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL!;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('ROLE SEED STARTED');

  const roles = await prisma.roles.createMany({
    data: [
      { role_name: 'Super Admin', status: 0, created_at: new Date(), updated_at: new Date() },
      { role_name: 'Admin', status: 0, created_at: new Date(), updated_at: new Date() },
      { role_name: 'Sub Admin', status: 0, created_at: new Date(), updated_at: new Date() },
      { role_name: 'User', status: 0, created_at: new Date(), updated_at: new Date() },
      { role_name: 'Viewer', status: 0, created_at: new Date(), updated_at: new Date() },
    ],
    skipDuplicates: true,
  });

  console.log('Inserted roles:', roles);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
