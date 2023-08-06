import { prisma } from "../lib/prisma";

export default async function fetchEmployment() {
 const employments = await prisma.employment.findMany({
  include: {
    skills: true,
  },
 });
  return employments;
}; 