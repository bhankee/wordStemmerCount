import React, { useState } from 'react';
import ResultsTable from './Table'

function UserInput() {

    const [results, setResults] = useState([]);

    let wordMap = {}

    const updateWordState = (key) => {
        const addState = (newMessage) => setResults(state => [...state, newMessage])

        key.filter(ky => ky !== "").map((thisKey, ind) => {
            let keyValPair = `${key[ind]}: ${wordMap[key[ind]]}`
            addState(keyValPair)
        })
    }


    const readFile = event => {
        const {target:input} = event

        let file = input.files[0]
        let reader = new FileReader()

        reader.readAsText(file);

        reader.onload = function() {
            let allWords = reader.result.split(/\W+/)
            var keys = []

            allWords.map((word, ind) => {
                if(stopWords.includes(word.toLowerCase())) return

                word = stemWordList(word)
                // It's a new word!
                if (wordMap[word] === undefined) {
                    wordMap[word] = 1
                    keys.push(word)
                // We've seen this word before!
                } else {
                  wordMap[word]++
                }
            })

            keys.sort((a, b) => wordMap[b] - wordMap[a])

            updateWordState(keys)

        reader.onerror = function() {
          console.log(reader.error);
        };

      }
    }

/*------------------------------------------------------------------------------------
For this finite list to check a switch statement is a good solution but to make this
funtionality extendable I would make arrays or objects to check against since they
would be more maintainable with more words.
------------------------------------------------------------------------------------*/
      const stemWordList = word => {
        let stemmed

        switch (word.toLowerCase()) {
            case "talks":
            case "talked":
            case "talking":
                stemmed = "talk"
                break

            case "plays":
            case "played":
            case "playing":
                stemmed = "play"
                break
            case "passed":
            case "passes":
            case "passing":
                stemmed = "pass"
                break

            case "copied":
            case "copies":
            case "copying":
                stemmed = "copy"
                break

            default:
                stemmed = word
                break;
        }
        return stemmed
    }

    let stopWords = ["a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "between", "both", "but", "by", "can't", "cannot", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "don't", "down", "during", "each", "few", "for", "from", "further", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself", "him", "himself", "his", "how", "how's", "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "isn't", "it", "it's", "its", "itself", "let's", "me", "more", "most", "mustn't", "my", "myself", "no", "nor", "not", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "ours", "ourselves", "out", "over", "own", "same", "shan't", "she", "she'd", "she'll", "she's", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "to", "too", "under", "until", "up", "very", "was", "wasn't", "we", "we'd", "we'll", "we're", "we've", "were", "weren't", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "who's", "whom", "why", "why's", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves"]

    return(
        <>
        <input type="file" id="txtDocUpload" onChange={readFile}  multiple />
        <ResultsTable results ={results}/>
        </>

    )

}


  export default UserInput;