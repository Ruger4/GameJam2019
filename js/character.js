class Actor {
    constructor() {
        this.meshArray = null;
        this.animationSequence = null;
    }

    update() {
        this.updateMeshes();
    }

    updateMeshes() {
        const updates = (this.animationSequence && this.animationSequence.updates());

        /*var updates
        if(this.animationSequence)
            updates = this.animationSequence.updates()
        else
            updates = null*/

        if(updates) {
            for(let meshName in updates) {
                const update = updates[meshName];
                const mesh = this.meshArray[meshName];
    
                if(!update || !mesh) {
                    debugger
                    console.error("Missing mesh", { mesh, update })
                    continue
                }

                //console.log('update position', update)
                
                var x = update.type === "triangle" ? -30 : 0;
                console.log(update.type+" "+x)
                

                if(update.position)
                    mesh.position.copy(update.position);

                if(update.rotation)
                    mesh.rotation.z = (update.rotation+x)*Math.PI/180;
            }
        }
    }
}

class Protagonist extends Actor {
    constructor() {
        super();
        this.meshArray = {
            "Head":     makeCircle({position: new THREE.Vector3(0.393,2.442,1),     rotation: 0,         scale: new THREE.Vector3(100, 100, 100), color: 0x19327D, alpha: 1}),
            "U_Body":   makeSquare({position: new THREE.Vector3(-0.079,1.736,0),    rotation: -11.592,   scale: new THREE.Vector3(148.373,89.891,1), color: 0x19327D, alpha: 1}),
            "L_Body":   makeSquare({position: new THREE.Vector3(-0.189,0.731,0),    rotation: -3.906,    scale: new THREE.Vector3(135.514,87.69,1), color: 0x19327D, alpha: 1}),
            "Pelvis":   makeTriangle({position: new THREE.Vector3(-0.301,-0.076,0), rotation: 25.419,    scale: new THREE.Vector3(126.122,1,1), color: 0x19327D, alpha: 1}),
            "U_R_Arm":  makeSquare({position: new THREE.Vector3(-0.854,1.786,2),    rotation: -60.404,   scale: new THREE.Vector3(94.866,60.056,1), color: 0x19327D, alpha: 1}),
            "L_R_Arm":  makeSquare({position: new THREE.Vector3(-0.251,1.231,1),    rotation: 26.253,    scale: new THREE.Vector3(98.26,49.124,1), color: 0x19327D, alpha: 1}),
            "R_Hand":   makeCircle({position: new THREE.Vector3(0.456,1.536,1),     rotation: 0,         scale: new THREE.Vector3(61.03,1,1), color: 0x19327D, alpha: 1}),
            "U_L_Arm":  makeSquare({position: new THREE.Vector3(0.847,1.44,-2),     rotation: -66.853,   scale: new THREE.Vector3(116.057,60.056,1), color: 0x19327D, alpha: 1}),
            "L_L_Arm":  makeSquare({position: new THREE.Vector3(1.057,0.594,-1),    rotation: 43.682,    scale: new THREE.Vector3(72.151,49.124,1), color: 0x19327D, alpha: 1}),
            "L_Hand":   makeCircle({position: new THREE.Vector3(0.672,0.17,1),      rotation: 0,         scale: new THREE.Vector3(61.03,1,1), color: 0x19327D, alpha: 1}),
            "U_R_Leg":  makeSquare({position: new THREE.Vector3(-0.954,-0.73,-1),   rotation: -122.368,  scale: new THREE.Vector3(146.224,73.243,1), color: 0x19327D, alpha: 1}),
            "L_R_Leg":  makeSquare({position: new THREE.Vector3(-1.235,-1.98,-2),   rotation: -76.754,   scale: new THREE.Vector3(140.776,70.515,1), color: 0x19327D, alpha: 1}),
            "R_Foot":   makeSquare({position: new THREE.Vector3(-1.124,-2.949,-1),  rotation: -71.787,   scale: new THREE.Vector3(47.482,104.101,1), color: 0x19327D, alpha: 1}),
            "U_L_Leg":  makeSquare({position: new THREE.Vector3(0.22,-0.796,1),     rotation: -75.159,   scale: new THREE.Vector3(146.224,73.243,1), color: 0x19327D, alpha: 1}),
            "L_L_Leg":  makeSquare({position: new THREE.Vector3(0.794,-2.053,0),    rotation: -58.84,    scale: new THREE.Vector3(140.776,70.515,1), color: 0x19327D, alpha: 1}),
            "L_Foot":   makeSquare({position: new THREE.Vector3(1.231,-2.952,1),    rotation: -88.48,    scale: new THREE.Vector3(47.482,104.101,1), color: 0x19327D, alpha: 1})
        }
        this.animationSequence = sequences['idle'];
    }
}