import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de ReactJS",
      duration: 300,
      description: "Curso de ReactJS",
      fk_id_teacher: "e2829fda-534f-4b92-bd32-e1e6f6272239",
    },
  });

  console.log(result);
}

main();
