
const Repository = ({repo}) => {
  const {name, description, topics} = repo
  return (
    <div className="mb-2">
        <h4 className="text-white">{name}</h4>
        <p className="text-white text-sm">{description}</p>
        <ol className="flex gap-1 ">
        {topics.map(topic => (
            <li key={topic} className="text-white text-sm">{topic}</li>
        ))}
        </ol>
        
    </div>
  )
}

export default Repository