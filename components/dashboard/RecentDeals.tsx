const RecentDeals = () => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-xl font-bold">Recent Deals</h2>
      <ul className="space-y-4">
        <li className="flex items-center justify-between">
          <div>
            <p className="font-semibold">319 Haul Road</p>
            <p className="text-sm text-gray-600">Glenrock, WY</p>
          </div>
          <p className="font-bold">$5750</p>
        </li>
        {/* Repeat for other deals */}
      </ul>
      <div className="mt-6 flex items-center justify-between rounded-lg bg-indigo-100 p-4">
        <p>1824 Turkey Pen Road</p>
        <span className="rounded-full bg-indigo-600 px-3 py-1 text-white">
          In Progress
        </span>
      </div>
    </div>
  );
};
export default RecentDeals;
