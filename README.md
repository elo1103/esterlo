# Ester Lo - Creative Technologist Portfolio

This is a modern, responsive personal portfolio website for Ester Lo, a Creative Technologist specializing in AI automation and advanced manufacturing. The website features an Apple-inspired design with a clean, minimalist aesthetic and includes a comprehensive blog system.

## Key Features

- **Apple-Inspired Design** - Clean, minimalist UI with smooth animations
- **Responsive Design** - Perfect support for desktop, tablet, and mobile devices
- **Portfolio Showcase** - Featured work section highlighting AI & Automation and Advanced Manufacturing
- **Blog System** - Complete blog with category filtering and article pages
- **Contact Integration** - EmailJS-powered contact form with email copy functionality
- **Interactive Elements** - Hover effects, smooth scrolling, and dynamic content filtering
- **SEO Friendly** - Optimized HTML structure and meta tags

## File Structure

```
ELO_web/
├── index.html                    # Main portfolio page
├── blog.html                     # Blog listing page
├── styles.css                    # Main stylesheet
├── script.js                     # JavaScript functionality
├── asset/                        # Images and media files
│   ├── ai-automation.png
│   ├── concrete-printing.jpg
│   ├── factory-automation-1.JPG
│   ├── factory-automation-2.JPG
│   └── industrial-revolution.jpg
├── blog/
│   └── articles/
│       ├── Notes-on-My-Journey-Across-Design-Manufacturing-and-AI.html
│       ├── When-Three-People-Work-for-Two-Months-Shrinks-into-Two-Weeks.html
│       ├── Why-Are-Small-and-Medium-Sized-Businesses-Always-Stuck-with-Repetitive-Work.html
│       ├── Efficiency-Often-Begins-in-the-Smallest-Most-Repetitive-Tasks.html
│       ├── Sapiens.html
│       └── Design-Materials-Technology.html
└── README.md                     # Documentation
```

## Quick Start

1. **Clone Repository**
   ```bash
   git clone https://github.com/yourusername/ELO_web.git
   cd ELO_web
   ```

2. **Open Website**
   - Double-click the `index.html` file
   - Or open `index.html` with your browser
   - For local development, use a local server:
     ```bash
     python -m http.server 8000
     ```

3. **Deploy to GitHub Pages**
   - Push to GitHub repository
   - Enable GitHub Pages in repository settings
   - Website will be live at `https://yourusername.github.io/ELO_web`

## Website Features

### Main Portfolio Page (`index.html`)
- **Hero Section** - Introduction with name and professional title
- **About Section** - Professional background and skills overview
- **Featured Work** - Showcase of AI & Automation and Advanced Manufacturing projects
- **Contact Section** - EmailJS-powered contact form with social links

### Blog System (`blog.html` + `blog/articles/`)
- **Category Filtering** - Filter articles by AI & Automation, Advanced Manufacturing, Computational Design, My Notes
- **Article Pages** - Full article content with images, comments, and like functionality
- **Navigation** - Seamless navigation between blog and main site

### Interactive Features
- **EmailJS Integration** - Contact form sends emails directly
- **Email Copy Function** - Click to copy email address
- **Like System** - Article likes stored in localStorage
- **Comment System** - Static comments via EmailJS
- **Smooth Animations** - Apple-style hover effects and transitions

## Technical Stack

- **HTML5** - Semantic markup with proper structure
- **CSS3** - Custom properties, Flexbox, Grid, animations
- **JavaScript ES6+** - Modern JavaScript with DOM manipulation
- **EmailJS** - Client-side email service integration
- **Font Awesome** - Icon library for UI elements
- **Google Fonts** - Inter font family for typography

## Configuration

### EmailJS Setup
The contact form uses EmailJS for sending emails. To configure:

1. Create an EmailJS account at [emailjs.com](https://emailjs.com)
2. Set up a service and template
3. Update the configuration in `script.js`:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
   ```

### Blog Content Management
- Add new articles by creating HTML files in `blog/articles/`
- Update `blog.html` to include new article previews
- Use the existing CSS classes for consistent styling

## Responsive Design

The website is optimized for the following devices:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## Technical Specifications

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, animations
- **JavaScript ES6+** - Modern JavaScript features
- **Font Awesome** - Icon library
- **Google Fonts** - Web fonts

## Deployment

### GitHub Pages (Recommended)
1. Push code to GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Website will be live at `https://yourusername.github.io/ELO_web`

### Alternative Platforms
- **Netlify** - Drag and drop deployment
- **Vercel** - Connect GitHub repository for automatic deployment
- **GitHub Pages** - Free hosting with custom domain support

## Current Content

### Portfolio Projects
- **AI & Automation** - Showcasing intelligent workflow design and automation solutions
- **Advanced Manufacturing** - Highlighting CNC, robotics, and 3D printing expertise

### Blog Articles
- **"Notes on My Journey Across Design, Manufacturing, and AI"** (June 21, 2025)
  - Category: My Notes
  - Reflections on working at the intersection of digital manufacturing and architectural design

- **"When Three People's Work for Two Months Shrinks into Two Weeks"** (July 11, 2025)
  - Categories: AI & Automation, Advanced Manufacturing
  - Story of automating CNC workflows using PowerMill API

### Contact Information
- **Email**: esterlohongfen@gmail.com (with click-to-copy functionality)
- **Phone**: +1 (734) 882-8372
- **Location**: Jersey City, NY
- **LinkedIn**: [Ester Hong-Fen Lo](https://www.linkedin.com/in/ester-hong-fen-lo-415263180/)
- **Personal Website**: [www.esterlo.com](https://www.esterlo.com/)

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute it.

---

**Portfolio Website for Ester Lo - Creative Technologist**

Specializing in AI automation, advanced manufacturing, and computational design.
