# Spotify Clone Web Music App

This is a **Spotify Clone Web Music App** project consisting of three main parts:
- **Front-end**
- **Back-end**
- **Admin Panel**

Each part is structured with its own dependencies and functionality. Below, you'll find an overview of the file structure, technologies used, and steps to run the app.

---

## File Structure

### Overall Structure
```
spotify-clone/
├── back-end
├── front-end
└── spotify-admin
```

### Back-end File Structure
```
back-end/
├── public/
├── src/
│   ├── config/
│   │   ├── cloudinary.js
│   │   └── mongodb.js
│   ├── controllers/
│   │   ├── albumController.js
│   │   └── songController.js
│   ├── middlewares/
│   │   └── multer.js
│   ├── models/
│   │   ├── albumModel.js
│   │   └── songModel.js
│   ├── routes/
│       ├── albumRoute.js
│       └── songRoute.js
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

### Front-end File Structure
```
front-end/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AlbumItems.jsx
│   │   ├── DisplayAlbum.jsx
│   │   ├── DisplayHome.jsx
│   │   ├── Player.jsx
│   │   ├── Sidebar.jsx
│   │   └── SongItems.jsx
│   ├── context/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── package-lock.json
└── tailwind.config.js
```

### Admin Panel File Structure
```
spotify-admin/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Sidebar.jsx
│   ├── pages/
│       ├── AddAlbum.jsx
│       ├── AddSong.jsx
│       ├── ListAlbum.jsx
│       └── ListSong.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── package-lock.json
└── tailwind.config.js
```

---

## Technologies Used

### Back-end
- **Node.js**
- **Express.js**
- **MongoDB**
- **Cloudinary** (for media uploads)
- **Multer** (for handling file uploads)
- **dotenv** (for environment variables)

#### Back-end Dependencies
```json
{
  "dependencies": {
    "cloudinary": "^2.2.0",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "mongoose": "^8.4.5",
    "multer": "^1.4.5-lts.1",
    "nodemon": "^3.1.4"
  }
}
```

### Front-end
- **React.js**
- **React Router** (for routing)
- **Tailwind CSS** (for styling)
- **Axios** (for API requests)
- **FontAwesome** (for icons)

#### Front-end Dependencies
```json
{
  "dependencies": {
    "@fortawesome/fontawesome-free": "^6.6.0",
    "axios": "^1.7.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.23.1"
  }
}
```

### Admin Panel
- **React.js**
- **React Toastify** (for notifications)
- **React Router**
- **Tailwind CSS**

#### Admin Panel Dependencies
```json
{
  "dependencies": {
    "@tailwindcss/forms": "^0.5.7",
    "axios": "^1.7.2",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.24.1",
    "react-toastify": "^10.0.5"
  }
}
```

---

## Steps to Run the App

### 1. Clone the Repository
```bash
git clone https://github.com/dilrukshitha/Spotify-Clone.git
```

### 2. Navigate to Each Part
```bash
cd spotify-clone/back-end
cd spotify-clone/front-end
cd spotify-clone/spotify-admin
```

### 3. Install Dependencies
Run the following in each directory:
```bash
npm install
```

### 4. Start the Back-end
Navigate to the `back-end` directory and run:
```bash
npm run server
```

### 5. Start the Front-end
Navigate to the `front-end` directory and run:
```bash
npm run dev
```

### 6. Start the Admin Panel
Navigate to the `spotify-admin` directory and run:
```bash
npm run dev
```

---

## Features

### Back-end
- Album and song management.
- MongoDB integration for database operations.
- Cloudinary for media storage.

### Front-end
- Dynamic album and song display.
- Music player integration.

### Admin Panel
- Add and list albums and songs.
- Separate admin controls for managing music content.

---

## License
This project is licensed under the MIT License. Anyone can clone, copy, edit, and use this project. However, please note that the assets in the assets folder, including songs, images, and fonts, do not belong to me. You may need to obtain permission for commercial usage. There are no restrictions on the code itself.
