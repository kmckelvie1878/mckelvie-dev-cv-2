type ProgressBarProps = {
  value: number;
  label: string;
};

type Category = {
  label: string;
  abbreviation: string;
  progressBars: ProgressBarProps[];
};

export const attributeData: Category[] = [
  {
    label: "Front End Development",
    abbreviation: "FE",
    progressBars: [
      { value: 97, label: "HTML" },
      { value: 96, label: "CSS" },
      { value: 82, label: "JavaScript" },
      { value: 88, label: "React" },
      // { value: 80, label: "Vue"},
      { value: 85, label: "TypeScript" },
      { value: 79, label: "Next" },
      // { value: 90, label: "WordPress"},
      { value: 78, label: "Tailwind" },
      // { value: 60, label: "GraphQL" },
    ],
  },
  {
    label: "Back End Development",
    abbreviation: "BE",
    progressBars: [
      { value: 52, label: "Node" },
      { value: 48, label: "Express" },
      { value: 43, label: "MongoDB" },
      { value: 42, label: "DynamoDB" },
      { value: 64, label: "GraphQL" },
      { value: 50, label: "Prisma" },
    ],
  },
  {
    label: "DevOps Architecture",
    abbreviation: "DO",
    progressBars: [
      { value: 59, label: "Git" },
      { value: 50, label: "Vercel" },
      { value: 40, label: "AWS" },
      { value: 30, label: "CI/CD" },
    ],
  },
  {
    label: "User Interface Design",
    abbreviation: "UI",
    progressBars: [
      { value: 85, label: "Adobe XD" },
      { value: 60, label: "Figma" },
      { value: 92, label: "Photoshop" },
      { value: 85, label: "Illustrator" },
    ],
  },
  {
    label: "Digital Marketing",
    abbreviation: "DM",
    progressBars: [
      { value: 92, label: "SEO" },
      { value: 88, label: "CRO" },
      { value: 84, label: "Google Analytics" },
      { value: 83, label: "Data Studio" },
      { value: 69, label: "Google Ads" },
      { value: 63, label: "Facebook Ads" },
    ],
  },
  {
    label: "Audio/Video Production",
    abbreviation: "AV",
    progressBars: [
      { value: 93, label: "Pro Tools" },
      { value: 56, label: "Logic Pro X" },
      { value: 78, label: "Premiere Pro" },
      { value: 75, label: "After Effects" },
      { value: 69, label: "Final Cut Pro" },
    ],
  },
];

export const calculateScore = (progressBars: ProgressBarProps[]): number => {
  const totalValues = progressBars.reduce((sum, bar) => sum + bar.value, 0);
  const averageScore = totalValues / progressBars.length;
  const roundedScore = Math.round(averageScore); // Round to the nearest integer
  return roundedScore / 10;
};

export const statsLeft: { value: number; label: string }[] = attributeData
  .slice(0, 3)
  .map((category) => ({
    value: calculateScore(category.progressBars) * 10,
    label: category.abbreviation,
  }));

export const statsRight: { value: number; label: string }[] = attributeData
  .slice(3, 6)
  .map((category) => ({
    value: calculateScore(category.progressBars) * 10,
    label: category.abbreviation,
  }));
