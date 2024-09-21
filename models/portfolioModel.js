const mongoose = require("mongoose");
const introSchema = new mongoose.Schema({
  welcomeText: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    require: true
  },
  description1: {
    type: String,
    require: true
  },
  description2: {
    type: String,
    require: true
  }
});
const aboutSchema = new mongoose.Schema({
  lottieURL: {
    type: String,
    required: true
  },
  description1: {
    type: String,
    required: true
  },
  description2: {
    type: String,
    required: true
  },
  skills: {
    type: Array,
    required: true
  }
});
const educationSchema = new mongoose.Schema({
  degree: {
    type: String,
    required: true
  },
  institution: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  }
});
const experienceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});
const projectsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});
const coursesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  instructor: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});
const contactSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Gender: {
    type: String,
    required: true
  },
  Age: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  Phone: {
    type: String,
    required: true
  },
  Address: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  }
});
module.exports = {
  Intro: mongoose.model("intros", introSchema),
  About: mongoose.model("abouts", aboutSchema),
  Education: mongoose.model("educations", educationSchema),
  Experience: mongoose.model("experis", experienceSchema),
  Project: mongoose.model("projects", projectsSchema),
  Course: mongoose.model("courses", coursesSchema),
  Contact: mongoose.model("contact", contactSchema)
};