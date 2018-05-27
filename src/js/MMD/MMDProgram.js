'use strict'

import {
  SCNProgram
} from 'jscenekit'


/**
 * @access private
 * @type {string}
 */
const _vertexShader = 
 `#version 300 es
  precision mediump float;

  #define NUM_AMBIENT_LIGHTS __NUM_AMBIENT_LIGHTS__
  #define NUM_DIRECTIONAL_LIGHTS __NUM_DIRECTIONAL_LIGHTS__
  #define NUM_DIRECTIONAL_SHADOW_LIGHTS __NUM_DIRECTIONAL_SHADOW_LIGHTS__
  #define NUM_OMNI_LIGHTS __NUM_OMNI_LIGHTS__
  #define NUM_SPOT_LIGHTS __NUM_SPOT_LIGHTS__
  #define NUM_IES_LIGHTS __NUM_IES_LIGHTS__
  #define NUM_PROBE_LIGHTS __NUM_PROBE_LIGHTS__

  #define NUM_SHADOW_LIGHTS (NUM_DIRECTIONAL_LIGHTS + NUM_DIRECTIONAL_SHADOW_LIGHTS + NUM_OMNI_LIGHTS + NUM_SPOT_LIGHTS)
  #define NUM_LIGHTS (NUM_AMBIENT_LIGHTS + NUM_DIRECTIONAL_LIGHTS + NUM_DIRECTIONAL_SHADOW_LIGHTS + NUM_OMNI_LIGHTS + NUM_SPOT_LIGHTS + NUM_IES_LIGHTS + NUM_PROBE_LIGHTS)

  #define USE_SHADER_MODIFIER_GEOMETRY __USE_SHADER_MODIFIER_GEOMETRY__

  layout (std140) uniform cameraUniform {
    vec4 position;
    mat4 viewTransform;
    mat4 viewProjectionTransform;
  } camera;

  layout (std140) uniform materialUniform {
    vec4 ambient;
    vec4 diffuse;
    vec4 specular;
    vec4 emission;
    float shininess;
    float fresnelExponent;
  } material;

  struct AmbientLight {
    vec4 color;
  };

  struct DirectionalLight {
    vec4 color;
    vec4 direction; // should use vec4; vec3 might cause problem for the layout
  };

  struct DirectionalShadowLight {
    vec4 color;
    vec4 direction; // should use vec4; vec3 might cause problem for the layout
    vec4 shadowColor;
    mat4 viewProjectionTransform;
    mat4 shadowProjectionTransform;
  };

  struct OmniLight {
    vec4 color;
    vec4 position; // should use vec4; vec3 might cause problem for the layout
  };

  struct SpotLight {
    // TODO: implement
    vec4 color;
  };

  struct IESLight {
    // TODO: implement
    vec4 color;
  };

  struct ProbeLight {
    // TODO: implement
    vec4 color;
  };

  layout (std140) uniform lightUniform {
    #if NUM_AMBIENT_LIGHTS > 0
      AmbientLight ambient[NUM_AMBIENT_LIGHTS];
    #endif
    #if NUM_DIRECTIONAL_LIGHTS > 0
      DirectionalLight directional[NUM_DIRECTIONAL_LIGHTS];
    #endif
    #if NUM_DIRECTIONAL_SHADOW_LIGHTS > 0
      DirectionalShadowLight directionalShadow[NUM_DIRECTIONAL_SHADOW_LIGHTS];
    #endif
    #if NUM_OMNI_LIGHTS > 0
      OmniLight omni[NUM_OMNI_LIGHTS];
    #endif
    #if NUM_SPOT_LIGHTS > 0
      SpotLight spot[NUM_SPOT_LIGHTS];
    #endif
    #if NUM_IES_LIGHTS > 0
      IESLight ies[NUM_IES_LIGHTS];
    #endif
    #if NUM_PROBE_LIGHTS > 0
      ProbeLight probe[NUM_PROBE_LIGHTS];
    #endif
    #if NUM_LIGHTS == 0
      vec4 dummy;
    #endif
  } light;
  #if NUM_SHADOW_LIGHTS > 0
    out vec3 v_light[NUM_SHADOW_LIGHTS];
  #endif
  #if NUM_DIRECTIONAL_SHADOW_LIGHTS > 0
    out vec4 v_directionalShadowDepth[NUM_DIRECTIONAL_SHADOW_LIGHTS];
    out vec4 v_directionalShadowTexcoord[NUM_DIRECTIONAL_SHADOW_LIGHTS];
  #endif
  out vec2 v_sptex;

  layout (std140) uniform fogUniform {
    vec4 color;
    float startDistance;
    float endDistance;
    float densityExponent;
  } fog;

  #define kSCNTexcoordCount 2
  struct SCNShaderGeometry {
    vec3 position;
    vec3 normal;
    vec4 tangent;
    vec4 color;
    vec2 texcoords[kSCNTexcoordCount];
  };

  uniform float u_time;
  //uniform mat3x4[255] skinningJoints;
  uniform vec4[765] skinningJoints;
  uniform int numSkinningJoints;
  uniform mat4 modelTransform;

  in vec3 position;
  in vec3 normal;
  in vec3 tangent;
  in vec4 color;
  in vec2 texcoord0;
  in vec2 texcoord1;
  in vec4 boneIndices;
  in vec4 boneWeights;

  out vec3 v_position;
  out vec3 v_normal;
  out vec3 v_tangent;
  out vec3 v_bitangent;
  out vec2 v_texcoord0;
  out vec2 v_texcoord1;
  out vec4 v_color;
  out vec3 v_eye;
  out float v_fogFactor;

  __USER_CUSTOM_UNIFORM__

  #if USE_SHADER_MODIFIER_GEOMETRY
  void shaderModifierGeometry(inout SCNShaderGeometry _geometry) {
    __SHADER_MODIFIER_GEOMETRY__
  }
  #endif

  void main() {
    SCNShaderGeometry _geometry;
    _geometry.position = position;
    _geometry.normal = normal;
    _geometry.tangent = vec4(tangent, 1.0);
    _geometry.color = color;
    _geometry.texcoords[0] = texcoord0;
    _geometry.texcoords[1] = texcoord1;
    
    #if USE_SHADER_MODIFIER_GEOMETRY
      shaderModifierGeometry(_geometry);
    #endif

    vec3 pos = vec3(0, 0, 0);
    vec3 nom = vec3(0, 0, 0);
    vec3 tng = vec3(0, 0, 0);
    vec4 col = _geometry.color;

    if(numSkinningJoints > 0){
      for(int i=0; i<numSkinningJoints; i++){
        float weight = boneWeights[i];
        if(int(boneIndices[i]) < 0){
          continue;
        }
        int idx = int(boneIndices[i]) * 3;
        mat4 jointMatrix = transpose(mat4(skinningJoints[idx],
                                          skinningJoints[idx+1],
                                          skinningJoints[idx+2],
                                          vec4(0, 0, 0, 1)));
        pos += (jointMatrix * vec4(_geometry.position, 1.0)).xyz * weight;
        nom += (mat3(jointMatrix) * _geometry.normal) * weight;
        tng += (mat3(jointMatrix) * _geometry.tangent.xyz) * weight;
      }
    }else{
      mat4 jointMatrix = transpose(mat4(skinningJoints[0],
                                        skinningJoints[1],
                                        skinningJoints[2],
                                        vec4(0, 0, 0, 1)));
      pos = (jointMatrix * vec4(_geometry.position, 1.0)).xyz;
      nom = mat3(jointMatrix) * _geometry.normal;
      tng = mat3(jointMatrix) * _geometry.tangent.xyz;
    }
    v_position = pos;
    v_normal = normalize(nom);
    v_tangent = normalize(tng);
    v_bitangent = cross(v_tangent, v_normal);

    vec3 viewVec = camera.position.xyz - pos;
    v_eye = viewVec;

    v_color = material.emission;

    // Lighting
    int numLights = 0;

    v_color.rgb = material.emission.rgb;

    #if NUM_AMBIENT_LIGHTS > 0
      for(int i=0; i<NUM_AMBIENT_LIGHTS; i++){
        v_color.rgb += light.ambient[i].color.rgb * material.ambient.rgb;
      }
    #endif

    #if NUM_DIRECTIONAL_LIGHTS > 0
      if(!useToon){
        for(int i=0; i<NUM_DIRECTIONAL_LIGHTS; i++){
          v_light[numLights + i] = -light.directional[i].direction.xyz;

          vec4 diffuseColor = material.diffuse * vec4(light.directional[i].color.rgb, 1.0);
          vec3 lightVec = normalize(v_light[numLights + i]);
          float diffuse = clamp(dot(lightVec, _surface.normal), 0.0f, 1.0f);
          v_color.rgb += diffuse * diffuseColor.rgb;
          //v_color.a = diffuseColor.a;
          v_color = clamp(v_color, 0.0f, 1.0f);
        }
      }
      v_color.a = material.diffuse.a;

      numLights += NUM_DIRECTIONAL_LIGHTS;
    #endif

    #if NUM_DIRECTIONAL_SHADOW_LIGHTS > 0
      if(!useToon){
        for(int i=0; i<NUM_DIRECTIONAL_SHADOW_LIGHTS; i++){
          v_light[numLights + i] = -light.directionalShadow[i].direction.xyz;
          v_directionalShadowDepth[i] = light.directionalShadow[i].viewProjectionTransform * vec4(pos, 1.0);
          v_directionalShadowTexcoord[i] = light.directionalShadow[i].shadowProjectionTransform * vec4(pos, 1.0);

          vec4 diffuseColor = material.diffuse * vec4(light.directionalShadow[i].color.rgb, 1.0);
          vec3 lightVec = normalize(v_light[numLights + i]);
          float diffuse = clamp(dot(lightVec, _surface.normal), 0.0f, 1.0f);
          v_color.rgb += diffuse * diffuseColor.rgb;
          v_color.a = diffuseColor.a;
          v_color = clamp(v_color, 0.0f, 1.0f);
        }
      }
      v_color.a = material.diffuse.a;

      numLights += NUM_DIRECTIONAL_SHADOW_LIGHTS;
    #endif

    if(useSphereMap){
      if(useSubTexture){
        // TODO: implement
      }else{
        vec2 normalWV = vec2(camera.viewTransform * vec4(v_normal, 1.0));
        v_sptex.x = normalWV.x * 0.5 + 0.5;
        v_sptex.y = normalWV.y * (-0.5) + 0.5;
      }
    }

    #if NUM_OMNI_LIGHTS > 0
      for(int i=0; i<NUM_OMNI_LIGHTS; i++){
        v_light[numLights + i] = light.omni[i].position.xyz - pos;
      }
      numLights += NUM_OMNI_LIGHTS;
    #endif

    #if NUM_SPOT_LIGHTS > 0
      for(int i=0; i<NUM_SPOT_LIGHTS; i++){
        v_light[numLights + i] = light.spot[i].position.xyz - pos;
      }
      numLights += NUM_SPOT_LIGHTS;
    #endif

    #if NUM_IES_LIGHTS > 0
      // TODO: implement
    #endif

    #if NUM_PROBE_LIGHTS > 0
      // TODO: implement
    #endif

    float distance = length(viewVec);
    v_fogFactor = clamp((distance - fog.startDistance) / (fog.endDistance - fog.startDistance), 0.0, 1.0);

    v_texcoord0 = _geometry.texcoords[0];
    v_texcoord1 = _geometry.texcoords[1];
    gl_Position = camera.viewProjectionTransform * vec4(pos, 1.0);
  }
`

/**
 * @access private
 * @type {string}
 */
const _fragmentShader = 
 `#version 300 es
  precision mediump float;
  precision highp sampler2DShadow;

  uniform bool[8] textureFlags;
  #define TEXTURE_EMISSION_INDEX 0
  #define TEXTURE_AMBIENT_INDEX 1
  #define TEXTURE_DIFFUSE_INDEX 2
  #define TEXTURE_SPECULAR_INDEX 3
  #define TEXTURE_REFLECTIVE_INDEX 4
  #define TEXTURE_TRANSPARENT_INDEX 5
  #define TEXTURE_MULTIPLY_INDEX 6
  #define TEXTURE_NORMAL_INDEX 7

  uniform bool selfIllumination;

  uniform sampler2D u_emissionTexture;
  uniform sampler2D u_ambientTexture;
  uniform sampler2D u_diffuseTexture;
  uniform sampler2D u_specularTexture;
  uniform samplerCube u_reflectiveTexture;
  uniform sampler2D u_transparentTexture;
  uniform sampler2D u_multiplyTexture;
  uniform sampler2D u_normalTexture;

  #define NUM_AMBIENT_LIGHTS __NUM_AMBIENT_LIGHTS__
  #define NUM_DIRECTIONAL_LIGHTS __NUM_DIRECTIONAL_LIGHTS__
  #define NUM_DIRECTIONAL_SHADOW_LIGHTS __NUM_DIRECTIONAL_SHADOW_LIGHTS__
  #define NUM_OMNI_LIGHTS __NUM_OMNI_LIGHTS__
  #define NUM_SPOT_LIGHTS __NUM_SPOT_LIGHTS__
  #define NUM_IES_LIGHTS __NUM_IES_LIGHTS__
  #define NUM_PROBE_LIGHTS __NUM_PROBE_LIGHTS__

  #define NUM_SHADOW_LIGHTS (NUM_DIRECTIONAL_LIGHTS + NUM_DIRECTIONAL_SHADOW_LIGHTS + NUM_OMNI_LIGHTS + NUM_SPOT_LIGHTS)
  #define NUM_LIGHTS (NUM_AMBIENT_LIGHTS + NUM_DIRECTIONAL_LIGHTS + NUM_DIRECTIONAL_SHADOW_LIGHTS + NUM_OMNI_LIGHTS + NUM_SPOT_LIGHTS + NUM_IES_LIGHTS + NUM_PROBE_LIGHTS)

  #define USE_SHADER_MODIFIER_SURFACE __USE_SHADER_MODIFIER_SURFACE__
  #define USE_SHADER_MODIFIER_FRAGMENT __USE_SHADER_MODIFIER_FRAGMENT__

  layout (std140) uniform materialUniform {
    vec4 ambient;
    vec4 diffuse;
    vec4 specular;
    vec4 emission;
    float shininess;
    float fresnelExponent;
  } material;

  struct AmbientLight {
    vec4 color;
  };

  struct DirectionalLight {
    vec4 color;
    vec4 direction; // should use vec4; vec3 might cause problem for the layout
  };

  struct DirectionalShadowLight {
    vec4 color;
    vec4 direction; // should use vec4; vec3 might cause problem for the layout
    vec4 shadowColor;
    mat4 viewProjectionTransform;
    mat4 shadowProjectionTransform;
  };

  struct OmniLight {
    vec4 color;
    vec4 position; // should use vec4; vec3 might cause problem for the layout
  };

  struct ProbeLight {
    // TODO: implement
    vec4 color;
  };

  struct SpotLight {
    // TODO: implement
    vec4 color;
  };

  layout (std140) uniform lightUniform {
    #if NUM_AMBIENT_LIGHTS > 0
      AmbientLight ambient[NUM_AMBIENT_LIGHTS];
    #endif
    #if NUM_DIRECTIONAL_LIGHTS > 0
      DirectionalLight directional[NUM_DIRECTIONAL_LIGHTS];
    #endif
    #if NUM_DIRECTIONAL_SHADOW_LIGHTS > 0
      DirectionalShadowLight directionalShadow[NUM_DIRECTIONAL_SHADOW_LIGHTS];
    #endif
    #if NUM_OMNI_LIGHTS > 0
      OmniLight omni[NUM_OMNI_LIGHTS];
    #endif
    #if NUM_SPOT_LIGHTS > 0
      SpotLight spot[NUM_SPOT_LIGHTS];
    #endif
    #if NUM_IES_LIGHTS > 0
      IESLight ies[NUM_IES_LIGHTS];
    #endif
    #if NUM_PROBE_LIGHTS > 0
      ProbeLight probe[NUM_PROBE_LIGHTS];
    #endif
    #if NUM_LIGHTS == 0
      vec4 dummy;
    #endif
  } light;
  #if NUM_SHADOW_LIGHTS > 0
    in vec3 v_light[NUM_SHADOW_LIGHTS];
  #endif
  #if NUM_DIRECTIONAL_SHADOW_LIGHTS > 0
    in vec4 v_directionalShadowDepth[NUM_DIRECTIONAL_SHADOW_LIGHTS];
    in vec4 v_directionalShadowTexcoord[NUM_DIRECTIONAL_SHADOW_LIGHTS];
    uniform sampler2D u_shadowMapTexture0;
    #if NUM_DIRECTIONAL_SHADOW_LIGHTS > 1
      uniform sampler2D u_shadowMapTexture1;
    #endif
    #if NUM_DIRECTIONAL_SHADOW_LIGHTS > 2
      uniform sampler2D u_shadowMapTexture2;
    #endif
    #if NUM_DIRECTIONAL_SHADOW_LIGHTS > 3
      uniform sampler2D u_shadowMapTexture3;
    #endif
  #endif

  layout (std140) uniform fogUniform {
    vec4 color;
    float startDistance;
    float endDistance;
    float densityExponent;
  } fog;

  struct SCNShaderSurface {
    vec3 view;
    vec3 position;
    vec3 normal;
    vec2 normalTexcoord;
    vec3 geometryNormal;
    vec3 tangent;
    vec3 bitangent;
    vec4 ambient;
    vec2 ambientTexcoord;
    vec4 diffuse;
    vec2 diffuseTexcoord;
    vec4 specular;
    vec2 specularTexcoord;
    vec4 emission;
    vec2 emissionTexcoord;
    vec4 multiply;
    vec2 multiplyTexcoord;
    vec4 transparent;
    vec2 transparentTexcoord;
    vec4 reflective;
    float ambientOcclusion;
    float shininess;
    float fresnel;
    __USER_CUSTOM_SURFACE__
  } _surface;

  struct SCNShaderOutput {
    vec4 color;
  } _output;

  vec2 poissonDisk[4] = vec2[](
    vec2( -0.94201624, -0.39906216 ),
    vec2( 0.94558609, -0.76890725 ),
    vec2( -0.094184101, -0.92938870 ),
    vec2( 0.34495938, 0.29387760 )
  );

  uniform float u_time;

  in vec3 v_position;
  in vec3 v_normal;
  in vec2 v_texcoord0;
  in vec2 v_texcoord1;
  in vec4 v_color;
  in vec3 v_eye;
  in vec3 v_tangent;
  in vec3 v_bitangent;
  in float v_fogFactor;

  out vec4 outColor;

  __USER_CUSTOM_UNIFORM__

  float saturate(float value) {
    return clamp(value, 0.0, 1.0);
  }

  float convDepth(vec4 color) {
    const float rMask = 1.0;
    const float gMask = 1.0 / 255.0;
    const float bMask = 1.0 / (255.0 * 255.0);
    const float aMask = 1.0 / (255.0 * 255.0 * 255.0);
    float depth = dot(color, vec4(rMask, gMask, bMask, aMask));
    return depth * 2.0 - 1.0;
  }

  #if USE_SHADER_MODIFIER_SURFACE
  void shaderModifierSurface() {
    __SHADER_MODIFIER_SURFACE__
  }
  #endif

  #if USE_SHADER_MODIFIER_FRAGMENT
  void shaderModifierFragment() {
    __SHADER_MODIFIER_FRAGMENT__
  }
  #endif

    
  void main() {
    bool spadd = true;

    _output.color = v_color;

    //vec3 viewVec = normalize(v_eye);
    //vec3 nom = normalize(v_normal);
    _surface.view = normalize(v_eye);
    _surface.position = v_position;
    _surface.normal = normalize(v_normal);
    _surface.tangent = normalize(v_tangent);
    _surface.bitangent = normalize(v_bitangent);

    // normal texture
    //if(textureFlags[TEXTURE_NORMAL_INDEX]){
    //  mat3 tsInv = mat3(_surface.tangent, _surface.bitangent, _surface.normal);
    //  vec3 color = normalize(texture(u_normalTexture, v_texcoord0).rgb * 2.0 - 1.0); // FIXME: check mappingChannel to decide which texture you use.
    //  _surface.normal = normalize(tsInv * color);
    //}

    #if USE_SHADER_MODIFIER_SURFACE
      shaderModifierSurface();
    #endif

    // emission texture
    //if(textureFlags[TEXTURE_EMISSION_INDEX]){
    //  if(selfIllumination){
    //    vec4 color = texture(u_emissionTexture, v_texcoord1); // FIXME: check mappingChannel to decide which texture you use.
    //    _output.color += color;
    //  }else{
    //    vec4 color = texture(u_emissionTexture, v_texcoord0);
    //    _output.color = color * _output.color;
    //  }
    //}

    vec4 specularColor;
    if(textureFlags[TEXTURE_SPECULAR_INDEX]){
      vec4 color = texture(u_specularTexture, v_texcoord0);
      specularColor = color;
    }else{
      specularColor = material.specular;
    }
      
    //_output.color.a = material.diffuse.a;
    vec4 shadowColor = vec4(clamp(material.ambient.rgb, 0.0f, 1.0f), v_color.a);
    if(textureFlags[TEXTURE_DIFFUSE_INDEX]){
      vec4 texColor = texture(u_diffuseTexture, v_texcoord0);
      vec4 textureMulValue = vec4(1);
      vec4 textureAddValue = vec4(0);

      if(textureFlags[TEXTURE_EMISSION_INDEX]){
        textureAddValue = texture(u_emissionTexture, v_texcoord0);
      }
      if(textureFlags[TEXTURE_MULTIPLY_INDEX]){
        textureMulValue = texture(u_multiplyTexture, v_texcoord0);
      }
      texColor.rgb = mix(vec3(1), texColor.rgb * textureMulValue.rgb + textureAddValue.rgb, textureMulValue.a + textureAddValue.a);
      _output.color *= texColor;
      shadowColor *= texColor;

    }
    if(textureFlags[TEXTURE_REFLECTIVE_INDEX]){
      vec4 sphereMulValue = vec4(1);
      vec4 sphereAddValue = vec4(0);

      vec3 r = reflect(_surface.view, _surface.normal);
      vec4 texColor = texture(u_reflectiveTexture, r);
      texColor.rgb = mix(spadd ? vec3(0) : vec3(1), texColor.rgb * sphereMulValue.rgb + sphereAddValue.rgb, sphereMulValue.a + sphereAddValue.a);
      if(spadd){
        _output.color.rgb += texColor.rgb;
        shadowColor.rgb += texColor.rgb;
      }else{
        _output.color.rgb *= texColor.rgb;
        shadowColor.rgb *= texColor.rgb;
      }
      _output.color.a *= texColor.a;
      shadowColor.a *= texColor.a;
    }
    _output.color.rgb += specularColor.rgb;

    // Lighting
    int numLights = 0;

    #if NUM_AMBIENT_LIGHTS > 0
      // nothing to do for ambient lights
    #endif

    vec4 outSpecular = vec4(0, 0, 0, 1);
    #if NUM_DIRECTIONAL_LIGHTS > 0
      //for(int i=0; i<NUM_DIRECTIONAL_LIGHTS; i++){
      //  // diffuse
      //  vec3 lightVec = normalize(v_light[numLights + i]);
      //  float diffuse = clamp(dot(lightVec, _surface.normal), 0.0f, 1.0f);
      //  _output.color.rgb += light.directional[i].color.rgb * material.diffuse.rgb * diffuse;
      //  _output.color.a = material.diffuse.a;

      //  // specular
      //  if(diffuse > 0.0f){
      //    vec3 halfVec = normalize(lightVec + _surface.view);
      //    float specular = pow(dot(halfVec, _surface.normal), material.shininess);
      //    _output.color.rgb += specularColor.rgb * specular;
      //  }
      //}
      for(int i=0; i<NUM_DIRECTIONAL_LIGHTS; i++){
        vec3 lightVec = normalize(v_light[numLights + i]);
        vec3 halfVector = normalize(lightVec + _surface.view);
        float specular = pow(max(0, dot(halfVec, _surface.normal)), material.shininess);
        outSpecular = specular * specularColor;
      }
      numLights += NUM_DIRECTIONAL_LIGHTS;
    #endif

    #if NUM_DIRECTIONAL_SHADOW_LIGHTS > 0
      for(int i=0; i<NUM_DIRECTIONAL_SHADOW_LIGHTS; i++){
        vec3 lightVec = normalize(v_light[numLights + i]);
        vec3 halfVector = normalize(lightVec + _surface.view);
        float specular = pow(max(0, dot(halfVec, _surface.normal)), material.shininess);
        outSpecular = specular * specularColor;
      }
    #endif

    #if NUM_OMNI_LIGHTS > 0
      //for(int i=0; i<NUM_OMNI_LIGHTS; i++){
      //  // diffuse
      //  vec3 lightVec = normalize(v_light[numLights + i]);
      //  float diffuse = clamp(dot(lightVec, _surface.normal), 0.0f, 1.0f);
      //  _output.color.rgb += light.omni[i].color.rgb * material.diffuse.rgb * diffuse;

      //  // specular
      //  if(diffuse > 0.0f){
      //    vec3 halfVec = normalize(lightVec + _surface.view);
      //    float specular = pow(dot(halfVec, _surface.normal), material.shininess);
      //    //outColor.rgb += material.specular.rgb * specular; // TODO: get the light color of specular
      //    _output.color.rgb += specularColor.rgb * specular;
      //  }
      //}
      numLights += NUM_OMNI_LIGHTS;
    #endif

    #if NUM_SPOT_LIGHTS > 0
      // TODO: implement
    #endif

    #if NUM_IES_LIGHTS > 0
      // TODO: implement
    #endif

    #if NUM_PROBE_LIGHTS > 0
      // TODO: implement
    #endif


    // diffuse texture
    //if(textureFlags[TEXTURE_DIFFUSE_INDEX]){
    //  vec4 color = texture(u_diffuseTexture, v_texcoord0);
    //  _output.color = color * _output.color;
    //}

    // fresnel reflection
    //if(textureFlags[TEXTURE_REFLECTIVE_INDEX]){
    //  vec3 r = reflect(_surface.view, _surface.normal);
    //  //float f0 = 0.0; // TODO: calculate f0
    //  //float fresnel = f0 + (1.0 - f0) * pow(1.0 - clamp(dot(viewVec, nom), 0.0, 1.0), material.fresnelExponent);
    //  float fresnel = 0.4 * pow(1.0 - clamp(dot(_surface.view, _surface.normal), 0.0, 1.0), material.fresnelExponent);
    //  _output.color.rgb += texture(u_reflectiveTexture, r).rgb * fresnel;
    //}

    //float fogFactor = pow(v_fogFactor, fog.densityExponent);
    //_output.color = mix(_output.color, fog.color, fogFactor);

    #if USE_SHADER_MODIFIER_FRAGMENT
      shaderModifierFragment();
    #endif

    // DEBUG
    //_output.color.a = material.diffuse.a;

    outColor = _output.color;
  }
`

/**
 *
 * @access public
 * @extends {SCNProgram}
 */
export default class MMDProgram extends SCNProgram {
  /**
   *
   * @access public
   * @constructor
   */
  constructor() {
    super()

    this.vertexShader = _vertexShader
    this.fragmentShader = _fragmentShader
  }
}
 
