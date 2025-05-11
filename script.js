function analyzeEquation() {
    const equation = document.getElementById('equation').value.trim();
    const analysisResult = document.getElementById('analysis-result');
    const graphCanvas = document.getElementById('graphCanvas');
    const ctx = graphCanvas.getContext('2d');

    // Reset canvas
    ctx.clearRect(0, 0, graphCanvas.width, graphCanvas.height);

    // Simple analysis (can be extended)
    let analysisText = '';
    if (equation.match(/x\^2 \+ y\^2/)) {
        analysisText = 'Ini adalah persamaan lingkaran.';
        drawCircle();
    } else if (equation.match(/y\^2 = 4ax/)) {
        analysisText = 'Ini adalah persamaan parabola.';
        drawParabola();
    } else if (equation.match(/x\^2\/a\^2 \+ y\^2\/b\^2/)) {
        analysisText = 'Ini adalah persamaan elips.';
        drawEllipse();
    } else if (equation.match(/y = mx \+ c/)) {
        analysisText = 'Ini adalah persamaan garis lurus.';
        drawLine();
    } else {
        analysisText = 'Persamaan tidak dikenali atau format salah.';
    }

    analysisResult.textContent = analysisText;
}

function drawCircle() {
    const ctx = document.getElementById('graphCanvas').getContext('2d');
    ctx.beginPath();
    ctx.arc(250, 250, 100, 0, 2 * Math.PI);
    ctx.strokeStyle = 'blue';
    ctx.stroke();
}

function drawParabola() {
    const ctx = document.getElementById('graphCanvas').getContext('2d');
    ctx.beginPath();
    ctx.moveTo(50, 250);
    for (let x = -200; x <= 200; x++) {
        let y = (x * x) / 100; // Simplified parabola equation
        ctx.lineTo(250 + x, 250 - y);
    }
    ctx.strokeStyle = 'red';
    ctx.stroke();
}

function drawEllipse() {
    const ctx = document.getElementById('graphCanvas').getContext('2d');
    ctx.beginPath();
    ctx.ellipse(250, 250, 150, 100, 0, 0, 2 * Math.PI);
    ctx.strokeStyle = 'green';
    ctx.stroke();
}

function drawLine() {
    const ctx = document.getElementById('graphCanvas').getContext('2d');
    ctx.beginPath();
    ctx.moveTo(50, 450);
    ctx.lineTo(450, 50); // Example line y = x
    ctx.strokeStyle = 'purple';
    ctx.stroke();
}
