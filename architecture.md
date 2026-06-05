# Project Architecture: Huy Portfolio

This document describes the structure, files, components, and functions of the Huy Portfolio project.

## 📂 Directory Structure

```
huy_porfolio/
├── src/
│   ├── app/                    # Next.js App Router Pages
│   │   ├── api/                # API routes
│   │   ├── blog/               # Blog pages
│   │   ├── skills/             # Skills page
│   │   ├── globals.css         # Global Tailwind and custom styles
│   │   ├── layout.tsx          # Root layout with Header/Footer and ThemeProvider
│   │   └── page.tsx            # Home/Portfolio main page
│   ├── components/             # React Components
│   │   ├── ui/                 # Shadcn UI base components (Button, Card, Dialog, etc.)
│   │   ├── aura.tsx            # Background visual effect
│   │   ├── cardProject.tsx     # Featured projects grid/carousel component
│   │   ├── footer.tsx          # Footer component
│   │   ├── form.tsx            # Contact Form component
│   │   ├── glow-provider.tsx   # Tracks mouse movement and updates coordinates for spotlight effects
│   │   ├── header.tsx          # Navigation Header component (without theme toggle)
│   │   ├── information.tsx     # Key-value information display
│   │   ├── project-list.tsx    # Filterable project list
│   │   ├── technology.tsx      # Technology tag with details dialog
│   │   ├── theme-provider.tsx  # Next-Themes provider
│   │   └── timeline.tsx        # Education timeline
│   └── lib/                    # Helper functions and utilities
│       └── blog.ts             # Blog retrieval and markdown processing
│       └── utils.ts            # Tailwind CSS class merging helper
├── architecture.md             # Project architecture (this file)
└── package.json                # Project dependencies and metadata
```

## 🛠️ Main Files and Components Details

### `src/app/page.tsx`
- **Description**: The main entry page of the portfolio, structured using a **Bento Grid Design** with glassmorphism styling (`backdrop-blur`, semi-transparent borders, and shadows).
- **Layout & Sections (Bento Grid)**:
  - `Home/Hero`: Displays Vietnamese and English quotes side-by-side in symmetrical, floating glassmorphic Bento cards.
  - `About`: Configured in a responsive 12-column grid (`grid-cols-1 md:grid-cols-12`) containing:
    - Profile & Info Card (`md:col-span-4 md:row-span-3`)
    - Career Goal Card (`md:col-span-8`)
    - Education Timeline Card (`md:col-span-8`)
    - Skills (Programming `md:col-span-6`, Frameworks `md:col-span-6`, Databases `md:col-span-4`, Tools `md:col-span-8`)
    - Featured Projects Carousel Card (`md:col-span-12`)
  - `Projects`: Shows all projects via `ProjectList` component.
  - `Blog`: Lists recent blog posts in a responsive 2-column Bento Grid of posts.
  - `Contact`: Shows contact form.

### `src/components/project-list.tsx`
- **Description**: Displays the list of projects with a tag-based filter.
- **Layout (Bento Grid)**: Renders projects in a responsive 2-column Bento Grid layout with dark-glass cards. The layout dynamically flows and handles item filtering with smooth transitions.
- **State**:
  - `selectedTag` (string | null): The currently selected filter tag.

### `src/components/form.tsx` (Contact Form)
- **Description**: Contact form card styled to match the main Bento Grid theme.
- **Layout**: Uses a matching dark-glass layout container with subtle hover effects, customized inputs, and responsive styles.

### `src/components/information.tsx`
- **Description**: Renders metadata key-value details inside Bento Cards.
- **Style**: Displays content as clean, flat label stacks (cyan label header, white text body) designed to fit seamlessly inside glassmorphic grids without nested card borders.

### `src/components/technology.tsx`
- **Description**: Lists technologies with custom icons. Clicking a technology opens a dialog showing detailed descriptions.
- **Style**: Renders items as dark glass button chips with light text and border hover effects. Dialog popups are custom-styled with dark backgrounds and cyan headers to match the theme.
- **Constants**:
  - `technologyInfo`: Key-value map of technologies to their descriptions.

### `src/components/cardProject.tsx`
- **Description**: Renders the featured projects list as a carousel.
- **Style**: Every project card is styled as a dark-glass Bento Card with an image cover and a semi-transparent, blurred black footer displaying the project name and a detailed dark button.

### `src/components/timeline.tsx`
- **Description**: Renders education milestones using a customized timeline.
- **Style**: Connectors are colored in cyan, and text is styled in bright white and dimmed white/70 for optimal readability under dark theme.

### `src/components/glow-provider.tsx`
- **Description**: Tracks mouse coordinates `clientX` and `clientY` relative to all `.bento-card` wrappers on the page, dynamically binding `--mouse-x` and `--mouse-y` CSS custom properties.
- **Visuals**: Works in tandem with `src/app/globals.css` where `.bento-card::before` and `.bento-card::after` are styled using radial gradients to create beautiful glassmorphic spotlights and border-glows that track the cursor.

### Background and Theme
- **Theme**: Forced to dark mode. The theme toggle dropdown has been removed.
- **Background**: Styled as a rich dark gradient layered with soft ambient indigo and purple radial glow spots (`bg-warning-gradient` class under `.dark`) to provide visual depth.

