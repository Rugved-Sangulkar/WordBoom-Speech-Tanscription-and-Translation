# 📝 WordBoom | Real-Time Speech to Text & Translation Web App
This web-based application allows users to convert live speech into text in real time and translate that text into multiple languages. The app uses a Flask backend powered by SpeechRecognition and translation APIs, with a clean frontend built using HTML, CSS, and JavaScript.



## 📌 Project Overview
- Users can speak through their microphone, and the application will transcribe their speech into text live.
- The transcribed text is then translated into a selected language.
- The frontend sends audio or text requests to the backend, which returns transcribed and translated results.
- The aim of this project is to help users convert speech to multilingual text in real-time through a simple and accessible web interface.



## 🎯 Features
- Real-time speech-to-text conversion using microphone input.
- Automatic translation of transcribed text to a selected language.
- Displays both original and translated text on the screen.
- Simple, responsive user interface.
- Flask backend + JavaScript frontend interaction using fetch or AJAX.



## 🛠️ Technologies Used
- HTML – Structure and layout of the web interface
- CSS – Styling and responsiveness
- JavaScript – Frontend logic for capturing input and sending requests
- Flask (Python) – Backend server for handling speech and translation
- SpeechRecognition (Google Web Speech API) – Speech to text conversion
- googletrans API – Language translation



## 💡 How to Run
- Clone or download this repository.
- Install the required Python packages:
```
pip install flask SpeechRecognition googletrans
```
- Run the Flask backend:
```
python app.py
```
- Open the index.html in your browser (or access via Flask route).
- Speak into the mic and see real-time transcription and translation!



## 🚀 Future Enhancements
- Ability to download transcripts as text files.
- Support for multiple users or chatrooms.
- Save transcription history in database.
- Option to choose between multiple speech recognition engines (like Whisper, Azure, etc.)
- Subtitles download or automatic caption generation for videos.
 
🧑‍💻 Contributors
- Rugved C Sangulkar
- Ishwar Mullur
- Keerti Nandi
- Krutika Kanchani
- Apeksha
