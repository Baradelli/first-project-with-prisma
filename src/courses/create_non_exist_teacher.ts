import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de Elixir",
      duration: 500,
      description: "Curso excelente de Elixir",
      teacher: {
        create: {
          name: "Raga Camargo",
        },
      },
    },
  });

  console.log(result);
}

main();
