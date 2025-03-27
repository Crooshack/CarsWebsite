    const spot = document.getElementById("footer");
    const enter1 = document.createElement('br');

    const btn = document.createElement('button');
    btn.innerHTML = "Wciśnij mnie!";
    btn.className = "btnstyle";
    btn.type = "button";
    btn.onclick = function() {
        const gif = document.createElement('img');
        const enter2 = document.createElement('br');
        gif.src = "images/rickroll.gif";
        gif.alt = "Rickroll";
        gif.className = "gifstyle";
        spot.appendChild(gif);
    };

    spot.appendChild(btn);
    spot.appendChild(enter1);