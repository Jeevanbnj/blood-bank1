const SibApiV3Sdk = require('sib-api-v3-sdk');

const client = SibApiV3Sdk.ApiClient.instance;

const apiKey = client.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

const sendEmail = async (options) => {
  try {
    await apiInstance.sendTransacEmail({
      sender: {
        email: "shettyharshitha@gmail.com",
        name: "BloodLink"
      },
      to: [
        {
          email: options.email
        }
      ],
      subject: options.subject,
      htmlContent: options.message
    });

    console.log("Email sent successfully");
  } catch (error) {
    console.log("Brevo Error:", error);
  }
};

module.exports = sendEmail;