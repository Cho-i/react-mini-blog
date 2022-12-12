import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from "../../data.json";

const StyledContainer = styled.div`
	width: 100%;
	max-width: 720px;
	&>*{
		:not(:last-child){
			margin-bottom: 16px;
		}
	}
`;

function MainPage() {
	const navigate = useNavigate();

	return (
		<StyledContainer>
			<Button
				title="글 작성하기"
				onClick={() => {
					navigate("/post-write");
				}}
			/>

			<PostList
				posts={data}
				onClickItem={(item) => {
					navigate(`/post/${item.id}`);
				}}
			/>
		</StyledContainer>
	);

}

export default MainPage;