function updateClock() {
					const clockElement = document.getElementById("clock");
					const dateElement = document.getElementById("date");
					const now = new Date();
					const hours = now.getHours().toString().padStart(2, "0");
					const minutes = now.getMinutes().toString().padStart(2, "0");
					const seconds = now.getSeconds().toString().padStart(2, "0");
					const day = now.getDate().toString().padStart(2, "0");
					const month = (now.getMonth() + 1).toString().padStart(2, "0"); // +1 porque janeiro é 0
					const year = now.getFullYear();
					clockElement.textContent = `${hours}:${minutes}:${seconds}`;
					dateElement.textContent = `${day}/${month}/${year}`;
				}
		setInterval(updateClock, 1000);
		
		// Chame a função inicialmente para exibir a hora atual
		updateClock();