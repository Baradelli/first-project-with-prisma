import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesManyModules.create({
    data: {
      fk_id_courses_many: "8b06d8c8-71a2-4b1d-a32e-8579e1ab8c3d",
      fk_id_module: "991dc4ec-cb41-4036-ac7b-9c4114e4747f",
    },
  });

  console.log(result);
}

main();
