// Sample data for the operational report dashboard
const data = {
  vessels: [
    {
      name: "Vessel A",
      type: "Bulk Carrier",
      status: "active",
      remarks: "Operating normally",
      registeredOwner: "Owner A",
      manager: "Manager A",
      pAndIClub: "Club A",
    },
    {
      name: "Vessel B",
      type: "Tanker",
      status: "sold",
      remarks: "Sold in June",
      registeredOwner: "Owner B",
      manager: "Manager B",
      pAndIClub: "Club B",
    },
  ],
  crewStats: {
    officers: 20,
    ratings: 30,
    cadets: 5,
  },
  crewPool: {
    totalCrew: 100,
  },
  prematureRepatriation: {
    totalCases: 3,
    causes: {
      compassionate: 1,
      medical: 1,
      voluntary: 0,
      disciplinary: 1,
      others: 0,
    },
  },
  crewChanges: [
    { vessel: "Vessel A", date: "2023-01-15", details: "Changed 5 crew" },
    { vessel: "Vessel B", date: "2023-03-20", details: "Changed 4 crew" },
  ],
  hireStatus: [
    { vessel: "Vessel A", newHire: 3, returning: 2 },
    { vessel: "Vessel B", newHire: 1, returning: 3 },
  ],
  ageReport: [
    { vessel: "Vessel A", avgAge: 35, maxAge: 60, minAge: 22 },
    { vessel: "Vessel B", avgAge: 33, maxAge: 58, minAge: 20 },
  ],
  promotions: [
    { vessel: "Vessel A", rank: "Chief Officer", count: 2 },
    { vessel: "Vessel B", rank: "Second Engineer", count: 1 },
  ],
  topPorts: ["Singapore", "Rotterdam", "Shanghai"],
};

function addSection(container, title, innerHTML) {
  const section = document.createElement('section');
  const heading = document.createElement('h2');
  heading.textContent = title;
  section.appendChild(heading);
  section.insertAdjacentHTML('beforeend', innerHTML);
  container.appendChild(section);
}

function vesselRetentionHTML(vessels) {
  const activeCount = vessels.filter(v => v.status === 'active').length;
  let html = `<p>Total Active Vessels: ${activeCount}</p><ul>`;
  vessels.forEach(v => {
    html += `<li><strong>${v.name}</strong> - ${v.type} - ${v.status} (${v.remarks})<br>` +
            `Registered Owner: ${v.registeredOwner}, Manager: ${v.manager}, P&I Club: ${v.pAndIClub}</li>`;
  });
  html += '</ul>';
  return html;
}

function crewStatsHTML(stats) {
  return `<ul><li>Officers: ${stats.officers}</li>` +
         `<li>Ratings: ${stats.ratings}</li>` +
         `<li>Cadets: ${stats.cadets}</li></ul>`;
}

function fleetPoolHTML(pool) {
  return `<p>Total Crew in Pool: ${pool.totalCrew}</p>`;
}

function repatriationHTML(data) {
  const { totalCases, causes } = data;
  return `<p>Total Cases: ${totalCases}</p>` +
         `<ul>` +
         `<li>Compassionate Grounds: ${causes.compassionate}</li>` +
         `<li>Medical Grounds: ${causes.medical}</li>` +
         `<li>Voluntary Repatriation: ${causes.voluntary}</li>` +
         `<li>Disciplinary Repatriation: ${causes.disciplinary}</li>` +
         `<li>Others: ${causes.others}</li>` +
         `</ul>`;
}

function crewChangeHTML(changes) {
  let html = '<ul>';
  changes.forEach(c => {
    html += `<li>${c.date} - ${c.vessel}: ${c.details}</li>`;
  });
  html += '</ul>';
  return html;
}

function hireStatusHTML(status) {
  let html = '<ul>';
  status.forEach(h => {
    html += `<li>${h.vessel} - New: ${h.newHire}, Returning: ${h.returning}</li>`;
  });
  html += '</ul>';
  return html;
}

function ageReportHTML(report) {
  let html = '<ul>';
  report.forEach(a => {
    html += `<li>${a.vessel} - Avg: ${a.avgAge}, Max: ${a.maxAge}, Min: ${a.minAge}</li>`;
  });
  html += '</ul>';
  return html;
}

function promotionHTML(promotions) {
  let html = '<ul>';
  promotions.forEach(p => {
    html += `<li>${p.vessel} - ${p.rank}: ${p.count}</li>`;
  });
  html += '</ul>';
  return html;
}

function topPortsHTML(ports) {
  let html = '<ul>';
  ports.forEach(port => {
    html += `<li>${port}</li>`;
  });
  html += '</ul>';
  return html;
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  addSection(root, 'Vessel Retention Overview', vesselRetentionHTML(data.vessels));
  addSection(root, 'Crew Onboard Statistics', crewStatsHTML(data.crewStats));
  addSection(root, 'Fleet Pooling Overview', fleetPoolHTML(data.crewPool));
  addSection(root, 'Premature Repatriation Rate', repatriationHTML(data.prematureRepatriation));
  addSection(root, 'Crew Change Summary', crewChangeHTML(data.crewChanges));
  addSection(root, 'Hire Status Report', hireStatusHTML(data.hireStatus));
  addSection(root, 'Average Age Report', ageReportHTML(data.ageReport));
  addSection(root, 'Promotion Report', promotionHTML(data.promotions));
  addSection(root, 'Top Ports Used for Crew Changes', topPortsHTML(data.topPorts));
});
