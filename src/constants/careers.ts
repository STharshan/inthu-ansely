import { JobPosition } from "../components/types/careers";

export const careersConfig = {
  heading: "Come and join our fast growing team",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut id nisl tellus rhoncus, imperdiet consequat ornare. Nunc, cursus eget dui, ultricies lacus.",
  contactEmail: "contact@ansely.co.uk",
  contactQuestion: "Isn't your perfect position listed here?",
  contactMessage: "Send us an email to {email} and we will try to find a perfect role for you!",
  applyEmail: "contact@ansely.co.uk",
};

export const jobPositions: JobPosition[] = [
  {
    id: "senior-frontend-engineer-react",
    title: "Senior Front-End Engineer (React)",
    location: "Remote",
    employmentType: "Part-time / Full-time",
    description:
      "We are looking for an experienced React developer to build modern, responsive web applications. You will work closely with our design and backend teams to deliver exceptional user experiences.",
    aboutPosition:
      "As a Senior Front-End Engineer, you will lead the development of complex React applications, mentor junior developers, and drive best practices across our frontend codebase. You will collaborate with product managers and designers to translate requirements into elegant, performant interfaces that delight our users.",
    responsibilities: [
      "Design and implement scalable React components and architecture patterns.",
      "Optimize application performance and ensure cross-browser compatibility.",
      "Collaborate with backend engineers to integrate RESTful APIs and GraphQL endpoints.",
      "Mentor junior developers and conduct thorough code reviews.",
      "Stay current with React ecosystem trends and introduce improvements to our tech stack.",
    ],
    companyDescription:
      "At Ansely, we build innovative digital solutions that help businesses grow. Our team is passionate about creating exceptional software that makes a real difference. We believe in remote-first work, continuous learning, and maintaining a healthy work-life balance.",
    additionalInfo:
      "We offer competitive compensation, flexible working hours, and the opportunity to work on challenging projects with a talented team. If you are passionate about front-end development and want to make an impact, we would love to hear from you.",
  },
  {
    id: "senior-software-engineer-backend",
    title: "Senior Software Engineer (Backend)",
    location: "Remote",
    employmentType: "Part-time / Full-time",
    description:
      "Join our backend team to design and build robust, scalable server-side systems. You will work on API development, database architecture, and cloud infrastructure.",
    aboutPosition:
      "As a Senior Backend Engineer, you will be responsible for designing and implementing server-side logic, ensuring high performance and responsiveness to requests from the front-end. You will integrate user-facing elements with server-side logic and build reusable code and libraries for future use.",
    responsibilities: [
      "Design, develop, and maintain scalable backend services and APIs.",
      "Optimize database queries and ensure data integrity across systems.",
      "Implement security best practices and data protection measures.",
      "Collaborate with front-end developers on API design and integration.",
      "Participate in system architecture decisions and technical planning.",
    ],
    companyDescription:
      "At Ansely, we build innovative digital solutions that help businesses grow. Our team is passionate about creating exceptional software that makes a real difference. We believe in remote-first work, continuous learning, and maintaining a healthy work-life balance.",
    additionalInfo:
      "We work with modern technologies including Node.js, Python, PostgreSQL, and cloud platforms like AWS. If you enjoy solving complex problems and building systems that scale, this role is for you.",
  },
  {
    id: "senior-software-engineer-ai",
    title: "Senior Software Engineer (AI)",
    location: "Remote",
    employmentType: "Part-time / Full-time",
    description:
      "We are seeking an AI engineer to develop and deploy machine learning solutions. You will work on building intelligent systems that automate processes and provide valuable insights.",
    aboutPosition:
      "As a Senior AI Engineer, you will lead the design and implementation of AI and machine learning solutions that solve real business problems. You will work with large datasets, train and deploy models, and integrate AI capabilities into our products and services.",
    responsibilities: [
      "Design and implement machine learning models for various business applications.",
      "Process, clean, and validate data for model training and evaluation.",
      "Deploy and monitor ML models in production environments.",
      "Research and evaluate new AI technologies and frameworks.",
      "Collaborate with product teams to identify AI opportunities and solutions.",
    ],
    companyDescription:
      "At Ansely, we build innovative digital solutions that help businesses grow. Our team is passionate about creating exceptional software that makes a real difference. We believe in remote-first work, continuous learning, and maintaining a healthy work-life balance.",
    additionalInfo:
      "Experience with Python, TensorFlow or PyTorch, and cloud ML platforms is highly valued. We are building cutting-edge AI solutions and looking for engineers who want to push the boundaries of what is possible.",
  },
];

export const getJobById = (id: string): JobPosition | undefined => {
  return jobPositions.find((job) => job.id === id);
};
