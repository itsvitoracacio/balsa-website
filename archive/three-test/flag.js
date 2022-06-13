import {
	PlaneBufferGeometry,
	BoxBufferGeometry,
	Color,
	Texture,
	TextureLoader,
	Mesh,
	MeshBasicMaterial,
	ShaderMaterial,
	PerspectiveCamera,
	Scene,
	WebGLRenderer,
} from 'https://cdn.skypack.dev/three@0.140.0'

// import { OrbitControls } from 'https://cdn.skypack.dev/three@0.140.0/examples/jsm/controls/OrbitControls.js'
// import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.140.0/examples/jsm/loaders/GLTFLoader.js'

// Get a reference to the container element that will hold our scene
const container = document.querySelector('#scene-container')

// create a Scene
const scene = new Scene()
// Set the background color
scene.background = new Color('skyblue')

// Create a camera
const fov = 12 // AKA Field of View
const aspect = container.clientWidth / container.clientHeight
const near = 0.1 // the near clipping plane
const far = 100 // the far clipping plane
const camera = new PerspectiveCamera(fov, aspect, near, far)
// every object is initially created at ( 0, 0, 0 )
// move the camera back so we can view the scene
camera.position.set(0, 0, 5)

// Create a cube
// create a geometry
const geometry = new PlaneBufferGeometry(0.4, 0.6, 16, 16)
// create a default (white) Basic material
const material = new MeshBasicMaterial()
const waveShaderMaterial = new ShaderMaterial(
	// Uniforms
	{
		uniforms: {
			time: { value: 0 },
			color: 'hotpink',
			texture: new TextureLoader().load('https://images.unsplash.com/photo-1604011092346-0b4346ed714e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80'), // may not be correct
		}
	},
	// vertexShader
	glsl`
		// insert here
	`,
	// fragmentShader
	glsl`
		// insert here
	`)

// create a Mesh containing the geometry and material
const flag = new Mesh(geometry, waveShaderMaterial)

// add the mesh to the scene
scene.add(flag)

// Create the renderer
const renderer = new WebGLRenderer()
// next, set the renderer to the same size as our container element
renderer.setSize(container.clientWidth, container.clientHeight)
// finally, set the pixel ratio so that our scene will look good on HiDPI displays
renderer.setPixelRatio(window.devicePixelRatio)
// add the automatically created <canvas> element to the page
container.append(renderer.domElement)

// render, or 'create a still image', of the scene
renderer.render(scene, camera)
