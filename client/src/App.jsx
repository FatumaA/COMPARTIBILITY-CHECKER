import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Signup from "./pages/Signup";
import Wrapper from "./Wrapper";

function App() {
	return (
		<Routes>
			{/* add auth routes that dont display Nav bar and footer here */}
			<Route element={<Wrapper />}>
				{/* add routes that display Nav and Footer here */}
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/questions" element={<Quiz />} />

				{/* wildcard */}
				<Route
					path="*"
					element={
						<div className="flex items-center justify-center w-full h-auto">
							<h1 className=" text-3xl font-bold">404 page not found</h1>
						</div>
					}
				/>
			</Route>
		</Routes>
	);
}

export default App;
