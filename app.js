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
    camera.position.z = 1;
    camera.updateMatrixWorld();

    var light = new THREE.DirectionalLight( 0xffffff, 1 );
    light.position.set( 1, 1, 1 ).normalize();
    scene.add( light );

    //scene.add( new Triangle({position: new THREE.Vector3(0,3,0), color: 0xffff00}).create() );
    //scene.add( new Circle({position: new THREE.Vector3(-3,0,-1), color: 0x7E1D1D}).create() );
    //scene.add( new Square({position: new THREE.Vector3(3,0,-2), rotation: -0.279531933, color: 0x0000FF}).create() );

    scene.add( new Circle({position: new THREE.Vector3(0.065,0.402,1), rotation: 0, scale: new THREE.Vector3(1,1,1), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Square({position: new THREE.Vector3(-0.019,0.255,0), rotation: -16.016, scale: new THREE.Vector3(247.943,156.265,1), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Square({position: new THREE.Vector3(-0.038,0.084,0), rotation: -4.943, scale: new THREE.Vector3(247.943,146.442,1), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Triangle({position: new THREE.Vector3(-0.051,-0.044,0), rotation: -92.266, scale: new THREE.Vector3(81.014,1,1), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Square({position: new THREE.Vector3(-0.134,0.267,2), rotation: -58.837, scale: new THREE.Vector3(183.106,90.18,1), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Square({position: new THREE.Vector3(-0.014,0.198,2), rotation: 27.653, scale: new THREE.Vector3(183.106,90.18,1), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Circle({position: new THREE.Vector3(0.1,0.249,2), rotation: 0, scale: new THREE.Vector3(53.133,1,1), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Square({position: new THREE.Vector3(0.141,0.225,-2), rotation: -64.977, scale: new THREE.Vector3(183.106,90.18,1), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Square({position: new THREE.Vector3(0.181,0.092,-1), rotation: -137.78, scale: new THREE.Vector3(117.094,90.18,1), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Circle({position: new THREE.Vector3(0.108,0.027,2), rotation: 0, scale: new THREE.Vector3(53.133,1,1), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Square({position: new THREE.Vector3(-0.168,-0.138,1), rotation: -124.659, scale: new THREE.Vector3(181.216,130.144,1), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Square({position: new THREE.Vector3(-0.19,-0.322,0), rotation: -78.54, scale: new THREE.Vector3(219.318,130.144,1), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Square({position: new THREE.Vector3(-0.184,-0.481,-2), rotation: -65.936, scale: new THREE.Vector3(83.77,168.041,1), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Square({position: new THREE.Vector3(0.041,-0.155,1), rotation: -75.332, scale: new THREE.Vector3(181.216,130.144,1), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Square({position: new THREE.Vector3(0.134,-0.344,0), rotation: -57.957, scale: new THREE.Vector3(219.318,130.144,1), color: 0x3D5FC6, alpha: 1}).create())
    scene.add( new Square({position: new THREE.Vector3(0.217,-0.485,-2), rotation: -86.041, scale: new THREE.Vector3(83.77,130.144,1), color: 0x3D5FC6, alpha: 1}).create())

    /*for(var key in keyfames){
        scene.add( keyfames[key] )
    }*/

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