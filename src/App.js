import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./component/layout/Header";
import Wrapper from "./component/layout/Wrapper";
import Container from "./component/layout/Container";
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";
import Login from "./component/page/Login";
import data from "./data.json";

function App() {
	const [posts, setPosts] = useState(data);
	const [isLogin, setIsLogin] = useState(false);

	return (
		<>
			<Header>미니블로그</Header>
			<Wrapper>
				<Container>
					<Routes>
						{
							isLogin ?
								<Route index element={<MainPage posts={posts} />} />
								:
								<Route path="/" element={<Login />} />
						}
						<Route path="post-write" element={<PostWritePage />} />
						<Route path="post/:id" element={<PostViewPage posts={posts} setPosts={setPosts} />} />
					</Routes>
				</Container>
			</Wrapper>
		</>
	);
}

export default App;
