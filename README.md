# bacit-testing
Utforsker mulige rammeverk for testing som kan introduserer i BACIT

## cucumber
Adverds-drevet utvikling (en. "Behaviour Driven Development")
* installer Node.js/npm
* installer Cucumber
* lær grunnleggende syntaks i Cucumber og Gherkin

### Steg i Gherkin (samsvarer med Definisjon av Steg)
Scenario: Breaker guesses a word  
&nbsp;&nbsp;Given the Maker has chosen a word  
&nbsp;&nbsp;When the Breaker makes a guess  
&nbsp;&nbsp;Then the Maker is asked to score

### Definisjon av Steg (manipulerer systemet)
```
When("{maker} starts a game", function(maker) {
  maker.startGameWithWord({ word: "whale" })
})
```
