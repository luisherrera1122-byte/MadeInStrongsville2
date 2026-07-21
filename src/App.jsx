import {Routes,Route,Link} from "react-router-dom";
const Home=()=> <div style={{padding:40,color:"white"}}><h1>MADE IN STRONGSVILLE</h1><p>Established 2011</p><div style={{display:"flex",gap:20}}><Link to="/champions">Champions</Link><Link to="/owners">Owners</Link><Link to="/records">Records</Link></div></div>;
const P=({t})=><div style={{padding:40,color:"white"}}><h2>{t}</h2><p>Coming in Sprint 2</p></div>;
export default function(){return <div style={{minHeight:"100vh",background:"#0b1220",fontFamily:"Arial"}}><Routes><Route path="/" element={<Home/>}/><Route path="/champions" element={<P t="Hall of Champions"/>}/><Route path="/owners" element={<P t="Owners"/>}/><Route path="/records" element={<P t="League Records"/>}/></Routes></div>}
