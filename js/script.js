console.log('js is linked, yassss')

// Canvas resolution: 
canvas.setAttribute('height', getComputedStyle(canvas)['height'])
canvas.setAttribute('width', getComputedStyle(canvas)['width'])

const ctx = canvas.getContext('2d')