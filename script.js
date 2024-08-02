// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('3d-container').appendChild(renderer.domElement);

// Load 3D model
const loader = new THREE.GLTFLoader();
loader.load('kabina/kabina2.0.glb', (gltf) => {
    scene.add(gltf.scene);
    gltf.scene.scale.set(2, 2, 2); // Resize model if needed
}, undefined, (error) => {
    console.error(error);
});

// Set up lighting
const light = new THREE.AmbientLight(0x404040);
scene.add(light);

const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// Camera position
camera.position.z = 5;

// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
