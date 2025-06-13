
// Basic THREE.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("n6-10-canvas"), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 2;

// Basic geometry for 3D model placeholder
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshStandardMaterial({ color: 0x00ffff, flatShading: true });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Lights
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(5, 5, 5);
scene.add(light);

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
