Dog wiki with pictures
This week will be all about responsive design and fetching data from APIs. The goal is to build a little info page about a few dog breeds with pictures of them.

Requirements and Scoring

1. HTML generator in JavaScript
   Create a new Codesandbox project from this template: custom-vanilla-template . This template is almost identical to vanilla template, except that supports async/await syntax. Given HTML below is a template for a single wiki item. Generate at least five wiki items with JavaScript. All of the wiki items have to be generated with JavaScript using functions such as createElement and appendChild, and the web page should not have a single wiki item without JavaScript. Use the same element tags and class names as on the template! Generate them inside a <div> with a class container.

Optional: wiki-text could have a decent amount of random text, somewhere between 70-120 words, so that the layout of the wiki-item would be consistent.

Template for a wiki item:
div class="wiki-item" >
h1 class="wiki-header">Breed X/h1>
div class="wiki-content">
p class="wiki-text">
Some text about this breed.
/p>
div class="img-container">
img class="wiki-img" src="">
/div>
/div>
/div>

2. Dog image API
   Get pictures of dogs from dog API. Each wiki-item should have header with a name of the breed and a picture fetched from the API of the breed of your choosing. The pictures should be random pictures from the breeds that you have chosen. See the documentation and "By breed" page. There should be chapter "Random image from a breed collection."

API: https://dog.ceo/dog-api/

Note: If you use async/await syntax in your code and get error from CodeGrade that is something like:
Uncaught ReferenceError: regeneratorRuntime
Use the custom vanilla template that is given in task 1.

3. Mobile first CSS
   The given template contains the correct HTML items - but is still lacking CSS properties. First thing we want to do is to make it look better on mobile screens. To preview how the web page would look like on mobile sized screen, you can press "Toggle Responsive Preview" on the top right corner in CodeSandbox. Also, if you want to use the browser tools, you can open it in the new window. At the end of this page, there are instructions for some of the browsers on how to open Responsive mode. In most cases, you can open it with keyboard shortcut:

Ctrl+Shift+M ( or Cmd+Opt+M on MacOs).

To disable the horizontal scrolling add the following meta to <head> element:
meta name="viewport" content="width=device-width, initial-scale=1"

Because the dog images are random, also the sizes of the images are random. There might be images that are way too big for mobile screen. To do this, set the width of the image (using its class wiki-img) to 100%. This makes every image to use the whole width inside the parent element.

Add some margin for the wiki-item, so that it would have empty space on right and left (margin-right and margin-left should be something else than 0px). For example, 10px should be fine. Then, to make the wiki items easier to separate from each other, set the wiki-item box-shadow to something that you like. With box-shadow the element will look a little bit like it is floating. wiki-content should also have some padding on all sides (top, right, bottom and left) so that the text and image have some space from the edges.

4. Media queries
   Now that the mobile version of the web application looks tolerable, we will do the same for the desktop version. To make a different look for the desktop, use media query. The minimum width for the desktop version should be 600px.

To make this page better looking for desktop, using the media query for screens that are at least 600px, set the display of the wiki-content to flex, and set the flow-direction to row-reverse. Now, the image and text should be side by side.

It may look like the text takes a lot of place or that the picture is way too right, or vice versa. To solve this, the width of the text and image container should be 50% so that the both sides have half of the available space. This should be done using the "width" css-rule, but due to the restrictions in CodeGrade, set the min-width AND max-width to 50% for the wiki-text and for the img-container.

Next, make it so that wiki items would not take the whole page. To achieve this, wrap everything inside a div with a class container, and set the max-width to 960px. Also set the margin of that class and use "0 auto" value so that it sets the margin automatically to left and right and centers the content.

5. Wiki text from Wikipedia
   To get used to fetching and using APIs, the text should be fetched from wikipedia. Use Wikipedias API to get the summary for every breed page (/page/summary/{title}. Use the value from the extract key as the text.

API: https://en.wikipedia.org/api/rest_v1/
