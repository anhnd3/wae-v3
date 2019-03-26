const mongoose = require("mongoose");
const { Schema } = mongoose;

const configSchema = new Schema({
  homeTitle: String,
  homeDescription: String,
  homeThumbnail: String,
  homeAboutMeContent: String,
  homeAboutMeThumbnail: String,
  homeLatestWorksTitle: String,
  homeLatestWorksDescription: String,
  homeFacebook: String,
  homeLinkedIn: String,
  homeTwitter: String,
  blogAboutAvatar: String,
  blogAboutThumbnail: String,
  blogAboutAuthor: String,
  blogAboutDescription: String
});

module.exports = mongoose.model("configs", configSchema);
