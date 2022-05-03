import { Header } from "./components/ui/Header";
import { TopArtists } from "./components/ui/TopArtists";
import { AppRouter } from "./routers/AppRouter";

function App() {
	return (
		<>
			<AppRouter />
			<Header/>
			<TopArtists/>
		</>
	);
}

export default App;
