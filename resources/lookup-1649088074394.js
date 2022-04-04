(function(window, undefined) {
  var dictionary = {
    "c1d0e2fa-d437-432f-b6ec-94075e8b4f19": "Non-Members",
    "74f02cba-2c8e-4f64-9505-214c1b475f9b": "IDEAS",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home Page",
    "0163cc01-d7e1-47f6-b552-2c1f44598892": "Educators",
    "e131057e-c224-4f46-b1c8-c2a599cab5a6": "Stroke Search",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);