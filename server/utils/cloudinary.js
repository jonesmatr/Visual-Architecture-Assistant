const {v2} = require('cloudinary');
const image = "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg"

const cloudActions = {
    upload: (i) => {
         v2.config({ 
            cloud_name: 'dbindi09a', 
            api_key: '849987797231149', 
            api_secret: 'Yu3f24mkLIGhQq1T7Fg96LsFZCw' 
          });
          return v2.uploader.upload(i,
  { public_id: "olympic_flag" }, 
  function(error, result) {
        console.log('result: ' , result);
     });
    }
};
// console.log(cloudActions.upload(image));


module.exports = cloudActions;