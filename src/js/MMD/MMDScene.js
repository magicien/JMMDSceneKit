'use strict'

import {
  SCNScene
} from 'jscenekit'
import MMDSceneSource from './MMDSceneSource'

const _mmdFileExtensions = [
  'pmm', 'pmd', 'vmd', 'vpd', 'x', 'vac', 'pmx'
]

/**
 *
 * @access public
 * @extends {MMDScene}
 */
export default class MMDScene extends SCNScene {
  /**
   * Loads a MMD scene from the specified URL.
   * @access public
   * @constructor
   * @param {string} url - The URL to the scene file to load.
   * @param {?Map<SCNSceneSource.LoadingOption, Object>} [options = null] - A dictionary of options affecting scene loading, or nil for default options. For available keys, see Scene Loading Options.
   * @param {function} onload -
   * @param {function} onerror -
   * @throws {Error}
   */
  constructor(url, options = null, onload = null, onerror = null) {
    super(url, options, onload, onerror)
  }

  /**
   * Overrided function of SCNSceneSource
   * @access private
   * @param {Blob} data -
   * @param {Object} options -
   * @returns {MMDScene} -
   */
  _loadSceneWithData(data, options) {
    const source = new MMDSceneSource(data, options)
    return source.scene()
  }

  /**
   * Loads a MMD scene from the specified URL.
   * @access public
   * @param {string} url -
   * @param {Object} options -
   * @returns {MMDScene} -
   */
  static scene(url, options = null) {
    return new MMDScene(url, options)
  }
} 
