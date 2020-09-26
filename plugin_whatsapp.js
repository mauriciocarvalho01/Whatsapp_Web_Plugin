

const interval = setInterval(() => {
    const header = document.querySelector('._3All_');
    if (header) {
        console.log(header);
        clearInterval(interval);

        const button1 = document.createElement("button");
        button1.innerHTML = "2x";

        button1.classList.add("changeTimeButton");


        button1.addEventListener("click", () => {
            const audios1 = document.querySelectorAll("audio");
            audios1.forEach((audio) => {
                console.log(audio);
                audio.playbackRate = 2
            })
        })

        header.appendChild(button1);

        const button2 = document.createElement("button");
        button2.innerHTML = "3x";

        button2.classList.add("changeTimeButton");

        button2.addEventListener("click", () => {
            const audios2 = document.querySelectorAll("audio");
            audios2.forEach((audio) => {
                console.log(audio);
                audio.playbackRate = 3
            })
        })

        header.appendChild(button2);
    }

}, 1000);