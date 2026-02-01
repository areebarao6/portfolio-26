# Areeba Javed - Software Engineer Portfolio

A modern, responsive portfolio website built with React JS, featuring smooth animations, elegant design, and a premium user experience. Showcasing education, experience, certificates, and projects.

## Features

- **Modern Design**: Clean, minimal design with light grey, white, and soft pastel color palette (feminine & tech-focused)
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for elegant page transitions and scroll-based animations
- **Sections**:
  - **Home**: Hero section with Software Engineer title, name (Areeba Javed), and call-to-action buttons
  - **About**: Education (University of Karachi - UBIT, 7th Semester) and Experience timeline
  - **Certificates**: 10 certificate cards from Pearl's University with hover animations
  - **Projects**: Project cards with descriptions and placeholder links
  - **Contact**: Contact details (email, phone, LinkedIn) and contact form

## Tech Stack

- React 18.2.0
- Framer Motion 10.16.4
- React Icons 4.11.0
- Vite 5.0.0

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## Project Structure

```
portfolio-26/
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Projects/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization

### Update Personal Information

1. **Home Section** (`src/components/Home/Home.jsx`):
   - Name: Areeba Javed (already updated)
   - Title: Software Engineer (already updated)
   - Replace placeholder image with your profile photo
   - Update social media links

2. **About Section** (`src/components/About/About.jsx`):
   - Education: University of Karachi (UBIT), 7th Semester, CGPA: 3.5 (already updated)
   - Experience: Dow Ojha Institute internship & CRM Project (already updated)

3. **Certificates Section** (`src/components/Certificates/Certificates.jsx`):
   - 10 certificate cards from Pearl's University (already created)
   - Add your certificate images to the placeholder areas

4. **Projects Section** (`src/components/Projects/Projects.jsx`):
   - Update project links (currently placeholders)
   - Modify project descriptions as needed

5. **Contact Section** (`src/components/Contact/Contact.jsx`):
   - Email: areejaved337@gmail.com (already updated)
   - Phone: 0334-2064438 (already updated)
   - Update LinkedIn profile link
   - Connect form to your backend/email service

### Styling

- Global styles: `src/index.css`
- Component-specific styles: Each component has its own CSS file
- Color palette: Defined in CSS variables in `src/index.css`

## Performance Optimizations

- Code splitting with Vite
- Optimized animations with Framer Motion
- Lazy loading for images (when implemented)
- Minimal dependencies

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

For questions or suggestions, feel free to reach out!

