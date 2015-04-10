// creates function with 2 parameters
function highlightCode(node, keywords) {
  // creates text variable to be all the text in the node	
  var text = node.textContent;
  // clears the node by setting it to an empty string
  node.textContent = ""; 
  // creates variable match to loop over all the matches
  var match, pos = 0;
  while (match = keywords.exec(text)) {
    // this is where  
    var before = text.slice(pos, match.index);
    // the text in between gets appended as regular text nodes
    node.appendChild(document.createTextNode(before));
    // this is where the matched text gets "highlighted"
    var strong = document.createElement("strong");
    // this is also where the matched text gets "highlighted"
    strong.appendChild(document.createTextNode(match[0]));
    node.appendChild(strong);
    pos = keywords.lastIndex;
  }
  // the text after gets made into a text node
  var after = text.slice(pos);
  node.appendChild(document.createTextNode(after));
}

