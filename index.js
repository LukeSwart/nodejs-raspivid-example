// var Gpio = require('onoff').Gpio,
  // buzzer = new Gpio(18, 'out'),
  // pir = new Gpio(17, 'in', 'both')

// var isRec = false

// pir.watch(function(err, value) {
//   if (err) exit();
//   buzzer.writeSync(value);
//   console.log('Intruder detected..');
//   if (value == 1 && !isRec) {

//     console.log('capturing video.. ');

//     isRec = true;

//     var exec = require('child_process').exec;
//     var video_path = './video/video' + Date.now() + '.h264';

//     var cmd = 'raspivid -o ' + video_path + ' -t 10000';
//     exec(cmd, function(error, stdout, stderr) {
//       // output is in stdout
//       console.log('Video Saved @ : ', video_path);
//       require('./mailer').sendEmail(video_path);

//       isRec = false;
//     });

//   }
// });



console.log("server deployed successfully!")
// console.log('Guarding...')

// var cmd = "raspivid -v -t 10000"

// var exec = require('child_process').exec;
// exec(cmd, function(error, stdout, stderr) {
//   console.log("running raspivid...")
//   if (error || stdout || stderr) {
//     console.log("error: ", error)
//     console.log("stdout: ", stdout)
//     console.log("stderr: ", stderr)
//   }
//   // output is in stdout
//   // console.log('Video Saved @ : ', video_path)
//   // require('./mailer').sendEmail(video_path)

//   // isRec = false;
// });

// var execSync = require("exec-sync");
var execSync = require("child_process").execSync
var DOWNLOAD_DIR = 'images'

// var takePicture = "raspistill -w 200 -h 200 -t 1000 -o -"
var takePicture = "raspistill -w 200 -h 200 -t 1000 -o "
console.log("taking picture 1")
execSync(takePicture + DOWNLOAD_DIR + "/test1.jpg")
console.log("taking picture 2")
execSync(takePicture + DOWNLOAD_DIR + "/test2.jpg")
console.log("taking picture 3")
execSync(takePicture + DOWNLOAD_DIR + "/test3.jpg")
// var image = exec(takePicture).output
// var image2 = exec(takePicture).output
// var image3 = exec(takePicture).output
console.log("converting pics to gif")
var convertToGif = "convert -delay 60 -loop 0 images/*.jpg testgif.gif"
execSync(convertToGif)
console.log("converting pics to gif")

// // http://www.hacksparrow.com/using-node-js-to-download-files.html#nodejs-curl
// var spawn = require("child_process").spawn
// // extract the file name
// // var file_name = url.parse(file_url).pathname.split('/').pop();
// var DOWNLOAD_DIR = 'images'
// var file_name = "test1.jpg"

// var eachAsync = require('each-async');
 
// eachAsync(['test1.jpg','test2.jpg','test3.jpg'], function (item, index, done) {
//   console.log("taking picture:", item);
//   spawn("raspistill", ['-w 200', '-h 200', '-t 100', '-o ' + item], function (e)
//   done();
// }, function (error) {
//     console.log('finished');
// });
// // create an instance of writable stream
// var file = fs.createWriteStream(DOWNLOAD_DIR + file_name);
// // execute curl using child_process' spawn function
// // var pictureCommand = "raspistill -w 200 -h 200 -t 1000 -o test"
// var picture1 = spawn("raspistill", ["]);
// // add a 'data' event listener for the spawn instance
// curl.stdout.on('data', function(data) { file.write(data); });
// // add an 'end' event listener to close the writeable stream
// curl.stdout.on('end', function(data) {
//     file.end();
//     console.log(file_name + ' downloaded to ' + DOWNLOAD_DIR);
// });
// // when the spawn child process exits, check if there were any errors and close the writeable stream
// curl.on('exit', function(code) {
//     if (code != 0) {
//         console.log('Failed: ' + code);
//     }
// });

// // WEB RTC
// var io = require('socket.io').listen(80);
// io.sockets.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });

function exit() {
  console.log("exiting server...")
  // buzzer.unexport()
  // pir.unexport()
  process.exit()
}
