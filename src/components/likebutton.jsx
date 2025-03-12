import { useState } from "react";
import { Heart } from "lucide-react";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={toggleLike}
      className={`mt-2 px-4 py-1 rounded-full text-white font-medium ${
        liked ? "bg-red-500" : "bg-gray-400"
      }`}
    >
      <Heart
        className="inline-block mr-1"
        size={16}
        color={liked ? "white" : "black"}
        fill={liked ? "white" : "none"}
      />
      {liked ? "Liked ❤️" : "Like"}
    </button>
  );
}

export default LikeButton;
