import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesManyModules.delete({
    where: {
      id: "a1f40d33-67c6-4edd-91dc-ddb97de385b6",
    },
  });

  console.log(result);
}

main();
