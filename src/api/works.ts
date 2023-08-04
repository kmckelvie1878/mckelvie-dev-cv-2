interface Skill {
  name: string;
}

interface Work {
  company: string;
  role: string;
  date: string;
  location: string;
  skills: Skill[];
  logoLight: string;
  logoDark: string;
}

interface Employment {
  Works: Work[];
}

export const employmentData: Employment = {
  Works: [
    {
      company: "interactive investor",
      role: "App Developer",
      date: "July 2023 - Present",
      location: "Manchester (Hybrid Remote)",
      skills: [
        { name: "React" },
        { name: "TypeScript" },
        { name: "React Native" },
        { name: "XCode" },
        { name: "Jest / Native Testing Library" },
        { name: "Chakra-UI" },
        { name: "React Hook Forms / Yup"},
        { name: "React Query"},
      ],
      logoLight: "/img/logos/ii-light.svg",
      logoDark: "/img/logos/ii-dark.svg",
    },
    {
      company: "Huler",
      role: "Front End Developer",
      date: "Feb 2023 - July 2023",
      location: "Stoke-On-Trent (Fully Remote)",
      skills: [
        { name: "React" },
        { name: "TypeScript" },
        { name: "Next" },
        { name: "Storybook" },
        { name: "X-State" },
        { name: "Styled Components" },
        { name: "Formik / Yup" },
      ],
      logoLight: "/img/logos/huler.svg",
      logoDark: "/img/logos/huler.svg",
    },
    {
      company: "Blinx Healthcare",
      role: "Software Engineer",
      date: "Dec 2021 - Feb 2023",
      location: "Daresbury (Hybrid Remote)",
      skills: [
        { name: "React" },
        { name: "TypeScript" },
        { name: "Next" },
        { name: "GraphQL / Apollo Client" },
        { name: "Jest / React Testing Library" },
        { name: "Material-UI" },
        { name: "AG Grid" },
        { name: "HighCharts" },
      ],
      logoLight: "/img/logos/blinx-light.png",
      logoDark: "/img/logos/blinx-dark.png",
    },
    {
      company: "Gladstone Brookes",
      role: "Web Development Manager",
      date: "Feb 2018 - Dec 2021",
      location: "Warrington (Hybrid Remote)",
      skills: [
        { name: "Vue" },
        { name: "Nuxt" },
        { name: "WordPress" },
        { name: "SEO" },
        { name: "CRO" },
        { name: "Google Analytics / Data Studio" },
        { name: "MailChimp" },
        { name: "Adobe XD" },
        { name: "Adobe Photoshop" },
        { name: "Adobe Illustrator" },
      ],
      logoLight: "/img/logos/gb-light.png",
      logoDark: "/img/logos/gb-dark.png",
    },
    {
      company: "Churchill Sloan",
      role: "Digital Marketing Manager",
      date: "March 2017 - Feb 2018",
      location: "Warrington (Secondment from Gladstone Brookes)",
      skills: [
        { name: "WordPress" },
        { name: "SEO" },
        { name: "CRO" },
        { name: "Google Analytics / Data Studio" },
        { name: "MailChimp" },
        { name: "Adobe Photoshop" },
        { name: "Adobe Illustrator" },
        { name: "Adobe After Effects / Premiere" },
      ],
      logoLight: "/img/logos/cs-light.png",
      logoDark: "/img/logos/cs-dark.png",
    },
    {
      company: "Gladstone Brookes",
      role: "Digital Creative Lead",
      date: "March 2015 - March 2017",
      location: "Warrington",
      skills: [
        { name: "WordPress" },
        { name: "SEO" },
        { name: "CRO" },
        { name: "Google Analytics" },
        { name: "MailChimp" },
        { name: "Adobe Photoshop" },
        { name: "Adobe Illustrator" },
        { name: "Adobe After Effects / Premiere" },
      ],
      logoLight: "/img/logos/gb-light.png",
      logoDark: "/img/logos/gb-dark.png",
    },
  ],
};
