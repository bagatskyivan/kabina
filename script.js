// Створення сцени
const scene = new THREE.Scene();

// Створення камери
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Створення рендерера
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('3d-container').appendChild(renderer.domElement);

// Завантаження моделі
const loader = new THREE.GLTFLoader();
loader.load('kabina2.0.glb', (gltf) => {
    scene.add(gltf.scene);
    gltf.scene.scale.set(2, 2, 2); // Змінюйте масштаб моделі за потреби
}, undefined, (error) => {
    console.error('Помилка завантаження моделі:', error);
});

// Додавання освітлення
const light = new THREE.AmbientLight(0x404040); // м'яке світло
scene.add(light);

const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// Налаштування позиції камери
camera.position.z = 5;

// Анімаційний цикл
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Обробка зміни розміру вікна
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
