import { Header } from "./components/ui/Header";
import { SidebarArtists } from "./components/ui/SidebarArtists";
import { AppRouter } from "./routers/AppRouter";

function App() {
	return (
		<>
			<AppRouter />
			<Header/>
			<SidebarArtists/>
		</>
	);
}

export default App;
