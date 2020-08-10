// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, currentNode) {
  var result = [];

  if (currentNode === undefined) {
    currentNode = document.body;
  }

  if (currentNode.classList && currentNode.classList.contains(className)) {
    result.push(currentNode);
  }

  for (var i = 0; i < currentNode.childNodes.length; i++) {
    if (currentNode.childNodes) {
      result = result.concat(getElementsByClassName(className, currentNode.childNodes[i]));
    }
  }

  return result;
};
