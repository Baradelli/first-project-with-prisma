import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesMany.findMany({
    // where: {
    //   id: "8b06d8c8-71a2-4b1d-a32e-8579e1ab8c3d",
    // },
    include: {
      modules: true,
    },
  });

  console.log(JSON.stringify(result));
}

main();
