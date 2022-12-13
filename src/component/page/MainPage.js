import React from "react";
import { useNavigate } from "react-router-dom";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from "../../data.json";

function MainPage() {
	const navigate = useNavigate();

	return (
		<>
			<Button
				title="글 작성하기"
				onClick={() => {
					navigate("/post-write");
				}}
			/>

			<PostList
				dataPosts={data}
				onClickItem={(item) => {
					navigate(`/post/${item.id}`);
				}}
			/>
		</>
	);

}

export default MainPage;