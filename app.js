// app.js
function updateCrowdStatus(locationId) {
    const checkbox = document.getElementById(`location-${locationId}`);
    const crowded = checkbox.checked;

    fetch(`/api/locations/${locationId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ crowded })
    });
}

// 混雑状況の初期状態を取得してチェックボックスに反映
document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/locations')
        .then(response => response.json())
        .then(data => {
            data.forEach(location => {
                const checkbox = document.getElementById(`location-${location.id}`);
                checkbox.checked = location.crowded;
            });
        });
});
