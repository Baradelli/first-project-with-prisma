import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const results = await prisma.courses.findMany({
    include: {
      teacher: true,
    },
  });

  console.log(results);
}

main();
