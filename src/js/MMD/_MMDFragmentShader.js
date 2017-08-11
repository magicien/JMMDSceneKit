'use strict'

const _MMDFragmentShader = `
  uniform float useTexture;
  uniform float useToon;
  uniform float useSphereMap;
  uniform float useSubtexture;

  uniform float spadd;

  uniform sampler2D sphereTexture;

  #pragma transparent
  #pragma body

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

  #define SKII1 1500
  #define SKII2 8000
  #define Toon 3

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



  if(useTexture > 0.0){
    _output.color *= texture(u_multiplyTexture, _surface.multiplyTexcoord);
  }
vec4 debugColor = _output.color;

  if(useSphereMap > 0.0){
    vec4 texColor = texture(sphereTexture, spTex);
    if(spadd > 0.0){
      _output.color.rgb += texColor.rgb;
    }else{
      _output.color.rgb *= texColor.rgb;
    }
    _output.color.a *= texColor.a;
  }

  if(useToon > 0.0){
    float lightNormal = dot(n, -lightDir);
    _output.color *= texture(u_transparentTexture, vec2(0, 0.5 + lightNormal * 0.5));
  }
  _output.color.rgb += specularColor.rgb;

  _output.color.rgb *= _output.color.a;

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
`

export default _MMDFragmentShader
