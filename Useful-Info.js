//create position and orientation
var position = Cesium.Cartesian3.fromDegrees(longitude, latitude, height);
var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);

//key array will hold state of keyboard keys. Get key code info from keycode.info
var key = new Array(256);
document.addEventListener('keydown', function (e){key[e.keyCode] = true;});
document.addEventListener('keyup', function (e){key[e.keyCode] = false;});

//Cesium will run this some amount of time a second (game loop)
viewer.clock.onTick.addEventListener(function(clock) {
  //Game code
}

//Create entity (uri is model to be render)(in sandcaslte add ../../ to begining of uri)
var entity = viewer.entities.add({
    position : position,
    orientation : orientation,
    model : {
        uri : '../../SampleData/models/CesiumGround/Cesium_Ground.glb',
        minimumPixelSize : 1,
        maximumScale : 1,
    }
});
