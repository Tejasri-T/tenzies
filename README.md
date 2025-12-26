# 🎲 Tenzies Game (React)

A simple and fun **Tenzies** game built using **React**. The goal is to roll the dice until all dice show the same number. Players can hold dice to prevent them from re-rolling.

This version includes an **extra feature**: it tracks and displays the **number of rolls** taken to win the game.

---

## 🚀 Features

* Roll 10 dice
* Click on a die to **hold** its value
* Re-roll only the unheld dice
* Win when all dice have the **same value** and are **held**
* 🎯 **Roll counter** to track how many rolls were needed
* Clean and responsive UI

---

## 🛠️ Built With

* **React** (Hooks: `useState`, `useEffect`)
* JavaScript (ES6)
* CSS

---

## 📦 Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/tenzies-react.git
   ```

2. Navigate to the project folder:

   ```bash
   cd tenzies-react
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and go to:

   ```
   http://localhost:3000
   ```

---

## 🎮 How to Play

1. Click **Roll** to roll all dice
2. Click on a die to **hold** it
3. Keep rolling until:

   * All dice have the **same number**
   * All dice are **held**
4. The game ends and displays:

   * 🎉 Win message
   * 🔢 Total number of rolls used
5. Click **New Game** to play again

---

## 🔢 Roll Counter Feature

* The roll counter increments **each time the Roll button is clicked**
* The counter resets when a **new game** starts
* Helps players:

  * Measure performance
  * Try to beat their previous score

---

## 📁 Project Structure

```
src/
│── components/
│   ├── Die.jsx
│   ├── App.jsx
│── index.html
│── index.jsx
│── index.css
```

---

## ✨ Future Improvements

* Multi-Player game 
* Winner based best roll count (high score)
* Timer-based scoring
* Animations for dice roll
* Mobile-first UI enhancements

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

Happy coding & rolling 🎲
