// Chat functionality
if (document.getElementById("chat")) {
    const chat = document.getElementById("chat");

    function addMessage(text, sender) {
        const div = document.createElement("div");
        div.classList.add("message", sender);
        div.innerText = text;
        chat.appendChild(div);
    }

    async function send() {
        const input = document.getElementById("input");
        const message = input.value;

        addMessage(message, "user");
        input.value = "";

        const res = await fetch("/chat", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ message })
        });

        const data = await res.json();

        addMessage(data.response, "bot");

        // Save for dashboard
        localStorage.setItem("lastResponse", data.response);
    }

    window.send = send;
}

// Dashboard
if (document.getElementById("symptomChart")) {

    const last = localStorage.getItem("lastResponse") || "No data";

    document.getElementById("summary").innerHTML =
        "<h3>Last Diagnosis</h3><p>" + last + "</p>";

    new Chart(document.getElementById("symptomChart"), {
        type: "bar",
        data: {
            labels: ["Example"],
            datasets: [{ data: [1] }]
        }
    });

    new Chart(document.getElementById("severityChart"), {
        type: "pie",
        data: {
            labels: ["LOW","MEDIUM","HIGH"],
            datasets: [{ data: [1,1,1] }]
        }
    });
}