class AnimationSequence {
    constructor(){
        this.name = "";
        this.frameCount = 0;
        this.numberOfFrames = 0;
        this.animateSpeed = 1;
        this.keyfames = [
        ]
    }
}

class Protagonist_Idle extends AnimationSequence{
    constructor(){
        this.name = "";
        this.frameCount;
        this.numberOfFrames = 4;
        this.animateSpeed = 1;
        this.keyfames = [
            { // Frame 0
                "Head":     new Circle({position: new THREE.Vector3(0.065,0.402,1), rotation: 0, scale: new THREE.Vector3(1,1,1), color: 0xfffff, alpha: 1}),
                "U_Body":   new Square({position: new THREE.Vector3(-0.019,0.255,0), rotation: -16.016, scale: new THREE.Vector3(247.943,156.265,1), color: 0xfffff, alpha: 1}),
                "L_Body":   new Square({position: new THREE.Vector3(-0.038,0.084,0), rotation: -4.943, scale: new THREE.Vector3(247.943,146.442,1), color: 0xfffff, alpha: 1}),
                "Pelvis": new Triangle({position: new THREE.Vector3(-0.051,-0.044,0), rotation: -92.266, scale: new THREE.Vector3(81.014,1,1), color: 0xfffff, alpha: 1}),
                "U_R_Arm":  new Square({position: new THREE.Vector3(-0.134,0.267,2), rotation: -58.837, scale: new THREE.Vector3(183.106,90.18,1), color: 0xfffff, alpha: 1}),
                "L_R_Arm":  new Square({position: new THREE.Vector3(-0.014,0.198,2), rotation: 27.653, scale: new THREE.Vector3(183.106,90.18,1), color: 0xfffff, alpha: 1}),
                "R_Hand":   new Circle({position: new THREE.Vector3(0.1,0.249,2), rotation: 0, scale: new THREE.Vector3(53.133,1,1), color: 0xfffff, alpha: 1}),
                "U_L_Arm":  new Square({position: new THREE.Vector3(0.141,0.225,-2), rotation: -64.977, scale: new THREE.Vector3(183.106,90.18,1), color: 0xfffff, alpha: 1}),
                "L_L_Arm":  new Square({position: new THREE.Vector3(0.181,0.092,-1), rotation: -137.78, scale: new THREE.Vector3(117.094,90.18,1), color: 0xfffff, alpha: 1}),
                "L_Hand":   new Circle({position: new THREE.Vector3(0.108,0.027,2), rotation: 0, scale: new THREE.Vector3(53.133,1,1), color: 0xfffff, alpha: 1}),
                "U_R_Leg":  new Square({position: new THREE.Vector3(-0.168,-0.138,1), rotation: -124.659, scale: new THREE.Vector3(181.216,130.144,1), color: 0xfffff, alpha: 1}),
                "L_R_Leg":  new Square({position: new THREE.Vector3(-0.19,-0.322,0), rotation: -78.54, scale: new THREE.Vector3(219.318,130.144,1), color: 0xfffff, alpha: 1}),
                "R_Foot":   new Square({position: new THREE.Vector3(-0.184,-0.481,-2), rotation: -65.936, scale: new THREE.Vector3(83.77,168.041,1), color: 0xfffff, alpha: 1}),
                "U_L_Leg":  new Square({position: new THREE.Vector3(0.041,-0.155,1), rotation: -75.332, scale: new THREE.Vector3(181.216,130.144,1), color: 0xfffff, alpha: 1}),
                "L_L_Leg":  new Square({position: new THREE.Vector3(0.134,-0.344,0), rotation: -57.957, scale: new THREE.Vector3(219.318,130.144,1), color: 0xfffff, alpha: 1}),
                "L_Foot":   new Square({position: new THREE.Vector3(0.217,-0.485,-2), rotation: -86.041, scale: new THREE.Vector3(83.77,130.144,1), color: 0xfffff, alpha: 1}),
            },
            { // Frame 1
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
                "U_L_Leg":  new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
                "L_L_Leg":  new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
                "L_Foot":   new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            },
            { // Frame 2
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
                "U_L_Leg":  new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
                "L_L_Leg":  new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
                "L_Foot":   new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            },
            { // Frame 3
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
                "U_L_Leg":  new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
                "L_L_Leg":  new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
                "L_Foot":   new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            },
            { // Frame 4
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
                "U_L_Leg":  new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
                "L_L_Leg":  new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
                "L_Foot":   new Square({position: new THREE.Vector3(), rotation: 0, scale: new THREE.Vector3(), color: 0xfffff, alpha: 1}),
            }
        ]
    }
}