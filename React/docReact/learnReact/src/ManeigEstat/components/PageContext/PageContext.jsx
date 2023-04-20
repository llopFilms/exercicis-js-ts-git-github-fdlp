import { createContext } from "react";
import HeadingContext from "../HeadingContext";
import SectionContext from "../SectionContext";

export const LevelContext = createContext();

const PageContext = () => {
	return (
		<SectionContext level={1}>
			<HeadingContext>Title</HeadingContext>
			<SectionContext level={2}>
				<HeadingContext>Heading</HeadingContext>
				<HeadingContext>Heading</HeadingContext>
				<HeadingContext>Heading</HeadingContext>
				<SectionContext level={3}>
					<HeadingContext>Sub-heading</HeadingContext>
					<HeadingContext>Sub-heading</HeadingContext>
					<HeadingContext>Sub-heading</HeadingContext>
					<SectionContext level={4}>
						<HeadingContext>Sub-sub-heading</HeadingContext>
						<HeadingContext>Sub-sub-heading</HeadingContext>
						<HeadingContext>Sub-sub-heading</HeadingContext>
					</SectionContext>
				</SectionContext>
			</SectionContext>
		</SectionContext>
	);
};

export default PageContext;
