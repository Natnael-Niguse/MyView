/**
 * This module defines the Post model for storing posts in the database.
 * Each post consists of a title, summary, content, cover image, and reference to the author.
 * The Post model is created using Mongoose schema and model.
 * 
 * @module models/Post
 */

const mongoose = require('mongoose');

// Destructuring to extract Schema and model from mongoose
const { Schema, model } = mongoose;

// Define the schema for the Post model
const PostSchema = new Schema({
  title: String,                              // Title of the post
  summary: String,                            // Summary of the post
  content: String,                            // Content/body of the post
  cover: String,                              // URL of the cover image for the post
  author: { type: Schema.Types.ObjectId, ref: 'User' }, // Reference to the author of the post
}, {
  timestamps: true,                           // Automatically add createdAt and updatedAt fields
});

// Create the Post model using the defined schema
const PostModel = model('Post', PostSchema);

// Export the Post model for use in other parts of the application
module.exports = PostModel;
