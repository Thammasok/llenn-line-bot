const line = require('@line/bot-sdk');
const config = require('../config/config');

const client = new line.Client({
	channelAccessToken: config.line.CHANNEL_ACCESS_TOKEN
});

exports.leave = function (sender, leaveType) {
  return new Promise(() => {
    /**
     * Create Leave :: DB
     * Field: id, userId(Sender), leave_type, status, [leave_from, leave_to], created_at, updated_at 
     */

     let leave_type = 2;
    //  if(leaveType === 'sick') {
    //    leave_type = 1;
    //  } else if (leaveType === 'annual') {
    //    leave_type = 3;
    //  } else {
    //   //personal business
    //   leave_type = 2;
    //  }

    const message = {
      "type": "template",
      "altText": "Leave date",
      "template": {
        "type": "confirm",
        "text": "ต้องการลาในวันที่",
        "actions": [
          {
            "type": "message",
            "label": "ระบุวันลา",
            "text": "leave:from"
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
  });
};

exports.leaveDateSelect = function (sender, type) {
  const leaveDateText = "";

  if(type === "from") {
    leaveDateText = "วันที่เริ่มลา";
  } else {
    leaveDateText = "ถึงวันที่";
  }

  const message = {
    type: 'text',
    text: 'พิมพ์' + leaveDateText + ' ตาม Format นี้ "20-02-2018" หรือ 20-02-2018 10:00:00'
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