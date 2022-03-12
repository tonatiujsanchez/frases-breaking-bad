import{j as p,s as i,r as l,R as m,a as f}from"./vendor.6551fc8d.js";const h=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};h();const r=p.exports.jsx,d=p.exports.jsxs;function g(){const[a,n]=l.exports.useState({}),[c,o]=l.exports.useState(!1);l.exports.useEffect(()=>{e()},[]);const e=async()=>{o(!0);const s=await fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes"),[u]=await s.json();n(u),o(!1)};return d(x,{children:[r(b,{children:c?r("div",{children:d(k,{children:[r("div",{}),r("div",{})]})}):d("div",{children:[r(y,{children:a.quote}),d(w,{children:[" - ",a.author," "]})]})}),r(v,{onClick:e,children:"Obtener Frase"})]})}const x=i.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  @media screen and ( max-width:768px ){
    padding-top: 1rem;
  }
`,b=i.div`
  background-color: rgb(243 244 246);
  width: 600px;
  height: 300px;
  margin-top: 5rem;
  border-radius: 1rem;
  display: grid;
  place-content: center;
  padding: 3rem;
  text-align: center;
  @media screen and ( max-width:768px ){
    width: 100%;
  }
  `,y=i.p`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 2.2rem;
  letter-spacing: -1px;
  word-spacing: 2px;
  @media screen and ( max-width:500px ){
    font-size: 1.2rem;
    line-height: 1.7rem;
  }
`,w=i.p`
  margin-top: 2rem;
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 600;
  @media screen and ( max-width:500px ){
    font-size: 1rem;
  }
`,v=i.button`
    background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
    background-size: 320px;
    font-family: Arial, Helvetica, sans-serif;
    color: #FFF;
    border: none;
    padding: 1rem 3rem;
    border-radius: 0.4rem;
    font-size: 1.5rem;
    margin-top: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    &:hover{
      background: -webkit-linear-gradient(top left, #01923e 0%, #018d3b 40%, #177267 100%);
    }
    &:active{
      transform: scale(.98);
    }

    @media screen and ( max-width:768px ){
      width: 100%;
      background-size: 100%;
      font-size: 1.1rem;
    }

`,k=i.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    position: absolute;
    border: 4px solid #007d35;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  div:nth-child(2) {
    animation-delay: -0.5s;
  }

  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;m.render(r(f.StrictMode,{children:r(g,{})}),document.getElementById("root"));
