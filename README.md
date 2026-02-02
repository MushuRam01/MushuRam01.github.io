# Aarush Ram Anandh - Portfolio Website

A minimalist personal portfolio website showcasing yours truly. Built with HTML, CSS, and JavaScript.

## 🚀 Quick Start

### Option 1: GitHub Pages (Recommended)

1. **Create a GitHub repository** named  `yourusername.github.io` with your GitHub username

2. **Upload these files** to your new repository

3. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select the branch (usually `main` or `master`)
   - Click "Save"

4. **Visit your site** at `https://yourusername.github.io`

### Option 2: Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/yourusername.github.io.git
   cd yourusername.github.io
   ```

2. **Open locally:**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (with http-server package)
     npx http-server
     ```

3. **View in browser:**
   - Navigate to `http://localhost:8000`

## 📝 Customization Guide

### 1. Add Your Profile Picture

1. Add your profile image to the root directory
2. Replace the placeholder and name it `profile.jpg`
3. Recommended size: 500x500px or similar square aspect ratio
4. Or use a placeholder service temporarily:
   - https://via.placeholder.com/500x500
   - https://picsum.photos/500/500

### 2. Update Content (Already Personalized)

The website is already customized with:
- ✅ Personal information (Angad Ahuja)
- ✅ Contact details and GitHub link
- ✅ Three professional experiences
- ✅ Four featured projects
- ✅ Complete skills section
- ✅ Recent updates timeline

To make further updates, edit `index.html` sections as needed.

### 3. Customize Colors and Styling

Edit `style.css` to change:

- **Primary color**: Update `#0066cc` and `#004499` (lines 110-111)
- **Background**: Change `#fefefe` on line 11
- **Font**: Modify font-family on line 9
- **Spacing**: Adjust padding and margins throughout

### 4. Optional Features

#### Enable Scroll Progress Bar
Add this to `index.html` right after the opening `<body>` tag:
```html
<div id="scroll-progress" style="position: fixed; top: 0; left: 0; height: 3px; background: #0066cc; z-index: 1000;"></div>
```

#### Enable Dark Mode Toggle
Add this button anywhere in your HTML:
```html
<button onclick="toggleDarkMode()" style="position: fixed; bottom: 20px; right: 20px;">🌙</button>
```

Then add dark mode styles to `style.css`:
```css
.dark-mode {
  background-color: #1a1a1a;
  color: #e0e0e0;
}
```

#### Add JavaScript Enhancements
Uncomment the script tag at the bottom of `index.html`:
```html
<script src="script.js"></script>
```

## 📁 File Structure

```
yourusername.github.io/
├── index.html          # Main HTML file
├── style.css           # Styling and layout
├── script.js           # Optional JavaScript enhancements
├── profile.jpg         # Your profile picture (add this)
└── README.md           # This file
```

## 🎨 Design Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Minimalist Aesthetic**: Clean and professional appearance
- **Tooltip Support**: Hover over certain terms for definitions
- **Smooth Animations**: Subtle transitions and hover effects
- **Print-Friendly**: Optimized for printing as a resume
- **SEO Ready**: Includes meta tags and semantic HTML

## 🔧 Advanced Customization

### Adding New Sections

To add a new section (e.g., "Skills" or "Education"):

```html
<h3>Skills</h3>
<ul class="skills-list">
  <li>JavaScript, Python, Java</li>
  <li>React, Node.js, Django</li>
  <li>Git, Docker, AWS</li>
</ul>
```

### Creating Additional Pages

1. Create a new HTML file (e.g., `projects.html`)
2. Copy the structure from `index.html`
3. Link to it from your main page:
   ```html
   <a href="projects.html">View All Projects</a>
   ```

### Adding a Blog

Consider integrating:
- **Jekyll**: GitHub Pages' native static site generator
- **Hugo**: Fast static site generator
- **Medium**: Link to your Medium profile

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This template is free to use for personal and commercial projects. No attribution required.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. If you create improvements or new features, consider sharing them!

## 📧 Contact

For questions or suggestions about this template, feel free to reach out or open an issue on GitHub.

---

**Built with ❤️ using HTML, CSS, and JavaScript**
