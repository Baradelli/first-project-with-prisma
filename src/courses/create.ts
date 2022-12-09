import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 300,
      name: "Curso de ReactJs",
      description: "Curso excelente de ReactJs com Dieção",
    },
  });

  console.log(result);
}

main();
