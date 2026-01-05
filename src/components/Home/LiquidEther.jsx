import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const LiquidEther = ({
  colors = ["#5227FF", "#FF9FFC", "#B19EEF"],
  mouseForce = 20,
  cursorSize = 100,
  isViscous = false,
  viscous = 30,
  iterationsViscous = 32,
  iterationsPoisson = 32,
  resolution = 0.5,
  isBounce = false,
  autoDemo = true,
  autoSpeed = 0.5,
  autoIntensity = 2.2,
  takeoverDuration = 0.25,
  autoResumeDelay = 3000,
  autoRampDuration = 0.6,
}) => {
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const rendererRef = useRef(null);
  const materialRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const mouseRef = useRef(new THREE.Vector2(0, 0));
  const timeRef = useRef(0);
  const autoTimeRef = useRef(0);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
      setWebGLSupported(false);
      console.warn("WebGL is not supported in this browser");
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current || !webGLSupported) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    cameraRef.current = camera;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch (error) {
      console.error("Failed to create WebGL renderer:", error);
      setWebGLSupported(false);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const parseColor = (hex) => {
      const color = new THREE.Color(hex);
      return new THREE.Vector3(color.r, color.g, color.b);
    };

    const color1 = parseColor(colors[0] || "#0045EF");
    const color2 = parseColor(colors[1] || colors[0] || "#0045EF");
    const color3 = parseColor(colors[2] || colors[0] || "#0045EF");

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      uniform vec3 uColor1;
      uniform vec3 uColor2;
      uniform vec3 uColor3;
      uniform float uAutoTime;
      uniform float uAutoIntensity;
      uniform float uMouseForce;
      uniform float uCursorSize;
      uniform bool uAutoDemo;
      varying vec2 vUv;

      const float PI = 3.141592653589793;

      mat2 rot(float angle) {
        float s = sin(angle);
        float c = cos(angle);
        return mat2(c, -s, s, c);
      }

      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }

      float fbm(vec2 p) {
        float value = 0.0;
        float amplitude = 0.5;
        for (int i = 0; i < 4; i++) {
          value += amplitude * noise(p);
          p *= 2.0;
          amplitude *= 0.5;
        }
        return value;
      }

      void main() {
        vec2 uv = (vUv * 2.0 - 1.0) * vec2(uResolution.x / uResolution.y, 1.0);
        
        vec2 mouse = uMouse * vec2(uResolution.x / uResolution.y, 1.0);
        float dist = length(uv - mouse);
        
        vec2 autoPos = vec2(
          sin(uAutoTime * uAutoIntensity) * 0.5,
          cos(uAutoTime * uAutoIntensity * 0.7) * 0.5
        );
        
        vec2 pos = uv;
        if (uAutoDemo) {
          pos += autoPos * 0.3;
        }
        
        float mouseInfluence = 0.0;
        if (uMouseForce > 0.0 && dist < uCursorSize / 100.0) {
          mouseInfluence = (1.0 - dist / (uCursorSize / 100.0)) * uMouseForce * 0.01;
          pos += normalize(uv - mouse) * mouseInfluence;
        }
        
        pos *= rot(uTime * 0.1);
        
        float n = fbm(pos * 2.0 + uTime * 0.3);
        float n2 = fbm(pos * 1.5 - uTime * 0.2);
        float n3 = fbm(pos * 3.0 + uTime * 0.4);
        
        float pattern = n * 0.5 + n2 * 0.3 + n3 * 0.2;
        pattern = smoothstep(0.3, 0.7, pattern);
        
        vec3 color = mix(uColor1, uColor2, pattern);
        color = mix(color, uColor3, n2 * 0.5);
        
        float alpha = pattern * 0.8 + 0.2;
        
        gl_FragColor = vec4(color, alpha);
      }
    `;

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uAutoTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(width, height) },
        uMouse: { value: mouseRef.current },
        uColor1: { value: color1 },
        uColor2: { value: color2 },
        uColor3: { value: color3 },
        uAutoIntensity: { value: autoIntensity },
        uMouseForce: { value: mouseForce },
        uCursorSize: { value: cursorSize },
        uAutoDemo: { value: autoDemo },
      },
      transparent: true,
      depthWrite: false,
    });
    materialRef.current = material;

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let mouseMoveTimeout = null;
    const handleMouseMove = (event) => {
      if (mouseMoveTimeout) return;
      mouseMoveTimeout = window.setTimeout(() => {
        mouseMoveTimeout = null;
      }, 16);

      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      mouseRef.current.set(x, y);
    };

    container.addEventListener("mousemove", handleMouseMove, { passive: true });

    let lastTime = performance.now();
    const targetFPS = 60;
    const frameTime = 1000 / targetFPS;

    const animate = (currentTime) => {
      if (!materialRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current)
        return;

      const deltaTime = currentTime - lastTime;

      if (deltaTime >= frameTime) {
        timeRef.current += 0.016 * autoSpeed;
        if (autoDemo) {
          autoTimeRef.current += 0.016;
        }

        materialRef.current.uniforms.uTime.value = timeRef.current;
        materialRef.current.uniforms.uAutoTime.value = autoTimeRef.current;
        materialRef.current.uniforms.uMouse.value = mouseRef.current;

        rendererRef.current.render(sceneRef.current, cameraRef.current);
        lastTime = currentTime - (deltaTime % frameTime);
      }

      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    let resizeTimeout = null;
    const handleResize = () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }

      resizeTimeout = window.setTimeout(() => {
        if (!rendererRef.current || !materialRef.current || !containerRef.current) return;
        const newWidth = containerRef.current.clientWidth;
        const newHeight = containerRef.current.clientHeight;
        rendererRef.current.setSize(newWidth, newHeight);
        materialRef.current.uniforms.uResolution.value.set(newWidth, newHeight);
      }, 150);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (container.contains(rendererRef.current.domElement)) {
          container.removeChild(rendererRef.current.domElement);
        }
      }
      if (materialRef.current) {
        materialRef.current.dispose();
      }
      if (geometry) {
        geometry.dispose();
      }
      rendererRef.current = null;
      materialRef.current = null;
      sceneRef.current = null;
      cameraRef.current = null;
      rafRef.current = null;
    };
  }, [
    colors,
    mouseForce,
    cursorSize,
    isViscous,
    viscous,
    iterationsViscous,
    iterationsPoisson,
    resolution,
    isBounce,
    autoDemo,
    autoSpeed,
    autoIntensity,
    takeoverDuration,
    autoResumeDelay,
    autoRampDuration,
    webGLSupported,
  ]);

  if (!webGLSupported) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: `linear-gradient(135deg, ${colors[0]}, ${colors[1] || colors[0]})`,
        }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    />
  );
};

export default LiquidEther;
