
require("dotenv/config");
const express = require('express');
const bodyParser = require("body-parser");
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const multer = require("multer");
const storage = multer.diskStorage({
  filename: function(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});

mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Database connected successfully"))
  .catch(err => console.log(err));

  mongoose.set("useCreateIndex", true, "useFindandModify", false);

  //since mongoose promise is depreciated, we overide it with node's promise
  mongoose.Promise = global.Promise;

  app.use(cors());
  app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
  app.use(bodyParser.json({ limit: "50mb", extended: true }));
  
  //Initialize CORS middleware
  app.uae(function(rep, res, next) {
    res.header("Access-Control_Allow_Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Contect_Type, Accept"
    );
    next();
  });
    


const imageFilter = function(req, file, cb) {
  //accept image files only
  if (!file.originalname.match(/\.jpg|jpeg|png|gif)$/i)) {
    return cb(new Error("Only image files are accepted!"), false);
  }
  cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFilter });
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "dbindi09a",
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const ImageSchema = new Schema({
  title: String,
  image: String,
  imageId: String
});

const Image = mongoose.model("Image", ImageSchema);

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { ppid } = require("process");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  await server.start();
  
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  app.use('/graphql', expressMiddleware(server));
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
  
  app.post("/add", upload.single("image"), (req,res) => {
    cloudinary.v2.uploader.upload(req.file.path, function(err, result) {
      if(err) {
        req.json(err.message);
      }
      req.body.imageId = result.public_id;

      Image.create(req.body,function(err, image) {
        if (err) {
          res.json(err.message);
          return res.redirect("/");
        }
      });
    })
  });
};

startApolloServer();

module.exports = app;
module.exports = Image;
  
