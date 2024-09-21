const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

const {
  Intro,
  About,
  Experience,
  Project,
  Course,
  Contact,
  Education
} = require('../models/portfolioModel');

// Fetch all portfolio data
router.get('/get-portfolio-data', async (req, res) => {
  try {
    const intro = await Intro.findOne();
    const about = await About.findOne();
    const educations = await Education.find();
    const experiences = await Experience.find();
    const projects = await Project.find();
    const courses = await Course.find();
    const contact = await Contact.findOne();
    res.status(200).json({
      intro,
      about,
      educations,
      experiences,
      projects,
      courses,
      contact
    });
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    res.status(500).json({
      error: error.message
    });
  }
});

// Update intro
router.post('/update-intro', async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate({
      _id: req.body._id
    }, req.body, {
      new: true
    });
    res.status(200).send({
      data: intro,
      success: true,
      message: 'Intro updated successfully'
    });
  } catch (error) {
    console.error('Error updating intro:', error);
    res.status(500).json({
      error: error.message
    });
  }
});

// Update about
router.post('/update-about', async (req, res) => {
  try {
    const about = await About.findOneAndUpdate({
      _id: req.body._id
    }, req.body, {
      new: true
    });
    res.status(200).send({
      data: about,
      success: true,
      message: 'About updated successfully'
    });
  } catch (error) {
    console.error('Error updating about:', error);
    res.status(500).json({
      error: error.message
    });
  }
});

// Add experience
router.post('/add-experience', async (req, res) => {
  try {
    const experience = await Experience.create(req.body);
    res.status(200).send({
      data: experience,
      success: true,
      message: 'Experience added successfully'
    });
  } catch (error) {
    console.error('Error adding experience:', error);
    res.status(500).json({
      error: error.message
    });
  }
});

// Update experience
router.post('/update-experience', async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(req.body.id, req.body, {
      new: true
    });
    res.status(200).send({
      data: experience,
      success: true,
      message: 'Experience updated successfully'
    });
  } catch (error) {
    console.error('Error updating experience:', error);
    res.status(500).json({
      error: error.message
    });
  }
});

// Delete experience
router.post('/delete-experience', async (req, res) => {
  try {
    await Experience.findByIdAndDelete(req.body.id);
    res.status(200).send({
      success: true,
      message: 'Experience deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting experience:', error);
    res.status(500).json({
      error: error.message
    });
  }
});

// Add project
router.post('/add-project', async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(200).send({
      data: project,
      success: true,
      message: 'Project added successfully'
    });
  } catch (error) {
    console.error('Error adding project:', error);
    res.status(500).json({
      error: error.message
    });
  }
});

// Update project
router.post('/update-project', async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.body.id, req.body, {
      new: true
    });
    res.status(200).send({
      data: project,
      success: true,
      message: 'Project updated successfully'
    });
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(500).json({
      error: error.message
    });
  }
});

// Delete project
router.post('/delete-project', async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.body.id);
    res.status(200).send({
      success: true,
      message: 'Project deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({
      error: error.message
    });
  }
});
// Fetch all courses
router.get('/get-courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({
      error: error.message
    });
  }
});

// Add course
router.post('/add-course', async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(200).send({
      data: course,
      success: true,
      message: 'Course added successfully'
    });
  } catch (error) {
    console.error('Error adding course:', error);
    res.status(500).json({
      error: error.message
    });
  }
});

// Update course
router.post('/update-course', async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.body.id, req.body, {
      new: true
    });
    res.status(200).send({
      data: course,
      success: true,
      message: 'Course updated successfully'
    });
  } catch (error) {
    console.error('Error updating course:', error);
    res.status(500).json({
      error: error.message
    });
  }
});

// Delete course
router.post('/delete-course', async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.body.id);
    res.status(200).send({
      success: true,
      message: 'Course deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting course:', error);
    res.status(500).json({
      error: error.message
    });
  }
});
// Fetch all education data
router.get('/get-education', async (req, res) => {
  try {
    const educations = await Education.find();
    res.status(200).json(educations);
  } catch (error) {
    console.error('Error fetching education data:', error);
    res.status(500).json({
      error: error.message
    });
  }
});

// Add education
router.post('/add-education', async (req, res) => {
  try {
    const education = await Education.create(req.body);
    res.status(200).send({
      data: education,
      success: true,
      message: 'Education added successfully'
    });
  } catch (error) {
    console.error('Error adding education:', error);
    res.status(500).json({
      error: error.message
    });
  }
});

// Update education
router.post('/update-education', async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(req.body.id, req.body, {
      new: true
    });
    res.status(200).send({
      data: education,
      success: true,
      message: 'Education updated successfully'
    });
  } catch (error) {
    console.error('Error updating education:', error);
    res.status(500).json({
      error: error.message
    });
  }
});

// Delete education
router.post('/delete-education', async (req, res) => {
  try {
    await Education.findByIdAndDelete(req.body.id);
    res.status(200).send({
      success: true,
      message: 'Education deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting education:', error);
    res.status(500).json({
      error: error.message
    });
  }
});

// Fetch all contacts
router.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      error: error.message
    });
  }
});

// Update contact
router.post('/update-contact', async (req, res) => {
  try {
    // Find and update the contact
    const contact = await Contact.findOneAndUpdate({
      _id: req.body._id
    },
    // Filter to find the contact by _id
    req.body,
    // Update the contact with the request body
    {
      new: true
    } // Return the updated document
    );

    // Check if the contact was found and updated
    if (contact) {
      res.status(200).send({
        data: contact,
        success: true,
        message: 'Contact updated successfully'
      });
    } else {
      res.status(404).send({
        success: false,
        message: 'Contact not found'
      });
    }
  } catch (error) {
    console.error('Error updating contact:', error);
    res.status(500).json({
      error: error.message
    });
  }
});

/*
// Protected route - GET profile
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const userProfile = {
      username: req.user.username,
      email: req.user.email
    };
    handleSuccessResponse('Profile retrieved successfully', userProfile, res);
  } catch (err) {
    handleErrorResponse(err, res);
  }
});
*/

module.exports = router;