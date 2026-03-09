const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

async function loadEvents() {
  const resp = await fetch('../data/sample-events.json');
  const events = await resp.json();
  events.sort((a, b) => new Date(a.date) - new Date(b.date));
  
  const container = document.getElementById('events');
  container.innerHTML = events.map(e => {
    const d = new Date(e.date);
    return `
      <div class="event-card">
        <div class="event-date">
          <div class="month">${months[d.getMonth()]}</div>
          <div class="day">${d.getDate()}</div>
        </div>
        <div class="event-info">
          <h3>${e.title}</h3>
          <div class="location">📍 ${e.location}</div>
          <p>${e.description}</p>
        </div>
      </div>`;
  }).join('');
}

loadEvents();
