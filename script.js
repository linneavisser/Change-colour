let mainFunction = (e) => {
    let x = e.pageX;
    let y = e.pageY;
    let sw = screen.width;
    let sh = screen.height;
    document.getElementById("change").style.color = `rgb(${(x/sw)*555}, ${(y/sh)*305}, ${(x > y) ? y : x})`;
  }
  
  document.addEventListener('mousemove', mainFunction);