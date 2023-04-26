Documentation:
This GitHub project is an application for rendering tweets using mockapi.io. The application is written in JavaScript and uses node.js, react.js, Emotion, axios, react-router-dom, react-loader-spinner, react-redux, redux-persist libraries.


Technical task:

According to the layout, user cards are implemented. When you click on the Follow button, the text changes to Following. The color of the button also changes. And yours is added to the number of followers. That is, the initial number is 100,500 followers. When you click on the button, it will be 100,501. When the page is updated, the final result of the user's actions is fixed. That is, if you click on the button and refresh the page, the button still remains in the Following state with the appropriate color, and the number of followers does NOT decrease to the initial value. When you click the button again, its text and color change to their original state. The number of followers also changes. It decreases by 1 (100,500). In the code, the number 100,500 is written with one value (100500). In the UI, it is displayed with a comma (100,500). Created your own personal backend for development using the mockapi.io UI service. The users resource has been created. The user object is described below.

Tweets:

A user was created in Mockapi with the following fields: id, user, tweets, followers, avatar (see screenshot below). Avatar images are registered with separate urls in the “avatar” property. One pagination page should display 3 tweets, the rest should be loaded when you click Load More

https://textbook.edu.goit.global/lms-career-homework/uk/img/image-2.jpg


Additional functionality:
Created routing using React Router.

If the user entered using a non-existent route, he will be redirected to the home page. '/' – Home component, the home page. '/users' - tweets component, a page displaying tweets. The tweets page has a Back button that takes you to the main page.

Added filtering. Dropdown with 3 options: show all, follow, followings. show all - show all tweets. follow - show tweets with follow status. followings - show tweets with the following status

Layout: https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?node-id=0%3A1&t=VoiYTfiXggVItgVd-1