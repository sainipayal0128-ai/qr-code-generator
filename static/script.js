document.getElementById("qr-form").addEventListener("submit", async function(event) {

    event.preventDefault();

    const url = document.getElementById("urlInput").value;

    const response = await fetch("/qr", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ url: url })
    });

    const data = await response.json();

    document.getElementById("qrResult").innerHTML = `
        <div class="flex justify-center mt-8">
            <div class="border-2 border-black rounded-lg p-5 inline-block">
                <img
                    src="data:image/png;base64,${data.qr_code}"
                    class="w-48 h-48 object-contain"
                >
            </div>
        </div>
    `;

});
