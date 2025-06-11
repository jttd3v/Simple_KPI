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

function VesselRetentionOverview({ vessels }) {
  const activeCount = vessels.filter(v => v.status === "active").length;
  return (
    <section>
      <h2>Vessel Retention Overview</h2>
      <p>Total Active Vessels: {activeCount}</p>
      <ul>
        {vessels.map(vessel => (
          <li key={vessel.name}>
            <strong>{vessel.name}</strong> - {vessel.type} - {vessel.status} ({vessel.remarks})<br />
            Registered Owner: {vessel.registeredOwner}, Manager: {vessel.manager}, P&I Club: {vessel.pAndIClub}
          </li>
        ))}
      </ul>
    </section>
  );
}

function CrewStats({ stats }) {
  return (
    <section>
      <h2>Crew Onboard Statistics</h2>
      <ul>
        <li>Officers: {stats.officers}</li>
        <li>Ratings: {stats.ratings}</li>
        <li>Cadets: {stats.cadets}</li>
      </ul>
    </section>
  );
}

function FleetPoolingOverview({ pool }) {
  return (
    <section>
      <h2>Fleet Pooling Overview</h2>
      <p>Total Crew in Pool: {pool.totalCrew}</p>
    </section>
  );
}

function PrematureRepatriation({ data }) {
  const { totalCases, causes } = data;
  return (
    <section>
      <h2>Premature Repatriation Rate</h2>
      <p>Total Cases: {totalCases}</p>
      <ul>
        <li>Compassionate Grounds: {causes.compassionate}</li>
        <li>Medical Grounds: {causes.medical}</li>
        <li>Voluntary Repatriation: {causes.voluntary}</li>
        <li>Disciplinary Repatriation: {causes.disciplinary}</li>
        <li>Others: {causes.others}</li>
      </ul>
    </section>
  );
}

function CrewChangeSummary({ crewChanges }) {
  return (
    <section>
      <h2>Crew Change Summary</h2>
      <ul>
        {crewChanges.map((change, idx) => (
          <li key={idx}>{change.date} - {change.vessel}: {change.details}</li>
        ))}
      </ul>
    </section>
  );
}

function HireStatusReport({ hireStatus }) {
  return (
    <section>
      <h2>Hire Status Report</h2>
      <ul>
        {hireStatus.map((h, idx) => (
          <li key={idx}>{h.vessel} - New: {h.newHire}, Returning: {h.returning}</li>
        ))}
      </ul>
    </section>
  );
}

function AgeReport({ ageReport }) {
  return (
    <section>
      <h2>Average Age Report</h2>
      <ul>
        {ageReport.map((age, idx) => (
          <li key={idx}>{age.vessel} - Avg: {age.avgAge}, Max: {age.maxAge}, Min: {age.minAge}</li>
        ))}
      </ul>
    </section>
  );
}

function PromotionReport({ promotions }) {
  return (
    <section>
      <h2>Promotion Report</h2>
      <ul>
        {promotions.map((p, idx) => (
          <li key={idx}>{p.vessel} - {p.rank}: {p.count}</li>
        ))}
      </ul>
    </section>
  );
}

function TopPorts({ ports }) {
  return (
    <section>
      <h2>Top Ports Used for Crew Changes</h2>
      <ul>
        {ports.map((port, idx) => (
          <li key={idx}>{port}</li>
        ))}
      </ul>
    </section>
  );
}

function App() {
  return (
    <div>
      <VesselRetentionOverview vessels={data.vessels} />
      <CrewStats stats={data.crewStats} />
      <FleetPoolingOverview pool={data.crewPool} />
      <PrematureRepatriation data={data.prematureRepatriation} />
      <CrewChangeSummary crewChanges={data.crewChanges} />
      <HireStatusReport hireStatus={data.hireStatus} />
      <AgeReport ageReport={data.ageReport} />
      <PromotionReport promotions={data.promotions} />
      <TopPorts ports={data.topPorts} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
