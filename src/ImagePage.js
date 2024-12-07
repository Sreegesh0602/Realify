import React from "react";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// Component to load and display the static 3D model
function StaticModelViewer() {
  const modelPath = "/assets/3d/model.glb"; // Static path to the 3D model
  const { scene } = useGLTF(modelPath); // Load the model using useGLTF

  return <primitive object={scene} scale={1.5} />;
}

function ImagePage() {
  return (
    <div className="image-page">
      <h2>Static 3D Model Viewer</h2>
      <div style={{ width: "600px", height: "400px", margin: "0 auto" }}>
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 5, 5]} />
          <StaticModelViewer />
          <OrbitControls />
        </Canvas>
      </div>
      <Link to="/">
        <button>Back to Menu</button>
      </Link>
    </div>
  );
}

export default ImagePage;
