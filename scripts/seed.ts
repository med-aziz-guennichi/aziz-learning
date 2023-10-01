const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Computer Science" },
        { name: "Developement web" },
        { name: "Engineering" },
        { name: "Developement mobile" },
        { name: "Project" },
        { name: "Test automation" },
        { name: "Test manuelle" },
        { name: "Design" },
      ],
    });
    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();
