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

    updateMeshes(keyframe) {
        for(let meshName in keyframe) {
            const 
        }
    }
}

class Protagonist extends Actor {
    constructor(value){
        value.name ? this.name = value.name : this.name = "";
        value.position ? this.position = value.position : value.position = new THREE.Vector3(0, 0, 0);
        this.idleAnimation = new Protagonist_Idle();
        this.meshArray = {
            "Head":     new Circle({position: new THREE.Vector3(0.393,2.442,1),     rotation: 0,         scale: new THREE.Vector3(0.5,0.5,0.5), color: 0x19327D, alpha: 1}),
            "U_Body":   new Square({position: new THREE.Vector3(-0.079,1.736,0),    rotation: -11.592,   scale: new THREE.Vector3(148.373,89.891,1), color: 0x19327D, alpha: 1}),
            "L_Body":   new Square({position: new THREE.Vector3(-0.189,0.731,0),    rotation: -3.906,    scale: new THREE.Vector3(135.514,87.69,1), color: 0x19327D, alpha: 1}),
            "Pelvis":   new Triangle({position: new THREE.Vector3(-0.301,-0.076,0), rotation: 25.419,    scale: new THREE.Vector3(126.122,1,1), color: 0x19327D, alpha: 1}),
            "U_R_Arm":  new Square({position: new THREE.Vector3(-0.854,1.786,2),    rotation: -60.404,   scale: new THREE.Vector3(94.866,60.056,1), color: 0x19327D, alpha: 1}),
            "L_R_Arm":  new Square({position: new THREE.Vector3(-0.251,1.231,1),    rotation: 26.253,    scale: new THREE.Vector3(98.26,49.124,1), color: 0x19327D, alpha: 1}),
            "R_Hand":   new Circle({position: new THREE.Vector3(0.456,1.536,1),     rotation: 0,         scale: new THREE.Vector3(61.03,1,1), color: 0x19327D, alpha: 1}),
            "U_L_Arm":  new Square({position: new THREE.Vector3(0.847,1.44,-2),     rotation: -66.853,   scale: new THREE.Vector3(116.057,60.056,1), color: 0x19327D, alpha: 1}),
            "L_L_Arm":  new Square({position: new THREE.Vector3(1.057,0.594,-1),    rotation: 43.682,    scale: new THREE.Vector3(72.151,49.124,1), color: 0x19327D, alpha: 1}),
            "L_Hand":   new Circle({position: new THREE.Vector3(0.672,0.17,1),      rotation: 0,         scale: new THREE.Vector3(61.03,1,1), color: 0x19327D, alpha: 1}),
            "U_R_Leg":  new Square({position: new THREE.Vector3(-0.954,-0.73,-1),   rotation: -122.368,  scale: new THREE.Vector3(146.224,73.243,1), color: 0x19327D, alpha: 1}),
            "L_R_Leg":  new Square({position: new THREE.Vector3(-1.235,-1.98,-2),   rotation: -76.754,   scale: new THREE.Vector3(140.776,70.515,1), color: 0x19327D, alpha: 1}),
            "R_Foot":   new Square({position: new THREE.Vector3(-1.124,-2.949,-1),  rotation: -71.787,   scale: new THREE.Vector3(47.482,104.101,1), color: 0x19327D, alpha: 1}),
            "U_L_Leg":  new Square({position: new THREE.Vector3(0.22,-0.796,1),     rotation: -75.159,   scale: new THREE.Vector3(146.224,73.243,1), color: 0x19327D, alpha: 1}),
            "L_L_Leg":  new Square({position: new THREE.Vector3(0.794,-2.053,0),    rotation: -58.84,    scale: new THREE.Vector3(140.776,70.515,1), color: 0x19327D, alpha: 1}),
            "L_Foot":   new Square({position: new THREE.Vector3(1.231,-2.952,1),    rotation: -88.48,    scale: new THREE.Vector3(47.482,104.101,1), color: 0x19327D, alpha: 1})
        }

        this.currentAnimation = this.idleAnimation;
    }

    update() {
        for(var key in this.)
    }
}