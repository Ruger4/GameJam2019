class AnimationSequence {
    constructor(){
        this.duration = 1000; // ms
        this.keyfames = [];
    }

    keyframe(){
        var phase = ((+new Date) % this.duration) / this.duration; // between 0-1
        var i = Math.floor(phase*this.keyframes.length);

        return this.keyframes[i];
    }
    /*void CSprite::Frame_Animate_Single	(bool a)
    {	
        int max = 8 - (int)(5.0f * m_s);
        if((FCount++)%max == 0)
        {
            m_tv += m_th;
            if(m_tv > (NFrames - 1) * m_th)
            {
                if(a) m_tv = 0;
                else KILL = true;
            }	
        }
    }*/
}

class Protagonist_Idle extends AnimationSequence{
    constructor(){
        super();
        this.keyfames = [
            { // Frame 0
                "Head":     {pos: new THREE.Vector3(0.393,2.442,1),     rot: 0,         scale: new THREE.Vector3(0.5,0.5,0.5)},
                "U_Body":   {pos: new THREE.Vector3(-0.079,1.736,0),    rot: -11.592,   scale: new THREE.Vector3(148.373,89.891,1)},
                "L_Body":   {pos: new THREE.Vector3(-0.189,0.731,0),    rot: -3.906,    scale: new THREE.Vector3(135.514,87.69,1)},
                "Pelvis":   {pos: new THREE.Vector3(-0.301,-0.076,0),   rot: 25.419,    scale: new THREE.Vector3(126.122,1,1)},
                "U_R_Arm":  {pos: new THREE.Vector3(-0.854,1.786,2),    rot: -60.404,   scale: new THREE.Vector3(94.866,60.056,1)},
                "L_R_Arm":  {pos: new THREE.Vector3(-0.251,1.231,1),    rot: 26.253,    scale: new THREE.Vector3(98.26,49.124,1)},
                "R_Hand":   {pos: new THREE.Vector3(0.456,1.536,1),     rot: 0,         scale: new THREE.Vector3(61.03,1,1)},
                "U_L_Arm":  {pos: new THREE.Vector3(0.847,1.44,-2),     rot: -66.853,   scale: new THREE.Vector3(116.057,60.056,1)},
                "L_L_Arm":  {pos: new THREE.Vector3(1.057,0.594,-1),    rot: 43.682,    scale: new THREE.Vector3(72.151,49.124,1)},
                "L_Hand":   {pos: new THREE.Vector3(0.672,0.17,1),      rot: 0,         scale: new THREE.Vector3(61.03,1,1)},
                "U_R_Leg":  {pos: new THREE.Vector3(-0.954,-0.73,-1),   rot: -122.368,  scale: new THREE.Vector3(146.224,73.243,1)},
                "L_R_Leg":  {pos: new THREE.Vector3(-1.235,-1.98,-2),   rot: -76.754,   scale: new THREE.Vector3(140.776,70.515,1)},
                "R_Foot":   {pos: new THREE.Vector3(-1.124,-2.949,-1),  rot: -71.787,   scale: new THREE.Vector3(47.482,104.101,1)},
                "U_L_Leg":  {pos: new THREE.Vector3(0.22,-0.796,1),     rot: -75.159,   scale: new THREE.Vector3(146.224,73.243,1)},
                "L_L_Leg":  {pos: new THREE.Vector3(0.794,-2.053,0),    rot: -58.84,    scale: new THREE.Vector3(140.776,70.515,1)},
                "L_Foot":   {pos: new THREE.Vector3(1.231,-2.952,1),    rot: -88.48,    scale: new THREE.Vector3(47.482,104.101,1)}
            },
            { // Frame 1
                "Head":     {pos: new THREE.Vector3(0.395,2.614,1),      rot: 0,         scale: new THREE.Vector3(0.5,0.5,0.5)},
                "U_Body":   {pos: new THREE.Vector3(-0.059,1.752,0),      rot: -11.592,   scale: new THREE.Vector3(148.373,89.891,1)},
                "L_Body":   {pos: new THREE.Vector3(-0.178,0.75,0),      rot: -3.906,    scale: new THREE.Vector3(135.514,87,69,1)},
                "Pelvis":   {pos: new THREE.Vector3(-0.301,-0.076,0),      rot: 25.419,    scale: new THREE.Vector3(126.122,1,1)},
                "U_R_Arm":  {pos: new THREE.Vector3(-0.854,1.928,2),      rot: -65.517,   scale: new THREE.Vector3(99.208,60.056,1)},
                "L_R_Arm":  {pos: new THREE.Vector3(-0.252,1.346,1),      rot: 21.253,    scale: new THREE.Vector3(98.26,49.124,1)},
                "R_Hand":   {pos: new THREE.Vector3(0.481,1.614,1),      rot: 0,         scale: new THREE.Vector3(61.03,1,1)},
                "U_L_Arm":  {pos: new THREE.Vector3(0.858,1.486,-2),      rot: -66.853,   scale: new THREE.Vector3(116.057,60.056,1)},
                "L_L_Arm":  {pos: new THREE.Vector3(1.127,0.672,-1),      rot: 43.682,    scale: new THREE.Vector3(72.151,49.124)},
                "L_Hand":   {pos: new THREE.Vector3(0.772,0.269,1),      rot: 0,         scale: new THREE.Vector3(61.03,1,1)},
                "U_R_Leg":  {pos: new THREE.Vector3(-0.941,-0.719,-1),      rot: -118.435,  scale: new THREE.Vector3(146.224,73.243,1)},
                "L_R_Leg":  {pos: new THREE.Vector3(-1.172,-1.958,-2),      rot: -79.181,   scale: new THREE.Vector3(140.776,70.515,1)},
                "R_Foot":   {pos: new THREE.Vector3(-1.131,-2.945,-1),      rot: -74.654,   scale: new THREE.Vector3(47.482,104.101,1)},
                "U_L_Leg":  {pos: new THREE.Vector3(0.271,-0.726,1),      rot: -75.016,   scale: new THREE.Vector3(146.224,73.243,1)},
                "L_L_Leg":  {pos: new THREE.Vector3(0.806,-2.001,0),      rot: -58.84,    scale: new THREE.Vector3(140.776,70.515,1)},
                "L_Foot":   {pos: new THREE.Vector3(1.231,-2.952,1),      rot: -88.48,    scale: new THREE.Vector3(47.482,104.101,1)}
            },
            { // Frame 2
                "Head":     {pos: new THREE.Vector3(0.414,2.782,1),      rot: 0,         scale: new THREE.Vector3(0.5,0.5,0.5)},
                "U_Body":   {pos: new THREE.Vector3(-0.126,1.965,0),      rot: -6.085,   scale: new THREE.Vector3(148.373,89.891,1)},
                "L_Body":   {pos: new THREE.Vector3(-0.091,0.954,0),      rot: -0.488,    scale: new THREE.Vector3(135.515,87.69,1)},
                "Pelvis":   {pos: new THREE.Vector3(-0.196,0.152,0),      rot: 25.929,    scale: new THREE.Vector3(126.123,1,1)},
                "U_R_Arm":  {pos: new THREE.Vector3(-0.804,2.107,2),      rot: -61.764,   scale: new THREE.Vector3(99.208,60.056,1)},
                "L_R_Arm":  {pos: new THREE.Vector3(-0.208,1.542,1),      rot: 27.421,    scale: new THREE.Vector3(87.162,49.124,1)},
                "R_Hand":   {pos: new THREE.Vector3(0.356,1.925,1),      rot: 0,         scale: new THREE.Vector3(61.03,1,1)},
                "U_L_Arm":  {pos: new THREE.Vector3(0.865,1.823,-2),      rot: -66.853,   scale: new THREE.Vector3(98.006,60.056,1)},
                "L_L_Arm":  {pos: new THREE.Vector3(1.159,1.057,-1),      rot: 30.676,    scale: new THREE.Vector3(51.863,49.124,1)},
                "L_Hand":   {pos: new THREE.Vector3(0.722,0.8,1),      rot: 0,         scale: new THREE.Vector3(61.03,1,1)},
                "U_R_Leg":  {pos: new THREE.Vector3(-0.836,-0.407,-1),      rot: -115.386,  scale: new THREE.Vector3(154.396,77.337,1)},
                "L_R_Leg":  {pos: new THREE.Vector3(-1.095,-1.753,-2),      rot: -87.73,   scale: new THREE.Vector3(140.776,70,515,1)},
                "R_Foot":   {pos: new THREE.Vector3(-1.097,-2.782,-1),      rot: -52.668,   scale: new THREE.Vector3(47.482,104.101)},
                "U_L_Leg":  {pos: new THREE.Vector3(0.343,-0.547,1),      rot: -78.878,   scale: new THREE.Vector3(161.786,81.038,1)},
                "L_L_Leg":  {pos: new THREE.Vector3(0.815,-1.863,0),      rot: -58.84,    scale: new THREE.Vector3(140.776,73.774,1)},
                "L_Foot":   {pos: new THREE.Vector3(1.27,-2.882,1),      rot: -101.161,    scale: new THREE.Vector3(47.482,104.101,1)}
            },
            { // Frame 3
                "Head":     {pos: new THREE.Vector3(0.47,2.779,1),      rot: 0,         scale: new THREE.Vector3(0.5,0.5,0.5)},
                "U_Body":   {pos: new THREE.Vector3(-0.088,2.009,0),      rot: -19.873,   scale: new THREE.Vector3(165.721,104.105,1)},
                "L_Body":   {pos: new THREE.Vector3(-0.157,1.043,0),      rot: -9.239,    scale: new THREE.Vector3(135.515,87.69,1)},
                "Pelvis":   {pos: new THREE.Vector3(-0.252,0.233,0),      rot: 17.877,    scale: new THREE.Vector3(126.123,1,1)},
                "U_R_Arm":  {pos: new THREE.Vector3(-0.87,2.256,2),      rot: -61.764,   scale: new THREE.Vector3(84.108,60.056,1)},
                "L_R_Arm":  {pos: new THREE.Vector3(-0.264,1.764,1),      rot: 24.002,    scale: new THREE.Vector3(95.089,4.124,1)},
                "R_Hand":   {pos: new THREE.Vector3(0.432,2.066,1),      rot: 0,         scale: new THREE.Vector3(61.03,1,1)},
                "U_L_Arm":  {pos: new THREE.Vector3(0.849,1.857,-2),      rot: -62.406,   scale: new THREE.Vector3(98.006,60.056,1)},
                "L_L_Arm":  {pos: new THREE.Vector3(1.193,1.156,-1),      rot: 33.314,    scale: new THREE.Vector3(51.863,49.124,1)},
                "L_Hand":   {pos: new THREE.Vector3(0.757,0.932,1),      rot: 0,         scale: new THREE.Vector3(61.03,1,1)},
                "U_R_Leg":  {pos: new THREE.Vector3(-0.931,-0.375,-1),      rot: -111.05,  scale: new THREE.Vector3(142.061,77,337,1)},
                "L_R_Leg":  {pos: new THREE.Vector3(-1.098,-1.646,-2),      rot: -87.73,   scale: new THREE.Vector3(126.546,70.515,1)},
                "R_Foot":   {pos: new THREE.Vector3(-1.111,-2.703,-1),      rot: -42.783,   scale: new THREE.Vector3(54.784,104.101,1)},
                "U_L_Leg":  {pos: new THREE.Vector3(0.41,-0.546,1),      rot: -71.595,   scale: new THREE.Vector3(161.786,81.038,1)},
                "L_L_Leg":  {pos: new THREE.Vector3(0.953,-1.908,0),      rot: -61.738,    scale: new THREE.Vector3(123.84,73.774,1)},
                "L_Foot":   {pos: new THREE.Vector3(1.285,-2.875,1),      rot: -111.71,    scale: new THREE.Vector3(47.482,104.101,1)}
            },
            { // Frame 4
                "Head":     {pos: new THREE.Vector3(0.423,2.622,1),      rot: 0,         scale: new THREE.Vector3(0.5,0.5,0.5)},
                "U_Body":   {pos: new THREE.Vector3(-0.134,1.766,0),      rot: -7.909,   scale: new THREE.Vector3(153.993,102.129,1)},
                "L_Body":   {pos: new THREE.Vector3(-0.177,0.756,0),      rot: -5.486,    scale: new THREE.Vector3(131.692,85.217,1)},
                "Pelvis":   {pos: new THREE.Vector3(-0.237,-0.013,0),      rot: 25.743,    scale: new THREE.Vector3(121.423,1,1)},
                "U_R_Arm":  {pos: new THREE.Vector3(-0.853,2.025,2),      rot: -61.764,   scale: new THREE.Vector3(94.673,60.056,1)},
                "L_R_Arm":  {pos: new THREE.Vector3(-0.197,1.524,1),      rot: 29.019,    scale: new THREE.Vector3(102.599,49.124,1)},
                "R_Hand":   {pos: new THREE.Vector3(0.477,1.846,1),      rot: 0,         scale: new THREE.Vector3(61.03,1,1)},
                "U_L_Arm":  {pos: new THREE.Vector3(0.884,1.628,-2),      rot: -62.406,   scale: new THREE.Vector3(106.008,60.056,1)},
                "L_L_Arm":  {pos: new THREE.Vector3(1.146,0.87,-1),      rot: 36.595,    scale: new THREE.Vector3(57.103,49.124,1)},
                "L_Hand":   {pos: new THREE.Vector3(0.71,0.613,1),      rot: 0,         scale: new THREE.Vector3(61.03,1,1)},
                "U_R_Leg":  {pos: new THREE.Vector3(-0.894,-0.537,-1),      rot: -111.05,  scale: new THREE.Vector3(148.93,81.078,1)},
                "L_R_Leg":  {pos: new THREE.Vector3(-1.112,-1.847,-2),      rot: -86.876,   scale: new THREE.Vector3(126.546,70.515,1)},
                "R_Foot":   {pos: new THREE.Vector3(-1.135,-2.86,-1),      rot: -58.404,   scale: new THREE.Vector3(44.744,104.101,1)},
                "U_L_Leg":  {pos: new THREE.Vector3(0.374,-0.697,1),      rot: -73.102,   scale: new THREE.Vector3(148.174,81.038,1)},
                "L_L_Leg":  {pos: new THREE.Vector3(0.946,-1.974,0),      rot: -58.097,    scale: new THREE.Vector3(123.84,73.774,1)},
                "L_Foot":   {pos: new THREE.Vector3(1.319,-2.939,1),      rot: -99.299,    scale: new THREE.Vector3(47.482,93.978,1)}
            },
            { // Frame 5
                "Head":     {pos: new THREE.Vector3(0.464,2.622,1),      rot: 0,         scale: new THREE.Vector3(0.5,0.5,0.5)},
                "U_Body":   {pos: new THREE.Vector3(-0.117,1.75,0),      rot: -4.267,   scale: new THREE.Vector3(153.993,104.129,1)},
                "L_Body":   {pos: new THREE.Vector3(-0.192,0.755,0),      rot: -1.039,    scale: new THREE.Vector3(131.692,85.217,1)},
                "Pelvis":   {pos: new THREE.Vector3(-0.272,-0.033,0),      rot: 29.601,    scale: new THREE.Vector3(121.423,1,1)},
                "U_R_Arm":  {pos: new THREE.Vector3(-0.813,1.887,2),      rot: -61.764,   scale: new THREE.Vector3(100.289,60.056,1)},
                "L_R_Arm":  {pos: new THREE.Vector3(-0.172,1.389,1),      rot: 29.019,    scale: new THREE.Vector3(102.599,49.124,1)},
                "R_Hand":   {pos: new THREE.Vector3(0.471,1.7,1),      rot: 0,         scale: new THREE.Vector3(61.03,1,1)},
                "U_L_Arm":  {pos: new THREE.Vector3(0.84,1.58,-2),      rot: -65.388,   scale: new THREE.Vector3(111.139,60.056,1)},
                "L_L_Arm":  {pos: new THREE.Vector3(1.18,0.732,-1),      rot: 29.236,    scale: new THREE.Vector3(57.103,49.124,1)},
                "L_Hand":   {pos: new THREE.Vector3(0.765,0.448,1),      rot: 0,         scale: new THREE.Vector3(61.03,1,1)},
                "U_R_Leg":  {pos: new THREE.Vector3(-0.947,-0.668,-1),      rot: -116.551,  scale: new THREE.Vector3(134.792,81.078,1)},
                "L_R_Leg":  {pos: new THREE.Vector3(-1.167,-1.842,-2),      rot: -81.116,   scale: new THREE.Vector3(112.662,70.515,1)},
                "R_Foot":   {pos: new THREE.Vector3(-1.12,-2.805,-1),      rot: -49.745,   scale: new THREE.Vector3(49.55,104.101,1)},
                "U_L_Leg":  {pos: new THREE.Vector3(0.277,-0.725,1),      rot: -77.133,   scale: new THREE.Vector3(138.686,81.038,1)},
                "L_L_Leg":  {pos: new THREE.Vector3(0.837,-1.959,0),      rot: -58.097,    scale: new THREE.Vector3(136.664,73.774,1)},
                "L_Foot":   {pos: new THREE.Vector3(1.332,-2.891,1),      rot: -104.879,    scale: new THREE.Vector3(47.716,93.978,1)}
            }
        ]
    }
}