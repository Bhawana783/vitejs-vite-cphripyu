import LikeButton from "./likebutton";

function PostCard({ profilePic, username, content }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-start gap-3">
      <img
        src={profilePic}
        alt="Profile"
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h3 className="font-bold text-lg">{username}</h3>
        <p className="text-gray-700">{content}</p>
        <LikeButton />
      </div>
    </div>
  );
}

export default PostCard;
