#
This code uses The Serverless Framework to deploy HTTP Products API endpoint.
Also help to deploy following AWS services:
##
1. Dynamo DB table Product Detils
2. http-api-jwt-authorizer
3. Lambda function to get Products from Dynamo DB.
4. API Gateway endpoint

## Quick Start

Make sure you have these installed:

- [Node 10](http://nodejs.org) or newer (To check your version: `npm -v`)
- [Git](http://git-scm.com)

## Prerequisite
Update cognitoPoolId in serverless.yml file at line#24
Update audience at line#28

Then, run these commands on the command line:

```
npm install
aws config
serverless deploy
```
