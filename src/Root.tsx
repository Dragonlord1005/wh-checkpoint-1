import {Composition} from 'remotion';
import { Cookies } from './Series';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		// <Series>
		// 	<Series.Sequence durationInFrames={360}>
		// 		<MyComposition titleText='This is not powtoon' titleColor='#000000' logoColor='#00bfff'/>
		// 	</Series.Sequence>
		// </Series>
		<>
			<Composition
				id="Cookies"
				component={Cookies}
				durationInFrames={720}
				fps={24}
				width={1280}
				height={720}
			/>

		</>
	);
};
