
import Repository from "./Repository"
import { FaGithub } from 'react-icons/fa';

const ListRepos = ({repos}) => {
  return (
    <section className="mt-8">
        <h2 className="text-white font-bold text-2xl mb-6 flex items-center gap-2"><FaGithub/>GitHub Projects</h2>
        {repos.map(repo => (
            <Repository key={repo.name} repo={repo}/>
        ))}

    </section>
  )
}

export default ListRepos