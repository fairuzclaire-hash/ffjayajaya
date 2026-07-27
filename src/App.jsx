import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti'
import './App.css'

// Google Drive links untuk semua media files
const MEDIA_URLS = {
  // Images
  'avatar.png': 'https://drive.google.com/uc?export=download&id=1Zx6b5OcJ0-v2k9KgtYyjqIJyRU6tvxjE',
  'bucket-bunga.png': 'https://drive.google.com/uc?export=download&id=12kYwN-ond6GQFFqjma5F0yLQqY70LvC7',
  'gallery4.jpg': 'https://drive.google.com/uc?export=download&id=1_Hp97V5L3hTZAatmVSr0emG4UWKY6N-T',
  'gallery5.jpeg': 'https://drive.google.com/uc?export=download&id=1yMrHoR40kHD0O-ggNdb9QheGMurdHZ4f',
  'gallery6.jpeg': 'https://drive.google.com/uc?export=download&id=1ljVkYBVwcpSQBuo2k7Gvv4pD6Ym3czJB',
  
  // Videos
  'gallery1.mp4': 'https://drive.google.com/uc?export=download&id=1Aypft7JOg_6x3Os0ycToXQxLTHSUemgc',
  'gallery2.mp4': 'https://drive.google.com/uc?export=download&id=18KrHiDbg4Rk0XLF9u38Qze2FTukVglct',
  'gallery3.mp4': 'https://drive.google.com/uc?export=download&id=1BX614rhy48aXo8WVXVcuyjdHzpEAiHER',
  'video-final.mp4': 'https://drive.google.com/uc?export=download&id=1Ke40cnQz2gO1zK2I7gvPRcbuleZolHCt',
  
  // Audio
  "Arash Buana - i've always loved u (MV).mp3": 'https://drive.google.com/uc?export=download&id=1BfIH5Q-LKIzXsLlO7wIecIUU5K_7Si-L',
  'Dendi Nata - Abadi (Indo Version) Lyric Video.mp3': 'https://drive.google.com/uc?export=download&id=1l-6DY6YQ9oMX0OEXWDGkknOFFGS1Zdny',
  "I'd like to watch you sleeping  lirik dan musik oleh Sal Priadi.mp3": 'https://drive.google.com/uc?export=download&id=1lu4zVScJC1ZTsU2RnRGWoEbQLC1Ey8db',
  'Joon - with ease (Official Lyric Video).mp3': 'https://drive.google.com/uc?export=download&id=1MSXXXADcrAMRUvWVA7x8wvPAwCYKZuZo',
  'Yovie & Nuno - Manusia Biasa.mp3': 'https://drive.google.com/uc?export=download&id=1CaS-cbE-qSy_2Z0nKXvaCZ38sSAcl5H8',
  'Yovie & Nuno - Sampai Akhir Waktu.mp3': 'https://drive.google.com/uc?export=download&id=112ZfyZzZWPWJzDtvEN7fnWsq-muKpYPU'
}

// Helper untuk get media dari Google Drive atau fallback ke local
const getPublicAsset = (path) => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Return Google Drive URL jika ada, kalau ga ada fallback ke local
  return MEDIA_URLS[cleanPath] || `${window.location.origin}/${cleanPath}`;
}

// Hero Section
function Hero({ onBucketClick, onMessageClick }) {
  return (
    <div className="hero-section">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1 
          className="hero-title"
          whileHover={{ 
            scale: 1.15,
            rotate: [0, -5, 5, -5, 5, 0],
            textShadow: "0 0 50px rgba(240, 147, 251, 0.8)"
          }}
          whileTap={{ scale: 0.9, rotate: -10 }}
          animate={{
            y: [0, -15, 0, -10, 0],
            rotate: [0, 2, -2, 1, 0],
            textShadow: [
              "0 10px 30px rgba(240, 147, 251, 0.3)",
              "0 15px 40px rgba(245, 87, 108, 0.5)",
              "0 10px 30px rgba(255, 215, 0, 0.4)",
              "0 15px 40px rgba(240, 147, 251, 0.5)",
              "0 10px 30px rgba(240, 147, 251, 0.3)"
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Happy Birthday Cahya
        </motion.h1>
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="hero-subtitle"
      >
        Selamat ulang tahun! Cahyaaaa yg pinterrr baikk cantikk🎉
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="hero-buttons"
      >
        <div className="hero-buttons-row">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button"
            onClick={onBucketClick}
          >
            💐 Anggep aja...
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button secondary"
            onClick={onMessageClick}
          >
            💌 Baca Pesan
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

// IQ Quiz Game Component
function IQQuizGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)

  const questions = [
    {
      question: "Jika semua kucing adalah hewan, dan beberapa hewan adalah peliharaan, maka...",
      options: [
        "Semua kucing adalah peliharaan",
        "Beberapa kucing mungkin peliharaan",
        "Tidak ada kucing yang peliharaan",
        "Semua peliharaan adalah kucing"
      ],
      correct: 1
    },
    {
      question: "2, 4, 8, 16, 32, ... Angka selanjutnya adalah?",
      options: ["48", "64", "52", "60"],
      correct: 1
    },
    {
      question: "Jika A = 1, B = 2, C = 3, maka CAB = ?",
      options: ["312", "321", "123", "213"],
      correct: 0
    },
    {
      question: "Manakah yang berbeda? Apel, Pisang, Mobil, Jeruk",
      options: ["Apel", "Pisang", "Mobil", "Jeruk"],
      correct: 2
    },
    {
      question: "Berapakah hasil dari integral berikut?\n\n∫₀^∞ (e^(-x²)) / (x³ + 2x² + x - ln(x)) dx",
      options: ["π/4", "e²/3", "0", "∞"],
      correct: 3,
      explanation: true
    }
  ]

  const handleAnswer = (index) => {
    if (isAnswered) return
    
    setSelectedAnswer(index)
    setIsAnswered(true)
    
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1)
      
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1)
          setSelectedAnswer(null)
          setIsAnswered(false)
        } else {
          setShowResult(true)
        }
      }, 1500)
    } else {
      if (currentQuestion === questions.length - 1) {
        // Wait for explanation
      } else {
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1)
          setSelectedAnswer(null)
          setIsAnswered(false)
        }, 1500)
      }
    }
  }

  const showExplanationModal = () => {
    setShowExplanation(true)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
    setSelectedAnswer(null)
    setIsAnswered(false)
    setShowExplanation(false)
  }

  if (showExplanation) {
    return (
      <div className="sub-game-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="quiz-explanation"
        >
          <h2 className="section-title">Kenapa ya Unlimited?</h2>
          <div className="explanation-content">
            <p>
Karena meskipun fungsi eksponensial membuat nilai fungsi semakin kecil saat x menuju tak hingga, perilaku fungsi di sekitar x = 0 ngebuat si integral ini nggaa memiliki nilai yang terbatas. jadii ituu kenapaa integral tersebut <b>divergen</b>, atau bisa dibilang hasilnya <b>unlimited</b>.
</p>
            <p style={{ fontSize: '2rem', margin: '2rem 0', fontWeight: 'bold' }}>
              Sama kayakk rasaa sayang aku ke kamu ga sihhh😭😭
            </p>
            <p style={{ fontSize: '1.5rem', lineHeight: '2' }}>
              Unlimited😋
            </p>
            <p style={{ fontSize: '1.3rem', marginTop: '2rem', fontStyle: 'italic', opacity: 0.9 }}>
              Happy birthday YAAA!
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetQuiz}
            className="game-reset-btn"
            style={{ marginTop: '2rem' }}
          >
            🔄 Main Lagi
          </motion.button>
        </motion.div>
      </div>
    )
  }

  if (showResult) {
    return (
      <div className="sub-game-container">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="section-title"
        >
          Quiz duluu
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="quiz-result"
        >
          <h3>Skor Kamu: {score}/{questions.length}</h3>
          <p className="quiz-feedback">
            {score === questions.length && "Padahal kalo salah ada kejutan loh.."}
            {score === questions.length - 1 && "Yeay"}
            {score >= 3 && score < questions.length - 1 && "Dikittt lagiiii"}
            {score < 3 && "Pinternyaaa"}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetQuiz}
            className="game-reset-btn"
          >
            🔄 Main Lagi
          </motion.button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="sub-game-container">
      <div className="quiz-progress">
        <p>Pertanyaan {currentQuestion + 1}/{questions.length}</p>
        <div className="quiz-progress-bar">
          <motion.div
            className="quiz-progress-fill"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="quiz-question-card"
      >
        <h3 className="quiz-question" style={{ whiteSpace: 'pre-line' }}>
          {questions[currentQuestion].question}
        </h3>
        
        <div className="quiz-options">
          {questions[currentQuestion].options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: isAnswered ? 1 : 1.02 }}
              whileTap={{ scale: isAnswered ? 1 : 0.98 }}
              onClick={() => handleAnswer(index)}
              className={`quiz-option ${
                isAnswered && index === questions[currentQuestion].correct
                  ? 'correct'
                  : isAnswered && index === selectedAnswer
                  ? 'wrong'
                  : ''
              }`}
              disabled={isAnswered}
            >
              {option}
            </motion.button>
          ))}
        </div>

        {isAnswered && 
         selectedAnswer !== questions[currentQuestion].correct && 
         currentQuestion === questions.length - 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ marginTop: '2rem', textAlign: 'center' }}
          >
            <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
              Jawabannya adalah <strong>∞ (Unlimited)</strong>
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={showExplanationModal}
              className="explanation-btn"
            >
              💝 Cari Tau?
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

// Dodge Game Component
function DodgeGame() {
  const [gameStarted, setGameStarted] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [playerPos, setPlayerPos] = useState(50)
  const [obstacles, setObstacles] = useState([])
  const [difficulty, setDifficulty] = useState(1500)
  const gameRef = useRef(null)
  const animationRef = useRef(null)
  const touchStartX = useRef(null)

  const obstacleEmojis = ['🌰', '💣', '⚡', '🔥', '☄️', '🗡️']

  useEffect(() => {
    if (gameStarted && !gameOver) {
      const handleKeyPress = (e) => {
        if (e.key === 'ArrowLeft') {
          setPlayerPos((prev) => Math.max(10, prev - 10))
        } else if (e.key === 'ArrowRight') {
          setPlayerPos((prev) => Math.min(90, prev + 10))
        }
      }

      const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX
      }

      const handleTouchMove = (e) => {
        if (touchStartX.current === null) return
        
        const touchCurrentX = e.touches[0].clientX
        const diff = touchCurrentX - touchStartX.current
        
        if (Math.abs(diff) > 10) {
          if (diff < 0) {
            setPlayerPos((prev) => Math.max(10, prev - 5))
          } else {
            setPlayerPos((prev) => Math.min(90, prev + 5))
          }
          touchStartX.current = touchCurrentX
        }
      }

      const handleTouchEnd = () => {
        touchStartX.current = null
      }

      window.addEventListener('keydown', handleKeyPress)
      window.addEventListener('touchstart', handleTouchStart)
      window.addEventListener('touchmove', handleTouchMove)
      window.addEventListener('touchend', handleTouchEnd)
      
      const difficultyInterval = setInterval(() => {
        setDifficulty((prev) => Math.max(300, prev - 150))
      }, 8000)

      const obstacleInterval = setInterval(() => {
        const spawnCount = difficulty <= 600 ? 3 : difficulty <= 1000 ? 2 : 1

        const newObstacles = Array.from({ length: spawnCount }, (_, i) => ({
          id: `${Date.now()}-${i}-${Math.random().toString(36).slice(2, 7)}`,
          x: Math.random() * 80 + 10,
          y: i * 15,
          emoji: obstacleEmojis[Math.floor(Math.random() * obstacleEmojis.length)]
        }))
        setObstacles((prev) => [...prev, ...newObstacles])
      }, difficulty)

      const gameLoop = () => {
        setObstacles((prev) => {
          const updated = prev
            .map((obs) => ({ ...obs, y: obs.y + 2 }))
            .filter((obs) => obs.y < 100)

          updated.forEach((obs) => {
            if (
              obs.y > 85 &&
              obs.y < 95 &&
              Math.abs(obs.x - playerPos) < 8
            ) {
              setGameOver(true)
            }
          })

          return updated
        })

        setScore((prev) => prev + 1)
        animationRef.current = requestAnimationFrame(gameLoop)
      }

      animationRef.current = requestAnimationFrame(gameLoop)

      return () => {
        window.removeEventListener('keydown', handleKeyPress)
        window.removeEventListener('touchstart', handleTouchStart)
        window.removeEventListener('touchmove', handleTouchMove)
        window.removeEventListener('touchend', handleTouchEnd)
        clearInterval(obstacleInterval)
        clearInterval(difficultyInterval)
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
      }
    }
  }, [gameStarted, gameOver, playerPos, difficulty])

  const startGame = () => {
    setGameStarted(true)
    setGameOver(false)
    setScore(0)
    setPlayerPos(50)
    setObstacles([])
    setDifficulty(1500)
  }

  const resetGame = () => {
    setGameStarted(false)
    setGameOver(false)
    setScore(0)
    setPlayerPos(50)
    setObstacles([])
    setDifficulty(1500)
  }

  return (
    <div className="sub-game-container">
      {!gameStarted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="game-start-screen"
        >
          <p className="game-instructions">
            💻 Desktop: Gunakan ← → (panah kiri/kanan)<br/>
            📱 Mobile: Swipe/geser layar kiri/kanan<br/><br/>
            Hindari benda yg berbahaya<br/>
            Makin lama makin gampang
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startGame}
            className="game-start-btn"
          >
            Mulai Game
          </motion.button>
        </motion.div>
      ) : (
        <>
          <div className="dodge-score">Skor: {Math.floor(score / 10)}</div>
          
          <div className="dodge-game-area" ref={gameRef}>
            <motion.div
              className="dodge-player"
              animate={{ left: `${playerPos}%` }}
              transition={{ duration: 0.1 }}
            >
              <img 
                src={getPublicAsset('avatar.png')} 
                alt="avatar" 
                className="player-avatar" 
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </motion.div>

            {/* Obstacles */}
            {obstacles.map((obs) => (
              <motion.div
                key={obs.id}
                className="dodge-obstacle"
                style={{
                  left: `${obs.x}%`,
                  top: `${obs.y}%`
                }}
              >
                {obs.emoji}
              </motion.div>
            ))}

            {gameOver && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="dodge-game-over"
              >
                <h3>Game Over!</h3>
                <p>Skor Akhir: {Math.floor(score / 10)}</p>
                <p style={{ fontSize: '1rem', opacity: 0.8, marginTop: '1rem' }}>
                  {Math.floor(score / 10) > 50 && " Noob 😭"}
                  {Math.floor(score / 10) > 30 && Math.floor(score / 10) <= 50 && "👏 Bagus aja deh"}
                  {Math.floor(score / 10) <= 30 && "HAHAHA"}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetGame}
                  className="game-reset-btn"
                >
                  🔄 Main Lagi
                </motion.button>
              </motion.div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

// Floating Hearts Background
function FloatingHearts() {
  return (
    <div className="floating-hearts-bg">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="floating-heart"
          initial={{ y: '100vh', x: Math.random() * window.innerWidth }}
          animate={{
            y: '-100vh',
            x: Math.random() * window.innerWidth
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
        >
          {['💖', '💝', '💗', '💕', '💓'][Math.floor(Math.random() * 5)]}
        </motion.div>
      ))}
    </div>
  )
}

// Bucket Bunga Modal
function BucketModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, rotate: 180 }}
        transition={{ type: "spring", duration: 0.8 }}
        className="modal-content bucket-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="bucket-container"
        >
          <div className="bucket-glow"></div>
          <img 
            src={getPublicAsset('bucket-bunga.png')} 
            alt="Bucket Bunga" 
            className="bucket-image"
          />
          <div className="petals-container">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="petal"
                initial={{ y: -100, x: Math.random() * 400 - 200, opacity: 1 }}
                animate={{
                  y: 600,
                  x: Math.random() * 400 - 200 + Math.sin(i) * 50,
                  rotate: Math.random() * 360,
                  opacity: 0
                }}
                transition={{
                  duration: Math.random() * 3 + 3,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              >
                🌸
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bucket-title"
        >
          💐One day💐
        </motion.h2>
      </motion.div>
    </motion.div>
  )
}

// Message Modal
function MessageModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="modal-content message-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <h2 className="modal-title">💌 Pesan 💌</h2>
        
        <div className="message-text">
          <p>Happy birthday cahyaaa. 🤍</p>
          <p>
            Semoga di umur kamu yang sekarang inii semuaa hal baik dateng ke hidup kamuu. 
            Semogaa kamu selaluu sehat, panjang umur, bahagiaa terus, dan semua doa yang 
            selama inii kamu simpen bisaa pelan pelann dikabulin sama Tuhan.
          </p>
          <p>
            Akuu jugaa berdoaa semogaa pendidikan kamu lancarr terus yaaa. Semogaa semua 
            tugas, ujian, dan semua hal yang lagii kamu perjuangin dipermudah. Akuu percayaa 
            kokk kamu pasti bisaa ngelewatin semuanya.
          </p>
          <p>
            Mungkin emang bakal ada hari hari yang capek, yang bikin pengen nyerah, yang 
            bikin overthinking... tapi akuu harapp kamu jangan berhenti yaaa. Pelan pelann 
            gapapaa, yang penting kamu terus jalan. Akuu percayaa bangett sama kamuu.
          </p>
          <p>
            Akuu harapp kamuu jangan terlalu keras sama diri sendiri yaaa. Gak harus selalu 
            sempurna kok. Kalo lagii cape yaa istirahatt duluu, kalo lagii sedih gapapaa, 
            jangan di pendem semuanya sendiri yaaa. Kamu jugaa manusiaa yang boleh capek 
            dan boleh ngerasain semuanya.
          </p>
          <p>
            Akuu harapp kamu bisaa lewatin semua iniii. Akuu percayaa kamuu bisaaa. 
            Semangatt yaaa. 🤍
          </p>
          <p>
            Kalo adaa hari buruk, kalo lagii ngerasa semuanya berat, kalo lagii ngerasa 
            sendirian... akuu harapp kamu jangan dipendem sendiri yaaa. Kalo emang suatu 
            saat kamu butuh ceritaa, cerita ajaa ke akuu yaaa. Gak semua masalah harus 
            kamu hadapin sendirian kok.
          </p>
          <p>
            Akuu pengenn banget kamu bahagiaa. Benerann. Akuu pengenn suatu hari nanti 
            bisaa liat kamu senyum karena semua impian yang selama inii kamu perjuangin 
            akhirnya tercapai. Akuu yakinn hari ituu bakal dateng.
          </p>
          <p>
            Jangan pernah ngeraguin diri sendiri yaaa. Kamu mungkin belum sadar, tapi 
            menurutkuu kamu punyaa kemampuan yang besar. Jadii tolongg percaya sama diri 
            kamu sendiri yaaa. Karenaa akuu percayaa kamuu bisaa jadi orang yang hebat 
            nantinyaa.
          </p>
          <p>
            Pokoknyaa akuu bakal selalu dukung kamuu yaaa. Mau kamu lagii ada di fase 
            apa pun, lagii ngejar mimpi apa pun, akuu harapp semuanya berjalan lancarr. 
            Akuu bakal selalu percaya sama kamuu, bakal selalu seneng tiap liat kamu 
            selangkah lebih deket sama cita cita kamuu.
          </p>
          <p>
            Semogaa semua usaha yang kamu lakuin sekarang nantii bisaa ngebawaa kamu ke 
            kehidupan yang selama inii kamu impiin.
          </p>
          <p>
            Mau bagaimanapun keadaannya, akuu cuma pengenn kamu tetap baik baik ajaa. 
            Tetep jaga kesehatan yaaa, jangan terlalu maksa diri sendiri, makann yang 
            teratur, istirahatt yang cukup. Kesehatan kamu jugaa pentingg. Jangan lupa 
            bahagiain diri sendiri jugaa yaaa.
          </p>
          <p>
            Sekali lagii, happy birthday yaaa. 🤍
          </p>
          <p>
            Semogaa tahun inii jadii salah satu tahun terbaik buat kamuu. Semogaa langkah 
            kamu selalu dipermudah, semogaa hati kamu selalu dijagain, semogaa kamu selalu 
            dikelilingii orang orang baik, dan semogaa semuaa hal yang kamu perjuangin 
            sekarang berakhir dengan hasil yang bikin kamu bangga sama diri sendiri.
          </p>
          <p>
            Teruss jadii diri kamuu yang baik ituu yaaa. Jangan pernah berhenti buat 
            belajar, berkembang, dan ngejar semuaa mimpi kamuu. Akuu bakal selalu doain 
            yang terbaik buat kamuu.
          </p>
          <p style={{ textAlign: 'center', marginTop: '2rem', fontWeight: 'bold' }}>
            Enjoy your dayyy. 🎂🤍
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Gift Modal
function GiftModal({ isOpen, onClose }) {
  if (!isOpen) return null

  const handleGiftClick = () => {
    const phoneNumber = "6283119798951"
    const message = "mana hadiah aku nya woiiii"
    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(waLink, '_blank')
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0, rotateY: 180 }}
        animate={{ scale: 1, rotateY: 0 }}
        exit={{ scale: 0, rotateY: -180 }}
        transition={{ type: "spring", duration: 0.8 }}
        className="modal-content gift-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ fontSize: '6rem', marginBottom: '2rem' }}
        >
          🎁
        </motion.div>
        
        <h2 className="modal-title">💝</h2>
        
        <div className="gift-letter">
          <p>happy birthday yaaa, cahyaa. 🤍</p>
          <p>
            iniii ada hadiahh kecill dari akuu. mungkin nilainyaa gak seberapa, tapii 
            akuu harapp ini bisaa bikin hari ulang tahun kamuu jadiii sedikit lebih 
            berkesan. semogaa kamuu sukaa yaaa.
          </p>
          <p>
            akuu cuma mau bilang makasii yaaa karenaa kamuu udah lahir di dunia inii. 
            semogaa semuaa doa baik selalu nyertain kamuu, semogaa semuaa usaha yang 
            lagii kamuu perjuangin dipermudah, dan semogaa suatu hari nantii semuaa 
            mimpi kamuu bener bener tercapai.
          </p>
          <p>
            sekali lagii, happy birthday yaaa, jaga kesehatan, dan bahagiaa selaluu.
          </p>
          <p style={{ textAlign: 'center', marginTop: '1.5rem', fontWeight: 'bold' }}>
            maaciii banyakkk🫶🏻
          </p>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGiftClick}
          className="gift-button"
        >
          🎁
        </motion.button>
        
        <p style={{ 
          fontSize: '0.9rem', 
          opacity: 0.8, 
          marginTop: '1rem',
          fontStyle: 'italic',
          textAlign: 'center'
        }}>
          *BESOKK duit aku dipinjem coba... blm dibalikin 
        </p>
      </motion.div>
    </motion.div>
  )
}

// Music Player Component
function MusicPlayer() {
  const [currentSong, setCurrentSong] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [isMinimized, setIsMinimized] = useState(false)
  const audioRef = useRef(null)

  // Daftar lagu dari Google Drive
  const songs = [
    { title: "I've Always Loved U", artist: "Arash Buana", file: getPublicAsset("Arash Buana - i've always loved u (MV).mp3") },
    { title: "Abadi", artist: "Dendi Nata", file: getPublicAsset("Dendi Nata - Abadi (Indo Version) Lyric Video.mp3") },
    { title: "I'd Like to Watch You Sleeping", artist: "Sal Priadi", file: getPublicAsset("I'd like to watch you sleeping  lirik dan musik oleh Sal Priadi.mp3") },
    { title: "Sampai Akhir Waktu", artist: "Yovie & Nuno", file: getPublicAsset("Yovie & Nuno - Sampai Akhir Waktu.mp3") },
    { title: "Manusia Biasa", artist: "Yovie & Nuno", file: getPublicAsset("Yovie & Nuno - Manusia Biasa.mp3") }
  ]

  useEffect(() => {
    const audio = new Audio(songs[currentSong].file)
    audio.volume = volume
    audioRef.current = audio

    if (isPlaying) {
      audio.play().catch(err => console.log('Audio play error:', err))
    }

    const handleEnded = () => {
      setCurrentSong((prev) => (prev + 1) % songs.length)
    }
    
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.pause()
      audio.removeEventListener('ended', handleEnded)
    }
  }, [currentSong])

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(err => console.log('Audio play error:', err))
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const togglePlay = () => setIsPlaying(!isPlaying)
  const nextSong = () => setCurrentSong((prev) => (prev + 1) % songs.length)
  const prevSong = () => setCurrentSong((prev) => (prev - 1 + songs.length) % songs.length)

  return (
    <motion.div
      initial={{ x: 400 }}
      animate={{ x: 0 }}
      className={`music-player ${isMinimized ? 'minimized' : ''}`}
    >
      <div className="player-header">
        <span>🎵 Now Playing</span>
        <button onClick={() => setIsMinimized(!isMinimized)} className="minimize-btn">
          {isMinimized ? '▲' : '▼'}
        </button>
      </div>
      
      {!isMinimized && (
        <div className="player-content">
          <div className="song-info">
            <div className="song-title">{songs[currentSong].title}</div>
            <div className="song-artist">{songs[currentSong].artist}</div>
          </div>
          
          <div className="player-controls">
            <button onClick={prevSong} className="control-btn">⏮️</button>
            <button onClick={togglePlay} className="control-btn play-btn">
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            <button onClick={nextSong} className="control-btn">⏭️</button>
          </div>
          
          <div className="volume-control">
            <span>🔊</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="volume-slider"
            />
            <span>{Math.round(volume * 100)}%</span>
          </div>
        </div>
      )}
    </motion.div>
  )
}

// Main App
function App() {
  const [showConfetti, setShowConfetti] = useState(true)
  const [bucketModalOpen, setBucketModalOpen] = useState(false)
  const [messageModalOpen, setMessageModalOpen] = useState(false)
  const [giftModalOpen, setGiftModalOpen] = useState(false)
  const [showVideoMessage, setShowVideoMessage] = useState(false)
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', handleResize)
    
    setTimeout(() => setShowConfetti(false), 10000)
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="app">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={true}
          numberOfPieces={200}
          colors={['#f093fb', '#f5576c', '#ffd700', '#c44bff', '#ff6b9d']}
        />
      )}
      
      <FloatingHearts />
      <MusicPlayer />
      
      <Hero 
        onBucketClick={() => setBucketModalOpen(true)}
        onMessageClick={() => setMessageModalOpen(true)}
      />
      
      <BucketModal isOpen={bucketModalOpen} onClose={() => setBucketModalOpen(false)} />
      <MessageModal isOpen={messageModalOpen} onClose={() => setMessageModalOpen(false)} />
      <GiftModal isOpen={giftModalOpen} onClose={() => setGiftModalOpen(false)} />
      
      <section className="game-container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="section-title"
        >
          Game
        </motion.h2>

        <IQQuizGame />
        <DodgeGame />
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="section-title"
        >
          Gallery
        </motion.h2>
        
        <div className="gallery-grid">
          {[
            { type: 'video', src: 'gallery1.mp4' },
            { type: 'video', src: 'gallery2.mp4' },
            { type: 'video', src: 'gallery3.mp4' },
            { type: 'image', src: 'gallery4.jpg' },
            { type: 'image', src: 'gallery5.jpeg' },
            { type: 'image', src: 'gallery6.jpeg' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="gallery-item"
            >
              {item.type === 'image' ? (
                <img 
                  src={getPublicAsset(item.src)} 
                  alt={`Memory ${i + 1}`}
                  className="gallery-media"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.querySelector('.gallery-placeholder').style.display = 'flex'
                  }}
                />
              ) : (
                <video 
                  src={getPublicAsset(item.src)}
                  className="gallery-media"
                  controls
                  controlsList="nodownload"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.querySelector('.gallery-placeholder').style.display = 'flex'
                  }}
                />
              )}
              <div className="gallery-placeholder" style={{ display: 'none' }}>
                <span>{item.type === 'image' ? '📸' : '🎬'}</span>
                <p>{item.type === 'image' ? 'Foto' : 'Video'} {i + 1}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="section-title"
        >
          Video
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="video-container"
        >
          <video
            src={getPublicAsset("video-final.mp4")}
            controls
            controlsList="nodownload"
            className="birthday-video"
            onEnded={() => setShowVideoMessage(true)}
            onError={(e) => {
              console.log("Video utama gagal dimuat");
            }}
          >
            Browser kamu tidak support video tag.
          </video>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button"
            style={{ marginTop: '2rem' }}
            onClick={() => setShowVideoMessage(true)}
          >
            💌 Surat 💌
          </motion.button>
        </motion.div>
      </section>

      {/* Video End Message Modal */}
      {showVideoMessage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="modal-overlay"
          onClick={() => setShowVideoMessage(false)}
        >
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="modal-content video-message-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setShowVideoMessage(false)}>✕</button>
            
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ fontSize: '5rem', marginBottom: '1rem' }}
            >
              💝
            </motion.div>
            
            <h2 className="modal-title">pesan lagi</h2>
            
            <div className="video-message-text">
              <p>cahyaaa, 🤍</p>
              <p>
                semogaa video inii bisaa bikin hari ulang tahun kamuu jadii lebih 
                berkesan yaaa. akuu harapp kamuu sukaa.
              </p>
              <p>
                akuu cuma mau bilang lagii, kamuu ituuu orang yang hebat. mungkin 
                kamuu sendiri belum sadarr, tapii menurutkuu kamuu punyaa potensi 
                yang besarr bangett. jangan pernah ngeraguin diri sendiri yaaa.
              </p>
              <p>
                semogaa di tahun inii semuaa doa kamuu dikabulinn. semogaa semuaa 
                yang lagii kamuu perjuangin dipermudahh. akuu percayaa kokk kamuu 
                bisaa ngelewatin semuanya dengan baik.
              </p>
              <p>
                inget yaaa, kalo lagii cape boleh istirahatt, kalo lagii sedih 
                gapapaa ngerasain ituuu. kamuu gak harus selalu kuat. kamuu jugaa 
                manusiaa yang boleh capek dan butuh waktuu buat diri sendiri.
              </p>
              <p>
                akuu harapp kamuu selaluu bahagiaa, selaluu sehatt, dan selaluu 
                dikelilingi orang orang baikk. semogaa semuaa langkah kamuu dipermudahh, 
                semogaa semuaa usaha kamuu berhasill, dan semogaa kamuu bisaa jadi 
                versi terbaik dari diri kamuu sendiri.
              </p>
              <p>
                jangan lupa jagaa kesehatan yaaa. makann teratur, istirahatt cukup, 
                jangan terlalu maksaa diri sendiri. kesehatan kamuu pentingg bangett.
              </p>
              <p>
                akuu bakal selaluu dukung kamuu yaaa. apapun yang kamuu lakuin, apapun 
                yang kamuu perjuanginn, akuu bakal selaluu percaya sama kamuu dan doain 
                yang terbaik buat kamuu.
              </p>
              <p>
                teruss jadii diri kamuu yang baik ituu yaaa. teruss belajar, teruss 
                berkembang, teruss kejar semuaa mimpi kamuu. akuu yakinn kamuu pasti 
                bisaa ngeraih semuaa hal yang kamuu impiin.
              </p>
              <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '1.3rem', fontWeight: 'bold' }}>
                happy birthday cahyaaa. 🤍<br/>
                semogaa tahun inii jadii tahun terbaik buat kamuu. 🎂✨
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}

      <section className="final-message">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="message-card"
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>
            🎂Selamat Ulang Tahun Cahyaa🎉
          </h2>
          <p style={{ fontSize: '1.3rem', lineHeight: '2', maxWidth: '800px', margin: '0 auto' }}>
            Semoga hari ini jadi hari yang berkesan buat kamu. Makasih udah jadi teman yang baik. 
            Semoga di tahun ini kamu makin berkembang, makin sukses, dan makin bahagia. Terus jadi 
            versi terbaik dari diri kamu. Enjoy your special day! 🎊
          </p>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button"
            style={{ marginTop: '3rem' }}
            onClick={() => setGiftModalOpen(true)}
          >
            🎁 Buka Hadiah
          </motion.button>
        </motion.div>
      </section>
    </div>
  )
}

export default App