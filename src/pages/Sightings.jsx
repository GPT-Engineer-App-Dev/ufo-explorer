const Sightings = () => {
  const sightings = [
    { date: "2023-10-01", location: "Roswell, NM", description: "Bright light in the sky" },
    { date: "2023-09-15", location: "Area 51, NV", description: "Unidentified flying object spotted" },
    // Add more sightings here
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold">Recent UFO Sightings</h1>
      <ul className="mt-4 space-y-4">
        {sightings.map((sighting, index) => (
          <li key={index} className="border p-4 rounded-lg">
            <p><strong>Date:</strong> {sighting.date}</p>
            <p><strong>Location:</strong> {sighting.location}</p>
            <p><strong>Description:</strong> {sighting.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sightings;