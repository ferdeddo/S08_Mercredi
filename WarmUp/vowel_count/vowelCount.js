function vowelCount(string) {
  var m = string.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}

alert(vowelCount("La terre Est plus petite que le soleil"));