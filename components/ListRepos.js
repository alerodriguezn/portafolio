import Repository from "./Repository"

const ListRepos = ({repos}) => {
  return (
    <section className="mt-8">
        <h2 className="text-white font-bold text-2xl mb-3">GitHub Projects</h2>
        {repos.map(repo => (
            <Repository key={repo.name} repo={repo}/>
        ))}

    </section>
  )
}

export default ListRepos