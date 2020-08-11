const url =
  'mongodb+srv://' +
  process.env.DATABASE_LOGIN +
  ':' +
  process.env.DATABASE_PASSWORD +
  '@cluster0.ltiay.mongodb.net/brainhub?retryWrites=true&w=majority';

export default {
  mongoURI: url,
  options: {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  },
};
