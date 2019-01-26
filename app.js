var container, camera, scene, raycaster, renderer;
var frustumSize = 10;

init();
animate();

function init() {
    container = document.createElement( 'div' );
    document.body.appendChild( container );
    
    scene = new THREE.Scene();
    scene.background = new THREE.Color("rgb(80, 80, 80)");

    var aspect = window.innerWidth / window.innerHeight;
    camera = new THREE.OrthographicCamera( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 1, 100 );
    camera.lookAt( scene.position );
    camera.position.z = 10;
    camera.updateMatrixWorld();

    var light = new THREE.DirectionalLight( 0xffffff, 1 );
    light.position.set( 1, 1, 1 ).normalize();
    scene.add( light );

    scene.add( new Triangle({position: new THREE.Vector3(0,0,1), color: 0x0000FF}).create() );
    scene.add( new Circle({position: new THREE.Vector3(-1,0,0), color: 0x0000FF}).create() );
    scene.add( new Square({position: new THREE.Vector3(1,0,-1), rotation: -0.279531933, color: 0x0000FF}).create() );

    scene.add( new Circle({position: new THREE.Vector3(0.393,2.442,1).multiply(pr), rotation: 0, scale: new THREE.Vector3(0.5,0.5,0.5), color: 0x3D5FC6, alpha: 1}).create())
    
    scene.add( new Circle({position: new THREE.Vector3(0.393,2.442,1).multiply(pr), rotation: 0, scale: new THREE.Vector3(0.5,0.5,0.5), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Square({position: new THREE.Vector3(-0.079,1.736,0).multiply(pr), rotation: -11.592, scale: new THREE.Vector3(148.373,89.891,1).multiply(tr), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Square({position: new THREE.Vector3(-0.189,0.731,0).multiply(pr), rotation: -3.906, scale: new THREE.Vector3(135.514,87.69,1).multiply(tr), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Triangle({position: new THREE.Vector3(-0.301,-0.076,0).multiply(pr), rotation: 25.419, scale: new THREE.Vector3(126.122,1,1).multiply(tr2), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Square({position: new THREE.Vector3(-0.854,1.786,2).multiply(pr), rotation: -60.404, scale: new THREE.Vector3(94.866,60.056,1).multiply(tr), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Square({position: new THREE.Vector3(-0.251,1.231,1).multiply(pr), rotation: 26.253, scale: new THREE.Vector3(98.26,49.124,1).multiply(tr), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Circle({position: new THREE.Vector3(0.456,1.536,1).multiply(pr), rotation: 0, scale: new THREE.Vector3(61.03,1,1).multiply(tr2), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Square({position: new THREE.Vector3(0.847,1.44,-2).multiply(pr), rotation: -66.853, scale: new THREE.Vector3(116.057,60.056,1).multiply(tr), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Square({position: new THREE.Vector3(1.057,0.594,-1).multiply(pr), rotation: 43.682, scale: new THREE.Vector3(72.151,49.124,1).multiply(tr), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Circle({position: new THREE.Vector3(0.672,0.17,1).multiply(pr), rotation: 0, scale: new THREE.Vector3(61.03,1,1).multiply(tr2), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Square({position: new THREE.Vector3(-0.954,-0.73,-1).multiply(pr), rotation: -122.368, scale: new THREE.Vector3(146.224,73.243,1).multiply(tr), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Square({position: new THREE.Vector3(-1.235,-1.98,-2).multiply(pr), rotation: -76.754, scale: new THREE.Vector3(140.776,70.515,1).multiply(tr), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Square({position: new THREE.Vector3(-1.124,-2.949,-1).multiply(pr), rotation: -71.787, scale: new THREE.Vector3(47.482,104.101,1).multiply(tr), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Square({position: new THREE.Vector3(0.22,-0.796,1).multiply(pr), rotation: -75.159, scale: new THREE.Vector3(146.224,73.243,1).multiply(tr), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Square({position: new THREE.Vector3(0.794,-2.053,0).multiply(pr), rotation: -58.84, scale: new THREE.Vector3(140.776,70.515,1).multiply(tr), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Square({position: new THREE.Vector3(1.231,-2.952,1).multiply(pr), rotation: -88.48, scale: new THREE.Vector3(47.482,104.101,1).multiply(tr), color: 0x3D5FC6, alpha: 1}).create())

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );

    window.addEventListener( 'resize', onWindowResize, false );
}
function animate() {
    requestAnimationFrame( animate );


    render();
}
function render() {
    //camera.lookAt( scene.position );
    //camera.updateMatrixWorld();
    renderer.render( scene, camera );
}
function onWindowResize() {
    var aspect = window.innerWidth / window.innerHeight;
    camera.left = - frustumSize * aspect / 2;
    camera.right = frustumSize * aspect / 2;
    camera.top = frustumSize / 2;
    camera.bottom = - frustumSize / 2;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}