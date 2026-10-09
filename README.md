# Budhiprakash Jat — AI & Data Science Portfolio

> A modern, futuristic, responsive portfolio website built for **Budhiprakash Jat**, Junior AI & Data Scientist based in Jaipur, Rajasthan, India.

---

## 🌟 Highlights & Features

- **Futuristic AI Aesthetic**: Dark cosmic palette with purple, electric blue, and cyan accents, glassmorphism cards, glowing borders, and an interactive neural constellation background canvas.
- **Light / Dark Theme**: Smooth theme switcher with local storage persistence and system preference detection.
- **Hero Section**: Dynamic introduction, engaging tagline, quick status indicator, social links, and clear calls-to-action.
- **Skills Categorization**: Clear breakdown across Programming (Python, Java, SQL), Data Analysis (Pandas, NumPy, Excel), Machine Learning (Scikit-learn, Regression, Classification), Visualization (Matplotlib, Seaborn, Power BI), Web Development (React, JS, HTML, CSS), and Tools (Git, Jupyter, VS Code, Colab). **No fake percentages!**
- **Filterable Projects**: Real-world machine learning and data science projects with category filter tabs (*All*, *Machine Learning*, *Data Analysis*, *NLP & AI*), status badges, and an interactive "View Details" modal.
- **Education & Learning Journey**: Chronological timeline with clearly editable placeholders for degrees, universities, and certifications.
- **Resume Handling**: Instant PDF download support with a transparent guidance modal and a starter PDF located at `public/resume/Budhiprakash_Jat_Resume.pdf`.
- **Contact Form**: Interactive form with real-time field validation, email format checking, spam honeypot trap, loading states, confetti celebration, and direct EmailJS integration.
- **SEO & Accessibility**: Fully accessible semantic HTML, keyboard navigable elements, high-contrast states, and reduced-motion support.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/) + Handcrafted SVG Social Icons
- **Effects & UI**: Modern Vanilla CSS Design System with CSS variables and Glassmorphism, Canvas Confetti
- **Email Delivery**: [@emailjs/browser](https://www.emailjs.com/)

---

## 🚀 Quick Start & Local Development

### 1. Prerequisites
- **Node.js** v18+ (tested on Node v24 LTS)
- **npm** v9+

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
The compiled, production-ready static bundle will be generated inside the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ Configuration Guide

### 1. Personal Details, Skills & Projects
All details are centralized in one file for effortless editing:
👉 **`src/data/portfolioData.js`**

Open this file to customize:
- `personalInfo`: Name, email, title, location, headline, bio paragraphs.
- `social`: Replace the placeholder GitHub & LinkedIn URLs with your actual profile links:
  ```js
  social: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
  }
  ```
- `skillCategories`: Add or edit your technical tools and context descriptions.
- `projectsData`: Add your repositories, live demo URLs, or new data science projects.
- `educationTimeline`: Update your university name, degree title, and graduation year.

### 2. Replacing the Starter Resume PDF
A starter PDF is already included at:
👉 **`public/resume/Budhiprakash_Jat_Resume.pdf`**

To supply your verified resume:
1. Export your finalized resume as a PDF file named `Budhiprakash_Jat_Resume.pdf`.
2. Replace the file at `public/resume/Budhiprakash_Jat_Resume.pdf`.
3. Re-run `npm run build` (or push to GitHub) — all "Download Resume" buttons will now deliver your verified CV automatically!

---

## 📬 Setting Up Email Delivery (EmailJS)

The contact form is pre-configured with **EmailJS**. When credentials are not yet entered, the form runs safely in **Demo Mode** (validating inputs and informing the user).

To activate live email delivery to **`bprakashranwa@gmail.com`**:

1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. In the EmailJS dashboard:
   - Go to **Email Services** → Click **Add New Service** (e.g. Gmail) → Connect your email (`bprakashranwa@gmail.com`) → Copy your **Service ID**.
   - Go to **Email Templates** → Click **Create New Template**.
     - Set the Subject to `New message from {{from_name}}: {{subject}}`.
     - Set the Body to include `{{from_name}}`, `{{from_email}}`, `{{subject}}`, and `{{message}}`.
     - Save and copy your **Template ID**.
   - Go to **Account** → **API Keys** → Copy your **Public Key**.
3. Create a `.env` file in the project root (copied from `.env.example`):
   ```env
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```
4. Restart your dev server (`npm run dev`) or add these variables to your hosting dashboard.

> 🔒 **Security Notice:** `.env` is listed in `.gitignore` and is never committed to Git.

---

## 🌐 Deployment to Netlify & Vercel

### Deploying to Netlify (Recommended)
This repository includes a pre-configured `netlify.toml` file:

#### Option A: Drag & Drop Deploy
1. Run `npm run build`.
2. Go to [app.netlify.com](https://app.netlify.com/).
3. Drag and drop the `dist/` folder onto the Netlify dashboard.

#### Option B: GitHub Git Continuous Deployment
1. Push your repository to GitHub.
2. In Netlify, click **Add new site** → **Import an existing project** → Select your GitHub repo.
3. Build Settings are automatically detected from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Under **Site configuration** → **Environment variables**, add:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
5. Click **Deploy site**.

### Deploying to Vercel
1. Push code to GitHub.
2. In [Vercel](https://vercel.com/), click **Add New...** → **Project** → Import your repo.
3. Framework Preset: **Vite**.
4. Add the same environment variables in the Vercel dashboard.
5. Click **Deploy**.

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg             # Glowing AI neural network favicon
│   ├── resume/
│   │   └── Budhiprakash_Jat_Resume.pdf  # Starter candidate PDF
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Responsive header with mobile drawer
│   │   ├── Footer.jsx           # Site footer & back-to-top
│   │   ├── NeuralBackground.jsx # Subtle interactive AI canvas
│   │   ├── ThemeToggle.jsx      # Sun/Moon dark-light mode switch
│   │   ├── ProjectModal.jsx     # Detailed project breakdown popup
│   │   ├── ResumeModal.jsx      # Resume guide & instructions modal
│   │   ├── SocialIcons.jsx      # High-fidelity SVG icons for GitHub & LinkedIn
│   │   └── Toast.jsx            # Notification toast alerts
│   ├── sections/
│   │   ├── Hero.jsx             # Hero section with AI visual & CTAs
│   │   ├── About.jsx            # Professional narrative & pillars
│   │   ├── Skills.jsx           # Categorized skill cards with filters
│   │   ├── Projects.jsx         # Filterable project cards
│   │   ├── Education.jsx        # Learning timeline with placeholders
│   │   ├── ResumeSection.jsx    # Dedicated resume CTA section
│   │   └── Contact.jsx          # Validated contact form + direct email
│   ├── data/
│   │   └── portfolioData.js     # Single configuration source of truth
│   ├── App.jsx                  # Main application assembly
│   ├── index.css                # Futuristic design system tokens
│   └── main.jsx                 # React root entry point
├── .env.example                 # Environment variables template
├── .gitignore                   # Git ignore protecting secrets
├── netlify.toml                 # Netlify deployment rules & SPA redirects
├── package.json                 # Project dependencies & scripts
├── test-suite.cjs               # Automated verification test suite
└── README.md                    # Documentation
```

---

## 📝 Check-off List for Budhiprakash

Before publishing live, review this quick checklist:
- [ ] Update your GitHub URL in `src/data/portfolioData.js`.
- [ ] Update your LinkedIn URL in `src/data/portfolioData.js`.
- [ ] Place your official resume PDF at `public/resume/Budhiprakash_Jat_Resume.pdf`.
- [ ] Edit your degree, college, and graduation year in `src/data/portfolioData.js`.
- [ ] Configure EmailJS environment variables in `.env` (or hosting dashboard) for real email delivery.
