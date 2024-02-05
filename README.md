# Blog-BGD APP

# Frontend
# React + Vite

-  This template provides a setup to get React working in Vite with HMR and some ESLint rules.

-  It is a Blog Bgd app that gives you the blogs and CRUD application over it

## Table of Contents

- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)
- [Build and Deployment](#build-and-deployment)
- [Additional Information](#additional-information)


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mobs/blog-bgd.git

2. Navigate to the folder
   cd client

3. Run this command to install the dependencies
   npm install

4. Run this command to see the code (http://localhost:5173)
   npm run dev

## Folder Structure

client/
src/                # Source code
  |- components/    # React components
  |- constants/      # Constant Data and Images
  |- ...
public/             # Public assets
  |- ...
index.html          # Entry point (HTML Template)
package.json        # Dependencies and Scripts
...

## Scripts

1.  npm run dev: Start the development server.
2.  npm run build: Build the project for production.
3.  npm run preview: Preview the production build.
4.  npm run lint: Run ESLint to lint your code.


## Additional Information

1.  Used Tailwind CSS for styling
2.  Used Vite for faster build time, seamless integration and ease of use
3.  Used Fakerjs to generate fake GST data

# Backend 

## Folder Structure

server/
src/                 # Source code
  |- controllers/    # Route controllers
  |- routes/         # Routes defination 
  |- app.js          # Express app
  |- index.js        # Entry point of server
  |- ...
public/             # Public assets
  |- ...
package.json        # Dependencies and Scripts
...


## Scripts

1.  npm run dev: Start the development server.
2.  npm run build: Build the project for production.
3.  npm run start: Start the production server