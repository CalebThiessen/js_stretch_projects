function makeLoadedDie() {
    const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
 
  
    return function() {
        
        return (list[0], list.shift())
    }
    
  }
  
  const rollLoadedDie = makeLoadedDie();
  
  console.log(rollLoadedDie());  // 5
  console.log(rollLoadedDie());  // 4
  console.log(rollLoadedDie());  // 6