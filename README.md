# PowerSaveMeFrontend
## Frontend for Power Save Me :leaves:

**In this documentation**

* [Get started](README.md#get-started)
* [Project structure](README.md#project-structure)
* [Development](README.md#development)
* [Styling:](README.md#styling)
* [Coding guidelines](README.md#coding-guidelines)
* [Routing](README.md#routing)
* [Data Visualization](README.md#data-visualization)
* [User Interface](README.md#user-interface)
* [Deployment](README.md#deployment)
* [Summary](README.md#summary)

*****


## Get started
**Prerequisites:** 
Node.js and npm
1. Clone the repository from GitHub.
1. Install dependencies with:

   npm install
   


**Dependencies used:**
- React (18.2.0)
- React Router DOM (6.15.0)
- Styled Components (6.0.7)
- Recharts (2.8.0)
- React Select (5.7.5)
- Dev dependencies:
- Eslint (8.49.0)

## Project structure
![OverallStructure](https://github.com/EricaBackman/PowerSaveMeFrontend/assets/112472987/4ccdb0a5-a318-4de9-9b9b-b65fe09746d5)
*	src/components/: Where reusable React components are stored.
*	src/routes/: Where page-level components are located.
*	src/assets/: Where icons and logos are stored.

## Development
Run development with:

npm run dev

## Styling:
All components are styled with Styled Components except DropDown.jsx that is a react-select component and is styled with both SC and react-selects own Styles prop. 

Read more here:

https://react-select.com/styles#the-styles-prop

## Styled Components:
1. 	npm install styled-components
2. 	import styled from 'styled-components' in your component.
3. 	Wrap your html in a custom named tag e.g.

   
  return (
  
    <>
    
    <Connect>Connected</Connect>
    
    </>
    
  )
  

4. 	Last in your component write:
  
   const Connect = styled.div``. 
   
The CSS goes inside the backticks. 

Read more here:

https://styled-components.com/


## Coding guidelines
*	Empty fragments for a cleaner look. (<></>)
*	Comments in code in English.
*	Keep the styling in the component as much as possible.

## Routing
https://reactrouter.com/en/main/start/overview

## Data Visualization (Recharts)
The plugin Recharts are used for the charts. The data is hard coded for now and is placed inside the chart components. The data is going to be from APIs and backend. Since the data in TimeNavigation.jsx is going to be different depending on day, month, year and lifetime, the chart component is a reusable component, and the idea is that data is going to be fetched from another component and passed through props.

Read more here:

https://recharts.org/en-US

## User Interface (React select)
The component DropDown.jsx is a selector of houses. The data is hard coded for now and is placed in the component. The idea is to be able to have multiple households connected to the application.

Read more here:

https://react-select.com/home

## Deployment
The deployment is done in AWS (Amazon Web Services). Two different repositories are used for backend and frontend. 


## Summary
The design for this project is done in Figma. Some design is left to be done. E.g. show top 3 devices using the most energy on FirstPage/Home, elaborate PriceForecast. 

The idea is an easy to use, application for private costumers to be able to view their household’s electricity consumption, track devices and incoming electricity, view prices and possible savings. 

The application is made Mobile First and is for now, coded from the iPhone 14-device but needs to be responsive. 

The login icon (from the design) needs to be implemented on the powersave.me site. The connection between powersave.me and this project needs to be solved.

***Remember to keep your documentation concise and organized. Regularly update it to reflect any changes in the project or its dependencies. This guide should help new team members get up to speed quickly and contribute effectively to this project.***

