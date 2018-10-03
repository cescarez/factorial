# Factorials

_Epicodus Week 10, last updated Oct. 1, 2018_

##### By _**Christabel Escarez**_

## Description

A webpage that will calculate the factorial of a user input.

## Setup/Installation Requirements

* _Clone repository:_ https://github.com/cescarez/factorial.git
* _Open index.html_
* _Enter and submit number._


## Specifications
| Specification | Example User Input | Expected Output |
| :-------------| :----------------- | :-------------- |
| Program gathers user input | _Input:_ "5246" | _Output:_ "5246" |
| Program ignores decimal point values in user input | _Input:_ "5246.78345" | _Output:_ "5246" |
| Program ignores non-numerical characters in user input| _Input:_ "5Ku%24LLL6op" | _Output:_ "5246" |
| Program does not accept negative integers | _Input:_ "-5246" | _Output:_ "A factorial cannot be calculated from a negative number. Please enter a non-negative integer." |
| Program does not allow words to be submitted | _Input:_ "dog" | _Output:_ Submit function does not work, input box becomes outlined in red |
| Program does not allow empty input to be submitted | _Input:_ "" | _Output:_ Submit function does not work, input box becomes outlined in red |
| Program calculates factorial of zero | _Input:_ "0" | _Output:_ "1" |
| Program counts down to one from non-negative integer user input | _Input:_ "5" | _Output:_ "5, 4, 3, 2, 1, 0"|
| Program multiplies together all numbers in previous count | _Input:_ "5" | _Output:_ "5 * 4 * 3 * 2 * 1"|
| Program displays calculated factorial | _Input:_ "5" | Displayed _Output:_ "5! = 20"|

## Known Bugs

_No known bugs, to date._

## Support and contact details

_Contact christabel.escarez@gmail.com with any technical issues._

## Technologies Used

* _HTML_
* _CSS_
  * _Bootstrap 3.3.7_
* _JavaScript_
  * _jQuery 3.3.1_

### License

Copyright (c) 2018 **Christabel Escarez** :dog:

*This software is licensed under the GPL license.*

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
