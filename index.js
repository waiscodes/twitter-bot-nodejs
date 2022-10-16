const rwClient = require("./twitterClient");

const makeTweet = async (tweet) => {
	const response = await rwClient.v1.tweet(tweet);
	return response;
};
