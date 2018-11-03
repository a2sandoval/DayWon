const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

// Load User model
const User = require('../models/User');

module.exports = app => {

  // --------------------------------------------------------------------
  // LOCAL 
  // --------------------------------------------------------------------
  app.get('/', (req, res) => {
    res.send({ hi: 'there' });
  });

  app.post('/signin', (req, res) => {
  });

  app.post('/signup', (req, res)=>{
  })

  app.get('/api/logout', (req, res) => {
  });

  app.get('/api/checkToken', (req, res) => { 
  
  });
  
  app.get('/profile', (req, res) => {
    
  })
}
