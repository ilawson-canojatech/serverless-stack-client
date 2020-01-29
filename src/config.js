export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_EcClJPHNcC59yMtYMTriyOMJ00ZaAmcfht",
  s3: {
    REGION: "us-east-1",
    BUCKET: "canoja-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://8lanr3jgd2.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_leo7oX5e9",
    APP_CLIENT_ID: "7cnvjil9oen6j98b7is3i8pv2t",
    IDENTITY_POOL_ID: "us-east-1:8f4e10a8-10c2-40d9-8fd4-b2d27bf25dba"
  }
};
