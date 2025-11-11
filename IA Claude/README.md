# IA Independent Accountants & Advisors Website

## Project Overview

A modern, fully responsive, bilingual (Turkish/English) corporate website for IA Independent Accountants & Advisors, specializing in accounting, tax, payroll, and paralegal services.

## 🎨 Design Features

- **Color Palette:**
  - Primary Blue: #1e4d8b, #2c6bb5
  - Dark Blue: #0f2d52
  - Light Blue: #e8f1f8
  - Accent Orange: #f47820
  - Accent Green: #4caf50

- **Typography:**
  - Headings: Montserrat (Google Fonts)
  - Body: Lato (Google Fonts)

- **Design Principles:**
  - Mobile-first responsive design
  - Clean, modern layout
  - Generous white space
  - Subtle animations and transitions
  - Accessibility-focused (WCAG 2.1 AA compliant)
  - SEO-optimized structure

## 📁 Project Structure

```
ia-website/
├── index.html              # Home page
├── about.html              # About page
├── services.html           # Services overview
├── services-accounting.html
├── services-tax.html
├── services-payroll.html
├── services-legal.html
├── publications.html       # Publications listing
├── publication-detail.html # Individual publication
├── proposal.html           # Request proposal form
├── careers.html            # Careers page
├── contact.html            # Contact page
├── css/
│   └── style.css           # Main stylesheet (1381 lines)
├── js/
│   └── main.js             # Main JavaScript (721 lines)
├── images/
│   ├── logo.png
│   ├── logo-white.png
│   ├── hero-bg.jpg
│   ├── office-team.jpg
│   ├── cta-bg.jpg
│   ├── clients/           # Client logos
│   ├── publications/      # Publication images
│   └── team/              # Team member photos
└── README.md
```

## 🚀 Features Implemented

### 1. Navigation
- Sticky header with scroll effect
- Mobile-responsive hamburger menu
- Dropdown menus for services
- Language switcher (TR/EN)
- Active page indicator

### 2. Home Page Sections
- Hero section with background image and CTA
- Featured services (6 cards)
- Mission & Vision with statistics overlay
- Core values section
- Client testimonials carousel
- Client logos grid
- Featured publications
- CTA section
- Comprehensive footer

### 3. Interactive Features
- Smooth scrolling
- Scroll-to-top button
- WhatsApp float button
- Form validation
- Newsletter subscription
- Search functionality
- Filter functionality
- Lazy loading images
- Counter animations
- Parallax effects
- Modal windows
- Accordion components
- Tooltips

### 4. Bilingual Support
- Turkish (primary) and English
- Language preference saved in localStorage
- Seamless switching without page reload
- Proper localization of dates and numbers

### 5. Forms
- Contact form with validation
- Proposal request form
- Newsletter subscription
- Job application form
- Success/error notifications

### 6. SEO & Accessibility
- Semantic HTML5 structure
- Meta tags for all pages
- Alt text for images
- Proper heading hierarchy (H1-H6)
- ARIA labels
- Keyboard navigation support
- Focus indicators
- Color contrast compliance

### 7. Performance
- Lazy loading images
- Minified CSS (production ready)
- Optimized JavaScript
- Fast page load times
- Mobile-optimized

## 📄 Page Descriptions

### Home Page (index.html)
- Hero section with compelling headline
- 6 featured service cards
- Mission, vision, and values
- Statistics overlay
- Client testimonials
- Client logos
- Latest publications
- CTA section
- Comprehensive footer

### About Page (about.html)
- Company profile and history
- Mission, vision, values
- Leadership team with photos
- Certifications and awards
- Office locations with map
- Client references

### Services Pages
#### Main Services Page (services.html)
- Overview of all services
- Service categories
- Benefits of working with IA
- Case studies

#### Individual Service Pages
- **Accounting** (services-accounting.html)
  - Financial Accounting
  - Management Accounting
- **Tax** (services-tax.html)
  - Corporate Tax
  - VAT
  - International Tax
- **Payroll** (services-payroll.html)
  - Payroll Processing
  - Social Security & Benefits
- **Legal** (services-legal.html)
  - Contract Review
  - Corporate Compliance

### Publications Page (publications.html)
- Grid layout with filters
- Categories: Guides, Articles, Circulars
- Search functionality
- Featured/latest publications
- Individual publication detail pages

### Proposal Page (proposal.html)
- Detailed form for service requests
- Service selection dropdown
- File upload capability
- Sidebar with key benefits

### Careers Page (careers.html)
- Open positions listing
- Job descriptions
- Application form with CV upload
- Company culture section
- Employee benefits

### Contact Page (contact.html)
- Contact form
- Office addresses
- Phone numbers and emails
- Google Maps integration
- WhatsApp quick contact
- Department email addresses

## 🔧 Technical Implementation

### CSS Architecture
- CSS Variables for easy theming
- BEM-inspired naming convention
- Mobile-first media queries
- Flexbox and Grid layouts
- Custom animations
- Print styles

### JavaScript Features
- Vanilla JavaScript (no dependencies)
- ES6+ syntax
- Modular code structure
- Event delegation
- Intersection Observer API
- Local Storage for preferences
- Form validation
- Dynamic content updates

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1200px

## 🌐 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Optimization
- Touch-friendly navigation
- Optimized images for mobile
- Reduced animations on mobile
- Mobile-specific layouts
- Fast load times

## 🔒 Security Features
- Form validation (client-side)
- XSS prevention
- CSRF protection ready
- Secure form submissions (HTTPS required)
- Input sanitization

## 🎯 SEO Features
- Semantic HTML structure
- Meta tags (title, description, keywords)
- Open Graph tags ready
- Twitter Card tags ready
- Structured data ready (Schema.org)
- XML sitemap ready
- Robots.txt ready
- Clean URL structure

## 📊 Analytics Integration
- Google Analytics ready
- Event tracking setup
- Conversion tracking ready
- User behavior tracking

## 🔌 Integration Requirements

### Third-Party Services
1. **Google Maps API**
   - Required for office location maps
   - Add API key in contact.html

2. **Email Service**
   - Configure SMTP for form submissions
   - Or integrate with services like SendGrid, Mailgun

3. **Google Analytics**
   - Add tracking code in all pages

4. **Social Media**
   - Update social media links in footer
   - Add Social Media share buttons

### Content Management
- All text content is in HTML (easy to edit)
- Image paths are clearly defined
- Translation keys in JavaScript

## 🛠️ Setup Instructions

1. **Clone/Download the project**
   ```bash
   cd ia-website
   ```

2. **Add your images**
   - Logo: `/images/logo.png` and `/images/logo-white.png`
   - Hero background: `/images/hero-bg.jpg`
   - Team photos: `/images/office-team.jpg`
   - CTA background: `/images/cta-bg.jpg`
   - Client logos: `/images/clients/`
   - Publication images: `/images/publications/`
   - Team photos: `/images/team/`

3. **Update content**
   - Edit text content in HTML files
   - Update contact information
   - Add actual client logos
   - Add real team member information
   - Update social media links

4. **Configure forms**
   - Set up email service for form submissions
   - Update form action URLs
   - Configure reCAPTCHA (optional)

5. **Add Google Maps**
   - Get Google Maps API key
   - Update map embed code in contact.html

6. **Testing**
   - Test on different devices
   - Validate HTML/CSS
   - Check all links
   - Test forms
   - Check browser compatibility

7. **Deploy**
   - Upload to web server
   - Configure domain (ia.com.tr)
   - Enable HTTPS
   - Test production site

## 🎨 Customization Guide

### Colors
Update CSS variables in `css/style.css`:
```css
:root {
    --primary-blue: #1e4d8b;
    --accent-orange: #f47820;
    /* ... more colors */
}
```

### Fonts
Update Google Fonts link in HTML head:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

### Logo
Replace images:
- `/images/logo.png` (colored version)
- `/images/logo-white.png` (white version for footer)

## 📝 Content Guidelines

### Writing Style
- Professional yet approachable
- Clear and concise
- Benefit-focused
- Action-oriented CTAs
- Localized for Turkish market

### Image Requirements
- High resolution (min 1920px width for hero)
- Optimized for web (compressed)
- Professional photography
- Consistent style across site

### SEO Best Practices
- Unique title for each page (50-60 characters)
- Unique meta description (150-160 characters)
- H1 tag on every page (one per page)
- Proper heading hierarchy
- Alt text for all images
- Internal linking structure

## 🐛 Troubleshooting

### Common Issues

1. **Hamburger menu not working**
   - Check if JavaScript is loaded
   - Check console for errors

2. **Images not loading**
   - Verify image paths
   - Check file names (case-sensitive)

3. **Forms not submitting**
   - Configure backend/email service
   - Check validation rules

4. **Language switcher not working**
   - Clear localStorage
   - Check JavaScript console

## 📞 Support

For questions or support:
- Email: info@ia.com.tr
- Phone: +90 212 XXX XX XX
- Website: https://ia.com.tr

## 📄 License

© 2025 IA Independent Accountants & Advisors. All rights reserved.

## 🔄 Version History

- **v1.0.0** (November 2025) - Initial release
  - Complete bilingual website
  - All core pages implemented
  - Mobile-responsive design
  - SEO-optimized
  - Accessibility features

## 🚀 Future Enhancements

- [ ] Blog with CMS integration
- [ ] Client portal login
- [ ] Online appointment booking
- [ ] Live chat support
- [ ] Multi-language support (add more languages)
- [ ] Dark mode toggle
- [ ] Advanced analytics dashboard
- [ ] Newsletter archive
- [ ] Testimonials video integration
- [ ] Interactive calculators (tax, payroll)

## 👥 Credits

- Design & Development: [Your Company Name]
- Icons: Font Awesome 6.4.0
- Fonts: Google Fonts (Montserrat, Lato)
- Logo: IA Independent Accountants & Advisors

---

**Made with ❤️ for IA Independent Accountants & Advisors**
