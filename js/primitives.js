class Poly{
    constructor({value}){
        value.position ? this.position = value.position : this.position = new THREE.Vector3(0, 0, 0);
        value.rotation ? this.rotation = value.rotation : this.rotation = 0;
        value.scale ? this.scale = value.scale : this.scale = new THREE.Vector3(1, 1, 0);
        value.color ? this.color = value.color : this.color = 0xffffff;
        value.alpha ? this.alpha = value.alpha : this.alpha = "1";
        value.name ? this.name = value.name : this.name = "";
    }
    get mPosition() { return this.position }
    get mScale() { return this.scale }
    get mColor() { return this.color }

    set mPosition(position) { this.position = position; }
    set mScale(scale) { this.scale = scale; }
    set mColor(color) { this.color = color; }

    create(){ return }
}

class Square extends Poly{
    constructor({value}){
        super({value})
    }

    create(){
        var geometry = new THREE.PlaneBufferGeometry( 2*this.scale.x, 2*this.scale.y, 0 );
        var material = new THREE.MeshBasicMaterial( {color: this.color, side: THREE.DoubleSide} );
        var plane = new THREE.Mesh( geometry, material );
        this.name === "" ? this.name = "Square": circle.name = this.name;
        plane.rotation.z = this.rotation;
        plane.position.set(this.position.x, this.position.y, this.position.z)
        return plane
    }
}

class Circle extends Poly{
    constructor({value}){
        super({value})
    }

    create(){
        var geometry = new THREE.CircleBufferGeometry( 1*this.scale.x, 32 );
        var material = new THREE.MeshBasicMaterial( {color: this.color, side: THREE.DoubleSide} );
        var circle = new THREE.Mesh( geometry, material );
        this.name === "" ? this.name = "Circle": circle.name = this.name;
        circle.rotation.z = this.rotation;
        circle.position.set(this.position.x, this.position.y, this.position.z)
        return circle
    }
}

class Triangle extends Poly{
    constructor({value}){
        super({value})
    }

    create(){
        var ax, ay, bx, by;
        var cx = 0, r = 1*this.scale.x;
        var cy = r;
        bx = cx * Math.cos( 2.0944 ) - ( cy * Math.sin( 2.0944 ) );
        by = cx * Math.sin( 2.0944 ) + ( cy * Math.cos( 2.0944 ) );
        ax = cx * Math.cos( 4.18879 ) - ( cy * Math.sin( 4.18879 ) );
        ay = cx * Math.sin( 4.18879 ) + ( cy * Math.cos( 4.18879 ) );

        var geometry = new THREE.Geometry();
        geometry.vertices.push( new THREE.Vector3( ax, ay, this.position.z ) );
        geometry.vertices.push( new THREE.Vector3( bx, by, this.position.z ) );
        geometry.vertices.push( new THREE.Vector3( cx, cy, this.position.z ) );

        var face = new THREE.Face3( 0, 1, 2, new THREE.Vector3( 0, 1, 0 ) );
        geometry.faces.push( face )

        var material = new THREE.MeshBasicMaterial( {color: this.color, side: THREE.DoubleSide} );
        var tri = new THREE.Mesh( geometry, material )
        this.name === "" ? this.name = "Triangle": circle.name = this.name;
        tri.rotation.z = this.rotation;
        tri.position.set(this.position.x, this.position.y, this.position.z)
        return tri
    }
}