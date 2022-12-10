import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de React Native",
      description: "Curso excelente de React Native",
      duration: 300,
      teacher: {
        connect: {
          id: "f84dfd6e-5261-4352-81ae-0d20d387883e",
        },
      },
    },
  });

  console.log(result);
}

main();
