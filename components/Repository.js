import Link from "next/link";

const Repository = ({ repo }) => {
  const { name, description, topics } = repo;
  return (
    <div className="mb-8 flex flex-col space-y-2">
      <Link href={`https://github.com/alerodriguezn/${name}`} className="flex items-center gap-2" target="_blank">
        <h4 className="text-white font-bold">{name}</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 text-white rounded-md"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </Link>

      <p className="text-white text-sm">{description}</p>
      <ol className="flex gap-1 ">
        {topics.map((topic) => (
          <li
            key={topic}
            className="text-gray-400 text-sm bg-slate-900 rounded-lg py-1 px-2"
          >
            {topic}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Repository;
