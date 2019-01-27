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

        //return current; // don't interpolate

        const updates = {};

        for(const meshName in current) {
            const keyframe = current[meshName];

            var kfp = keyframe.position.clone();
            var nmp = next[meshName].position.clone();
            var kfs = keyframe.scale.clone();
            var nms = next[meshName].scale.clone();

            updates[meshName] = {
                position: kfp.lerp(nmp, phase),
                rotation: keyframe.rotation + (next[meshName].rotation - keyframe.rotation) * phase,
                scale: kfs.lerp(nms, phase)
            }
        }

        return updates;
    }
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

function hackyDeepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const sequences = loadSequences('idle', 'kick', 'punch', 'walk');