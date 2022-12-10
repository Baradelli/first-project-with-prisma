import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.teachers.update({
    where: {
      id: "9fa076ac-0a19-46ee-bcbb-329c282881e7",
    },
    data: {
      name: "Rafa Camargo",
    },
  });

  console.log(result);
}

main();
