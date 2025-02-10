# Capstone Proposal

## Project Proposal - Kristina Nguyen

## Project Name
  * Cozy Corner Plants

## Individual/Group
  * Individual project

## Learning Goals
  * Learn front-end development
    * Mastering React, TypeScript
    * UI/UX Design
  * Learn how to use and integrate Google Firebase
    * Managing data flow
    * Synchronizing state
    * Integrating Firebase Realtime Database with frontend
  * Learn how to use and integrate AI APIs
    * Implementing AI-powered features (Google Gemini - motivational phrase generation)
    * Connecting app to APIs for dynamic content
  * Develop a Chrome extension
    * Understanding the overall process of packaging and deploying a web app as a browser extension
    * Learn to work with extension-specific APIs and setups
  * Explore full-stack workflows
    * Learn to connect frontend to backend services and managing state persistence between components

## Project Description
  * Cozy Corner Plants is a Google Chrome Extension designed to bring a touch of nature and motivation to your browser. It features a collection of interactive pixel plants that grow through different stages as you click on them, each displaying motivational phrases on hover. Users are able to customize their plants by selecting different colored pots, creating a personalized and fun plant collection. The extension uses React and TypeScript for its frontend, integrates with Google Firebase for backend services, and generates AI-powered motivational phrases. With interactive elements, Cozy Corner Plants aims to offer an engaging, dynamic user experience that brings comfort and motivation right in your browser.

## Project Type
  * Google Chrome extension

## Main Front-end Technology
  * React with TypeScript

## Additional Front-end Technologies
  * CSS
  * Vite
  * SVG

## Main Back-end Technology
  * Google Firebase
  
## Additional Back-end Technologies
  * Express.js

## Other Technologies
  * AI integration: Google Gemini API

## Deployment Technologies
  * Frontend: Deployed as a Google Chrome Extension through the Chrome Web Store
  * Backend: Deployed on Render

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