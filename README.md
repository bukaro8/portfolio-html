# Personal Portfolio HTML-CSS-JS
## Deployment
 Deployed Website: https://bukaro8.github.io/portfolio-html/

## Website Structure Overview:

The website has a clear and accessible structure with key sections:

Navigation Bar: A responsive navbar provides links to Home, About, Projects, and Contact, adapting to different screen sizes.
•	Hero Section: Features a large h1 introducing Victor with a brief description of his skills and technologies.
•	About Section: Highlights Victor’s experience and skills in a concise, readable format.
•	Projects Section: Displays a grid of completed projects with images and descriptions.
•	Contact Section: Includes links to GitHub, LinkedIn, and email for easy communication.
•	Footer: Provides additional links and copyright information.
The website uses semantic HTML for accessibility and SEO, ensuring a well-structured and user-friendly experience.


## User Stories / Goals

### First Time Visitor Goals:
* As a first-time visitor, I want to quickly understand the purpose of the website and the services it offers, showcasing the developer's skills and experience.
* I need to navigate easily through the website to find information about the developer's portfolio, contact details, and relevant projects.
* I want to be assured of the developer's professionalism through a well-designed and functional website.

### Returning Visitor Goals:
* As a returning visitor, I want to revisit the developer's portfolio and explore any new projects added.
* I may want to quickly access the contact section to get in touch with the developer.
* I want to view links to the developer's professional profiles (e.g., GitHub, LinkedIn) for further collaboration.

### Portfolio Owner Goals:
* To present a clear and professional portfolio that highlights skills, projects, and expertise.
* To attract potential clients or employers and encourage them to get in touch via the contact section.
* To build credibility by showcasing completed projects and providing links to professional profiles.

---

## Pages and Features

### Navigation
* The navigation bar is positioned at the top of the website and provides links to all key sections: Home, About, Projects, and Contact.
* The links are styled for accessibility and include hover effects for better interactivity.
* The navigation bar is fully responsive and adjusts gracefully to smaller screens, with a collapsible menu for mobile devices.

---

### Home Page
* The homepage features a hero section with a looping background video and a welcoming message introducing the developer.
* It sets the tone for the portfolio, showcasing the developer's skills and technologies used.
* Call-to-action buttons guide visitors to explore the About section or the portfolio of projects.

---

### About Page
* The About page provides an overview of the developer's background, including key skills, experience, and passion for web development.
* It is concise yet informative, offering insight into the developer's personality and approach to projects.
* The layout ensures readability and accessibility, with high-contrast colours and semantic HTML.

---

### Projects Page
* The Projects page showcases a curated selection of the developer's work, with each project displayed in a card format.
* Each card includes a project title, description, and a link to view the project or its source code on GitHub.
* The page is fully responsive, ensuring a pleasant user experience across all devices.

---

### Contact Page
* The Contact page includes a simple contact form for users to send messages directly to the developer.
* It also contains links to the developer's GitHub, LinkedIn, and email address.
* The footer provides additional links and a clean design to ensure visitors can find contact information effortlessly.

---

### Footer
* The footer is consistent across all pages and includes links to the developer's GitHub, LinkedIn, and email address.
* All links open in new tabs, ensuring the visitor remains on the portfolio site.
* It uses semantic HTML to enhance accessibility and SEO.

## Design

### Colour Scheme

The colour scheme for this project is designed to create a visually appealing and consistent user experience. Below are the primary colours used, along with their corresponding CSS variables, visual representations, and URLs.

#### Primary Colours
- **Primary Colour (`--primary-clr`)**: `#4a90e2`  
  ![Primary Colour](documentation/4a90e2.png)  
  [View Image](documentation/4a90e2.png)  
  Used for key interactive elements and highlights.

- **Clear Colour (`--clear-clr`)**: `#cecbcb`  
  ![Clear Colour](documentation/cecbcb.png)  
  [View Image](documentation/cecbcb.png)  
  Used for backgrounds and subtle text.

- **Dark Colour (`--dark-clr`)**: `#000000`  
  ![Dark Colour](documentation/000000.png)  
  [View Image](documentation/000000.png)  
  Used for text and high-contrast elements.

- **Alert Colour (`--alert-clr`)**: `#e74c3c`  
  ![Alert Colour](documentation/e74c3c.png)  
  [View Image](documentation/e74c3c.png)  
  Used for error messages and warnings.

#### CSS Variables
The colours are defined as CSS variables in the `:root` selector for easy reuse across the project:

```css
:root {
	--primary-clr: #4a90e2;
	--clear-clr: #cecbcb;
	--dark-clr: #000000;
	--alert-clr: #e74c3c;
}

```

Below are the wireframes for the different pages of the project, showcasing the design for both desktop and mobile views.

### Landing Page
- **Desktop View**: [Landing Page Desktop](documentation/wireframes/landing-desktop.png)  
- **Mobile View**: [Landing Page Mobile](documentation/wireframes/landing-mobile.png)  

### About Page
- **Desktop View**: [About Page Desktop](documentation/wireframes/about-desktop.png)  
- **Mobile View**: [About Page Mobile](documentation/wireframes/about-mobile.png)  

### Projects Page
- **Desktop View**: [Projects Page Desktop](documentation/wireframes/projects-desktop.png)  
- **Mobile View**: [Projects Page Mobile](documentation/wireframes/projects-mobile.png)  

### Contact Page
- **Desktop View**: [Contact Page Desktop](documentation/wireframes/contact-desktop.png)  
- **Mobile View**: [Contact Page Mobile](documentation/wireframes/contact-mobile.png)  



## Testing
### HTML Checker

* Results:  [HTML](documentation/tests/html-checker.png)

### CSS Checker

* Results:  [wc3-validator](documentation/tests/w3c-css-validator.png)
 * Explanation
- The errors in the Jigsaw CSS Validator occur because the validator does not fully support some modern CSS features. For example, the `@property` rule, which is used to define custom properties, is part of the newer CSS Houdini specification and is not yet recognised by all validators. Similarly, the `conic-gradient` function, when used with CSS variables like `var(--angle)`, may not be properly understood by the validator, leading to a value error. Additionally, the `translate` and `scale` properties are part of the newer CSS Transforms Module Level 2, but the validator expects the older syntax using the `transform` property with functions like `translate()` and `scale()`. These issues highlight the gap between modern CSS features and the validator's current capabilities, which are based on older or more widely supported standards. To fix these errors, the code can be updated to use the older, more universally accepted syntax, ensuring compatibility with tools like the Jigsaw CSS Validator.


### Colours  Contrast Checker
*  [Color 1](documentation/tests/colour-contrast1.png)
*  [Color 2](documentation/tests/colour-contrast2.png)
*  [Color 3](documentation/tests/colour-contrast3.png)


### Light House

* Home [Desktop](documentation/tests/lighthouse.png) |
[Mobile](documentation/tests/lighthouse-mobile.png) 

* About [Desktop](documentation/tests/lighthouse-about-desktop.png)|
[Mobile](documentation/tests/lighthouse-about-mobile.png)

* Projects [Desktop](documentation/tests/lighthouse-projects-desktop.png)|
[Mobile](documentation/tests/lighthouse-projects-mobile.png)

* Contact [Desktop](documentation/tests/lighthouse-contact-desktop.png)|
[Mobile](documentation/tests/lighthouse-contact-mobile.png)



### Manual Testing

Below is the manual testing performed for the project to ensure all features work as expected.

| Feature               | Action                                                                 | Expected Result                                                          | Tested | Passed | Comments                                                                                 |
| --------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------ | ------ | ---------------------------------------------------------------------------------------- |
| **Navbar**            |                                                                        |                                                                          |        |        |                                                                                          |
| Home Link             | Click on the "Home" link                                               | The user is redirected to the main page                                  | Yes    | Yes    | -                                                                                        |
| About Link            | Click on the "About" link                                              | The user is redirected to the about page                                 | Yes    | Yes    | -                                                                                        |
| Projects Link         | Click on the "Projects" link                                           | The user is redirected to the projects page                              | Yes    | Yes    | -                                                                                        |
| Contact Link          | Click on the "Contact" link                                            | The user is redirected to the contact page                               | Yes    | Yes    | -                                                                                        |
| **Footer**            |                                                                        |                                                                          |        |        |                                                                                          |
| LinkedIn Icon         | Click on the LinkedIn icon                                             | The user is redirected to the LinkedIn profile                           | Yes    | Yes    | -                                                                                        |
| GitHub Icon           | Click on the GitHub icon                                               | The user is redirected to the GitHub profile                             | Yes    | Yes    | -                                                                                        |
| Email Icon            | Click on the Email icon                                                | The default email client opens with a pre-filled recipient address       | Yes    | Yes    | -                                                                                        |
| **Home Page**         |                                                                        |                                                                          |        |        |                                                                                          |
| "Contact Me" Button   | Click on the "Contact Me" button                                       | The user is redirected to the contact page                               | Yes    | Yes    | -                                                                                        |
| Download CV Button    | Click on the "Download CV" button                                      | The CV file is downloaded                                                | Yes    | Yes    | -                                                                                        |
| Projects Button       | Click on the "Projects" button                                         | The user is redirected to the projects page                              | Yes    | Yes    | -                                                                                        |
| **Contact Page**      |                                                                        |                                                                          |        |        |                                                                                          |
| Name Input            | Enter Name                                                             | Name is entered                                                          | Yes    | Yes    | If the user doesn't enter a name, an error message appears.                              |
| Email Input           | Enter Email                                                            | Email is entered                                                         | Yes    | Yes    | If the user doesn't enter an email or enters an invalid email, an error message appears. |
| Message Input         | Enter Message                                                          | Message is entered                                                       | Yes    | Yes    | If the user doesn't enter a message, an error message appears.                           |
| Submit Button         | Click on the "Submit" button                                           | The form is submitted, and the user is redirected to a confirmation page | Yes    | Yes    | -                                                                                        |
| **Confirmation Page** |                                                                        |                                                                          |        |        |                                                                                          |
| Redirect to Home Page | The user is automatically redirected to the home page after 10 seconds | The user is redirected to the home page                                  | Yes    | Yes    | -                                                                                        |


note:
1. Run ./tailwindcss-macos-arm64 -i styles.css -o dist/output.css --minify
2. delete tailwindcss file 
