const { SendMailClient } = require("zeptomail");

const url = "api.zeptomail.in/";
const token = "Zoho-enczapikey PHtE6r0JEe7oi255oxYIt6W6QpGtN9wv/rthKABHtodDC/5QHk1cqd4owDKz/k8oVvZFFvKTz4M8tbqdtLqHcz2+YGdKW2qyqK3sx/VYSPOZsbq6x00VuF0ZcEXdXI7tdNZo0ifVvtnfNA==";

let client = new SendMailClient({url, token});

client.sendMail({
    "from": 
    {
        "address": "undefined",
        "name": "noreply"
    },
    "to": 
    [
        {
        "email_address": 
            {
                "address": "maheshbanduni9997@gmail.com",
                "name": "Mahesh Banduni"
            }
        }
    ],
    "subject": "Test Email",
    "htmlbody": "<div><b> Test email sent successfully.</b></div>",
}).then((resp) => console.log("success")).catch((error) => console.log("error"));