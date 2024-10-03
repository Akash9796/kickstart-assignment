const webinarData = [
  {
    id: "webinar-001",
    name: "Akash Shukla",
    imgUrl: `https://randomuser.me/api/portraits/men/${Math.floor(
      Math.random() * 100
    )}.jpg`,
    role: "Senior Software Engineer",
    company: "Infosys Limited",
    topics: [
      "GraphQL Integration",
      "Advanced React Patterns",
      "Optimizing React Performance",
    ],
    webinarTitle: "Mastering GraphQL with React",
    startDate: "2024-01-15",
    startTime: "10:00 AM",
    endTime: "12:00 PM",
  },
  {
    id: "webinar-002",
    name: "Rahul Verma",
    imgUrl: `https://randomuser.me/api/portraits/men/${Math.floor(
      Math.random() * 100
    )}.jpg`,
    role: "Senior Frontend Developer",
    company: "HCL Technologies",
    topics: [
      "State Management with Redux",
      "Implementing Web Security in React",
      "React Hooks Deep Dive",
    ],
    webinarTitle: "State Management and Security Best Practices",
    startDate: "2024-03-22",
    startTime: "11:00 AM",
    endTime: "1:00 PM",
  },
  {
    id: "webinar-003",
    name: "Harsh Sharma",
    imgUrl: `https://randomuser.me/api/portraits/men/${Math.floor(
      Math.random() * 100
    )}.jpg`,
    role: "Fullstack MERN Developer",
    company: "TechHub Solutions",
    topics: [
      "Next.js for Beginners",
      "Server-Side Rendering with Next.js",
      "API Integration with Next.js",
    ],
    webinarTitle: "Building Scalable Web Apps with Next.js",
    startDate: "2024-06-10",
    startTime: "2:00 PM",
    endTime: "4:00 PM",
  },
  {
    id: "webinar-004",
    name: "Ankit Mehta",
    imgUrl: `https://randomuser.me/api/portraits/men/${Math.floor(
      Math.random() * 100
    )}.jpg`,
    role: "Lead Frontend Engineer",
    company: "InnovateIT",
    topics: [
      "TypeScript for React Developers",
      "Error Handling in TypeScript",
      "Best Practices with TypeScript",
    ],
    webinarTitle: "Enhancing React Projects with TypeScript",
    startDate: "2024-08-05",
    startTime: "3:00 PM",
    endTime: "5:00 PM",
  },
  {
    id: "webinar-005",
    name: "Rahul Mehra",
    imgUrl: `https://randomuser.me/api/portraits/men/${Math.floor(
      Math.random() * 100
    )}.jpg`,
    role: "Frontend Architect",
    company: "DigitalWave",
    topics: [
      "Micro Frontends Architecture",
      "Federated Modules with Webpack 5",
      "Scaling React Apps",
    ],
    webinarTitle: "Scaling Applications with Micro Frontends",
    startDate: "2024-11-27",
    startTime: "9:00 AM",
    endTime: "11:00 AM",
  },
  {
    id: "webinar-006",
    name: "Dilip Ghosh",
    imgUrl: `https://randomuser.me/api/portraits/men/${Math.floor(
      Math.random() * 100
    )}.jpg`,
    role: "Senior UI Developer",
    company: "UIBytes",
    topics: [
      "CSS in JS",
      "Tailwind CSS Best Practices",
      "Responsive Design Techniques",
    ],
    webinarTitle: "Advanced CSS Techniques for Modern Web Development",
    startDate: "2024-12-01",
    startTime: "10:30 AM",
    endTime: "12:30 PM",
  },
];

export const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const Months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
  "Jan",
];

export default webinarData;
