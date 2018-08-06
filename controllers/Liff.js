const axios = require('axios')
const line = require('@line/bot-sdk');

const client = new line.Client({
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

exports.openLiff = function(sender) {
  axios({
    method: 'post',
    url: 'https://api.line.me/liff/v1/apps',
    headers: {
      "Authorization": "Bearer " + process.env.CHANNEL_ACCESS_TOKEN,
      "Content-Type": "application/json"
    },
    data: {
      "view": {
        "type": "tall",
        "url": process.env.LIFF_WEB_URL
      }
    }
  }).then(function (response) {
    if(response.status === 200) {
      let liffUrl = "line://app/"+ response.data.liffId

      // Show Type Text Massage
      // const message = {
      //   "type": "text",
      //   "text": liffUrl
      // };
      
      const message = {
        "type": "template",
        "altText": "Todo Menu",
        "template": {
            "type": "buttons",
            "thumbnailImageUrl": "https://eze-line-bot.herokuapp.com/images/bear-rectangle.png",
            "imageAspectRatio": "rectangle",
            "imageSize": "cover",
            "imageBackgroundColor": "#FFFFFF",
            "title": "LIFF",
            "text": "Click Open button",
            "actions": [
              {
                "type": "message",
                "label": "Open LIFF",
                "text": liffUrl
              }
            ]
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
    }
  })
  .catch(function (error) {
    console.log(error);
  })
}