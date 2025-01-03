# Capstone Proposal

## Project Proposal - Kristina Nguyen

## Project Name
  * Cozy Corner Plants

## Individual/Group
  * Individual project

## Learning Goals
  * Learn front-end development
  * Learn to use Google Firebase
  * Learn to use AI API

## Project Description
  * Cozy Corner Plants is a Google Chrome Extension that brings the joys of indoor plants to a cozy corner of a user's browser. It provides a customizable shelf in a corner of the browser window where users can select, display, and grow several pixelized succulents. When hovering over each succulent, an uplifting message will be displayed -- these messages aim to provide positivity and encouragement throughout the day when the user needs a little pick me up.

## Project Type
  * Google Chrome extension

## Main Front-end Technology
  * Typescript

## Additional Front-end Technologies
  * Pixel assets
    * https://www.pixilart.com/draw (making my own)

## Main Back-end Technology
  * Google Firebase
  
## Additional Back-end Technologies
  * Google Gemini API

## Other Technologies
  * N/A

## Deployment Technologies
  * Deployed as a Google Chrome Extension through the Chrome Web Store

## Wireframes
  * [Wireframe](https://www.figma.com/design/9iUZXvXjh0L3a204U32lXz/Cozy-Corner-Plants?node-id=1-423&t=4JFIDXTzVo4pQ1M6-4)
    * [Interactive prototype](https://www.figma.com/proto/9iUZXvXjh0L3a204U32lXz/Cozy-Corner-Plants?node-id=1-3&t=ebRTNpxMuvD8wlLE-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A2)

## MVP Feature Set
  1. A user can choose a maximum of 3 succulent plants to have in their corner
     * Each succulent has 3 life cycle phases (pup, growing, flowering)
     * A user can customize:
       * The shelf appearance and color
       * The succulent pot color
  2. Hovering over individual plants will give messages of encouragement
     * Messages of encouragement will be generated from Google Gemini API
  3. Holding a click on plants will let a user reorganize plants on the shelf
  4. A user can move their plant corner to any corner of their browser (default view is bottom right corner)
  5. A toggle for daytime/night time
  6. Incorporating using local storage on browser so user's preferences are saved

  ### Stretch Goals
  1. Cross-device syncing so the plant progress can be the same across multiple devices where the extension is installed
  2. Including an integration for productivity, like being able to set a timer or including a feature that uses pomodoro timing to remind users of break times