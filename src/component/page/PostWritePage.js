import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";

const StyledContainer = styled.div`
	width: 100%;
	max-width: 720px;
	&>*{
		:not(:last-child){
			margin-bottom: 16px;
		}
	}
`;

function PostWritePage() {
	const navigate = useNavigate();

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	return (
		<StyledContainer>
			<TextInput
				height={20}
				value={title}
				onChange={(event) => {
					setTitle(event.target.value);
				}}
			/>

			<TextInput
				height={480}
				value={content}
				onChange={(event) => {
					setContent(event.target.value);
				}}
			/>

			<Button
				title="글 작성하기"
				onClick={() => {
					navigate("/");
				}}
			/>
		</StyledContainer>
	);
}

export default PostWritePage;