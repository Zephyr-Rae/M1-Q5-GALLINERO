const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

// String format (CSS color names, HEX, or RGB)
scene.background = new THREE.Color('#FFC76E');

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//EDGES
const geometry = new THREE.BoxGeometry();
const edges = new THREE.EdgesGeometry( geometry );
const line1 = new THREE.LineSegments( edges );
scene.add( line1 );

line1.position.x = -1.5;

//CAPSULE
const geometryCapsule = new THREE.CapsuleGeometry( 0.3, 0.3, 2, 4, 0.5 );
const materialCapsule = new THREE.MeshNormalMaterial( {
    color: 0x462185,
    roughness: 0.7,  // 0.0 = mirror smooth, 1.0 = completely matte
    metalness: 0.5} );
const capsule = new THREE.Mesh( geometryCapsule, materialCapsule );
scene.add( capsule );

capsule.position.x = 1.5;

//CUBE POS

//CUBE_BOX
const geometryCube = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );
const materialCube = new THREE.MeshNormalMaterial( {
    color: 0x1EBAC9,
    roughness: 0.5,  // 0.0 = mirror smooth, 1.0 = completely matte
    metalness: 0.5 } );
const cube = new THREE.Mesh( geometryCube, materialCube );
scene.add( cube );

//CUBE POS
cube.position.x = 0;

//RING
const geometryRing = new THREE.RingGeometry( 1, 2, 30);
const materialRing = new THREE.MeshStandardMaterial( {
    color: 0x462185,
    side: THREE.DoubleSide,
    color: 0x462185,
    roughness: 0.7,  // 0.0 = mirror smooth, 1.0 = completely matte
    metalness: 0.5} );
const mesh = new THREE.Mesh( geometryRing, materialRing );
scene.add( mesh );

//WIREFRAME
const geometryWireframe = new THREE.SphereGeometry();
const wireframe = new THREE.WireframeGeometry( geometryWireframe );
const line = new THREE.LineSegments( wireframe );
line.material.depthWrite = false;
line.material.opacity = 0.25;
line.material.transparent = true;
scene.add( line );

// 1. Create ambient light for soft global illumination
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// 2. Create directional light to simulate the sun
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);
directionalLight.intensity = 5.0; 

// 3. Create a point light for a localized glowing effect
const pointLight = new THREE.PointLight(0xffaa00, 2, 50);
pointLight.position.set(0, 5, 0);
scene.add(pointLight);

camera.position.z = 5;

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    mesh.rotation.x -= 5;
    mesh.rotation.y -= 10;
    line.rotation.y += 0.01;
    capsule.rotation.x += 0.09;
    line1.rotation.x += 0.09;
    line1.rotation.y += 0.09;

    renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );


