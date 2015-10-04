# slack-lambda-weather
Demonstrate Serverless Slack Slash Command Integration using AWS Lambda and AWS API Gateway. See [this blog post](http://www.ryanray.me/serverless-slack-integrations) for the full write up.

## Getting Started
This project was built with the [aws-lambda-starter](https://github.com/ryanray/aws-lambda-starter). See docs for more info on commands.

### Prerequisites
1. [AWS CLI](https://aws.amazon.com/cli/)
2. Execution Role ARN for your Lambda
3. Create a `config.json` based on `config.sample.json`. This file is gitignored by default because this is where you would put any api key's and other secret info that your lambda may need.

To run tests you'll want to install jasmine and watch globally
`npm install -g jasmine watch`

Then you can run tests while watching files for changes:
`npm run test:watch`

### Commands
* `npm run create EXECUTION_ROLE_ARN` build and create your Lambda on AWS
* `npm run invoke {\"type\": \"sweet\"}` invoke your deployed Lambda with inline json
* `npm run localInvoke` invoke lambda.js with mock event json
* `npm run deploy` build and deploy to AWS

### Execution Role ARN(Amazon Resource Name)
Before you can create your Lambda you need to create an execution role. If you did any of the Lambda hello world tutorials in the AWS console you should already have a role created. Either way you need to goto the AWS Console -> Security & Identity -> IAM -> Roles. Get the ARN of `lambda_basic_execution` or create a new role based on `role.example.json` and get the ARN from that. The full ARN looks something like `arn:aws:iam::YOUR_ACCOUNT_ID:role/lambda_basic_execution`.

## Contributing
Improvements are welcome! Just fork, push your changes to a new branch, and create a pull request!

## TODO
* Fix the tests
