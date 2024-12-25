# React Tailwind Vite Kit

A powerful and pre-configured boilerplate for React projects with Tailwind CSS, Vite, NextUI, and Husky. This starter kit is designed to simplify your development workflow and accelerate your projects.

## Features

- **React**: A popular library for building user interfaces.
- **Vite**: Super-fast build tool and dev server.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **NextUI**: Beautiful React components for your UI.
- **Husky**: Manage Git hooks with ease.
- **ESLint & Prettier**: Enforces code quality and formatting.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or later)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/react-tailwind-vite-kit.git
   cd react-tailwind-vite-kit
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up Husky (for Git hooks):
   ```bash
   npm run prepare
   ```

### Development

Run the development server:

```bash
npm run dev
```

### Build for Production

Generate a production build:

```bash
npm run build
```

### Preview Production Build

Preview the production build:

```bash
npm run serve
```

### Linting

Run ESLint:

```bash
npm run lint
```

Fix ESLint issues:

```bash
npm run lint:fix
```

## Project Structure

```
project-tool-ui/
├── src/
│   ├── pages/       # Page-level components
│   ├── App.tsx      # Main App component
│   └── index.tsx    # Entry point
├── public/          # Static files served as-is
├── css/             # Tailwind CSS styles
├── .husky/          # Husky Git hooks
├── .eslintrc.json   # ESLint configuration
├── tailwind.config.js # Tailwind CSS configuration
├── package.json     # Project metadata and scripts
├── vite.config.ts   # Vite configuration
└── README.md        # Project documentation
```

## Built With

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NextUI](https://nextui.org/)
- [Husky](https://typicode.github.io/husky/)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- **Vedat Aydın Uğur**
