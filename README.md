# Ideas and Code Snippets

The ideas at the top of this list are options for fun things to try to get a webpage to do. Following that, there are some simple code snippets as boilerplate material. These are not supposed to provide answers, but hopefully provide some helpful material for getting to the answers.

## Ideas

1. Click me to turn the webpage a random color
1. Dice - click the button to get the next number rolled
1. A Text‑Growing Button - every click makes it bigger
1. A Traffic Light
1. Click on the box to move it to a random corner
1. Play a sound

## HTML Page Shell

Copy this html code and paste it into an empty document named `index.html` to create a webpage with nothing in it except a title.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <link rel="stylesheet" href="styles.css">
  <title>Page Title</title>
</head>
<body>
  <h1>Title</h1>
  <div class="box"></div>
  <script src="script.js"></script>
</body>
</html>
```

## Styles

This is some basic css for getting a page started.

```css
html, body {
    height: 100svh;
    margin: 0;
}

.box {
  width: 10%;
  height: 10%;
  border: 1px solid black;
}
```

### How to turn a square into a circle

This snippet turns a square into a circle.

```css
.round {
    border-radius: 50%;
}
```

## JavaScript

### Random Number

Here's a JavaScript snippet that will put a random number into the text content.

```js
button.onclick = () => {
  let rand = Math.floor(Math.random()*10)
  document.querySelector('.box-for-rand').textContent = rand;
};
```

### Set a Styling Class on an Object

This js will add or remove css styling information.

```js
const box = document.querySelector('.box');
box.classList.toggle('top');
```

### Timers

This js snippet will run an event 1 second from now.

```js
setTimeout(() => {
  console.log("timer fired");
}, 1000); // 1000 ms = 1 second
```

This js snippet will repeat an event every second.

```js
setInterval(() => {
  console.log("tick");
}, 1000);
```

### Play a Sound

This js will play an A 440 Hz for 3 seconds.

```js
box.onclick = () => {
  const ctx = new AudioContext();
  const osc = ctx.createOscillator();

  osc.frequency.value = 440;   // A4
  osc.connect(ctx.destination);
  osc.start();

  setTimeout(() => osc.stop(), 3000);  // stop after 3 seconds
};
```