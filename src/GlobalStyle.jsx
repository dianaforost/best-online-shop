import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyles = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: Mulish;
}
::-webkit-scrollbar-track {
  background: #f1f1f1; 
  cursor: pointer;
}
::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 5px;
  cursor: pointer;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(27, 82, 100, 0.8); 
}
::-webkit-scrollbar {
  width: 15px;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  padding: 0;
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

li {
  list-style-type: none;
}

button {
  cursor: pointer;
  padding: 0;
  font-family: inherit;
}

a {
  color: inherit;
  text-decoration: inherit;
}

a:visited {
  color: none;
}
.swiper-pagination  .swiper-pagination-bullet-active{
  opacity:10;
  background: #f9f9f9;
}
.swiper-pagination-bullet{
  opacity: 10;
  background: transparent;
}
.swiper-vertical > .swiper-pagination-bullets, .swiper-pagination-vertical.swiper-pagination-bullets{
  top:20%;
  @media (min-width: 768px) {
    top:50%;
  }
}
`;

export default GlobalStyles;
