import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";

function PostWritePage() {
	const navigate = useNavigate();

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	return (
		<>
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
		</>
	);
}

export default PostWritePage;