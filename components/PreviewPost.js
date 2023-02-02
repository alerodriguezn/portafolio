import Link from "next/link";
import { formatDate } from "@/utils/helpers"

const PreviewPost = ({ post }) => {
  return (
    <div className="mt-4">
      <Link href="#" className="flex items-center gap-2">
        <p className="text-white">{post.title}</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white rounded-md">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>


      </Link>


      <p className="text-gray-600 text-sm ">{formatDate(post.created_at)}</p>
    </div>
  )
}

export default PreviewPost