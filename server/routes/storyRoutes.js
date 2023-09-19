const express = require("express");
const router = express.Router();
const {upVote, fetchStories, deleteUpvoted} = require("../controllers/storyController");


router.route('/upvote').post(upVote);
router.route('/getUpvoted').get(fetchStories);
router.route('/deleteUpvoted').post(deleteUpvoted);


module.exports = router;