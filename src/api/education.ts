import { prisma } from "../lib/prisma";

export default async function fetchEducation() {
 const education = await prisma.education.findMany();
  return education;
};