const xyScalar = new THREE.Vector3(0.005, 0.005, 1);
const xScalar = new THREE.Vector3(0.005, 1, 1);
const unitScale = new THREE.Vector3(1, 1, 1);

function makeSquare({ color, position, scale=unitScale, rotation=0 }) {
    scale = scale.multiply(xyScalar);
    var geometry = new THREE.PlaneBufferGeometry( 2*scale.x, 2*scale.y, 0 );
    var material = new THREE.MeshBasicMaterial( {color: new THREE.Color(color).addScalar(position.z*0.1), side: THREE.DoubleSide} );

    var plane = new THREE.Mesh( geometry, material );
    plane.rotation.z = rotation*Math.PI/180;
    plane.position.set(position.x, position.y, position.z)
    return plane
}

function makeCircle({ color, position, scale=unitScale }) {
    scale = scale.multiply(xScalar);
    var geometry = new THREE.CircleBufferGeometry( 1*scale.x, 32 );
    var material = new THREE.MeshBasicMaterial( {color: new THREE.Color(color).addScalar(position.z*0.1), side: THREE.DoubleSide} );
    var circle = new THREE.Mesh( geometry, material );
    circle.position.set(position.x, position.y, position.z)
    return circle
}

function makeTriangle({ color, position, scale=unitScale, rotation=0 }) {
    scale = scale.multiply(xScalar);
    var ax, ay, bx, by;
    var cx = 0, r = 1*scale.x;
    var cy = r;
    bx = cx * Math.cos( 2.0944 ) - ( cy * Math.sin( 2.0944 ) );
    by = cx * Math.sin( 2.0944 ) + ( cy * Math.cos( 2.0944 ) );
    ax = cx * Math.cos( 4.18879 ) - ( cy * Math.sin( 4.18879 ) );
    ay = cx * Math.sin( 4.18879 ) + ( cy * Math.cos( 4.18879 ) );

    var geometry = new THREE.Geometry();
    geometry.vertices.push( new THREE.Vector3( ax, ay, position.z ) );
    geometry.vertices.push( new THREE.Vector3( bx, by, position.z ) );
    geometry.vertices.push( new THREE.Vector3( cx, cy, position.z ) );

    var face = new THREE.Face3( 0, 1, 2, new THREE.Vector3( 0, 1, 0 ) );
    geometry.faces.push( face )

    var material = new THREE.MeshBasicMaterial( {color: new THREE.Color(color).addScalar(position.z*0.1), side: THREE.DoubleSide} );
    var tri = new THREE.Mesh( geometry, material )
    tri.rotation.z = rotation*3.14159265359/180;
    tri.position.set(position.x, position.y, position.z);
    return tri
}