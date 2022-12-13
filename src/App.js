import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./component/layout/Header";
import Wrapper from "./component/layout/Wrapper";
import Container from "./component/layout/Container";
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";

function App() {
	return (
		<>
			<Header>미니블로그</Header>
			<Wrapper>
				<Container>
					<Routes>
						<Route index element={<MainPage />} />
						<Route path="post-write" element={<PostWritePage />} />
						<Route path="post/:postId" element={<PostViewPage />} />
					</Routes>
				</Container>
			</Wrapper>
		</>
	);
}

export default App;
