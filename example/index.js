const Hydra = require('./../index.js')

window.onload = () => {
  const canvas = document.createElement('canvas')
  document.body.appendChild(canvas)

  canvas.style.backgroundColor = "#000"
  canvas.style.width = '100vw'
  canvas.style.height = '100vh'

  new Hydra({
    canvas: canvas,
    enableStreamCapture: true,
    detectAudio: true
  })

  s0.initCam()

  shape([2,4].fast(2))
    .diff(o0)
    .add(o0, 0.1)
    .rotate([Math.PI / 2, Math.PI / 4].fast(1/2))
    .scale(1.01, 1.0, 1.0, 0.5, -0.2)
    .out()
}
