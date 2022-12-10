import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesMany.update({
    where: {
      id: "f3f18c8b-84d3-4c9c-a2ca-d04c60c7435f",
    },
    data: {
      name: "Curso de php",
    },
  });

  console.log(result);
}

main();
