// Lets start the remotion composition
import { AbsoluteFill } from "remotion";
import { Logo } from "./Logo";
import { Subtitle } from "./Subtitle";
import { Title } from "./Title";

export const ILike: React.FC = () => {
  return (
    <AbsoluteFill className="bg-gray-100 items-center justify-center">
      <div className="m-10" />
      {/* <Logo logoColor="#00bfff" /> */}
      {/* <div className="m-3" /> */}
      <Title titleText="I like sleeping" titleColor="#000000" />
      
    </AbsoluteFill>
  );
}