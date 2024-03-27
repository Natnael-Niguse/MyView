/**
 * This module defines the User model for storing user data in the database.
 * Each user consists of a username and password.
 * The User model is created using Mongoose schema and model.
 * 
 * @module models/User
 */

const mongoose = require('mongoose');

// Destructuring to extract Schema and model from mongoose
const { Schema, model } = mongoose;

// Define the schema for the User model
const UserSchema = new Schema({
    username: { type: String, required: true, minlength: 4, unique: true }, // Username of the user (minimum length: 4 characters, must be unique)
    password: { type: String, required: true }                            // Password of the user
});

// Create the User model using the defined schema
const UserModel = model('User', UserSchema);

// Export the User model for use in other parts of the application
module.exports = UserModel;
