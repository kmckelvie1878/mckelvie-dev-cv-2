import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function fetchEmployment() {
 const employments = await prisma.employment.findMany({
  include: {
    skills: true,
  },
 });
  return employments;
}; 