const TasksToDo = () => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-xl font-bold">Tasks To Do</h2>
      <ul className="space-y-2">
        <li className="flex justify-between">
          <p>30 Nov 2021</p>
          <p>Meeting with partners</p>
        </li>
        {/* Repeat for other tasks */}
      </ul>
      <button className="mt-4 w-full rounded bg-indigo-600 px-4 py-2 font-bold text-white">
        Add new task
      </button>
    </div>
  );
};
export default TasksToDo;
