**Simple Weather App**

To run this app:
Download the github repository and

`cd BuoyWeather`

`npm install`

`yarn start`

**Note:** In order to access the API, you will have to enable CORS. In Chrome this can be accomplished by installing the extension "Allow-Control-Allow-Origin: \*". Reasons for this are detailed in the "What was difficult" section.

**Questions Answered:**

What went well:

Most of the project was created with relatively little stress. Creating the layout was straightforward, and the format of the returned data lends itself to the requirements.


What was difficult:

Accessing the API. I was plagued by CORS errors and spent a large part of the time googling to try to figure out how to prevent them. Most of what I came across led me to believe that it is a problem with the response headers received from the weather API not containing the fields:

`Access-Control-Allow-Origin: *`


`Access-Control-Allow-Origin: <origin>[, <origin>]*`

Or that it is in issue with my yarn server, possibly because it was running in debug mode. I was not able get past these obstacles and did not feel that it was worth my time attempting to install libraries or debug server configurations, and so I installed a Google Chrome extension that allows CORS on all requests ("Allow-Control-Allow-Origin: \*" is the name of it). There is also an issue that I discovered while testing where, if one is typing and clicks the "Go!" button too quickly, then the app starts sending a stream of SVG requests. I was not able to get to the bottom of this, either. In short, the infrastructure of actually making the API requests was what was difficult, and bogged me down a bit.


What I would improve with more time:

Almost everything. The design could use more work, and it could be smoother while resizing the page, for two notable examples. I was unsure of how much I was expected to pull in from react libraries, so I largely stayed away from it. I would do some research into components that would enhance the design of the page, and incorporate them into the app. I would also dig more in to the SVG issue, as it takes up browser resources and is definitely functionality that should be removed.
