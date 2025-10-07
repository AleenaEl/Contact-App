# Contacts Directory Application

A modern, responsive contacts application built with React and Vite that fetches data from the JSONPlaceholder API. Features beautiful gradients, smooth animations, and a professional design.
## Features

- **Responsive Design**: Adapts seamlessly to desktop and mobile devices.
- **Search Functionality**: Filter contacts by name, phone, email, or company name.
- **Pagination**: Displays 8 contacts per page with simple Previous/Next navigation.
- **Smooth Animations**: Powered by Framer Motion for delightful transitions.
- **Error Handling**: Displays user-friendly error messages with retry options.
- **Loading States**: Shows a loading grid while fetching data.
- **Beautiful UI**: Gradient backgrounds and Lucide icons for a polished look.

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

- **Node.js**: Version 16 or higher.
- **npm** or **yarn**: Package manager for installing dependencies.
- A modern web browser (e.g., Chrome, Firefox, Edge).

## Installation & Setup
Follow these steps to set up and run the application locally:

1. **Clone the repository** (if applicable) or ensure all files are in your project directory
   ```bash
   git clone https://github.com/AleenaEl/Contact-App.git
   cd Contact-App
   
2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Verify Installed Packages**: The application relies on the following key dependencies. They are installed automatically with the above command, but you can ensure they are present:
  
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
