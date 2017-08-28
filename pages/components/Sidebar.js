import Link from "next/link";
import { css } from "emotion";
const linkStyle = {
  marginRight: 15
};

const navStyle = css`
width:250px;
position:fixed;
left:0;
top:75px;
height:100%;
background-color:#333;
color:#f9f9f9;
font-family: Arial, Helvetica, sans-serif;
text-decoration:none;

& a{
  color:#f9f9f9;
  text-decoration:none;
  
}
& a:hover{
  color:#f60;
}

& ul li{
  list-style:none;
  padding:10px 0;
}
`;

const SideBar = () =>
  <nav className={navStyle}>
    <ul>
      <li>
        <Link href="/kitchen-sink">
          <a style={linkStyle}>Kitchen Sink</a>
        </Link>
      </li>
      <li>
        <Link href="/content-component">
          <a style={linkStyle}>Content Components</a>
        </Link>
      </li>
      <li>
        <Link href="/loaders">
          <a style={linkStyle}>Progress & Activity</a>
        </Link>
      </li>
      <li>
        <Link href="/coming-soon">
          <a style={linkStyle}>Form Elements</a>
        </Link>
      </li>
      <li>
        <Link href="/coming-soon">
          <a style={linkStyle}>Charting Components</a>
        </Link>
      </li>
    </ul>
  </nav>;

export default SideBar;
