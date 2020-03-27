### Project: **Week 2 Code Review - Programming Language Suggestor**
#### Author: **Christopher Huber**

### Github page: https://chuber42.github.io/Week-2-code-review.index.html
#### Github repo: You're standing on it.
##### Copyright Christopher Huber 2020

&nbsp;
     
&nbsp;
     
         
##### Components: 
This website was built using HTML 5.0, CSS, Bootstrap, JavaScript, and Jquery. 
No special files should be necessary to load this file, all
dependencies are bundled; simply open index.html in your browser.
##### **Warning: some CSS/Bootstrap clauses may not be supported by IE8 or below!**

##### File layout:

As this is - primarily - a Jquery/Javascript skills test, the majority of the complexity resides in the scripts.js file.

Though this has been my first forray into commenting out the logic flow in-line as it executes, I will repeat it here:

The form is comprised of essentially four divs:
1. A top/header/introductory bar
2. A container with:
* Questions 1-3 contained in one Div
* Questions 4-6 contained in another div, with default state hidden
3. A bottom-box where results are published.

There are also, subsequently:

4. A button at the bottom of questions 4-6 for submitting the form.
5. 2 overlapping (one hidden by default) button for toggling between visibility of Div 2 and 3, and these buttons.

The Javascript is much more interesting; the basic logical flow is as follows:

1. Call (clearResults) which erases any list items from the results list/resets the box for updated results.
2. Dump the six questions' values (a or b) into variables.
3. Declare 7 ints to hold the number of times a given language is referenced (one per language, 0 to start, +1 per reference)
4. Apply the individual variables to their own unique mapping schema; different questions segregate each language differently,
and add weight to a given language's desirability by adding 1 to that language's variable.
5. Map the language variables into a jerry-rigged dict, where key = language = index, and value = value.
6. Apply the result of step 5 to a filtering function that returns the 3 indeces with the highest value
* "first in the array" decides tiebreakers
7. Translate the result of step 6 back into language by applying the index #'s located in the array to a mapping function,
which in-turn creates and appends list items to the results box.

##### _Contact_:

CHuber42.Gmail.com

##### _Copyright Christopher Huber 2020, all rights reserved._