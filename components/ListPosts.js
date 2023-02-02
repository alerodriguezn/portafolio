import PreviewPost from "./PreviewPost"

const ListPosts = ({posts}) => {
  return (
    <div className="mt-4">
        {posts.map(post => (
            <PreviewPost key={post.id} post={post} />
        ))}
    </div>
  )
}

export default ListPosts