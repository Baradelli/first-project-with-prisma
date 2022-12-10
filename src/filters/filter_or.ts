import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.findMany({
    where: {
      OR: [
        {
          name: {
            contains: "ReactJS",
          },
        },
        {
          name: {
            contains: "React",
          },
        },
      ],
      AND: {
        duration: 300,
      },
    },
  });

  const data = {
    result,
    count: result.length,
  };

  console.log(data);
}

main();
