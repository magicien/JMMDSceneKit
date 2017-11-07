const path = require('path');
const babel = require('babel-core/register');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const src = './src';
const dest = './';

const relativeSrcPath = path.relative('.', src);

module.exports = {
  dest: dest,

  js: {
    src: src + '/js/**',
    dest: dest,
    uglify: false
  },

  eslint: {
    src: [
      src + '/js/**',
      './test/**/*.js',
      '!' + src + '/js/third_party/*.js',
    ],
    opts: {
      useEslintrc: true,
    }
  },

  webpack: {
    node: {
      target: 'node',
      entry: src + '/js/main.js',
      output: {
        filename: 'index.node.js',
        library: 'JMMDSceneKit',
        libraryTarget: 'commonjs2'
      },
      resolve: {
        extensions: ['.js'],
        symlinks: false
      },
      plugins: [
        new webpack.DefinePlugin({'process.env.BROWSER': false})
        //new UglifyJSPlugin()
      ],
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['env']
            }
          }
        ]
      },
      externals: {
        fs: 'fs',
        jscenekit: 'jscenekit'
      }
    },
    web: {
      target: 'web',
      entry: src + '/js/main.js',
      output: {
        filename: 'index.web.js',
        library: 'JMMDSceneKit',
        libraryTarget: 'commonjs2'
      },
      resolve: {
        extensions: ['.js'],
        symlinks: false
      },
      plugins: [
        new webpack.DefinePlugin({'process.env.BROWSER': true})
      ],
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['env']
            }
          }
        ]
      },
      node: {
        fs: false,
        Buffer: true
      },
      externals: {
        jscenekit: 'jscenekit'
        //fs: 'fs'
      }
    }
  },

  mocha: {
    src: ['test/**/*.js', 'src/**/*.js', '!src/**/*.web.js'],
    compilers: {
      js: babel
    },
    opts: {
      ui: 'bdd',
      reporter: 'spec', // or nyan
      globals: [],
      require: ['test/help/testHelper', 'chai']
    }
  },

  copy: {
    src: [
    ],
    dest: dest
  },

  watch: {
    js: relativeSrcPath + '/js/**'
  }
}

