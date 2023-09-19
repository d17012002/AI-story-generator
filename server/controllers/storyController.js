const Story = require("../models/story");
const uuid = require('uuid');

const upVote = (req, res) => {
    console.log("API called to upvote");
  const { promptText, generatedText } = req.body;

  const uniqueId = uuid.v4();

  const newStory = new Story({
    id: uniqueId,
    prompt: promptText,
    text: generatedText,
  });

  newStory
    .save()
    .then((savedStory) => {
      console.log("Story saved to the database:", savedStory);
      res.status(200).json({ message: "Story saved successfully" });
    })
    .catch((error) => {
      console.error("Error saving story:", error);
      res.status(500).json({ error: "Failed to save story" });
    });
};

const fetchStories = (req, res) => {
  Story.find()
    .then((stories) => {
      res.status(200).json(stories);
    })
    .catch((error) => {
      console.error("Error fetching stories:", error);
      res.status(500).json({ error: "Failed to fetch stories" });
    });
};

const deleteUpvoted = (req, res) => {
    console.log("API called");
  const { storyId } = req.body;

  Story.findOneAndDelete({ id: storyId })
    .then((deletedStory) => {
      if (deletedStory) {
        console.log("Story deleted:", deletedStory);
        res.status(200).json({ message: "Story deleted successfully" });
      } else {
        res.status(404).json({ error: "Story not found" });
      }
    })
    .catch((error) => {
      console.error("Error deleting story:", error);
      res.status(500).json({ error: "Failed to delete story" });
    });
};

module.exports = { upVote, fetchStories, deleteUpvoted };
