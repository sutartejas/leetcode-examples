function canConstruct(ransomNote, magazine) {
    for (const char of magazine) {
      ransomNote = ransomNote.replace(char, "");
    }
    
    if (!ransomNote) return true;
    else return false;
  };

  
  const result = canConstruct(ransomNote = "aa", magazine = "aab");

  console.log(result)