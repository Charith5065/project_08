function generateQRCode() {
    const text = document.getElementById("text").value;
    const qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";

    if (text.trim().length === 0) {
        alert("Please enter text");
        return;
    }

    const canvas = document.createElement("canvas");
    QRCode.toCanvas(canvas, text, { width: 200 }, function (error) {
        if (error) console.error(error);
    });
    qrcodeContainer.appendChild(canvas);
}