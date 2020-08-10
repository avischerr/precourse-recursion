// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = '';
  var currentObj = obj;

  if (typeof currentObj !== 'object') {
    if (typeof currentObj === 'string') {
      result += '"' + currentObj + '"';
    } else {
      result += currentObj.toString();
    }
  } else if (currentObj === null) {
    result += 'null';

  } else if (Array.isArray(currentObj)) {
    for (var i = 0; i < currentObj.length; i++) {
      if (currentObj[i] !== undefined) {
        result += stringifyJSON(currentObj[i]);
        if (i !== currentObj.length - 1) {
          result += ',';
        }
      }
    }
    if (result[result.length - 1] === ',') {
      result = result.slice(0, -1);
    }
    result = '[' + result + ']';

  } else {
    for (var key in currentObj) {
      if (currentObj[key] !== undefined && typeof currentObj[key] !== 'function') {
        result += '"' + key + '":' + stringifyJSON(currentObj[key]) + ',';
      }
    }
    if (result[result.length - 1] === ',') {
      result = result.slice(0, -1);
    }
    result = '{' + result + '}';
  }

  return result;
};