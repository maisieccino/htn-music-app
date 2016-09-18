var giphy = require('giphy-api')({
    //config
});
var ffmpeg = require('fluent-ffmpeg');
var command = ffmpeg();

var firebase = require('firebase');
  var config = {
  	apiKey: "AIzaSyATRGz9jLS7KIVCnIBUPvU8_B3kpFNri_g",
    authDomain: "spicygifmeme.firebaseapp.com",
    serviceAccount: "SpicyGifMeme-1ba09b36502b.json",
    databaseURL: "https://spicygifmeme.firebaseio.com",
    storageBucket: "spicygifmeme.appspot.com",
    messagingSenderId: "694275757511"
  };
firebase.initializeApp(config);
var db = firebase.database();
var ref = db.ref("gif");


//   Add/process gifs to db   //
giphy.search({
    q: 'dancing',
    limit: 100,
    rating: 'g'
}, function(err, res) { //tempo in bpm
	res.data.forEach(function(gif){
		ref.child(gif.id).set({
			id: gif.id,
			url: gif.images.original.url,
			frames: gif.images.original.frames,
			height: gif.images.original.height,
			width: gif.images.original.width,
			spicy_rating: Math.floor((Math.random() * 5)),
			tempo: Math.floor((Math.random() * 60)+100)
		}, function(err){
			if(err){
				console.log(err);
			}
		});
		
	});
});

//   Example pulling gifs by tempo   //
// var musicTempo = 140;
// var startRange = musicTempo-5;
// var endRange = musicTempo+5;
// ref.orderByChild("tempo").startAt(startRange).endAt(engRange).on("child_added", function(snapshot) {
//   console.log(snapshot.key + " has a tempo of " + snapshot.val().tempo );
// });

//   For Image Processing   //
// giphy.random({
//     q: 'dancing',
//     rating: 'g'
// }, function(err, res) {
// 	ffmpeg('output.gif')
// 	.on('error', function(err) {
//     console.log('An error occurred: ' + err.message);
// 	  })
// 	  .on('end', function() {
// 	    console.log('Processing finished !');
// 	  })		
		//.screenshots({
			//count: (res.data.image_frames-1)


			//count: 2
		    // timestamps: [0.5, 3, 5]
		    // filename: 'thumbnail-at-%s-seconds.png',
		    // folder: __dirname,
		    // size: '320x240'
		// });
		//decimate filter, will show duplicate frames?
		//thumbnails() to get frames to process? Warning, says does not work on imput streams

    //useful res.data: id, image_url, image_frames, image_width, image_height
// });



//   Thoughts on Image Processing  //
// 1. if problem with colour, convert to grayscale to process
// 2. analyze changes in pixels and get peaks in left/right/up/down
// 3. threshold for pixel peaks
// 4. store size of gif
