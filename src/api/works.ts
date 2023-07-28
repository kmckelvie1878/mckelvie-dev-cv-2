interface Skill {
  id: number;
  name: string;
}

interface Work {
  id: number;
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
      id: 0,
      company: "interactive investor",
      role: "App Developer",
      date: "July 2023 - Present",
      location: "Manchester (Hybrid Remote)",
      skills: [
        { id: 0, name: "React" },
        { id: 1, name: "TypeScript" },
        { id: 2, name: "React Native" },
        { id: 3, name: "Chakra-UI" },
        { id: 4, name: "Jest / React Testing Library" }
      ],
      logoLight: "/img/logos/ii-light.svg",
      logoDark: "/img/logos/ii-dark.svg"
    },
    {
      id: 1,
      company: "Huler",
      role: "Front End Developer",
      date: "Feb 2023 - July 2023",
      location: "Stoke-On-Trent (Fully Remote)",
      skills: [
        { id: 0, name: "React" },
        { id: 1, name: "TypeScript" },
        { id: 3, name: "Next" },
        { id: 4, name: "Storybook" },
        { id: 5, name: "X-State" },
        { id: 6, name: "Styled Components" },
        { id: 7, name: "Formik / Yup" }
      ],
      logoLight: "/img/logos/huler.svg",
      logoDark: "/img/logos/huler.svg"
    },
    {
      id: 2,
      company: "Blinx Healthcare",
      role: "Software Engineer",
      date: "Dec 2021 - Feb 2023",
      location: "Daresbury (Hybrid Remote)",
      skills: [
        { id: 0, name: "React" },
        { id: 1, name: "TypeScript" },
        { id: 2, name: "Next" },
        { id: 3, name: "GraphQL / Apollo Client" },
        { id: 4, name: "Jest / React Testing Library" },
        { id: 5, name: "Material-UI" },
        { id: 6, name: "AG Grid" },
        { id: 7, name: "HighCharts" }
      ],
      logoLight: "/img/logos/blinx-light.png",
      logoDark: "/img/logos/blinx-dark.png"
    },
    {
      id: 3,
      company: "Gladstone Brookes",
      role: "Web Development Manager",
      date: "Feb 2018 - Dec 2021",
      location: "Warrington (Hybrid Remote)",
      skills: [
        { id: 0, name: "Vue" },
        { id: 1, name: "Nuxt" },
        { id: 2, name: "WordPress" },
        { id: 3, name: "SEO" },
        { id: 4, name: "CRO" },
        { id: 5, name: "Google Analytics / Data Studio" },
        { id: 6, name: "MailChimp" },
        { id: 7, name: "Adobe XD" },
        { id: 8, name: "Adobe Photoshop" },
        { id: 9, name: "Adobe Illustrator" }
      ],
      logoLight: "/img/logos/gb-light.png",
      logoDark: "/img/logos/gb-dark.png"
    },
    {
      id: 4,
      company: "Churchill Sloan",
      role: "Digital Marketing Manager",
      date: "March 2017 - Feb 2018",
      location: "Warrington (Secondment from Gladstone Brookes)",
      skills: [
        { id: 0, name: "WordPress" },
        { id: 1, name: "SEO" },
        { id: 2, name: "CRO" },
        { id: 3, name: "Google Analytics / Data Studio" },
        { id: 4, name: "MailChimp" },
        { id: 5, name: "Adobe Photoshop" },
        { id: 6, name: "Adobe Illustrator" },
        { id: 7, name: "Adobe After Effects / Premiere" }
      ],
      logoLight: "/img/logos/cs-light.png",
      logoDark: "/img/logos/cs-dark.png"
    },
    {
      id: 5,
      company: "Gladstone Brookes",
      role: "Digital Creative Lead",
      date: "March 2015 - March 2017",
      location: "Warrington",
      skills: [
        { id: 0, name: "WordPress" },
        { id: 1, name: "SEO" },
        { id: 2, name: "CRO" },
        { id: 3, name: "Google Analytics" },
        { id: 4, name: "MailChimp" },
        { id: 5, name: "Adobe Photoshop" },
        { id: 6, name: "Adobe Illustrator" },
        { id: 7, name: "Adobe After Effects / Premiere" }
      ],
      logoLight: "/img/logos/gb-light.png",
      logoDark: "/img/logos/gb-dark.png"
    }
  ]
};
