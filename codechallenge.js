const findSum = function(array) {
    function findSum(arr){
        var sum = 0;
        for(var i=0; i<arr.length; i++){
            sum += arr[i];
      }
          return sum;
    }      
  };
  
  const findFrequency = function(array) {
   function findFrequency(array) {
      let frequency = {};
      let most = array[0];
      let least = array[0];
    
      for (let i = 0; i < array.length; i++) {
        let item = array[i];
        frequency[item] = frequency[item] || 0;
        frequency[item]++;
      }
    
      for (let key in frequency) {
        if (frequency[key] > frequency[most]) {
          most = key;
        }
        if (frequency[key] < frequency[least]) {
          least = key;
        }
      }
    
      const answerObject = { most: most, least: least };
      return answerObject; 
    }
  };
  
  const isPalindrome = function(str) {
    function isPalindrome(str) {
      str = str.toLowerCase();
      for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] !== str[j]) {
          return false;
        }
      }
      return true;
    }
  };
  
  const largestPair = function(array) {
    function largestPair(arr) {
    let maxProduct = -Infinity;
    for (let i = 0; i < arr.length - 1; i++) {
      const product = arr[i] * arr[i + 1];
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
    return maxProduct;
  }
  };
  
  const removeParenth = function(str) {
    function removeParenth(str) {
    
      const openIndex = str.indexOf('(');
      
      const closeIndex = str.indexOf(')');
      
      const before = str.slice(0, openIndex);
      
      const after = str.slice(closeIndex + 1);
      
      return before + after;
    }
  };
  
  const scoreScrabble = function(str) {
   function scoreScrabble(word) 
  {
    const points = 
    {
      'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'l': 1, 'n': 1, 'r': 1, 's': 1, 't': 1,
      'd': 2, 'g': 2,
      'b': 3, 'c': 3, 'm': 3, 'p': 3,
      'f': 4, 'h': 4, 'v': 4, 'w': 4, 'y': 4,
      'k': 5,
      'j': 8, 'x': 8,
      'q': 10, 'z': 10,
    };
    let score = 0; 
    for (let i = 0; i < word.length; i++) 
    {
      const letter = word[i].toLowerCase(); 
      if (points.hasOwnProperty(letter)) 
      {
        score += points[letter]; 
      }
    }
    return score;
  }
  };
