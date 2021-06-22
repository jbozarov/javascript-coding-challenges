/* Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If 
the item occurs more than once in a sequence, return the item after the first occurence. This should work for a 
sequence of any type. */ 



function nextItem(xs, item) {
  let found = false;
  for (const x of xs) {
    if (found)
      return x;
    if (x == item)
      found = true;
  }
}
