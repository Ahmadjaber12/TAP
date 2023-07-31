function areAnagrams(word1, word2) {
    return sortString(word1.toLowerCase()) === sortString(word2.toLowerCase());
}

function sortString(str) {
    return str.split('').sort().join('');
}

function isAnagramInArray(phrase, anagrams) {
    return anagrams.filter(word => areAnagrams(phrase, word));
}

const phrase = "Bob Ziroll Teacher";
const anagrams = [
    "oz bilal tochberer",  
    "it's razorbill beachcomber", 
    "och robe tilblazer", 
    "bib chorizo cellarmaster", 
    "thor bble carizole", 
    "zll borcht aberoie", 
    "brzl orche atobile", 
    "dame shelburne characterizing", 
    "uber englishman characterized", 
    "agnes rhumbline characterized", 
    "rehab scrutinized charlemagne", 
    "dreams zurich interchangeable", 
    "bam hamster technocratic", 
    "mechatronic masterbatch", 
    "bam ratchet mechatronics"
    ]

const output = isAnagramInArray(phrase, anagrams);
console.log(output);
