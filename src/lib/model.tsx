import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { Mesh } from "three/src/objects/Mesh";

export function loadGLTFModel(
  scene: THREE.Scene,
  glbPath: string,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader(); // Create an instance of the DRACOLoader
    dracoLoader.setDecoderPath("/3D/draco/"); // Set the path to the Draco decoder (the directory where Draco decoder files are located)
    loader.setDRACOLoader(dracoLoader); // Set the DRACOLoader instance for the GLTFLoader

    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene;
        obj.name = "my-head";
        obj.position.y = -0.4;
        obj.position.x = 0;
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);

        obj.traverse(function (child) {
          if ((child as Mesh).isMesh) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });
        resolve(obj);
      },
      undefined,
      function (error) {
        reject(error);
      }
    );
  });
}
