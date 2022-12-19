import { useState } from "react";
import Button from "../ui/Button";

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	/**
	 * https://www.melivecode.com/
	 * https://reqres.in/
	 */

	const onChange = (e) => {
		const { target: { name, value } } = e;
		if (name === 'email') {
			setEmail(value);
		} else if (name === 'password') {
			setPassword(value);
		}
	}

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log('로그인');
		try {

		} catch (element) {
			console.log(e);
			//setError(error.message);
		}
	}

	return (
		<>
			<p>로그인을 해주세요</p>
			<form onSubmit={onSubmit}>
				<input type="text" placeholder="이메일" />
				<input type="password" placeholder="비밀번호" />
				<Button
					title="로그인"
					onClick={() => {
						//navigate("/");
					}}
				/>
			</form>
			{error}
		</>
	)
}
export default Login;