import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesManyModules.create({
    data: {
      courses_many: {
        create: {
          name: "Curso de NodeJS",
          duration: 200,
          description: "Curso completo de NodeJS",
        },
      },
      module: {
        create: {
          description: "Curso completo de PrismaIO",
          name: "PrismaIO",
        },
      },
    },
  });

  console.log(result);
}

main();
