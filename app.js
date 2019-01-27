var container, camera, scene, raycaster, renderer;
var frustumSize = 10;

var protagonist = new Protagonist();
var actors = [protagonist];

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

    /* IDLE RETRIEVAL REFACTORER
    let prot = new Protagonist_Idle();
    console.log(prot)
    for(let key in prot.keyframe6){
        var a = '[{"name": "' + key; 
        var b = '", "type": "' + prot.keyframe6[key].type;
        var c = '", "position": [' +prot.keyframe6[key].position.x+","+prot.keyframe6[key].position.y+","+prot.keyframe6[key].position.z;
        var d = '], "rotation": ' + prot.keyframe6[key].rotation;
        var e = ', "scale": [' + prot.keyframe6[key].scale.x+","+prot.keyframe6[key].position.y+","+prot.keyframe6[key].position.z;
        var f = ']}],';

        console.log(a+b+c+d+e+f)
    }*/

    for(let i in actors) {
        const actor = actors[i];
        for(let key in actor.meshArray) {
            const mesh = actor.meshArray[key];
            scene.add(mesh);
        }
    }

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );

    window.addEventListener( 'resize', onWindowResize, false );
}
function animate() {
    requestAnimationFrame( animate );
    update(); render();
}
function update() {
    for(let i in actors)
        actors[i].update();
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