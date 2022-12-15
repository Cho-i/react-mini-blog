import React from "react";
import { useNavigate } from "react-router-dom";
import PostList from "../list/PostList";
import Button from "../ui/Button";

function MainPage({ posts }) {
	const navigate = useNavigate();

	return (
		<>
			<Button
				title="글 작성하기"
				onClick={() => {
					navigate("/post-write");
				}}
			/>

			<PostList posts={posts} />
		</>
	);

}

export default MainPage;