require('core-js/stable');
require('regenerator-runtime/runtime');
const awsServerlessExpress = require('aws-serverless-express');
const warmer = require('lambda-warmer');

const app = require('server/expressApp');

// NOTE: If you get ERR_CONTENT_DECODING_FAILED in your browser, this is likely
// due to a compressed response (e.g. gzip) which has not been handled correctly
// by aws-serverless-express and/or API Gateway. Add the necessary MIME types to
// binaryMimeTypes below, then redeploy (`npm run package-deploy`)
const binaryMimeTypes = [
  '*/*',
];

const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes);

exports.handler = async (event, context) => {
  if (await warmer(event, {
    correlationId: context.awsRequestId,
    delay: 50,
  })) {
    return 'warmed';
  }

  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};
