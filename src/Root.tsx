import {Composition, Series} from 'remotion';
import {MyComposition, myCompSchema} from './Composition';
import { ILike } from './ILike';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<Series>
			<Series.Sequence durationInFrames={360}>
				<MyComposition titleText='This is not powtoon' titleColor='#000000' logoColor='#00bfff'/>
			</Series.Sequence>
		</Series>
		// <>
		// 	<Composition
		// 		id="MyComp"
		// 		component={MyComposition}
		// 		durationInFrames={240}
		// 		fps={30}
		// 		width={1280}
		// 		height={720}
		// 		schema={myCompSchema}
		// 		defaultProps={{
		// 			titleText: 'Welcome to Remotion with Tailwind CSS',
		// 			titleColor: '#000000',
		// 			logoColor: '#00bfff',
		// 		}}
		// 	/>
		// 	<Composition
		// 		id="ILike"
		// 		component={ILike}
		// 		durationInFrames={150}
		// 		height={720}
		// 		width={1280}
		// 		fps={24}
		// 	/>
		// </>
	);
};
