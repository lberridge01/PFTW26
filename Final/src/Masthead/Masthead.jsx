import mastheadImg from "../assets/Masthead.jpg";
import "./Masthead.css";
export default function Masthead() {
  return (
    <div className="masthead">
      <img src={mastheadImg} alt="Lauren's Sketch Collection" />
    </div>
  );
}
