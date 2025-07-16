// 242. Valid Anagram
// Easy
// Topics
// premium lock icon
// Companies
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.



// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const cache = new Map()

    for (let i in s) {
        cache.set(s[i], (cache.get(s[i]) ? cache.get(s[i]) + 1 : 1))
        cache.set(t[i], (cache.get(t[i]) ? cache.get(t[i]) - 1 : -1))
    }

    cache.forEach(item => {
        if (item !== 0) return false
    })

    return true
};


console.log(isAnagram('anagram', 'nagaram'))