"use strict";

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

var defaultConfig = {
  multiple: false
};

function init(_ref) {
  var _ref$options = _ref.options,
    options = _ref$options === undefined ? { config: {} } : _ref$options,
    handleInsert = _ref.handleInsert;

  var globalConfig = _objectWithoutProperties(options.config, []);

  var baseConfig = _extends({}, defaultConfig, globalConfig, cloudinaryConfig);

  var mediaLibrary = cloudinary.createMediaLibrary(baseConfig, {
    insertHandler: function insertHandler(_ref2) {
      var assets = _ref2.assets;
      return handleInsert(
        assets[0].secure_url
      );
    }
  });

  return {
    show: function show(_ref3) {
      var _ref3$config = _ref3.config,
        instanceConfig = _ref3$config === undefined ? {} : _ref3$config;

      var config = _extends({}, baseConfig, instanceConfig);
      mediaLibrary.show(config);
    },

    hide: mediaLibrary.hide,

    enableStandalone: function enableStandalone() {
      return true;
    }
  };
}

var cloudinaryMediaLibrary = { name: "simple-cloudinary", init: init };
