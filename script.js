// bus data
const LOCATIONS = {
    'piata-victoriei': { 
        name: 'Piata Victoriei', 
        x: 400, y: 150,
        lat: 44.4518, lng: 26.0833,
        metro: ['M1', 'M2'],
        buses: ['133', '783', '131', '335'],
        trams: ['11']
    },
    'gara-de-nord': { 
        name: 'Gara de Nord', 
        x: 350, y: 180,
        lat: 44.4458, lng: 26.0750,
        metro: ['M1'],
        buses: ['783', '86', '131', '205'],
        trams: ['41']
    },
    'piata-unirii': { 
        name: 'Piata Unirii', 
        x: 400, y: 280,
        lat: 44.4268, lng: 26.1025,
        metro: ['M1', 'M2', 'M3'],
        buses: ['133', '104', '123', '300'],
        trams: ['21', '25']
    },
    'piata-romana': { 
        name: 'Piata Romana', 
        x: 420, y: 200,
        lat: 44.4443, lng: 26.0979,
        metro: ['M2'],
        buses: ['783', '331', '368'],
        trams: ['1', '10']
    },
    'universitate': { 
        name: 'Universitate', 
        x: 410, y: 250,
        lat: 44.4363, lng: 26.1009,
        metro: ['M2'],
        buses: ['133', '104', '205', '336'],
        trams: ['1', '10', '19']
    },
    'obor': { 
        name: 'Obor', 
        x: 500, y: 230,
        lat: 44.4314, lng: 26.1267,
        metro: ['M1'],
        buses: ['181', '243', '330'],
        trams: ['1', '16', '36']
    },
    'pantelimon': { 
        name: 'Pantelimon', 
        x: 630, y: 240,
        lat: 44.4365, lng: 26.1742,
        metro: ['M1'],
        buses: ['330', '243', '104'],
        trams: ['1']
    },
    'pipera': { 
        name: 'Pipera', 
        x: 480, y: 80,
        lat: 44.4902, lng: 26.1197,
        metro: ['M2'],
        buses: ['135', '301', '205'],
        trams: []
    },
    'berceni': { 
        name: 'Berceni', 
        x: 400, y: 420,
        lat: 44.3771, lng: 26.1026,
        metro: ['M2'],
        buses: ['136', '385', '232'],
        trams: []
    },
    'militari': { 
        name: 'Militari', 
        x: 150, y: 260,
        lat: 44.4387, lng: 26.0305,
        metro: [],
        buses: ['137', '178', '336'],
        trams: []
    },
    'drumul-taberei': { 
        name: 'Drumul Taberei', 
        x: 200, y: 300,
        lat: 44.4184, lng: 26.0450,
        metro: [],
        buses: ['104', '300', '385'],
        trams: []
    },
    'titan': { 
        name: 'Titan', 
        x: 550, y: 320,
        lat: 44.4234, lng: 26.1579,
        metro: [],
        buses: ['330', '345', '504'],
        trams: ['1', '40']
    },
    'dristor': { 
        name: 'Dristor', 
        x: 480, y: 350,
        lat: 44.4127, lng: 26.1443,
        metro: ['M1', 'M3'],
        buses: ['181', '104', '330'],
        trams: []
    },
    'eroilor': { 
        name: 'Eroilor', 
        x: 350, y: 320,
        lat: 44.4315, lng: 26.0862,
        metro: ['M3'],
        buses: ['123', '385', '336'],
        trams: ['21', '32']
    },
    'aviatorilor': { 
        name: 'Aviatorilor', 
        x: 450, y: 120,
        lat: 44.4697, lng: 26.0856,
        metro: ['M2'],
        buses: ['301', '131', '335'],
        trams: []
    },
    'piata-presei': { 
        name: 'Piata Presei Libere', 
        x: 400, y: 100,
        lat: 44.4821, lng: 26.0833,
        metro: [],
        buses: ['133', '331', '282'],
        trams: ['1']
    },
    'basarab': { 
        name: 'Basarab', 
        x: 320, y: 160,
        lat: 44.4479, lng: 26.0758,
        metro: [],
        buses: ['783', '86', '232'],
        trams: []
    },
    'politehnica': { 
        name: 'Politehnica', 
        x: 280, y: 300,
        lat: 44.4392, lng: 26.0493,
        metro: ['M3'],
        buses: ['137', '336', '385'],
        trams: []
    },
    'lujerului': { 
        name: 'Lujerului', 
        x: 240, y: 280,
        lat: 44.4341, lng: 26.0354,
        metro: ['M3'],
        buses: ['178', '137', '336'],
        trams: []
    },
    'crangasi': { 
        name: 'Crangasi', 
        x: 280, y: 200,
        lat: 44.4656, lng: 26.0522,
        metro: ['M1'],
        buses: ['178', '330', '385'],
        trams: ['11', '5']
    }
};


const PREDEFINED_ROUTES = {
    'piata-victoriei-piata-unirii': {
        routes: [
            { type: 'metro', line: 'M2', duration: 6, stops: ['Piata Victoriei', 'Piata Romana', 'Universitate', 'Piata Unirii'] },
            { type: 'bus', line: '133', duration: 15, stops: ['Piata Victoriei', 'Calea Victoriei', 'Universitate', 'Piata Unirii'] }
        ]
    },
    'gara-de-nord-piata-unirii': {
        routes: [
            { type: 'metro', line: 'M1', duration: 8, stops: ['Gara de Nord', 'Piata Victoriei', 'Universitate', 'Piata Unirii'] },
            { type: 'bus', line: '783', duration: 12, stops: ['Gara de Nord', 'Universitate', 'Piata Unirii'] }
        ]
    },
    'obor-piata-victoriei': {
        routes: [
            { type: 'metro', line: 'M1', duration: 8, stops: ['Obor', 'Stefan cel Mare', 'Piata Victoriei'] },
            { type: 'tram', line: '1', duration: 18, stops: ['Obor', 'Stefan cel Mare', 'Piata Victoriei'] }
        ]
    },
    'pipera-piata-unirii': {
        routes: [
            { type: 'metro', line: 'M2', duration: 15, stops: ['Pipera', 'Aviatorilor', 'Piata Victoriei', 'Piata Romana', 'Universitate', 'Piata Unirii'] },
            { type: 'bus', line: '135', duration: 25, stops: ['Pipera', 'Aviatorilor', 'Piata Victoriei', 'Piata Unirii'] }
        ]
    }
};


let audioContext;
let audioEnabled = true;
let currentRoute = null;

// start
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchBtn').addEventListener('click', planRoute);
    document.getElementById('useLocationBtn').addEventListener('click', useMyLocation);
    document.getElementById('audioNotifications').addEventListener('change', function(e) {
        audioEnabled = e.target.checked;
    });

    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
        console.log('Web Audio API not supported');
    }

    document.getElementById('videoSection').classList.add('active');
    console.log('Bucharest Transport Planner initialized');
});

// function for the calculation of the distance
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; 
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// nearest location function
function findNearestLocation(userLat, userLng) {
    let nearestLocation = null;
    let minDistance = Infinity;
    
    for (const [key, location] of Object.entries(LOCATIONS)) {
        const distance = calculateDistance(userLat, userLng, location.lat, location.lng);
        
        if (distance < minDistance) {
            minDistance = distance;
            nearestLocation = { key, location, distance };
        }
    }
    
    return nearestLocation;
}

// current location of use
function useMyLocation() {
    const button = document.getElementById('useLocationBtn');
    const originSelect = document.getElementById('origin');
    
    if (!navigator.geolocation) {
        alert('Geolocation is not supported by your browser!');
        playNotificationSound('error');
        return;
    }
    
    // disable button in loading
    button.disabled = true;
    button.textContent = '⏳ Getting location...';
    playNotificationSound('search');
    
    navigator.geolocation.getCurrentPosition(
        function(position) {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;
            
            console.log(`User location: ${userLat}, ${userLng}`);
            
           
            const nearest = findNearestLocation(userLat, userLng);
            
            if (nearest) {
               
                originSelect.value = nearest.key;
                
              
                const distanceKm = nearest.distance.toFixed(2);
                alert(`Nearest station: ${nearest.location.name} (${distanceKm} km away)`);
                
                playNotificationSound('success');
            } else {
                alert('Could not find a nearby location!');
                playNotificationSound('error');
            }
            
            // re enable button
            button.disabled = false;
            button.textContent = 'My Location';
        },
        function(error) {
            console.error('Error getting location:', error);
            
            let errorMessage = 'Could not get your location. ';
            
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    errorMessage += 'Permission denied. Please allow location access in browser settings.';
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMessage += 'Location information unavailable.';
                    break;
                case error.TIMEOUT:
                    errorMessage += 'Timeout - please try again.';
                    break;
                default:
                    errorMessage += 'An unknown error occurred.';
            }
            
            alert(errorMessage);
            playNotificationSound('error');
            
            
            button.disabled = false;
            button.textContent = 'My Location';
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
}

// audio api
function playNotificationSound(type) {
    if (!audioEnabled || !audioContext) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    if (type === 'success') {
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1);
        oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2);
    } else if (type === 'error') {
        oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime + 0.2);
    } else {
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
    }

    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

// route planning function
function planRoute() {
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;

    if (!origin || !destination) {
        alert('Please select starting point and destination!');
        playNotificationSound('error');
        return;
    }

    if (origin === destination) {
        alert('Starting point and destination are the same!');
        playNotificationSound('error');
        return;
    }

    playNotificationSound('search');

    document.getElementById('loading').classList.add('active');
    document.getElementById('results').classList.remove('active');
    document.getElementById('canvasSection').classList.remove('active');

    setTimeout(() => {
        displayRoute(origin, destination);
        playNotificationSound('success');
    }, 1200);
}

// display route information
function displayRoute(originKey, destKey) {
    const loading = document.getElementById('loading');
    const resultsSection = document.getElementById('results');
    
    loading.classList.remove('active');
    resultsSection.classList.add('active');
    const originLoc = LOCATIONS[originKey];
    const destLoc = LOCATIONS[destKey];
    const routeKey1 = `${originKey}-${destKey}`;
    const routeKey2 = `${destKey}-${originKey}`;
    
    let routeData = PREDEFINED_ROUTES[routeKey1] || PREDEFINED_ROUTES[routeKey2];
    
    
    if (!routeData) {
        routeData = generateApproximateRoute(originLoc, destLoc);
    }

    currentRoute = {
        origin: originLoc,
        destination: destLoc,
        routes: routeData.routes
    };

    let html = `
        <div style="padding: 20px; background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%); 
                    margin-bottom: 20px; border-radius: 15px; border-left: 5px solid #667eea;">
            <h3 style="margin: 0 0 10px 0; color: #333;">Planned Route</h3>
            <div style="font-size: 16px; color: #555;">
                <strong>From:</strong> ${originLoc.name} 
                <span style="color: #667eea; margin: 0 10px;">→</span> 
                <strong>To:</strong> ${destLoc.name}
            </div>
        </div>
    `;

    routeData.routes.forEach((route, index) => {
        html += createRouteCard(route, index + 1);
    });

    resultsSection.innerHTML = html;
    drawRouteOnCanvas();
}


function generateApproximateRoute(origin, dest) {
    const routes = [];
    
  
    const commonMetro = origin.metro.filter(line => dest.metro.includes(line));
    if (commonMetro.length > 0) {
        routes.push({
            type: 'metro',
            line: commonMetro[0],
            duration: Math.floor(Math.random() * 10) + 10,
            stops: [origin.name, '...', dest.name]
        });
    }
    
    
    if (origin.buses.length > 0) {
        routes.push({
            type: 'bus',
            line: origin.buses[0],
            duration: Math.floor(Math.random() * 15) + 15,
            stops: [origin.name, '...', dest.name]
        });
    }
    
 
    if (origin.trams.length > 0) {
        routes.push({
            type: 'tram',
            line: origin.trams[0],
            duration: Math.floor(Math.random() * 20) + 20,
            stops: [origin.name, '...', dest.name]
        });
    }
    
   
    if (routes.length === 0) {
        routes.push({
            type: 'bus',
            line: '133',
            duration: 25,
            stops: [origin.name, 'Transfer', dest.name]
        });
    }
    
    return { routes };
}


function createRouteCard(route, index) {
    const icons = {
        'metro': '🚇',
        'bus': '🚌',
        'tram': '🚊'
    };
    
    const colors = {
        'metro': '#0066CC',
        'bus': '#2196F3',
        'tram': '#FF6F00'
    };
    
    const typeNames = {
        'metro': 'METRO',
        'bus': 'BUS',
        'tram': 'TRAM'
    };
    
    const icon = icons[route.type] || '🚌';
    const color = colors[route.type] || '#2196F3';
    const typeName = typeNames[route.type] || 'BUS';

    return `
        <div class="route-card" style="border-left: 5px solid ${color}">
            <div class="route-header">
                <div class="route-name">${icon} ${typeName} ${route.line}</div>
                <div class="route-type" style="background: ${color}20; color: ${color}">${typeName}</div>
            </div>
            
            <div class="route-info">
                <div class="info-item">
                     <span>${route.duration} min</span>
                </div>
                <div class="info-item">
                    <span>Line ${route.line}</span>
                </div>
                <div class="info-item">
                    <span>Direct</span>
                </div>
            </div>
        </div>
    `;
}

// canvas api
function drawRouteOnCanvas() {
    const canvasSection = document.getElementById('canvasSection');
    const canvas = document.getElementById('routeCanvas');
    const ctx = canvas.getContext('2d');

    canvasSection.classList.add('active');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

  
    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

  
    ctx.strokeStyle = '#e0e0e0';
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

    
    ctx.fillStyle = '#333';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('Bucharest Map - Planned Route', 20, 35);

    if (!currentRoute) return;

    const origin = currentRoute.origin;
    const dest = currentRoute.destination;

 
    ctx.fillStyle = '#ccc';
    ctx.font = '10px Arial';
    Object.values(LOCATIONS).forEach(loc => {
        ctx.beginPath();
        ctx.arc(loc.x, loc.y, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillText(loc.name, loc.x + 8, loc.y + 3);
    });

    ctx.strokeStyle = '#667eea';
    ctx.lineWidth = 6;
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(origin.x, origin.y);
    ctx.lineTo(dest.x, dest.y);
    ctx.stroke();

    ctx.fillStyle = '#4CAF50';
    ctx.beginPath();
    ctx.arc(origin.x, origin.y, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = '#f44336';
    ctx.beginPath();
    ctx.arc(dest.x, dest.y, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = '#333';
    ctx.font = 'bold 14px Arial';
    ctx.fillText(origin.name, origin.x - 30, origin.y - 20);
    ctx.fillText(dest.name, dest.x - 30, dest.y + 30);

    animateVehicle(ctx, origin, dest);

    ctx.fillStyle = '#333';
    ctx.font = '12px Arial';
    ctx.fillText('Start    Destination    ━ Route', 20, canvas.height - 20);
}

function animateVehicle(ctx, origin, dest) {
    let progress = 0;
    const speed = 0.01;

    function animate() {
        if (progress >= 1) return;

        progress += speed;
        const x = origin.x + (dest.x - origin.x) * progress;
        const y = origin.y + (dest.y - origin.y) * progress;

        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#FF6F00';
        ctx.lineWidth = 2;
        ctx.stroke();

        requestAnimationFrame(animate);
    }

    animate();
}