import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.modules.create({
    data: {
      description: "Aprendendo firebase do zero",
      name: "Firebase",
      courses: {
        create: {
          courses_many: {
            create: {
              name: "React Native",
              duration: 250,
            },
          },
        },
      },
    },
  });

  console.log(result);
}

main();
