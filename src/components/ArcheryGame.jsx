import React, { useRef, useEffect, useState, useCallback } from 'react'

const ArcheryGame = () => {
  const canvasRef = useRef(null)
  const gameRef = useRef({
    bow: { x: 80, y: 300 },
    arrows: [],
    targets: [],
    particles: [],
    stars: [],
    score: 0,
    bestScore: 0,
    isDrawing: false,
    drawPower: 0,
    mouseY: 300,
    mouseX: 200,
    aimAngle: 0,
    gameStarted: false,
    gameOver: false,
    lastTargetSpawn: 0,
    animFrameId: null,
  })
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [started, setStarted] = useState(false)

  const spawnTarget = useCallback((canvasWidth, canvasHeight) => {
    const game = gameRef.current
    const size = 30 + Math.random() * 30 // 30-60px radius
    const speed = 1 + Math.random() * 2
    const y = 60 + Math.random() * (canvasHeight - 120)
    game.targets.push({
      x: canvasWidth + size,
      y,
      radius: size,
      speed,
      hit: false,
      opacity: 1,
      rings: 3, // 3-ring target
    })
  }, [])

  const createParticles = useCallback((x, y, color, count = 12) => {
    const game = gameRef.current
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5
      const speed = 2 + Math.random() * 5
      game.particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 2 + Math.random() * 4,
        color,
        life: 1,
        decay: 0.02 + Math.random() * 0.03,
      })
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const game = gameRef.current

    const resize = () => {
      const parent = canvas.parentElement
      canvas.width = parent.clientWidth
      canvas.height = parent.clientHeight
      game.bow.y = canvas.height / 2
      // Init stars
      if (game.stars.length === 0) {
        for (let i = 0; i < 120; i++) game.stars.push({ x: Math.random()*canvas.width, y: Math.random()*canvas.height, s: 0.5+Math.random()*2, speed: 0.2+Math.random()*1 })
      }
    }
    resize()
    window.addEventListener('resize', resize)

    // Mouse/Touch handlers
    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect()
      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      const clientY = e.touches ? e.touches[0].clientY : e.clientY
      return { x: clientX - rect.left, y: clientY - rect.top }
    }

    const onDown = (e) => {
      e.preventDefault()
      if (game.gameOver) {
        // Restart
        game.gameOver = false
        game.score = 0
        game.arrows = []
        game.targets = []
        game.particles = []
        game.lastTargetSpawn = 0
        setScore(0)
        return
      }
      if (!game.gameStarted) {
        game.gameStarted = true
        setStarted(true)
      }
      game.isDrawing = true
      game.drawPower = 0
    }

    const onMove = (e) => {
      e.preventDefault()
      const pos = getPos(e)
      game.mouseY = pos.y
      game.mouseX = pos.x
      // Calculate aim angle from bow to mouse
      game.aimAngle = Math.atan2(pos.y - game.bow.y, pos.x - game.bow.x)
    }

    const onUp = (e) => {
      e.preventDefault()
      if (game.isDrawing && game.drawPower > 5) {
        // Shoot arrow!
        const power = Math.min(game.drawPower, 100)
        const speed = 8 + (power / 100) * 18 // 8-26 speed
        game.arrows.push({
          x: game.bow.x + 30,
          y: game.bow.y,
          vx: Math.cos(game.aimAngle) * speed,
          vy: Math.sin(game.aimAngle) * speed,
          angle: game.aimAngle,
          trail: [],
          alive: true,
        })
      }
      game.isDrawing = false
      game.drawPower = 0
    }

    canvas.addEventListener('mousedown', onDown)
    canvas.addEventListener('mousemove', onMove)
    canvas.addEventListener('mouseup', onUp)
    canvas.addEventListener('mouseleave', onUp)
    canvas.addEventListener('touchstart', onDown, { passive: false })
    canvas.addEventListener('touchmove', onMove, { passive: false })
    canvas.addEventListener('touchend', onUp, { passive: false })

    // --- GAME LOOP ---
    const loop = (timestamp) => {
      game.animFrameId = requestAnimationFrame(loop)
      const W = canvas.width
      const H = canvas.height

      // Clear
      ctx.clearRect(0, 0, W, H)

      // --- Dark space background ---
      ctx.fillStyle = '#0a0a1a'
      ctx.fillRect(0, 0, W, H)

      // Stars
      game.stars.forEach(s => { s.x -= s.speed; if(s.x < 0) s.x = W; ctx.fillStyle = `rgba(255,255,255,${s.s/2.5})`; ctx.fillRect(s.x, s.y, s.s, s.s) })

      if (!game.gameStarted) {
        // Start Screen
        ctx.fillStyle = '#fff'
        ctx.font = 'bold 48px Inter, sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText('🏹 ARCHERY', W / 2, H / 2 - 40)
        ctx.font = '20px Inter, sans-serif'
        ctx.fillStyle = '#aaa'
        ctx.fillText('Click anywhere to start', W / 2, H / 2 + 20)
        ctx.fillText('Hold mouse to draw bow, release to shoot!', W / 2, H / 2 + 55)
        return
      }

      // --- Game Over Screen ---
      if (game.gameOver) {
        ctx.fillStyle = 'rgba(0,0,0,0.6)'
        ctx.fillRect(0, 0, W, H)
        ctx.fillStyle = '#e74c3c'
        ctx.font = 'bold 56px Inter, sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText('GAME OVER', W / 2, H / 2 - 50)
        ctx.fillStyle = '#fff'
        ctx.font = 'bold 32px Inter, sans-serif'
        ctx.fillText(`Score: ${game.score}`, W / 2, H / 2 + 10)
        ctx.fillStyle = '#FFD700'
        ctx.font = '18px Inter, sans-serif'
        ctx.fillText(`Best: ${game.bestScore}`, W / 2, H / 2 + 50)
        ctx.fillStyle = '#aaa'
        ctx.font = '20px Inter, sans-serif'
        ctx.fillText('Click to Restart', W / 2, H / 2 + 90)
        return
      }

      // --- Spawn targets ---
      if (timestamp - game.lastTargetSpawn > 1500) {
        spawnTarget(W, H)
        game.lastTargetSpawn = timestamp
      }

      // --- Update draw power ---
      if (game.isDrawing) {
        game.drawPower = Math.min(game.drawPower + 1.5, 100)
      }

      // --- Draw Bow ---
      const bowX = game.bow.x
      const bowY = game.bow.y
      // Bow follows mouse Y smoothly
      game.bow.y += (game.mouseY - game.bow.y) * 0.12

      // Bow body (arc)
      ctx.save()
      ctx.translate(bowX, bowY)
      ctx.rotate(game.aimAngle)

      // Bow limbs
      const bendAmount = game.isDrawing ? game.drawPower * 0.15 : 0
      ctx.strokeStyle = '#c0823e'
      ctx.lineWidth = 5
      ctx.lineCap = 'round'
      ctx.beginPath()
      ctx.moveTo(-5, -45)
      ctx.quadraticCurveTo(15 - bendAmount, 0, -5, 45)
      ctx.stroke()

      // Bowstring
      ctx.strokeStyle = '#ccc'
      ctx.lineWidth = 2
      const stringPull = game.isDrawing ? -game.drawPower * 0.4 : 0
      ctx.beginPath()
      ctx.moveTo(-5, -45)
      ctx.lineTo(stringPull, 0)
      ctx.lineTo(-5, 45)
      ctx.stroke()

      // Arrow on bow (if drawing)
      if (game.isDrawing) {
        ctx.strokeStyle = '#ddd'
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.moveTo(stringPull, 0)
        ctx.lineTo(30, 0)
        ctx.stroke()
        // Arrowhead
        ctx.fillStyle = '#e74c3c'
        ctx.beginPath()
        ctx.moveTo(34, 0)
        ctx.lineTo(26, -5)
        ctx.lineTo(26, 5)
        ctx.closePath()
        ctx.fill()
      }

      ctx.restore()

      // --- Power meter ---
      if (game.isDrawing) {
        const meterX = bowX - 30
        const meterH = 120
        const meterY = bowY - meterH / 2
        ctx.fillStyle = 'rgba(0,0,0,0.1)'
        ctx.fillRect(meterX, meterY, 10, meterH)
        // Fill (green to red gradient)
        const fillH = (game.drawPower / 100) * meterH
        const grad = ctx.createLinearGradient(0, meterY + meterH, 0, meterY)
        grad.addColorStop(0, '#2ecc71')
        grad.addColorStop(0.6, '#f39c12')
        grad.addColorStop(1, '#e74c3c')
        ctx.fillStyle = grad
        ctx.fillRect(meterX, meterY + meterH - fillH, 10, fillH)
        // Border
        ctx.strokeStyle = '#333'
        ctx.lineWidth = 1.5
        ctx.strokeRect(meterX, meterY, 10, meterH)
      }

      // --- Aim line (dotted) ---
      if (game.isDrawing) {
        ctx.save()
        ctx.setLineDash([8, 8])
        ctx.strokeStyle = 'rgba(231, 76, 60, 0.4)'
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(bowX + 30, bowY)
        const lineLen = 300
        ctx.lineTo(bowX + Math.cos(game.aimAngle) * lineLen, bowY + Math.sin(game.aimAngle) * lineLen)
        ctx.stroke()
        ctx.restore()
      }

      // --- Update & Draw Arrows ---
      game.arrows = game.arrows.filter(arrow => {
        if (!arrow.alive) return false
        arrow.x += arrow.vx
        arrow.vy += 0.08 // Gravity
        arrow.y += arrow.vy
        arrow.angle = Math.atan2(arrow.vy, arrow.vx)

        // Trail
        arrow.trail.push({ x: arrow.x, y: arrow.y })
        if (arrow.trail.length > 15) arrow.trail.shift()

        // Draw trail
        for (let t = 0; t < arrow.trail.length; t++) {
          const alpha = t / arrow.trail.length * 0.3
          ctx.fillStyle = `rgba(231, 76, 60, ${alpha})`
          ctx.beginPath()
          ctx.arc(arrow.trail[t].x, arrow.trail[t].y, 2, 0, Math.PI * 2)
          ctx.fill()
        }

        // Draw arrow
        ctx.save()
        ctx.translate(arrow.x, arrow.y)
        ctx.rotate(arrow.angle)
        // Shaft
        ctx.strokeStyle = '#ccc'
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.moveTo(-25, 0)
        ctx.lineTo(10, 0)
        ctx.stroke()
        // Arrowhead
        ctx.fillStyle = '#e74c3c'
        ctx.beginPath()
        ctx.moveTo(14, 0)
        ctx.lineTo(6, -5)
        ctx.lineTo(6, 5)
        ctx.closePath()
        ctx.fill()
        // Feathers
        ctx.fillStyle = '#aaa'
        ctx.beginPath()
        ctx.moveTo(-25, 0)
        ctx.lineTo(-20, -4)
        ctx.lineTo(-18, 0)
        ctx.closePath()
        ctx.fill()
        ctx.beginPath()
        ctx.moveTo(-25, 0)
        ctx.lineTo(-20, 4)
        ctx.lineTo(-18, 0)
        ctx.closePath()
        ctx.fill()
        ctx.restore()

        // Out of bounds
        if (arrow.x > W + 50 || arrow.y > H + 50 || arrow.x < -50) return false

        // --- Collision with targets ---
        for (let t = 0; t < game.targets.length; t++) {
          const target = game.targets[t]
          if (target.hit) continue
          const dx = arrow.x - target.x
          const dy = arrow.y - target.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < target.radius) {
            target.hit = true
            arrow.alive = false
            // Score based on accuracy (closer to center = more points)
            const accuracy = 1 - (dist / target.radius)
            const points = accuracy > 0.7 ? 100 : accuracy > 0.4 ? 50 : 25
            game.score += points
            if (game.score > game.bestScore) game.bestScore = game.score
            setScore(game.score)
            setBestScore(game.bestScore)
            // Particles!
            const color = points === 100 ? '#FFD700' : points === 50 ? '#e74c3c' : '#ff8c00'
            createParticles(target.x, target.y, color, 20)
            // Float text
            game.particles.push({
              x: target.x, y: target.y - target.radius - 10,
              vx: 0, vy: -1.5,
              radius: 0, // Not a circle - it's text
              color: color,
              life: 1,
              decay: 0.015,
              isText: true,
              text: `+${points}`,
            })
            return false
          }
        }
        return true
      })

      // --- Update & Draw Targets ---
      game.targets = game.targets.filter(target => {
        if (target.hit) {
          target.opacity -= 0.05
          if (target.opacity <= 0) return false
        } else {
          target.x -= target.speed
          // If target crosses past the bow = GAME OVER
          if (target.x < game.bow.x - 20) {
            game.gameOver = true
            if (game.score > game.bestScore) game.bestScore = game.score
            setBestScore(game.bestScore)
            // Big explosion at bow
            createParticles(game.bow.x, game.bow.y, '#e74c3c', 30)
            return false
          }
        }

        // Draw target rings
        const colors = ['#e74c3c', '#fff', '#e74c3c']
        for (let ring = 0; ring < 3; ring++) {
          const r = target.radius * (1 - ring * 0.3)
          ctx.beginPath()
          ctx.arc(target.x, target.y, r, 0, Math.PI * 2)
          ctx.fillStyle = colors[ring]
          ctx.globalAlpha = target.opacity
          ctx.fill()
          ctx.strokeStyle = 'rgba(0,0,0,0.2)'
          ctx.lineWidth = 1.5
          ctx.stroke()
        }
        // Bullseye
        ctx.beginPath()
        ctx.arc(target.x, target.y, target.radius * 0.15, 0, Math.PI * 2)
        ctx.fillStyle = '#FFD700'
        ctx.globalAlpha = target.opacity
        ctx.fill()
        ctx.globalAlpha = 1

        return true
      })

      // --- Update & Draw Particles ---
      game.particles = game.particles.filter(p => {
        p.life -= p.decay
        if (p.life <= 0) return false
        p.x += p.vx
        p.y += p.vy
        if (p.isText) {
          ctx.fillStyle = p.color
          ctx.globalAlpha = p.life
          ctx.font = 'bold 28px Inter, sans-serif'
          ctx.textAlign = 'center'
          ctx.fillText(p.text, p.x, p.y)
          ctx.globalAlpha = 1
        } else {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius * p.life, 0, Math.PI * 2)
          ctx.fillStyle = p.color
          ctx.globalAlpha = p.life
          ctx.fill()
          ctx.globalAlpha = 1
        }
        return true
      })

      // --- HUD ---
      // Score
      ctx.fillStyle = '#fff'
      ctx.font = 'bold 28px Inter, sans-serif'
      ctx.textAlign = 'left'
      ctx.fillText(`Score: ${game.score}`, 20, 45)
      // Best
      ctx.fillStyle = '#aaa'
      ctx.font = '16px Inter, sans-serif'
      ctx.fillText(`Best: ${game.bestScore}`, 20, 70)
    }

    game.animFrameId = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(game.animFrameId)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousedown', onDown)
      canvas.removeEventListener('mousemove', onMove)
      canvas.removeEventListener('mouseup', onUp)
      canvas.removeEventListener('mouseleave', onUp)
      canvas.removeEventListener('touchstart', onDown)
      canvas.removeEventListener('touchmove', onMove)
      canvas.removeEventListener('touchend', onUp)
    }
  }, [spawnTarget, createParticles])

  return (
    <div className="w-full h-full relative">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full cursor-crosshair"
        style={{ touchAction: 'none' }}
      />
    </div>
  )
}

export default ArcheryGame
