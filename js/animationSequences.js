const sequences = loadSequences()

class AnimationSequence {
    constructor(){
        this.duration = 1000; // ms
        this.keyframes = [];
    }

    updates(){
        const numKeyframes = this.keyframes.length;
        const phase = ((+new Date) % this.duration) / this.duration; // always between 0-1

        const i = Math.floor(phase*numKeyframes);
        const j = Math.ceil(phase*numKeyframes);

        const current = this.keyframes[i];
        const next = this.keyframes[(j < this.keyframes.length) ? j : 0];

        const interpolatedKeyframes = {};

        for(const meshName in current) {
            const keyframe = current[meshName];

            interpolatedKeyframes[meshName] = {
                position: keyframe.position.lerp(next[meshName].position, phase),
                rotation: keyframe.rotation + (next[meshName].rotation - keyframe.rotation) * phase,
                scale: keyframe.scale.lerp(next[meshName].scale, phase)
            }
        }

        return interpolatedKeyframes;
        
        return {
            position: current.position.lerp(next.position, phase),
        }
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

function loadSequences() {
    const sequences = ['kick'];
    const parsed = {};

    // synchronously fetches the sequence or animation json files and returns
    // them parsed into an object e.g. {sequenceName: [keyFrame1, keyFrame2, ...], ...}
    // make sure animations/*.json files match this [keyFrame1, keyFrame2] format 
    sequences.forEach((sequenceName) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `/animations/${sequenceName}.json`, true);
        xhr.onload = (e) => {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    parsed[sequenceName] = JSON.parse(xhr.responseText);
                } else {
                    console.error("can't load", sequenceName, xhr.statusText);
                }
            }
        };
        xhr.onerror = (e) => {
            console.error(xhr.statusText);
        };
        xhr.send(null);
    });

    return parsed;
}

class Protagonist_Idle extends AnimationSequence{
    constructor(){
        super();
        this.keyframes = [
            { // Frame 0
                "Head":     {position: new THREE.Vector3(0.393,2.442,1),     rotation: 0,         scale: new THREE.Vector3(0.5,0.5,0.5)},
                "U_Body":   {position: new THREE.Vector3(-0.079,1.736,0),    rotation: -11.592,   scale: new THREE.Vector3(148.373,89.891,1)},
                "L_Body":   {position: new THREE.Vector3(-0.189,0.731,0),    rotation: -3.906,    scale: new THREE.Vector3(135.514,87.69,1)},
                "Pelvis":   {position: new THREE.Vector3(-0.301,-0.076,0),   rotation: 25.419,    scale: new THREE.Vector3(126.122,1,1)},
                "U_R_Arm":  {position: new THREE.Vector3(-0.854,1.786,2),    rotation: -60.404,   scale: new THREE.Vector3(94.866,60.056,1)},
                "L_R_Arm":  {position: new THREE.Vector3(-0.251,1.231,1),    rotation: 26.253,    scale: new THREE.Vector3(98.26,49.124,1)},
                "R_Hand":   {position: new THREE.Vector3(0.456,1.536,1),     rotation: 0,         scale: new THREE.Vector3(61.03,1,1)},
                "U_L_Arm":  {position: new THREE.Vector3(0.847,1.44,-2),     rotation: -66.853,   scale: new THREE.Vector3(116.057,60.056,1)},
                "L_L_Arm":  {position: new THREE.Vector3(1.057,0.594,-1),    rotation: 43.682,    scale: new THREE.Vector3(72.151,49.124,1)},
                "L_Hand":   {position: new THREE.Vector3(0.672,0.17,1),      rotation: 0,         scale: new THREE.Vector3(61.03,1,1)},
                "U_R_Leg":  {position: new THREE.Vector3(-0.954,-0.73,-1),   rotation: -122.368,  scale: new THREE.Vector3(146.224,73.243,1)},
                "L_R_Leg":  {position: new THREE.Vector3(-1.235,-1.98,-2),   rotation: -76.754,   scale: new THREE.Vector3(140.776,70.515,1)},
                "R_Foot":   {position: new THREE.Vector3(-1.124,-2.949,-1),  rotation: -71.787,   scale: new THREE.Vector3(47.482,104.101,1)},
                "U_L_Leg":  {position: new THREE.Vector3(0.22,-0.796,1),     rotation: -75.159,   scale: new THREE.Vector3(146.224,73.243,1)},
                "L_L_Leg":  {position: new THREE.Vector3(0.794,-2.053,0),    rotation: -58.84,    scale: new THREE.Vector3(140.776,70.515,1)},
                "L_Foot":   {position: new THREE.Vector3(1.231,-2.952,1),    rotation: -88.48,    scale: new THREE.Vector3(47.482,104.101,1)}
            },
            { // Frame 1
                "Head":     {position: new THREE.Vector3(0.395,2.614,1),      rotation: 0,         scale: new THREE.Vector3(0.5,0.5,0.5)},
                "U_Body":   {position: new THREE.Vector3(-0.059,1.752,0),      rotation: -11.592,   scale: new THREE.Vector3(148.373,89.891,1)},
                "L_Body":   {position: new THREE.Vector3(-0.178,0.75,0),      rotation: -3.906,    scale: new THREE.Vector3(135.514,87,69,1)},
                "Pelvis":   {position: new THREE.Vector3(-0.301,-0.076,0),      rotation: 25.419,    scale: new THREE.Vector3(126.122,1,1)},
                "U_R_Arm":  {position: new THREE.Vector3(-0.854,1.928,2),      rotation: -65.517,   scale: new THREE.Vector3(99.208,60.056,1)},
                "L_R_Arm":  {position: new THREE.Vector3(-0.252,1.346,1),      rotation: 21.253,    scale: new THREE.Vector3(98.26,49.124,1)},
                "R_Hand":   {position: new THREE.Vector3(0.481,1.614,1),      rotation: 0,         scale: new THREE.Vector3(61.03,1,1)},
                "U_L_Arm":  {position: new THREE.Vector3(0.858,1.486,-2),      rotation: -66.853,   scale: new THREE.Vector3(116.057,60.056,1)},
                "L_L_Arm":  {position: new THREE.Vector3(1.127,0.672,-1),      rotation: 43.682,    scale: new THREE.Vector3(72.151,49.124)},
                "L_Hand":   {position: new THREE.Vector3(0.772,0.269,1),      rotation: 0,         scale: new THREE.Vector3(61.03,1,1)},
                "U_R_Leg":  {position: new THREE.Vector3(-0.941,-0.719,-1),      rotation: -118.435,  scale: new THREE.Vector3(146.224,73.243,1)},
                "L_R_Leg":  {position: new THREE.Vector3(-1.172,-1.958,-2),      rotation: -79.181,   scale: new THREE.Vector3(140.776,70.515,1)},
                "R_Foot":   {position: new THREE.Vector3(-1.131,-2.945,-1),      rotation: -74.654,   scale: new THREE.Vector3(47.482,104.101,1)},
                "U_L_Leg":  {position: new THREE.Vector3(0.271,-0.726,1),      rotation: -75.016,   scale: new THREE.Vector3(146.224,73.243,1)},
                "L_L_Leg":  {position: new THREE.Vector3(0.806,-2.001,0),      rotation: -58.84,    scale: new THREE.Vector3(140.776,70.515,1)},
                "L_Foot":   {position: new THREE.Vector3(1.231,-2.952,1),      rotation: -88.48,    scale: new THREE.Vector3(47.482,104.101,1)}
            },
            { // Frame 2
                "Head":     {position: new THREE.Vector3(0.414,2.782,1),      rotation: 0,         scale: new THREE.Vector3(0.5,0.5,0.5)},
                "U_Body":   {position: new THREE.Vector3(-0.126,1.965,0),      rotation: -6.085,   scale: new THREE.Vector3(148.373,89.891,1)},
                "L_Body":   {position: new THREE.Vector3(-0.091,0.954,0),      rotation: -0.488,    scale: new THREE.Vector3(135.515,87.69,1)},
                "Pelvis":   {position: new THREE.Vector3(-0.196,0.152,0),      rotation: 25.929,    scale: new THREE.Vector3(126.123,1,1)},
                "U_R_Arm":  {position: new THREE.Vector3(-0.804,2.107,2),      rotation: -61.764,   scale: new THREE.Vector3(99.208,60.056,1)},
                "L_R_Arm":  {position: new THREE.Vector3(-0.208,1.542,1),      rotation: 27.421,    scale: new THREE.Vector3(87.162,49.124,1)},
                "R_Hand":   {position: new THREE.Vector3(0.356,1.925,1),      rotation: 0,         scale: new THREE.Vector3(61.03,1,1)},
                "U_L_Arm":  {position: new THREE.Vector3(0.865,1.823,-2),      rotation: -66.853,   scale: new THREE.Vector3(98.006,60.056,1)},
                "L_L_Arm":  {position: new THREE.Vector3(1.159,1.057,-1),      rotation: 30.676,    scale: new THREE.Vector3(51.863,49.124,1)},
                "L_Hand":   {position: new THREE.Vector3(0.722,0.8,1),      rotation: 0,         scale: new THREE.Vector3(61.03,1,1)},
                "U_R_Leg":  {position: new THREE.Vector3(-0.836,-0.407,-1),      rotation: -115.386,  scale: new THREE.Vector3(154.396,77.337,1)},
                "L_R_Leg":  {position: new THREE.Vector3(-1.095,-1.753,-2),      rotation: -87.73,   scale: new THREE.Vector3(140.776,70,515,1)},
                "R_Foot":   {position: new THREE.Vector3(-1.097,-2.782,-1),      rotation: -52.668,   scale: new THREE.Vector3(47.482,104.101)},
                "U_L_Leg":  {position: new THREE.Vector3(0.343,-0.547,1),      rotation: -78.878,   scale: new THREE.Vector3(161.786,81.038,1)},
                "L_L_Leg":  {position: new THREE.Vector3(0.815,-1.863,0),      rotation: -58.84,    scale: new THREE.Vector3(140.776,73.774,1)},
                "L_Foot":   {position: new THREE.Vector3(1.27,-2.882,1),      rotation: -101.161,    scale: new THREE.Vector3(47.482,104.101,1)}
            },
            { // Frame 3
                "Head":     {position: new THREE.Vector3(0.47,2.779,1),      rotation: 0,         scale: new THREE.Vector3(0.5,0.5,0.5)},
                "U_Body":   {position: new THREE.Vector3(-0.088,2.009,0),      rotation: -19.873,   scale: new THREE.Vector3(165.721,104.105,1)},
                "L_Body":   {position: new THREE.Vector3(-0.157,1.043,0),      rotation: -9.239,    scale: new THREE.Vector3(135.515,87.69,1)},
                "Pelvis":   {position: new THREE.Vector3(-0.252,0.233,0),      rotation: 17.877,    scale: new THREE.Vector3(126.123,1,1)},
                "U_R_Arm":  {position: new THREE.Vector3(-0.87,2.256,2),      rotation: -61.764,   scale: new THREE.Vector3(84.108,60.056,1)},
                "L_R_Arm":  {position: new THREE.Vector3(-0.264,1.764,1),      rotation: 24.002,    scale: new THREE.Vector3(95.089,4.124,1)},
                "R_Hand":   {position: new THREE.Vector3(0.432,2.066,1),      rotation: 0,         scale: new THREE.Vector3(61.03,1,1)},
                "U_L_Arm":  {position: new THREE.Vector3(0.849,1.857,-2),      rotation: -62.406,   scale: new THREE.Vector3(98.006,60.056,1)},
                "L_L_Arm":  {position: new THREE.Vector3(1.193,1.156,-1),      rotation: 33.314,    scale: new THREE.Vector3(51.863,49.124,1)},
                "L_Hand":   {position: new THREE.Vector3(0.757,0.932,1),      rotation: 0,         scale: new THREE.Vector3(61.03,1,1)},
                "U_R_Leg":  {position: new THREE.Vector3(-0.931,-0.375,-1),      rotation: -111.05,  scale: new THREE.Vector3(142.061,77,337,1)},
                "L_R_Leg":  {position: new THREE.Vector3(-1.098,-1.646,-2),      rotation: -87.73,   scale: new THREE.Vector3(126.546,70.515,1)},
                "R_Foot":   {position: new THREE.Vector3(-1.111,-2.703,-1),      rotation: -42.783,   scale: new THREE.Vector3(54.784,104.101,1)},
                "U_L_Leg":  {position: new THREE.Vector3(0.41,-0.546,1),      rotation: -71.595,   scale: new THREE.Vector3(161.786,81.038,1)},
                "L_L_Leg":  {position: new THREE.Vector3(0.953,-1.908,0),      rotation: -61.738,    scale: new THREE.Vector3(123.84,73.774,1)},
                "L_Foot":   {position: new THREE.Vector3(1.285,-2.875,1),      rotation: -111.71,    scale: new THREE.Vector3(47.482,104.101,1)}
            },
            { // Frame 4
                "Head":     {position: new THREE.Vector3(0.423,2.622,1),      rotation: 0,         scale: new THREE.Vector3(0.5,0.5,0.5)},
                "U_Body":   {position: new THREE.Vector3(-0.134,1.766,0),      rotation: -7.909,   scale: new THREE.Vector3(153.993,102.129,1)},
                "L_Body":   {position: new THREE.Vector3(-0.177,0.756,0),      rotation: -5.486,    scale: new THREE.Vector3(131.692,85.217,1)},
                "Pelvis":   {position: new THREE.Vector3(-0.237,-0.013,0),      rotation: 25.743,    scale: new THREE.Vector3(121.423,1,1)},
                "U_R_Arm":  {position: new THREE.Vector3(-0.853,2.025,2),      rotation: -61.764,   scale: new THREE.Vector3(94.673,60.056,1)},
                "L_R_Arm":  {position: new THREE.Vector3(-0.197,1.524,1),      rotation: 29.019,    scale: new THREE.Vector3(102.599,49.124,1)},
                "R_Hand":   {position: new THREE.Vector3(0.477,1.846,1),      rotation: 0,         scale: new THREE.Vector3(61.03,1,1)},
                "U_L_Arm":  {position: new THREE.Vector3(0.884,1.628,-2),      rotation: -62.406,   scale: new THREE.Vector3(106.008,60.056,1)},
                "L_L_Arm":  {position: new THREE.Vector3(1.146,0.87,-1),      rotation: 36.595,    scale: new THREE.Vector3(57.103,49.124,1)},
                "L_Hand":   {position: new THREE.Vector3(0.71,0.613,1),      rotation: 0,         scale: new THREE.Vector3(61.03,1,1)},
                "U_R_Leg":  {position: new THREE.Vector3(-0.894,-0.537,-1),      rotation: -111.05,  scale: new THREE.Vector3(148.93,81.078,1)},
                "L_R_Leg":  {position: new THREE.Vector3(-1.112,-1.847,-2),      rotation: -86.876,   scale: new THREE.Vector3(126.546,70.515,1)},
                "R_Foot":   {position: new THREE.Vector3(-1.135,-2.86,-1),      rotation: -58.404,   scale: new THREE.Vector3(44.744,104.101,1)},
                "U_L_Leg":  {position: new THREE.Vector3(0.374,-0.697,1),      rotation: -73.102,   scale: new THREE.Vector3(148.174,81.038,1)},
                "L_L_Leg":  {position: new THREE.Vector3(0.946,-1.974,0),      rotation: -58.097,    scale: new THREE.Vector3(123.84,73.774,1)},
                "L_Foot":   {position: new THREE.Vector3(1.319,-2.939,1),      rotation: -99.299,    scale: new THREE.Vector3(47.482,93.978,1)}
            },
            { // Frame 5
                "Head":     {position: new THREE.Vector3(0.464,2.622,1),      rotation: 0,         scale: new THREE.Vector3(0.5,0.5,0.5)},
                "U_Body":   {position: new THREE.Vector3(-0.117,1.75,0),      rotation: -4.267,   scale: new THREE.Vector3(153.993,104.129,1)},
                "L_Body":   {position: new THREE.Vector3(-0.192,0.755,0),      rotation: -1.039,    scale: new THREE.Vector3(131.692,85.217,1)},
                "Pelvis":   {position: new THREE.Vector3(-0.272,-0.033,0),      rotation: 29.601,    scale: new THREE.Vector3(121.423,1,1)},
                "U_R_Arm":  {position: new THREE.Vector3(-0.813,1.887,2),      rotation: -61.764,   scale: new THREE.Vector3(100.289,60.056,1)},
                "L_R_Arm":  {position: new THREE.Vector3(-0.172,1.389,1),      rotation: 29.019,    scale: new THREE.Vector3(102.599,49.124,1)},
                "R_Hand":   {position: new THREE.Vector3(0.471,1.7,1),      rotation: 0,         scale: new THREE.Vector3(61.03,1,1)},
                "U_L_Arm":  {position: new THREE.Vector3(0.84,1.58,-2),      rotation: -65.388,   scale: new THREE.Vector3(111.139,60.056,1)},
                "L_L_Arm":  {position: new THREE.Vector3(1.18,0.732,-1),      rotation: 29.236,    scale: new THREE.Vector3(57.103,49.124,1)},
                "L_Hand":   {position: new THREE.Vector3(0.765,0.448,1),      rotation: 0,         scale: new THREE.Vector3(61.03,1,1)},
                "U_R_Leg":  {position: new THREE.Vector3(-0.947,-0.668,-1),      rotation: -116.551,  scale: new THREE.Vector3(134.792,81.078,1)},
                "L_R_Leg":  {position: new THREE.Vector3(-1.167,-1.842,-2),      rotation: -81.116,   scale: new THREE.Vector3(112.662,70.515,1)},
                "R_Foot":   {position: new THREE.Vector3(-1.12,-2.805,-1),      rotation: -49.745,   scale: new THREE.Vector3(49.55,104.101,1)},
                "U_L_Leg":  {position: new THREE.Vector3(0.277,-0.725,1),      rotation: -77.133,   scale: new THREE.Vector3(138.686,81.038,1)},
                "L_L_Leg":  {position: new THREE.Vector3(0.837,-1.959,0),      rotation: -58.097,    scale: new THREE.Vector3(136.664,73.774,1)},
                "L_Foot":   {position: new THREE.Vector3(1.332,-2.891,1),      rotation: -104.879,    scale: new THREE.Vector3(47.716,93.978,1)}
            }
        ]
    }
}