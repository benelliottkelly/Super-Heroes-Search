# Heroes and Villains ReadMe

## Description
This project was to create a site which takes an application programming interface (API) and adds functionality to it. We were to undertake the project as pairs so my partner and I chose something we liked in common… superheroes. Our aim was to take some of the information provided in the API and display it in a way that would give the user the feel of a comic book.

## Deployment link
The website can be accessed here:
[https://heroesandvillainsapi.netlify.app/](https://heroesandvillainsapi.netlify.app/)

## Getting Started/Code Installation
HTML, CSS and JavaScript for this project can be found here: [https://github.com/benelliottkelly/Super-Heroes-Search](https://github.com/benelliottkelly/Super-Heroes-Search)
The project uses React, Bootstrap and SASS, all of which are included in the dependencies of the package json and can be installed using npm.

## Timeframe & Working Team 
This was a pair project which was to be completed in under 2 days. My partner for the project was Jerrell Boyer, whose GitHub can be found here: [https://github.com/Jerrellbb](https://github.com/Jerrellbb)

## Technologies Used
### HTML
- HTML was used to import the various fonts used as well as giving the page a title and favicon.

### CSS via SASS
- The majority of styling was done using SASS including fonts, logos and background colours for the individual “cards” showing hero/villains info and stats.
- SASS was also used to implement a hover effect on the navigation button, making it grow and move to look like you were turning a page to navigate.

### JavaScript via React
- React was used to create a browser router and layout the website from there.
- The API was pulled in using a JavaScript function and manipulated within React.
- A filter was implemented using the useState() function, which allows the user to filter the API by a drop down containing the hero/villains alignment, and/or a text input matching the hero/villains name. 
- A loading screen was added using the useNavigation() function, which would appear while API information was being fetched.

## Brief
The brief for this project was to build an app which consumed a public API and could be deployed online.
The technical requirements for the project were:
- Consume a public API
- Have several components
- The app can have a router - with several "pages".
- Include wireframes
- Be deployed online and accessible to the public
Necessary deliverables were:
- A working application, hosted somewhere on the internet
- A link to your hosted working app
- A git repository hosted on Github
- A readme.md file

## Planning
The majority of the planning for this project was Jerrell and I discussing topics that interested us and finding an API that matched those topics. It was important for me to find a common ground topic that we both enjoyed so that we could both be excited about building it, which is how we ended up using the heroes and villains API which can be found here: [https://akabab.github.io/superhero-api/api/#id/1.json](https://akabab.github.io/superhero-api/api/#id/1.json)

After finding the API and testing out the different endpoints using Insomnia, we put together a quick wireframe and then got straight into the coding.

## Build/Code Process
As this was such a short project we agreed that Jerrell would type up the code while sharing his screen over zoom and I would guide/input either vocally or by sending snippets of code through slack. From start to finish this project was fully collaborative with each step we discussed, agreed and/or compromised and therefore the code process was very much a ‘we’ rather than ‘I’ and so I will refer to it as such.
We began by creating the main.jsx along with the various components we thought we would need, which included a Home, Heroes Index and Hero Single. By the afternoon of day 1 we had a fully functional site in which the user could navigate between the home and index via a model. The index page had a grid of heroes and villains each with their name and picture which could be clicked on to bring up individual statistics about the clicked on character.
The styling for the index page was heavily influenced by Michael Picker’s comic book style borders which can be found on their [codepen](https://codepen.io/mp/pen/kBEeKw).

![A screenshot of the basic homescreen](https://github.com/benelliottkelly/Super-Heroes-Search/assets/143013767/0833748c-c48e-4a96-8c5b-39b9a8f63a5e)
Figure 1: The basic homescreen.

![A screenshot of the homepage code](https://github.com/benelliottkelly/Super-Heroes-Search/assets/143013767/a68d92c4-ee84-4cb0-96f0-1f6ffd29e5b7)
Figure 2: Using React to code a very basic styling for the index page

![A screenshot of the index page](https://github.com/benelliottkelly/Super-Heroes-Search/assets/143013767/3c328694-bb0d-4fcb-8a6e-a30cb99fb785)
Figure 3: The index page.

The second half of day 1 was then spent stylising the page. We had decided during the planning stage that we wanted a comic book type theme and so went with a white background with black bordered panels for the index page. Then when clicking through to each character we wanted to display it as a top trump. This gave me the idea of using the characters alignment (Good, Bad or Neutral) to colour the background of the “trump card”.

![A screenshot of the updated homepage with background image](https://github.com/benelliottkelly/Super-Heroes-Search/assets/143013767/eaedc058-9ff6-4bf5-bd0e-0f7e1445f097)
Figure 4: The updated home page.

![A screenshot of the code used to dynamically style the single heroes pages](https://github.com/benelliottkelly/Super-Heroes-Search/assets/143013767/bc5f7266-054f-485c-b089-627de53bdeb8)
Figure 5: Using React to style the “trump cards” based on the characters alignment.

![A screenshot of the good aligned batman single character page](https://github.com/benelliottkelly/Super-Heroes-Search/assets/143013767/27e1e444-75c0-43ad-ba4f-3d01a84cfdef)
Figure 6: The detailed statistics and bio of a ‘good’ aligned character with a green card.

![A screenshot of the bad aligned Green Goblin single character page](https://github.com/benelliottkelly/Super-Heroes-Search/assets/143013767/d699dbf3-c7e8-4006-8fb7-7311000e565f)
Figure 7: The detailed statistics and bio of a ‘bad’ aligned character with a red card.

During the second day we added some more functionality so that the user could filter through the characters in the index page by their alignment as well as by typing their name into the search bar, which would update with each letter added.

![Screenshot of the index page using the filter function, filtering by characters with ‘spi’ in their name](https://github.com/benelliottkelly/Super-Heroes-Search/assets/143013767/0daf93a5-b084-47be-85cc-73ab11f0ebf5)
Figure 8: The filter function, filtering by characters with ‘spi’ in their name.

We also added a favicon to really complete the look.

![Screenshot of the batman favicon](https://github.com/benelliottkelly/Super-Heroes-Search/assets/143013767/356ce5fe-0e0c-4ed5-b5a4-f719499251c0)
Figure 9: Batman favicon for the site.

## Challenges
The main challenge with this project was the time constraint. Jerrell and I really got into a flow with the work and had other additional features which we would have loved to implement, but didn’t have time.

## Wins
The biggest win of this project was just getting creative and using the data obtained from the API in a fitting and interesting way. My personal favourites were the colour coordinated background colours linked to their alignment and the button to bring up the nav which looks like a page being turned.

## Key Learnings/Takeaways
The key things learned during this project were:
- Working together as a team for pair programming.
- Extracting and putting to use the data provided in a public API.
- Styling the app with SASS and Bootstrap.

## Bugs
There are no bugs that I am aware of.

## Future Improvements
I would like to add a game function to this app which allows the user to pick a character and one of the stats, which will then trigger the computer to randomly pick another character and compare that characters’ stat with the one chosen by the user and declaring a winner based on that value. (Just like top trumps)
