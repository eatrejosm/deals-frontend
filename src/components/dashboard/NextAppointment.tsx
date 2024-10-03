const NextAppointment = () => {
  return (
    <div className="rounded-lg bg-indigo-600 p-6 text-white shadow-lg">
      <h2 className="mb-2 text-lg font-bold">Next Appointment</h2>
      <p>319 Haul Road</p>
      <p>Glenrock, WY 12345</p>
      <p className="mt-4">Appointment Date</p>
      <p className="text-2xl font-semibold">Nov 18 2021, 17:00</p>
      <p className="mt-4">Room Area: 100 M²</p>
      <p>People: 10</p>
      <p className="mt-4 text-xl">
        Price: <strong>$5750</strong>
      </p>
      <button className="mt-6 rounded bg-white px-4 py-2 font-bold text-indigo-600">
        See Detail
      </button>
    </div>
  );
};
export default NextAppointment;
