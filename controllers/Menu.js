const line = require('@line/bot-sdk');

const client = new line.Client({
	channelAccessToken: '5YyI0WllyPvKou0xttX8W0qacW3C0i96J/+97kxA6Xhxjpu7i/QDeanvfUYZfujOtsbGwuJWSf5TIe4YXnAKJTSRkzxmj9RWAxMLhF9TT89Qg0nPgqFu9eIPEZ33F5iU0+Cu2gWWO4j7ZzzwnAzfvAdB04t89/1O/w1cDnyilFU='
});

exports.showMenu = function (sender, section) {
	return new Promise(() => {
	const message = {
		"type": "template",
		"altText": "this is a carousel template",
		"template": {
			"type": "carousel",
			"columns": [
				{
					"thumbnailImageUrl": "https://llenn-line-bot.herokuapp.com/images/bear-rectangle.png",
					"imageBackgroundColor": "#FFFFFF",
					"title": "this is menu",
					"text": "description",
					"defaultAction": {
						"type": "uri",
						"label": "View detail",
						"uri": "http://example.com/page/123"
					},
					"actions": [
						{
							"type": "postback",
							"label": "Buy",
							"data": "action=buy&itemid=111"
						},
						{
							"type": "postback",
							"label": "Add to cart",
							"data": "action=add&itemid=111"
						},
						{
							"type": "uri",
							"label": "View detail",
							"uri": "http://example.com/page/111"
						}
					]
				}
			],
			"imageAspectRatio": "rectangle",
			"imageSize": "cover"
		}
	};

	client.pushMessage(sender, message)
		.then(() => {
			console.log('success');
		})
		.catch((err) => {
			// error handling
			console.log(err);
		});
	});
}