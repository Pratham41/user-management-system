const prisma = require("../config/db");
const bcrypt = require("bcryptjs");

const generatePhoneNumber = (prefix) => {
  return `${prefix}${Math.floor(Math.random() * 1000000000)
    .toString()
    .padStart(10, "0")}`;
};

const seed = async () => {
  const hashedPassword = await bcrypt.hash("password123", 10);
  const users = [];
  const names = [
    "Aarav Sharma",
    "Vivaan Verma",
    "Aditya Reddy",
    "Vihaan Iyer",
    "Arjun Singh",
    "Sai Ram",
    "Reyansh Rao",
    "Ayaan Patel",
    "Krishna Joshi",
    "Ishaan Nair",
    "Shaurya Reddy",
    "Atharv Mehta",
    "Aarush Kumar",
    "Aaryan Gupta",
    "Dhruv Khanna",
    "Kabir Desai",
    "Anay Kapoor",
    "Ved Thakur",
    "Om Prasad",
    "Parth Chatterjee",
    "Laksh Jain",
    "Arnav Bansal",
    "Arin Kulkarni",
    "Aadiv Sharma",
    "Rudra Bhatt",
    "Ayush Kumar",
    "Aryan Pandey",
    "Ahaan Singh",
    "Samarth Sinha",
    "Advik Reddy",
    "Vivaan Nair",
    "Ishaan Kapoor",
    "Yuvraj Verma",
    "Veer Iyer",
    "Arjun Reddy",
    "Rohan Patel",
    "Kian Joshi",
    "Aarav Rao",
    "Aarush Nair",
    "Aarav Mehta",
    "Aaryan Kumar",
    "Atharva Gupta",
    "Avyaan Khanna",
    "Aarush Jain",
    "Advik Desai",
    "Reyansh Kapoor",
    "Krish Thakur",
    "Shaurya Prasad",
    "Aryan Chatterjee",
    "Arjun Sharma",
  ];

  const contactNames = [
    "Riya",
    "Ananya",
    "Diya",
    "Pooja",
    "Rohit",
    "Rahul",
    "Sanjay",
    "Neha",
    "Simran",
    "Tina",
    "Rakesh",
    "Nikhil",
    "Suresh",
    "Manish",
    "Anjali",
    "Priya",
    "Kunal",
    "Varun",
    "Arun",
    "Anil",
    "Pankaj",
    "Deepak",
    "Ravi",
    "Amit",
    "Ashish",
    "Karan",
    "Nitin",
    "Shweta",
    "Preeti",
    "Sneha",
    "Vivek",
    "Gaurav",
    "Mukesh",
    "Jatin",
    "Siddharth",
    "Harsh",
    "Sachin",
    "Mohan",
    "Suraj",
    "Vikram",
    "Raj",
    "Vijay",
    "Ajay",
    "Ankit",
    "Prateek",
    "Vikas",
    "Rajesh",
    "Naveen",
    "Dev",
  ];

  for (let i = 0; i < 50; i++) {
    const hasEmail = i % 2 === 0;
    const user = {
      name: names[i],
      email: hasEmail ? `user${i}@test.com` : null,
      phoneNumber: generatePhoneNumber("91"),
      password: hashedPassword,
      contacts: {
        create: [
          {
            name: contactNames[Math.floor(Math.random() * contactNames.length)],
            phoneNumber: generatePhoneNumber("91"),
          },
          {
            name: contactNames[Math.floor(Math.random() * contactNames.length)],
            phoneNumber: generatePhoneNumber("91"),
          },
        ],
      },
    };

    users.push(user);
  }

  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }

  console.log("Seed data created successfully");
};

seed()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
