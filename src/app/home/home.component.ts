import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  param = {value: 'home'};

  @ViewChild('canvas')
  private canvasRef: ElementRef;

  //* Cube Properties
  @Input() public rotationSpeedX: number = 0.05;
  @Input() public rotationSpeedY: number = 0.01;
  @Input() public size: number = 200;
  @Input() public texture: string = "/assets/wall.jpg";
  //@Input() public background: string = '/assets/background.jpg';


  //* Stage Properties
  @Input() public cameraZ: number = 30;
  @Input() public fieldOfView: number = 75;
  @Input('nearClipping') public nearClippingPlane: number = 1;
  @Input('farClipping') public farClippingPlane: number = 1000;

  //? Helper Properties (Private Properties);
  private camera!: THREE.PerspectiveCamera;
  private get canvas(): HTMLCanvasElement { return this.canvasRef.nativeElement; }
  private loader = new THREE.TextureLoader();
  private geometry = new THREE.TorusGeometry(10, 3, 16, 100);
  //private material = new THREE.MeshStandardMaterial({ map: this.loader.load(this.texture) });
  private material = new THREE.MeshStandardMaterial({color:0xffba08});
  //private backgroundTexture = new THREE.TextureLoader().load(this.background);
  private cube: THREE.Mesh = new THREE.Mesh(this.geometry, this.material);
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private pointLight: THREE.PointLight;
  private ambientLight: THREE.AmbientLight;

  //? Helpers (Private):
  private lightHelper: THREE.PointLightHelper;
  private gridHelper: THREE.GridHelper;
  private controls: OrbitControls;

  /**
   *Animate the cube
   *
   * @private
   * @memberof CubeComponent
   */
  private animateCube() {
    this.cube.rotation.x += this.rotationSpeedX;
    this.cube.rotation.y += this.rotationSpeedY;
  }

  /**
   * Create the scene
   *
   * @private
   * @memberof CubeComponent
   */
  private createScene() {
    //* Scene
    this.scene = new THREE.Scene();
    //this.scene.background = this.backgroundTexture;
    // const targetAspect = window.innerWidth / window.innerHeight;
    // const imageAspect = 3840 / 2160;
    // const factor = imageAspect / targetAspect;
    // When factor larger than 1, that means texture 'wilder' than target。 
    // we should scale texture height to target height and then 'map' the center  of texture to target， and vice versa.
    // this.scene.background.offset.x = factor > 1 ? (1 - 1 / factor) / 2 : 0;
    // this.scene.background.repeat.x = factor > 1 ? 1 / factor : 1;
    // this.scene.background.offset.y = factor > 1 ? 0 : (1 - factor) / 2;
    // this.scene.background.repeat.y = factor > 1 ? 1 : factor;
    this.scene.add(this.cube);

    //* Lights
    this.pointLight = new THREE.PointLight(0xffffff);
    this.pointLight.position.set(5, 5, 5);
    this.ambientLight = new THREE.AmbientLight(0xffffff);
    this.scene.add(this.pointLight, this.ambientLight);

    //*Camera
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      this.getAspectRatio(),
      this.nearClippingPlane,
      this.farClippingPlane
    )
    this.camera.position.z = this.cameraZ;

    //* Helpers
    this.lightHelper = new THREE.PointLightHelper(this.pointLight);
    this.scene.add(this.lightHelper);
    this.gridHelper = new THREE.GridHelper(200, 50);
    this.scene.add(this.gridHelper);
  }

  private getAspectRatio() {
    return window.innerWidth / window.innerHeight;
  }

  /**
 * Start the rendering loop
 *
 * @private
 * @memberof CubeComponent
 */
  private startRenderingLoop() {
    //* Renderer
    // Use canvas element in template
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerWidth);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    let component: HomeComponent = this;

    // Render loop
    (function render() {
      requestAnimationFrame(render);
      component.animateCube();
      component.renderer.render(component.scene, component.camera);
      component.controls.update();
    }());
  }

  ngAfterViewInit() {
    this.createScene();
    this.startRenderingLoop();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    window.addEventListener('resize', () => {
      // Update camera
      this.camera.aspect = this.getAspectRatio();
      this.camera.updateProjectionMatrix();

      // Update background
      // const targetAspect = window.innerWidth / window.innerHeight;
      // const imageAspect = 3840 / 2160;
      // const factor = imageAspect / targetAspect;
      // (this.scene.background as THREE.Texture).offset.x = factor > 1 ? (1 - 1 / factor) / 2 : 0;
      // (this.scene.background as THREE.Texture).repeat.x = factor > 1 ? 1 / factor : 1;
      // (this.scene.background as THREE.Texture).offset.y = factor > 1 ? 0 : (1 - factor) / 2;
      // (this.scene.background as THREE.Texture).repeat.y = factor > 1 ? 1 : factor;

      // Update renderer
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    })
  }

  private translateTo(language: string) {
    this.translate.use(language);
  }

  translateToSpanish() {
    this.translateTo('es');
  }

  translateToGerman() {
    this.translateTo('de');
  }

  translateToEnglish() {
    this.translateTo('en');
  }

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('es');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('es');
  }
  ngOnInit(): void {}

}
