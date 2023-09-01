import { Series } from "remotion";
import { MyComposition, myCompSchema } from "./Composition";
import { ILike } from "./ILike";

export const Cookies: React.FC = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={360}>
        <MyComposition
          titleText="This is not powtoon"
          titleColor="#000000"
          logoColor="#00bfff"
        />
      </Series.Sequence>
      <Series.Sequence durationInFrames={360}>
        <ILike />
      </Series.Sequence>
    </Series>
  );
}