# Contacts Directory Application

A modern, responsive contacts application built with React and Vite that fetches data from the JSONPlaceholder API. Features beautiful gradients, smooth animations, and a professional design.

## Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icons
- **JSONPlaceholder API** - Mock REST API for contacts data

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (version 16 or higher)
- npm or yarn package manager

## Installation & Setup

1. **Clone the repository** (if applicable) or ensure all files are in your project directory

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Install required packages**
   The application uses the following main dependencies:
   ```bash
   npm install react react-dom vite @vitejs/plugin-react
   npm install tailwindcss @tailwindcss/typography
   npm install motion/react lucide-react
   npm install @radix-ui/react-slot @radix-ui/react-alert-dialog
   npm install class-variance-authority clsx tailwind-merge
   ```

## Running the Application

1. **Start the development server**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

2. **Open your browser** and navigate to `http://localhost:5173`

3. The application will automatically fetch contacts from the JSONPlaceholder API and display them in a beautiful grid layout.



## API Information

This application fetches data from the JSONPlaceholder API:
- **Endpoint**: `https://jsonplaceholder.typicode.com/users`


## Building for Production

To create a production build:

```bash
npm run build
```
or
```bash
yarn build
```

This will generate optimized files in the `dist` directory.



## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).
