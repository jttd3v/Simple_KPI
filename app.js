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

