# Spotify-Clone

A modern, attractive front-end clone of Spotify, built with React and Tailwind CSS. This project includes dynamic JavaScript operations and aims to replicate the core functionalities of Spotify, including browsing, playing, and managing music.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- Responsive design using Tailwind CSS
- Dynamic playlist and song management
- Play, pause, next, and previous track functionality
- Seek bar for tracking song progress
- Album and song browsing
- Sidebar navigation

## Project Structure

spotify-clone/
├── node_modules/
├── public/
├── src/
│ ├── assets/
│ │ ├── assets.js
│ │ ├── images/
│ ├── components/
│ │ ├── AlbumItems.jsx
│ │ ├── Display.jsx
│ │ ├── DisplayAlbum.jsx
│ │ ├── DisplayHome.jsx
│ │ ├── Navbar.jsx
│ │ ├── Player.jsx
│ │ ├── Sidebar.jsx
│ │ ├── SongItems.jsx
│ ├── context/
│ │ ├── PlayerContext.jsx
│ ├── App.jsx
│ ├── index.css
│ ├── main.jsx
├── .eslint.cjs
├── .gitattributes
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/dilrukshitha/Spotify-Clone.git

   ```

2. Navigate to the project directory
   cd spotify-clone

3. Install dependencies
   npm install

## Usage

Start the development server:
npm start

## Contributing

Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.

## License

Anyone can clone, copy, edit, and use this project. However, please note that the assets in the assets folder, including songs, images, and fonts, do not belong to me. You may need to obtain permission for commercial usage. There are no restrictions on the code itself.

## Commit History

Initial Commit
Message: Initial commit with basic project setup.
Add Sidebar and Navbar Components
Message: Add Sidebar and Navbar components to the project.
Implement Player Component
Message: Implement Player component and integrate it with the track management logic.
Finish All Frontend Functionalities
Message: Finish all frontend functionalities and make the app live with dynamic JavaScript operations.
