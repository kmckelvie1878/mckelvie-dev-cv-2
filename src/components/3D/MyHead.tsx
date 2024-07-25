"use client";

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  MutableRefObject,
} from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { loadGLTFModel } from "../../lib/model";
import { MyHeadSpinner, MyHeadContainer } from "./HeadLoader";

interface MyHeadProps {
  children?: React.ReactNode;
}

// function easeOutCirc(x: number) {
//   return Math.sqrt(1 - Math.pow(x - 1, 4));
// }

const MyHead = ({}: MyHeadProps) => {
  const refContainer = useRef() as MutableRefObject<HTMLDivElement | null>;
  const [loading, setLoading] = useState(true);
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null);
  const [_camera, setCamera] = useState<THREE.Camera | null>(null);
  const [target] = useState(new THREE.Vector3(-0.15, -0.2, 0));
  const [initialCameraPosition] = useState(
    new THREE.Vector3(0, 10, 20 * Math.sin(0.2 * Math.PI))
  );
  const [scene] = useState(new THREE.Scene());
  const [_controls, setControls] = useState<OrbitControls | null>(null);

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);
    }
  }, [renderer]);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer;
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.shadowMap.enabled = true; // Enable shadow rendering in the renderer
      renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Set the shadow map type (PCFSoftShadowMap provides smoother shadows)
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      let scaleMultiplier;

      switch (scW) {
        case 300:
          scaleMultiplier = 1.25;
          break;
        case 380:
          scaleMultiplier = 1;
          break;
        case 500:
          scaleMultiplier = 1;
          break;
        case 960:
          scaleMultiplier = 0.65;
          break;
        default:
          scaleMultiplier = 1; // Default value if none of the cases match
      }

      // console.log("scaleMultiplier: ", scaleMultiplier);

      const scale = (scH * 0.0025 + 0.6) * scaleMultiplier;

      // console.log("scale:", scale);
      // console.log("scW:", scW, "scH:", scH);

      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.1,
        50000
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);
      setCamera(camera);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      // const hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4);
      // camera.add(hemiLight);

      // spotLight params
      const slDistance = 25.0;
      const slAngle = Math.PI / 4.0;
      const slPenumbra = 1.0;
      const slDecay = 1.0;

      const spotLight = new THREE.SpotLight(
        0x8b5cf6,
        2.5,
        slDistance,
        slAngle,
        slPenumbra,
        slDecay
      );
      spotLight.position.set(-10, 10, 0);
      spotLight.target.position.set(0, 0, 0);
      spotLight.castShadow = true;
      spotLight.shadow.mapSize.width = 1024; // Adjust shadow map size for better quality
      spotLight.shadow.mapSize.height = 1024;
      scene.add(spotLight);
      scene.add(spotLight.target);

      // spotLight2 params
      const sl2Distance = 25.0;
      const sl2Angle = Math.PI / 4.0;
      const sl2Penumbra = 0.5;
      const sl2Decay = 1.0;

      const spotLight2 = new THREE.SpotLight(
        0x2dd4bf,
        2.5,
        sl2Distance,
        sl2Angle,
        sl2Penumbra,
        sl2Decay
      );
      spotLight2.position.set(10, 20, 0);
      spotLight2.target.position.set(0, 0, 0);
      spotLight2.castShadow = true;
      spotLight2.shadow.mapSize.width = 1024; // Adjust shadow map size for better quality
      spotLight2.shadow.mapSize.height = 1024;
      scene.add(spotLight2);
      scene.add(spotLight2.target);

      renderer.toneMapping = THREE.ReinhardToneMapping;
      renderer.toneMappingExposure = 2.3;

      const controls = new OrbitControls(camera, renderer.domElement);
      // controls.autoRotate = true;
      controls.enableZoom = false;
      controls.enablePan = false;

      // Step 1: Initialize variables
      let rotateDirection = 1; // 1 for clockwise, -1 for counter-clockwise
      let currentAngle = 0; // Current rotation angle in radians
      const rotationSpeed = 0.0025; // Speed of rotation
      const maxAngle = Math.PI / 2.6; // 90 degrees in radians

      controls.target = target;
      setControls(controls);

      loadGLTFModel(scene, "/3D/Head2024_2.glb", {
        receiveShadow: true,
        castShadow: true,
      }).then(() => {
        animate();
        setLoading(false);
      });

      let req = null as number | null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);

        // Adjust rotation based on direction
        currentAngle += rotationSpeed * rotateDirection;

        // Check if the current angle has reached 90 degrees or -90 degrees (PI/2 or -PI/2 radians)
        // Then reverse the direction to simulate a 180-degree rotation back and forth
        if (currentAngle >= maxAngle || currentAngle <= -maxAngle) {
          rotateDirection *= -1; // Reverse the direction
        }

        // Calculate new position based on the current angle
        const p = initialCameraPosition;
        camera.position.y = 2; // Adjust the Y position as needed
        camera.position.x =
          p.x * Math.cos(currentAngle) + p.z * Math.sin(currentAngle);
        camera.position.z =
          p.z * Math.cos(currentAngle) - p.x * Math.sin(currentAngle);
        camera.lookAt(target); // Ensure the camera always looks at the target

        renderer.render(scene, camera);
      };

      return () => {
        console.log("unmount");
        if (req !== null) {
          cancelAnimationFrame(req);
        }
        renderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, [renderer, handleWindowResize]);

  return (
    <MyHeadContainer ref={refContainer}>
      {loading && <MyHeadSpinner />}
    </MyHeadContainer>
  );
};

export default MyHead;
