import { Header } from "./components/ui/Header";
import { SidebarArtists } from "./components/ui/SidebarArtists";
import { AppRouter } from "./routers/AppRouter";
import { Home } from "./views/Home";

function App() {
	return (
		<div className="layout">
			<div className="sidebar-left">
				<AppRouter />
			</div>
			<div className="header">
				<Header />
			</div>
			<div className="sidebar-right">
				<SidebarArtists />
			</div>
			<main className="main">
				<Home />
			</main>
		</div>
	);
}

export default App;
