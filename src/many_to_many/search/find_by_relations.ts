import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesManyModules.findMany({
    include: {
      courses_many: true,
      module: true,
    },
  });

  console.log(JSON.stringify(result));
}

main();
