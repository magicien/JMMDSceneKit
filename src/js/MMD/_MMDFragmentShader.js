'use strict'

const _MMDFragmentShader = `
  uniform float useTexture;
  uniform float useToon;
  uniform float useSphereMap;
  uniform float useSubtexture;

  uniform float spadd;

  uniform sampler2D sphereTexture;

  uniform vec4 textureAddValue;
  uniform vec4 textureMulValue;
  uniform vec4 sphereAddValue;
  uniform vec4 sphereMulValue;
  uniform vec4 materialToon;
  uniform float parthf;
  uniform float transp;

  #pragma transparent
  #pragma body

  vec4 debugColor;

  // linear to sRGB
  //vec4 materialDiffuse = pow(_surface.diffuse, vec4(1.0/2.2));
  //vec4 materialSpecular = pow(_surface.specular, vec4(1.0/2.2));
  //vec4 materialEmission = pow(_surface.emission, vec4(1.0/2.2));
  //vec3 lightAmbient = pow(_lightingContribution.ambient, vec3(1.0/2.2));
  //vec3 lightSpecular = pow(_lightingContribution.specular, vec3(1.0/2.2));
  vec4 materialDiffuse = _surface.diffuse;
  vec4 materialSpecular = _surface.specular;
  vec4 materialEmission = _surface.emission;
  vec3 lightAmbient = _lightingContribution.ambient;
  vec3 lightSpecular = _lightingContribution.specular;

  vec3 lightDirection = -scn_lights.direction0.xyz;

  // light direction in view space
  vec3 lightDir = normalize((u_viewTransform * vec4(lightDirection, 0.0)).xyz);

  //vec4 diffuseColor = materialDiffuse * vec4(lightDiffuse, 1.0);
  vec4 diffuseColor = vec4(0, 0, 0, 1);
  // This is not typo; use materialDiffuse for ambientColor.
  vec3 ambientColor = materialDiffuse.rgb * lightAmbient.rgb + materialEmission.rgb;
  vec3 specularColor = materialSpecular.rgb * lightSpecular.rgb;

  vec3 n = normalize(_surface.normal);

  #define SKII1 1500.0
  #define SKII2 8000.0
  #define Toon 3.0

  _output.color.rgb = ambientColor.rgb;
  if(useToon <= 0.0){
    _output.color.rgb += diffuseColor.rgb;
  }
  _output.color.a = diffuseColor.a;
  _output.color = clamp(_output.color, vec4(0), vec4(1));

  vec2 spTex;
  if(useSphereMap > 0.0){
    if(useSubtexture > 0.0){
      spTex = _surface.specularTexcoord;
    }else{
      spTex.x = n.x * 0.5 + 0.5;
      spTex.y = -n.y * 0.5 + 0.5;
    }
  }





  //vec3 halfVector = normalize(normalize(_surface.view) - normalize(lightDir));
  //vec3 specular = pow(max(0.0, dot(halfVector, n)), _surface.shininess) * specularColor;
  vec4 shadowColor = vec4(ambientColor, _output.color.a);







  if(useTexture > 0.0){
    //_output.color *= texture(u_multiplyTexture, _surface.multiplyTexcoord);
    vec4 texColor = texture(u_multiplyTexture, _surface.multiplyTexcoord);
    texColor.rgb = mix(vec3(1), texColor.rgb * textureMulValue.rgb + textureAddValue.rgb, textureMulValue.a + textureAddValue.a);
    _output.color *= texColor;
    shadowColor *= texColor;
  }
  //debugColor = shadowColor;

  if(useSphereMap > 0.0){
    vec4 texColor = texture(sphereTexture, spTex);
    if(spadd > 0.0){
      texColor.rgb = mix(vec3(0), texColor.rgb * sphereMulValue.rgb + sphereAddValue.rgb, sphereMulValue.a + sphereAddValue.a);
      _output.color.rgb += texColor.rgb;
      shadowColor.rgb += texColor.rgb;
    }else{
      texColor.rgb = mix(vec3(1), texColor.rgb * sphereMulValue.rgb + sphereAddValue.rgb, sphereMulValue.a + sphereAddValue.a);
      _output.color.rgb *= texColor.rgb;
      shadowColor.rgb *= texColor.rgb;
    }
    _output.color.a *= texColor.a;
    shadowColor.a *= texColor.a;
  }
  _output.color.rgb += specularColor;

  vec4 zCalcTex = scn_lights.shadowMatrix0 * u_inverseViewTransform * vec4(_surface.position, 1.0);
  zCalcTex /= zCalcTex.w;
  vec2 transTexCoord;
  transTexCoord.x = (1.0 + zCalcTex.x) * 0.5;
  transTexCoord.y = (1.0 - zCalcTex.y) * 0.5;

  debugColor = vec4(1.0, 0.0, 0.0, 1.0);
  if(0.0 <= transTexCoord.x && transTexCoord.x <= 1.0
    && 0.0 <= transTexCoord.y && transTexCoord.y <= 1.0){
    float comp;
    float depth = convDepth(texture(u_shadowTexture0, transTexCoord));
    if(parthf > 0.0){
      //debugColor = vec4(1.0, 0.0, 0.0, 1.0);
      //comp = 1.0 - clamp(max(zCalcTex.z - texture(u_shadowTexture0, transTexCoord).r, 0.0) * SKII2 * transTexCoord.y - 0.3, 0.0, 1.0);
      comp = 1.0 - clamp(max(zCalcTex.z - depth, 0.0) * SKII2 * transTexCoord.y - 0.3, 0.0, 1.0);
    }else{
      //debugColor = vec4(0.0, 1.0, 0.0, 1.0);
      //comp = 1.0 - clamp(max(zCalcTex.z - texture(u_shadowTexture0, transTexCoord).r, 0.0) * SKII1 - 0.3, 0.0, 1.0);
      comp = 1.0 - clamp(max(zCalcTex.z - depth, 0.0) * SKII1 - 0.3, 0.0, 1.0);
    }
    if(useToon > 0.0){
      //debugColor = vec4(0.0, 0.0, 1.0, 1.0);
      float lightNormal = dot(n, -lightDir) * Toon;
      comp = min(clamp(lightNormal, 0.0, 1.0), comp);
      //_output.color *= texture(u_transparentTexture, vec2(0, 0.5 + lightNormal * 0.5));
      shadowColor.rgb *= materialToon.rgb;
    }
    debugColor = shadowColor;
    //_output.color.rgb += specularColor.rgb;

    _output.color = mix(shadowColor, _output.color, comp);
    if(transp > 0.0){
      _output.color.a = 0.5;
    }
  }

  


  //_output.color.rgb *= _output.color.a;

  // sRGB to linear
  //_output.color = pow(_output.color, vec4(2.2));





  // DEBUG

  //if(useTexture > 0.0){
  //  _output.color = texture(u_multiplyTexture, _surface.multiplyTexcoord);
  //}

  //_output.color.rgb = ambientColor;
  //_output.color.a = 1.0;

  //_output.color.rgb = _lightingContribution.specular;
  //_output.color.a = 1.0;

  //if(useToon > 0.0){
  //  float lightNormal = dot(n, -lightDir);
  //  _output.color = texture(u_transparentTexture, vec2(0, 0.5 + lightNormal * 0.5));
  //}

  //_output.color = debugColor;
  //_output.color = materialToon;
  //_output.color = vec4(ambientColor, 1.0);
  //_output.color = shadowColor;
`

export default _MMDFragmentShader
