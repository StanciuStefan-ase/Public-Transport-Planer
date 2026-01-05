// Bucharest Public Transport Data
const transitData = {
    routes: [
        {
            id: 1,
            name: "M1 (Metrou)",
            type: "metro",
            duration: 35,
            distance: 16.7,
            frequency: 5,
            nextTimes: getCurrentTimes(5),
            color: "#FFD700",
            coordinates: [
                { x: 50, y: 200 },
                { x: 120, y: 180 },
                { x: 190, y: 160 },
                { x: 260, y: 150 },
                { x: 330, y: 145 },
                { x: 400, y: 150 },
                { x: 470, y: 160 },
                { x: 540, y: 180 },
                { x: 610, y: 200 },
                { x: 680, y: 220 },
                { x: 750, y: 240 }
            ],
            stops: [
                { name: "Pantelimon", time: "0 min" },
                { name: "Republica", time: "3 min" },
                { name: "Obor", time: "6 min" },
                { name: "Ștefan cel Mare", time: "9 min" },
                { name: "Piața Victoriei", time: "13 min" },
                { name: "Gara de Nord", time: "17 min" },
                { name: "Crângași", time: "21 min" },
                { name: "Petrache Poenaru", time: "25 min" },
                { name: "Preciziei", time: "28 min" },
                { name: "Păcii", time: "31 min" },
                { name: "Dristor", time: "35 min" }
            ]
        },
        {
            id: 2,
            name: "M2 (Metrou)",
            type: "metro",
            duration: 28,
            distance: 14.2,
            frequency: 6,
            nextTimes: getCurrentTimes(6),
            color: "#0066CC",
            coordinates: [
                { x: 50, y: 350 },
                { x: 140, y: 320 },
                { x: 230, y: 290 },
                { x: 320, y: 260 },
                { x: 410, y: 240 },
                { x: 500, y: 230 },
                { x: 590, y: 240 },
                { x: 680, y: 260 },
                { x: 750, y: 290 }
            ],
            stops: [
                { name: "Pipera", time: "0 min" },
                { name: "Aviatorilor", time: "3 min" },
                { name: "Piața Victoriei", time: "7 min" },
                { name: "Piața Romană", time: "10 min" },
                { name: "Universitate", time: "13 min" },
                { name: "Piața Unirii", time: "16 min" },
                { name: "Tineretului", time: "20 min" },
                { name: "Dimitrie Leonida", time: "24 min" },
                { name: "Berceni", time: "28 min" }
            ]
        },
        {
            id: 3,
            name: "M3 (Metrou)",
            type: "metro",
            duration: 22,
            distance: 11.8,
            frequency: 7,
            nextTimes: getCurrentTimes(7),
            color: "#FF0000",
            coordinates: [
                { x: 400, y: 350 },
                { x: 430, y: 320 },
                { x: 450, y: 280 },
                { x: 460, y: 240 },
                { x: 460, y: 200 },
                { x: 450, y: 160 },
                { x: 430, y: 120 },
                { x: 400, y: 80 }
            ],
            stops: [
                { name: "Anghel Saligny", time: "0 min" },
                { name: "Nicolae Grigorescu", time: "3 min" },
                { name: "Dristor", time: "6 min" },
                { name: "Piața Unirii", time: "10 min" },
                { name: "Eroilor", time: "13 min" },
                { name: "Politehnica", time: "16 min" },
                { name: "Lujerului", time: "19 min" },
                { name: "Preciziei", time: "22 min" }
            ]
        },
        {
            id: 4,
            name: "Bus 133",
            type: "bus",
            duration: 40,
            distance: 12.5,
            frequency: 10,
            nextTimes: getCurrentTimes(10),
            color: "#1976d2",
            coordinates: [
                { x: 100, y: 320 },
                { x: 180, y: 300 },
                { x: 260, y: 280 },
                { x: 340, y: 270 },
                { x: 420, y: 265 },
                { x: 500, y: 270 },
                { x: 580, y: 280 },
                { x: 660, y: 300 }
            ],
            stops: [
                { name: "Piața Presei Libere", time: "0 min" },
                { name: "Șoseaua Kiseleff", time: "5 min" },
                { name: "Piața Victoriei", time: "10 min" },
                { name: "Calea Victoriei", time: "15 min" },
                { name: "Piața Universității", time: "20 min" },
                { name: "Piața Unirii", time: "25 min" },
                { name: "Bulevardul Unirii", time: "30 min" },
                { name: "Piața Alba Iulia", time: "35 min" },
                { name: "Piața Sudului", time: "40 min" }
            ]
        },
        {
            id: 5,
            name: "Bus 783",
            type: "bus",
            duration: 35,
            distance: 11.2,
            frequency: 12,
            nextTimes: getCurrentTimes(12),
            color: "#2196F3",
            coordinates: [
                { x: 80, y: 280 },
                { x: 160, y: 260 },
                { x: 240, y: 245 },
                { x: 320, y: 240 },
                { x: 400, y: 245 },
                { x: 480, y: 260 },
                { x: 560, y: 280 },
                { x: 640, y: 300 }
            ],
            stops: [
                { name: "Gara de Nord", time: "0 min" },
                { name: "Buzești", time: "5 min" },
                { name: "Piața Romană", time: "10 min" },
                { name: "Piața Universității", time: "15 min" },
                { name: "Bulevardul Carol I", time: "20 min" },
                { name: "Piața Muncii", time: "25 min" },
                { name: "Parcul IOR", time: "30 min" },
                { name: "Pantelimon", time: "35 min" }
            ]
        },
        {
            id: 6,
            name: "Tramvai 41",
            type: "tram",
            duration: 45,
            distance: 14.8,
            frequency: 8,
            nextTimes: getCurrentTimes(8),
            color: "#f57c00",
            coordinates: [
                { x: 70, y: 150 },
                { x: 150, y: 140 },
                { x: 230, y: 135 },
                { x: 310, y: 140 },
                { x: 390, y: 150 },
                { x: 470, y: 165 },
                { x: 550, y: 180 },
                { x: 630, y: 200 },
                { x: 710, y: 220 }
            ],
            stops: [
                { name: "Gara de Nord", time: "0 min" },
                { name: "Piața Victoriei", time: "8 min" },
                { name: "Piața Romană", time: "13 min" },
                { name: "Piața Universității", time: "18 min" },
                { name: "Piața Unirii", time: "23 min" },
                { name: "Parcul Carol", time: "28 min" },
                { name: "Piața Muncii", time: "33 min" },
                { name: "Mihai Bravu", time: "38 min" },
                { name: "Vitan", time: "45 min" }
            ]
        },
        {
            id: 7,
            name: "Tramvai 1",
            type: "tram",
            duration: 50,
            distance: 16.5,
            frequency: 10,
            nextTimes: getCurrentTimes(10),
            color: "#FF6F00",
            coordinates: [
                { x: 50, y: 100 },
                { x: 140, y: 110 },
                { x: 230, y: 120 },
                { x: 320, y: 125 },
                { x: 410, y: 120 },
                { x: 500, y: 110 },
                { x: 590, y: 100 },
                { x: 680, y: 95 },
                { x: 750, y: 90 }
            ],
            stops: [
                { name: "Piața Presei Libere", time: "0 min" },
                { name: "Ștefan cel Mare", time: "8 min" },
                { name: "Obor", time: "13 min" },
                { name: "Piața Iancului", time: "18 min" },
                { name: "Parcul IOR", time: "25 min" },
                { name: "Titan", time: "32 min" },
                { name: "Costin Georgian", time: "38 min" },
                { name: "Republica", time: "43 min" },
                { name: "Pantelimon", time: "50 min" }
            ]
        }
    ]
};

// Function to generate current times based on frequency
function getCurrentTimes(frequency) {
    const times = [];
    const now = new Date();
    
    for (let i = 0; i < 5; i++) {
        const futureTime = new Date(now.getTime() + (i * frequency * 60000));
        const hours = String(futureTime.getHours()).padStart(2, '0');
        const minutes = String(futureTime.getMinutes()).padStart(2, '0');
        times.push(`${hours}:${minutes}`);
    }
    
    return times;
}

// Audio Context for generating notification sounds
let audioContext;
let audioEnabled = true;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Set up event listeners
    document.getElementById('locationBtn').addEventListener('click', useCurrentLocation);
    document.getElementById('searchBtn').addEventListener('click', searchRoutes);
    document.getElementById('audioNotifications').addEventListener('change', function(e) {
        audioEnabled = e.target.checked;
    });

    // Enter key support
    document.getElementById('origin').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') searchRoutes();
    });
    document.getElementById('destination').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') searchRoutes();
    });

    // Initialize Audio Context
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
        console.log('Web Audio API not supported');
    }

    // Show video section
    document.getElementById('videoSection').classList.add('active');
});

// Geolocation API - Use current location
function useCurrentLocation() {
    if (navigator.geolocation) {
        document.getElementById('origin').value = "Getting your location...";
        
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude.toFixed(4);
                const lon = position.coords.longitude.toFixed(4);
                document.getElementById('origin').value = `Current Location (${lat}, ${lon})`;
                playNotificationSound('success');
            },
            (error) => {
                alert("Unable to get your location. Please enter it manually.");
                document.getElementById('origin').value = "";
                playNotificationSound('error');
            }
        );
    } else {
        alert("Geolocation is not supported by your browser.");
    }
}

// Audio API - Play notification sounds
function playNotificationSound(type) {
    if (!audioEnabled || !audioContext) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    if (type === 'success') {
        // Success sound: ascending tones
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
        oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
        oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
    } else if (type === 'error') {
        // Error sound: descending tone
        oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime + 0.2);
    } else {
        // Default search sound
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // A4
    }

    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

// Search routes
function searchRoutes() {
    const origin = document.getElementById('origin').value.trim();
    const destination = document.getElementById('destination').value.trim();

    if (!origin || !destination) {
        alert("Please enter both origin and destination.");
        playNotificationSound('error');
        return;
    }

    // Play search sound
    playNotificationSound('search');

    // Show loading
    document.getElementById('loading').classList.add('active');
    document.getElementById('results').classList.remove('active');
    document.getElementById('canvasSection').classList.remove('active');

    // Simulate API call delay
    setTimeout(() => {
        displayResults();
        drawRouteVisualization();
        playNotificationSound('success');
    }, 1500);
}

// Display results
function displayResults() {
    const resultsSection = document.getElementById('results');
    const loading = document.getElementById('loading');
    
    loading.classList.remove('active');
    resultsSection.classList.add('active');

    let html = '';
    
    transitData.routes.forEach(route => {
        html += `
            <div class="route-card">
                <div class="route-header">
                    <div class="route-name">${route.name}</div>
                    <div class="route-type ${route.type}">${route.type.toUpperCase()}</div>
                </div>
                
                <div class="route-info">
                    <div class="info-item">
                        ⏱️ <span>${route.duration} min</span>
                    </div>
                    <div class="info-item">
                        📏 <span>${route.distance} km</span>
                    </div>
                    <div class="info-item">
                        🔄 <span>Every ${route.frequency} min</span>
                    </div>
                </div>
                
                <div class="schedule">
                    <div class="schedule-label">Next departures:</div>
                    <div class="times">
                        ${route.nextTimes.map(time => `<div class="time-chip">${time}</div>`).join('')}
                    </div>
                </div>
                
                <button class="stops-toggle" onclick="toggleStops(${route.id})">
                    View Stops & Timeline ▼
                </button>
                
                <div class="stops-list" id="stops-${route.id}">
                    ${route.stops.map(stop => `
                        <div class="stop-item">
                            <div class="stop-name">🚏 ${stop.name}</div>
                            <div class="stop-time">${stop.time}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });

    resultsSection.innerHTML = html;
}

// Canvas API - Draw route visualization
function drawRouteVisualization() {
    const canvasSection = document.getElementById('canvasSection');
    const canvas = document.getElementById('routeCanvas');
    const ctx = canvas.getContext('2d');

    canvasSection.classList.add('active');

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw grid background
    ctx.strokeStyle = '#f0f0f0';
    ctx.lineWidth = 1;
    for (let i = 0; i < canvas.width; i += 50) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
    }
    for (let i = 0; i < canvas.height; i += 50) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
    }

    // Draw title
    ctx.fillStyle = '#333';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('Harta Rute Transport Public București', 20, 30);
    
    ctx.font = '12px Arial';
    ctx.fillStyle = '#666';
    ctx.fillText('(Metrou, Autobuze și Tramvaie)', 20, 50);

    // Draw each route
    transitData.routes.forEach((route, index) => {
        // Draw route line
        ctx.strokeStyle = route.color;
        ctx.lineWidth = 4;
        ctx.beginPath();
        
        route.coordinates.forEach((point, i) => {
            if (i === 0) {
                ctx.moveTo(point.x, point.y);
            } else {
                ctx.lineTo(point.x, point.y);
            }
        });
        
        ctx.stroke();

        // Draw stops as circles
        route.coordinates.forEach((point, i) => {
            ctx.fillStyle = route.color;
            ctx.beginPath();
            ctx.arc(point.x, point.y, 6, 0, Math.PI * 2);
            ctx.fill();
            
            // Draw stop border
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.stroke();
        });

        // Draw route label
        const lastPoint = route.coordinates[route.coordinates.length - 1];
        ctx.fillStyle = route.color;
        ctx.font = 'bold 12px Arial';
        ctx.fillText(route.name, lastPoint.x + 15, lastPoint.y + 5);
    });

    // Draw legend
    ctx.fillStyle = '#333';
    ctx.font = '12px Arial';
    ctx.fillText('Start: ●  Stops: ●  End: ●', 20, canvas.height - 20);

    // Add animation effect
    animateRoutes(ctx, canvas);
}

// Animate routes on canvas
function animateRoutes(ctx, canvas) {
    let progress = 0;
    const animationSpeed = 0.005;

    function animate() {
        if (progress >= 1) return;

        progress += animationSpeed;

        transitData.routes.forEach(route => {
            const currentIndex = Math.floor(progress * (route.coordinates.length - 1));
            if (currentIndex < route.coordinates.length - 1) {
                const point = route.coordinates[currentIndex];
                
                // Draw animated vehicle
                ctx.fillStyle = route.color;
                ctx.beginPath();
                ctx.arc(point.x, point.y, 8, 0, Math.PI * 2);
                ctx.fill();
                
                // Draw glow effect
                ctx.fillStyle = route.color + '30';
                ctx.beginPath();
                ctx.arc(point.x, point.y, 12, 0, Math.PI * 2);
                ctx.fill();
            }
        });

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

    animate();
}

// Toggle stops visibility
function toggleStops(routeId) {
    const stopsList = document.getElementById(`stops-${routeId}`);
    const button = event.target;
    
    stopsList.classList.toggle('active');
    
    if (stopsList.classList.contains('active')) {
        button.textContent = 'Hide Stops & Timeline ▲';
    } else {
        button.textContent = 'View Stops & Timeline ▼';
    }
}