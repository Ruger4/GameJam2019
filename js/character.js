class Actor {
    constructor(value){
        value.name ? this.name = value.name : this.name = "";
        value.position ? this.position = value.position : value.position = new THREE.Vector3(0, 0, 0);
        this.meshArray = {
            "Head":     new Circle({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "U_Body":   new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "L_Body":   new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "Pelvis": new Triangle({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "U_R_Arm":  new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "L_R_Arm":  new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "R_Hand":   new Circle({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "U_L_Arm":  new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "L_L_Arm":  new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "L_Hand":   new Circle({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "U_R_Leg":  new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "L_R_Leg":  new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "R_Foot":   new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "U_L_Arm":  new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "L_L_Arm":  new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "L_Foot":   new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
        }
    }
}

class Protagonist extends Actor {
    constructor(value){
        value.name ? this.name = value.name : this.name = "";
        value.position ? this.position = value.position : value.position = new THREE.Vector3(0, 0, 0);
        this.meshArray = {
            "Head":     new Circle({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "U_Body":   new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "L_Body":   new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "Pelvis": new Triangle({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "U_R_Arm":  new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "L_R_Arm":  new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "R_Hand":   new Circle({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "U_L_Arm":  new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "L_L_Arm":  new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "L_Hand":   new Circle({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "U_R_Leg":  new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "L_R_Leg":  new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "R_Foot":   new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "U_L_Arm":  new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "L_L_Arm":  new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            "L_Foot":   new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
        }
    }
}