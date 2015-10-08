// I stole most of this code from here:
// https://github.com/panicsteve/cloud-to-butt

walk(document.body);

function walk(node) 
{
  // I stole this function from here:
  // http://is.gd/mwZp7E
  
  var child, next;

  switch ( node.nodeType )  
  {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while ( child ) 
      {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
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
      /\d{5,}/,
      function(match) {
        var newstr = '';

        var i = match.length;
        do {
          i -= 3;
          newstr = ',' + match.substr(i, 3) + newstr;
        } while (i > 3);

        newstr = match.substring(0, i) + newstr;

        return newstr;
  });
}
