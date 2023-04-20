import { LevelContext } from "../PageContext/PageContext";

const SectionContext = ({ level, children }) => (
	<section
		style={{
			border: "1px solid black",
			padding: "1rem",
			borderRadius: "10px",
		}}>
		<LevelContext.Provider value={level}>
			{children}
		</LevelContext.Provider>
	</section>
);

export default SectionContext;
