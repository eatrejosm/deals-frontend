const Customers = () => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-xl font-bold">Customers</h2>
      <ul className="space-y-4">
        <li className="flex justify-between">
          <div>
            <p className="font-semibold">Deanna Annis</p>
            <p className="text-sm text-gray-600">deannannis@gmail.com</p>
          </div>
          <a href="#" className="text-indigo-600 hover:underline">
            Edit
          </a>
        </li>
        {/* Repeat for other customers */}
      </ul>
    </div>
  );
};
export default Customers;
