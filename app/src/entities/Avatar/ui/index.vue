<template>
  <canvas ref="$canvas"></canvas>
</template>

<script lang="ts" setup>
import p5 from 'p5'
import { ref } from 'vue'

const background: p5.Image[] = []
const body: p5.Image[] = []
const eyebrows: p5.Image[] = []
const eyes: p5.Image[] = []
const glasses: p5.Image[] = []
const head: p5.Image[] = []
const mouth: p5.Image[] = []
const pet: p5.Image[] = []
const top: p5.Image[] = []

const OPTIONS = {
  width: 440,
  height: 440,
}

const $canvas = ref(undefined)

const buildAvatar = (p: p5) => {
  let centerX = p.width / 2
  let centerY = p.height / 2

  let backgroundIndex = Math.floor(p.random(0, background.length))
  let eyesIndex = Math.floor(p.random(0, eyes.length))
  let glassesIndex = Math.floor(p.random(0, glasses.length))
  let topIndex = Math.floor(p.random(0, top.length))
  let mouthIndex = Math.floor(p.random(0, mouth.length))
  let bodyIndex = Math.floor(p.random(0, body.length))
  let petIndex = Math.floor(p.random(0, pet.length))

  let offsetEyes = 200
  let offsetGlasses = 194
  let offsetTop = 58
  let offsetMouth = 225
  let offsetBody = 297

  if (mouth[mouthIndex].height > 60) {
    offsetMouth = 180
  }

  p.image(background[backgroundIndex], 0, 0)
  p.image(head[0], centerX - head[0].width / 2, centerY - head[0].height / 2)
  p.image(glasses[glassesIndex], centerX - glasses[glassesIndex].width / 2, offsetGlasses)
  p.image(mouth[mouthIndex], centerX - mouth[mouthIndex].width / 2, offsetMouth)
  p.image(eyes[eyesIndex], centerX - eyes[eyesIndex].width / 2, offsetEyes)
  p.image(body[bodyIndex], centerX - body[bodyIndex].width / 2, offsetBody)
  p.image(top[topIndex], centerX - top[topIndex].width / 2, offsetTop)
  p.image(pet[petIndex], pet[petIndex].width * -0.3, p.height - pet[petIndex].height * 0.7)
}

const sketch = (p: p5) => {
  p.setup = () => {
    background.forEach((i) => i.loadPixels())
    body.forEach((i) => i.loadPixels())
    eyebrows.forEach((i) => i.loadPixels())
    eyes.forEach((i) => i.loadPixels())
    glasses.forEach((i) => i.loadPixels())
    head.forEach((i) => i.loadPixels())
    mouth.forEach((i) => i.loadPixels())
    pet.forEach((i) => i.loadPixels())
    top.forEach((i) => i.loadPixels())

    p.frameRate(0)

    p.createCanvas(OPTIONS.width, OPTIONS.height, $canvas.value)

    buildAvatar(p)
  }
  p.draw = () => {
    buildAvatar(p)
  }
  p.preload = () => {
    background.push(p.loadImage('/images/background/Boom.png'))
    background.push(p.loadImage('/images/background/Bricks.png'))
    background.push(p.loadImage('/images/background/Solid.png'))

    body.push(p.loadImage('./images/body/Muscle-shirt.png'))
    body.push(p.loadImage('./images/body/Necklace.png'))
    body.push(p.loadImage('./images/body/Plain.png'))
    body.push(p.loadImage('./images/body/Print.png'))
    body.push(p.loadImage('./images/body/Super-hero.png'))
    body.push(p.loadImage('./images/body/Sweater.png'))

    eyebrows.push(p.loadImage('./images/eyebrows/Angry.png'))
    eyebrows.push(p.loadImage('./images/eyebrows/Formed.png'))
    eyebrows.push(p.loadImage('./images/eyebrows/Round.png'))
    eyebrows.push(p.loadImage('./images/eyebrows/Thick.png'))
    eyebrows.push(p.loadImage('./images/eyebrows/Thin.png'))
    eyebrows.push(p.loadImage('./images/eyebrows/Unsure.png'))

    eyes.push(p.loadImage('./images/eyes/Lashes.png'))
    eyes.push(p.loadImage('./images/eyes/Nice.png'))
    eyes.push(p.loadImage('./images/eyes/Normal.png'))
    eyes.push(p.loadImage('./images/eyes/Original.png'))
    eyes.push(p.loadImage('./images/eyes/Tired.png'))

    glasses.push(p.loadImage('./images/glasses/Plain.png'))
    glasses.push(p.loadImage('./images/glasses/Reading.png'))
    glasses.push(p.loadImage('./images/glasses/Sunnies.png'))

    head.push(p.loadImage('./images/head/Head.png'))

    mouth.push(p.loadImage('./images/mouth/Beard-2.png'))
    mouth.push(p.loadImage('./images/mouth/Beard.png'))
    mouth.push(p.loadImage('./images/mouth/Line.png'))
    mouth.push(p.loadImage('./images/mouth/Lips.png'))
    mouth.push(p.loadImage('./images/mouth/Open-Smile.png'))
    mouth.push(p.loadImage('./images/mouth/Original.png'))
    mouth.push(p.loadImage('./images/mouth/Smile.png'))

    pet.push(p.loadImage('./images/pet/Cat.png'))
    pet.push(p.loadImage('./images/pet/Dog.png'))
    pet.push(p.loadImage('./images/pet/Fish.png'))
    pet.push(p.loadImage('./images/pet/Raptor.png'))

    top.push(p.loadImage('./images/top/Bun.png'))
    top.push(p.loadImage('./images/top/Cap.png'))
    top.push(p.loadImage('./images/top/Crazy.png'))
    top.push(p.loadImage('./images/top/Curly.png'))
    top.push(p.loadImage('./images/top/Long.png'))
    top.push(p.loadImage('./images/top/Mohawk.png'))
    top.push(p.loadImage('./images/top/Mullet.png'))
    top.push(p.loadImage('./images/top/Ninja.png'))
    top.push(p.loadImage('./images/top/Ponytail.png'))
    top.push(p.loadImage('./images/top/Smooth.png'))
    top.push(p.loadImage('./images/top/Styled.png'))
  }
}

new p5(sketch)
</script>
