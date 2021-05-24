module.exports = ({ env }) => ({
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY', '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'),
    },
    settings: {
      defaultFrom: 'reply@luiseduardo.xyz',
      defaultReplyTo: 'reply-to@luiseduardo.xyz',
    },
  },
});
