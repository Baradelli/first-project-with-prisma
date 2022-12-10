import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesMany.create({
    data: {
      name: "Curso de ReactJS",
      description: "Curso excelente de ReactJS",
      duration: 500,
    },
  });

  console.log(result);
}

main();
