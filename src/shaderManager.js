/* 
 * TODO:
 * Handle multi-pass renders
 * Handle vertex shaders
 */

module.exports = defaultOutput => {
  let Frag = function (shaderString) {
    let obj =  Object.create(Frag.prototype)
    obj.shaderString = `
    void main () {
      vec2 st = gl_FragCoord.xy/resolution.xy;
      gl_FragColor = vec4(st, 1.0, 1.0);
    }
    `
    if(shaderString) obj.shaderString = shaderString
    return obj
  }

  Frag.prototype.compile = function () {
    let frag = `
    precision highp float;
    uniform float time;
    uniform vec2 resolution;
    varying vec2 uv;

    ${this.shaderString}
    `
    return frag
  }

  Frag.prototype.out = function (_output) {
    let output = _output || defaultOutput
    let frag = this.compile()
    output.frag = frag
    let pass = {
      frag: frag,
      uniforms: output.uniforms
    }
    console.log('rendering', pass)
    let passes = []
    passes.push(pass)
    output.renderPasses([pass])
    // var uniformObj = {}
    // this.uniforms.forEach((uniform) => { uniformObj[uniform.name] = uniform.value })
    // output.uniforms = Object.assign(output.uniforms, uniformObj)
    output.render()
  }

  return Frag
}
