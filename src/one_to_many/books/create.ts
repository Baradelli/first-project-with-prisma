import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.books.create({
    data: {
      name: "Arquitetura limpa",
      author_id: "72527115-15c3-4aef-90e0-c0f6cebebc3d",
    },
  });

  console.log(result);
}

main();
