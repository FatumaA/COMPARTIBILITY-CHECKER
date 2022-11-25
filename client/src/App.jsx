import { Routes } from "react-router-dom";
import Wrapper from "./Wrapper";

function App() {
	return (
		<Routes>
			{/* add auth routes that dont display Nav bar and footer here */}
			<Routes element={<Wrapper />}>
				{/* add routes that display Nav and Footer here */}
			</Routes>
		</Routes>
	);
}

export default App;
