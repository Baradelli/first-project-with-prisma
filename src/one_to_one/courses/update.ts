import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.update({
    where: {
      id: "97e2a683-c4e3-49ac-b912-b0a25ac6f61e",
    },
    data: {
      description: "Curso excelente de ReactJs com Diego",
    },
  });

  console.log(result);
}

main();
