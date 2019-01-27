class AnimationSequence {
    constructor(name, keyframes){
        this.name = name;
        this.duration = 1000; // ms
        this.keyframes = keyframes;
    }

    updates(){
        const numKeyframes = this.keyframes.length;
        const phase = ((+new Date) % this.duration) / this.duration; // always between 0-1

        const i = Math.floor(phase*numKeyframes);
        const j = Math.ceil(phase*numKeyframes);

        const current = this.keyframes[i];
        const next = this.keyframes[(j < this.keyframes.length) ? j : 0];

        return current; // don't interpolate

        const updates = {};

        for(const meshName in current) {
            const keyframe = current[meshName];

            updates[meshName] = {
                position: keyframe.position.lerp(next[meshName].position, phase),
                rotation: keyframe.rotation + (next[meshName].rotation - keyframe.rotation) * phase,
                scale: keyframe.scale.lerp(next[meshName].scale, phase)
            }
        }

        return updates;
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

// synchronously fetches sequence or animation json files and returns
// them parsed into an object e.g. {sequenceName: [keyFrame1, keyFrame2, ...], ...}
// make sure animations/*.json files match this [keyFrame1, keyFrame2] format 
function loadSequences(...names) {
    const parsed = {};

    names.forEach((sequenceName) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `/animations/${sequenceName}.json`, false);
        xhr.onload = (e) => {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    parsed[sequenceName] = parseSequence(sequenceName, xhr.responseText);
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

function parseSequence(name, jsonText) {
    const data = JSON.parse(jsonText);
    const keyframes = data.map((keyframe) => {
        const byMeshName = {};
        keyframe.forEach((mesh) => {
            mesh = mesh[0]
            mesh.position = new THREE.Vector3(mesh.position[0], mesh.position[1], mesh.position[2])
            mesh.scale = new THREE.Vector3(mesh.scale[0], mesh.scale[1], mesh.scale[2])
            byMeshName[mesh.name] = mesh
        });
        return byMeshName;
    });
    return new AnimationSequence(name, keyframes);
}

const sequences = loadSequences('idle', 'kick', 'punch');