import { BrowserRouter, Routes } from "react-router-dom";
import { Sidebar } from "../components/ui/Sidebar";

export const AppRouter = () => {
	return (
		<BrowserRouter>
      <Sidebar/>
			<Routes></Routes>
		</BrowserRouter>
	);
};
