// I stole most of this code from here:
// https://github.com/panicsteve/cloud-to-butt

console.debug("main file loaded");

walk(document.body);

function walk(node) 
{
  // I stole this function from here:
  // http://is.gd/mwZp7E
  
  var child, next;

  console.debug("walking");

  switch ( node.nodeType )  
  {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      console.debug("type 1 9 or 11");
      child = node.firstChild;
      while ( child ) 
      {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
      console.debug("type 3");
      handleText(node);
      break;
  }
}

function handleText(textNode)
{
  textNode.nodeValue = transformText(textNode.nodeValue);
}

function transformText(text)
{
  return text.replace(
      /\d{4,}/, 
      function(match) {
        var newstr = '';

        console.debug("Replacing", match);

        var i = match.length;
        do {
          i -= 3;
          newstr = ',' + match.substr(i, 3) + newstr;
        } while (i > 3);

        newstr = match.substring(0, i) + newstr;

        console.debug("Replacement:", newstr);

        return newstr;
  });
}
