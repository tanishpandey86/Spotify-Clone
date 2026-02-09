# 🎵 Spotify Clone

A simplified web-based music player inspired by Spotify, built using vanilla HTML, CSS, and JavaScript. This project demonstrates core frontend web development concepts including DOM manipulation, audio playback controls, and responsive design.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Data Flow Architecture](#data-flow-architecture)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [File Descriptions](#file-descriptions)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- 🎧 Play/Pause music functionality
- ⏭️ Next/Previous track navigation
- 📊 Progress bar with seek functionality
- 🔊 Volume control
- 📱 Responsive design
- 🎨 Spotify-inspired UI/UX
- 📝 Song information display (title, artist, album art)
- ⏱️ Current time and duration display

## 📁 Project Structure

```
Spotify-Clone/
│
├── index.html          # Main HTML structure
├── style.css           # Primary stylesheet
├── utility.css         # Utility classes and helper styles
├── script.js           # JavaScript logic for player functionality
│
├── img/                # Images folder
│   └── [album covers, icons, backgrounds]
│
├── songs/              # Audio files folder
│   └── [.mp3 audio files]
│
└── song1/              # Additional audio files
    └── [.mp3 audio files]
```

## 🔄 Data Flow Architecture

### 1. **Application Initialization**
```
User Opens Browser
        ↓
  index.html Loads
        ↓
  CSS Files Applied (style.css, utility.css)
        ↓
  script.js Executes
        ↓
  Audio Player Initialized
        ↓
  Song List Loaded into Memory
```

### 2. **User Interaction Flow**

#### **Play/Pause Flow**
```
User Clicks Play Button
        ↓
Event Listener Triggered (script.js)
        ↓
Check Current State (Playing/Paused)
        ↓
Update Audio Element State
        ↓
Update UI (Play/Pause Icon)
        ↓
Start/Stop Progress Bar Animation
```

#### **Track Navigation Flow**
```
User Clicks Next/Previous Button
        ↓
Event Listener Triggered
        ↓
Get Current Song Index
        ↓
Calculate Next/Previous Index
        ↓
Load New Audio Source
        ↓
Update Song Information (Title, Artist, Cover)
        ↓
Reset Progress Bar
        ↓
Auto-play New Track (if enabled)
```

#### **Seek/Progress Bar Flow**
```
User Clicks on Progress Bar
        ↓
Calculate Click Position (%)
        ↓
Convert to Time (seconds)
        ↓
Update Audio Element currentTime
        ↓
Update Progress Bar Visual
        ↓
Update Time Display
```

#### **Volume Control Flow**
```
User Adjusts Volume Slider
        ↓
Get Slider Value (0-1)
        ↓
Update Audio Element volume Property
        ↓
Update Volume Icon (Muted/Low/High)
```

### 3. **Data Management**

#### **Song Data Structure**
```javascript
// Typical song object structure
const songs = [
  {
    id: 1,
    songName: "Song Title",
    filePath: "songs/song1.mp3",
    coverPath: "img/cover1.jpg",
    artist: "Artist Name"
  },
  // ... more songs
];
```

#### **State Management**
```javascript
// Application state variables
let songIndex = 0;           // Current song index
let audioElement = new Audio(); // HTML5 Audio object
let masterPlay = document.getElementById('masterPlay'); // Play/Pause button
let progressBar = document.getElementById('progressBar'); // Progress bar element
let currentTime = 0;         // Current playback time
let duration = 0;            // Total song duration
```

### 4. **Component Interaction Diagram**

```
┌─────────────────┐
│   index.html    │
│  (UI Structure) │
└────────┬────────┘
         │
         ├──────────────┬──────────────┐
         │              │              │
┌────────▼────────┐ ┌──▼──────┐ ┌────▼─────────┐
│   style.css     │ │utility.css│ │  script.js   │
│  (Styling)      │ │ (Helpers) │ │   (Logic)    │
└─────────────────┘ └───────────┘ └──────┬───────┘
                                          │
                                          │
                    ┌─────────────────────┼─────────────────────┐
                    │                     │                     │
            ┌───────▼────────┐   ┌────────▼────────┐   ┌───────▼──────┐
            │  Audio Element │   │   Song Array    │   │ DOM Elements │
            │   (Playback)   │   │  (Data Store)   │   │  (UI Update) │
            └────────────────┘   └─────────────────┘   └──────────────┘
                    │                     │                     │
                    └─────────────────────┴─────────────────────┘
                                          │
                                  ┌───────▼────────┐
                                  │   img/ folder  │
                                  │  songs/ folder │
                                  │  song1/ folder │
                                  └────────────────┘
```

## 🛠️ Technologies Used

- **HTML5**: Structure and semantic markup, Audio API
- **CSS3**: Styling, animations, and responsive design
- **JavaScript (ES6+)**: DOM manipulation, event handling, audio control
- **Font Awesome** (optional): Icons for player controls

## 📋 Prerequisites

Before running this project, ensure you have:

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor or IDE (VS Code, Sublime Text, Atom)
- Basic understanding of HTML, CSS, and JavaScript
- (Optional) A local web server like Live Server extension for VS Code

## 🚀 Installation & Setup

### Method 1: Using Git Clone

1. **Clone the repository**
   ```bash
   git clone https://github.com/tanishpandey86/Spotify-Clone.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd Spotify-Clone
   ```

3. **Open the project**
   - Open `index.html` directly in your browser, or
   - Use a local development server (recommended)

### Method 2: Download ZIP

1. Download the repository as a ZIP file from GitHub
2. Extract the ZIP file to your desired location
3. Open the extracted folder

### Method 3: Using Live Server (Recommended)

1. **Install VS Code** (if not already installed)
   - Download from [https://code.visualstudio.com/](https://code.visualstudio.com/)

2. **Install Live Server Extension**
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
   - Search for "Live Server"
   - Click Install

3. **Clone or Download the Project**
   ```bash
   git clone https://github.com/tanishpandey86/Spotify-Clone.git
   cd Spotify-Clone
   ```

4. **Open with VS Code**
   ```bash
   code .
   ```

5. **Start Live Server**
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Your default browser will open at `http://127.0.0.1:5500`

## 💻 Usage

1. **Starting the Application**
   - Open `index.html` in your web browser
   - The player interface will load with the first song

2. **Playing Music**
   - Click the **Play** button to start playback
   - Click **Pause** to stop playback

3. **Navigating Songs**
   - Use **Next** button to skip to the next track
   - Use **Previous** button to go back to the previous track

4. **Seeking**
   - Click anywhere on the progress bar to jump to that position in the song

5. **Volume Control**
   - Adjust the volume slider to increase or decrease volume
   - Click the volume icon to mute/unmute

## 📄 File Descriptions

### `index.html`
- Main HTML file containing the structure of the music player
- Defines the player interface, controls, and song display areas
- Links to CSS and JavaScript files

### `style.css`
- Primary stylesheet for the application
- Contains styles for the player interface, layout, and animations
- Implements responsive design for different screen sizes

### `utility.css`
- Contains utility classes for common styling patterns
- Helper classes for spacing, colors, and reusable components
- Improves code maintainability and reduces CSS repetition

### `script.js`
- Core JavaScript logic for the application
- Handles all user interactions and audio playback
- Manages song data and player state
- Key functions include:
  - Song initialization
  - Play/Pause toggle
  - Track navigation
  - Progress bar updates
  - Volume control
  - Time formatting

### `img/` Folder
- Stores album cover images
- Contains UI icons and background images
- Supports various image formats (JPG, PNG, SVG)

### `songs/` & `song1/` Folders
- Store audio files in MP3 format
- Organized by song or album
- Loaded dynamically by JavaScript

## 🔧 Customization

### Adding New Songs

1. **Add audio file** to `songs/` folder
2. **Add cover image** to `img/` folder
3. **Update `script.js`** song array:
   ```javascript
   const songs = [
     // ... existing songs
     {
       id: newId,
       songName: "Your Song Name",
       filePath: "songs/your-song.mp3",
       coverPath: "img/your-cover.jpg",
       artist: "Artist Name"
     }
   ];
   ```

### Styling Changes

- Modify `style.css` for visual changes
- Update colors, fonts, and layouts to match your preference
- Use `utility.css` for adding new utility classes

## 🌟 Future Enhancements

- [ ] Add playlist creation functionality
- [ ] Implement shuffle and repeat modes
- [ ] Add search functionality for songs
- [ ] Include lyrics display
- [ ] Add user authentication
- [ ] Integrate with Spotify API for real music streaming
- [ ] Add favorite/like functionality
- [ ] Implement local storage for user preferences
- [ ] Add keyboard shortcuts
- [ ] Create mobile app version

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Tanish Pandey**
- GitHub: [@tanishpandey86](https://github.com/tanishpandey86)

## 🙏 Acknowledgments

- Spotify for design inspiration
- Font Awesome for icons
- All contributors and supporters of this project

---

**Note**: This is a frontend clone project for educational purposes only. It does not stream music from Spotify's servers and does not use Spotify's API. All audio files must be provided locally.

For questions or support, please open an issue in the GitHub repository.
