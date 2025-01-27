# portfolio-html
## Deployment
 Deployed Website: https://bukaro8.github.io/portfolio-html/


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

#### Primary Colours
- **Primary Colour (`--primary-clr`)**: `#4a90e2`  
  ![Primary Colour](documentation/4a90e2.png)  
  Used for key interactive elements and highlights.

- **Clear Colour (`--clear-clr`)**: `#cecbcb`  
  ![Clear Colour](documentation/cecbcb.png)  
  Used for backgrounds and subtle text.

- **Dark Colour (`--dark-clr`)**: `#000000`  
  ![Dark Colour](documentation/000000.png)  
  Used for text and high-contrast elements.

- **Alert Colour (`--alert-clr`)**: `#e74c3c`  
  ![Alert Colour](documentation/e74c3c.png)  
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

### Light House

* Home [Desktop](documentation/tests/lighthouse.png) |
[Mobile](documentation/tests/lighthouse-mobile.png) 

* About [Desktop](documentation/tests/lighthouse-about-desktop.png)|
[Mobile](documentation/tests/lighthouse-about-mobile.png)

* Projects [Desktop](documentation/tests/lighthouse-projects-desktop.png)|
[Mobile](documentation/tests/lighthouse-projects-mobile.png)

* Contact [Desktop](documentation/tests/lighthouse-contact-desktop.png)|
[Mobile](documentation/tests/lighthouse-contact-mobile.png)


note:
1. Run ./tailwindcss-macos-arm64 -i styles.css -o dist/output.css --minify
2. delete tailwindcss file 
