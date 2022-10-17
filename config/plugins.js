module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.gmail.com"),
        port: env("SMTP_PORT", 587),
        auth: {
          user: "kevinrajput7777@gmail.com",
          pass: "dqgtnpwkncilfvdu",
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: "kevinrajput7777@gmail.com",
        defaultReplyTo: "kevinrajput7777@gmail.com",
      },
    },
  },
  // ...
});
