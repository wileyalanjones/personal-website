export const siteConfig = {
  name: "Wiley Jones",
  title: "Software Engineer | Machine Learning Engineer | AI Engineer",
  tagline: "Building software and machine learning applications to solve real world problems.",
  bio: "I'm a recent computer science graduate from Oregon State. I build software and AI tools that solve real problems. When I'm not coding, I'm at the gym, on the golf course, or playing with my dog, Charles. There's a hidden picture of him on this page if you can find it. 🐾",
  roles: ['Software', "Machine Learning", "Artificial Intelligence"],
  email: "wileyalanjones@gmail.com",
  github: "https://github.com/wileyalanjones",
  linkedin: "https://linkedin.com/in/wiley-jones-99bba3122/",
  resumePath: "/wiley_jones_resume.pdf",
};

export const experience = [
  {
    id: 1,
    title: "B.S. Computer Science",
    company: "Oregon State University",
    location: "Corvallis, Oregon",
    startDate: "April 2024",
    endDate: "June 2026",
    description: "Studying software engineering and machine learning, building production-ready applications.",
    logo: '/osu_logo.svg',
    highlights: [],
    tech: [],
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    company: "Anheuser-Busch",
    location: "St. Louis, Missouri",
    startDate: "June 2026",
    endDate: "August 2026",
    description: "I worked with the social media team to create AI workflows that automated brand responses to low-priority, positive sentiment comments",
    logo: "/AB.webp",
    highlights: [
      "Built an end-to-end social media response agent",
      "AI responses outperformed human-written responses in a blind A/B test",
      "Increased brand reply rate by 10×",
    ],
    tech: ["Python", "SQL", "OpenAI", "Databricks", "Docker", "Azure"]
  },
]

export const projects = [
  {
    id: 1,
    title: "Golf Swing Sequencing",
    description: "This is a CNN/LSTM Neural Network Project that can take in a video of a golf swing and return the frames that correspond to the eight sequences of the swing.",
    tech: ["Python", "Tensorflow", "Machine Learning", "CNN/LSTM", "OpenCV"],
    githubUrl: "https://github.com/wileyalanjones/GolfSwingSequencing",
    videoId: "uc4Q1MGml6Y",
    featured: true,
  },
  {
    id: 2,
    title: "Music Genre Classifier",
    description: "Music Genre Classification application. Able to classify any music clip into one of 10 genres. My role was architecting and training the model for the application.",
    tech: ["Python", "Tensorflow", "Machine Learning", "CNN"],
    githubUrl: "https://github.com/hutsonjo/CNN_Music_Classifier",
    featured: true,
  },
  {
    id: 3,
    title: "Golf Tracker",
    description: "Website for people to track their golf rounds, courses, clubs, stats, and more.",
    tech: ["Javascript", "MERN", "Node.js", "MongoDB", "React.js"],
    githubUrl: "https://github.com/wileyalanjones/Golf_Tracker",
    featured: false,
  },
  {
    id: 4,
    title: "Movie Guesser Game",
    description: "Movie Title Guesser game based on Contexto.",
    tech: ["Python", "Streamlit", "Embeddings",],
    githubUrl: "https://github.com/wileyalanjones/movie_guesser",
    liveUrl: "https://movieguesser-msebwvwkbhvznxqmcquz6m.streamlit.app/",
    featured: false,
  },
];

export const skills = {
  languages: ["Python", "TypeScript", "C++", "SQL"],
  frontend: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  backend: ["Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB", "Redis"],
  tools: ["Git", "Docker", "Azure", "Vercel", "CI/CD", "Testing"],
};

export const resume = {
  title: "Resume",
  description: "View my resume to learn more about my experience, education, and skills.",
  fileName: "wiley_jones_resume.pdf",
};