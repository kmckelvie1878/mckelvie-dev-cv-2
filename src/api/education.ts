interface School {
  name: string;
  qualification: string;
  date: string;
  location: string;
  subject?: string;
  grade?: string;
}

interface Education {
  Schools: School[];
}

export const educationData: Education = {
  Schools: [
    {
      name: "Liverpool John Moores University",
      qualification: "Foundation Degree in Arts (FdA)",
      subject: "Music Production & Sound Design",
      grade: "Distinction",
      date: "2012 - 2014",
      location: "Liverpool, Merseyside",
    },
    {
      name: "St Helens College",
      qualification: "National Certificate (NC2)",
      subject: "Music Technology",
      grade: "Distinction",
      date: "2005 - 2007",
      location: "St Helens, Merseyside",
    },
    {
      name: "Sutton Academy",
      qualification: "GCSEs",
      date: "2000 - 2005",
      location: "St Helens, Merseyside",
    },
    
  ],
};
