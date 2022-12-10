import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.findMany({
    where: {
      name: {
        startsWith: "curso",
      },
    },
  });

  const data = {
    result,
    count: result.length,
  };

  console.log(data);
}

main();
