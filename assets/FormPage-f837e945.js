import{j as b,a as e,F as f,u as T,r as k,o as C,d as y,b as x,W as L,s as S}from"./index-024a4a1b.js";import{c as o}from"./emotion-react.browser.esm-592dc889.js";const F=o`
  --color: black;
  --hover: gray;
  /* background-color: rgba(255, 192, 203, 0.7); */

  &.pink {
    background-color: rgba(255, 192, 203, 0.7);
  }

  position: relative;
  height: 1.3em;
  width: 1.3em;
  display: inline-block;
  cursor: pointer;

  .checkmark {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    height: 0.6em;
    width: 0.4em;
    border-bottom: 0.2em solid transparent;
    border-right: 0.2em solid transparent;
  }
  &:hover {
    .checkmark {
      transform: translate(-50%, -50%) rotate(45deg) scale(1.1);
    }
  }

  &.checked {
    .checkmark {
      border-color: var(--color);
    }
  }

  input {
    display: none;
  }
`,u=({name:t,value:n,className:a,setValue:l,style:i})=>b("label",{style:i,css:F,className:a+" checkbox "+t+" checkbox "+(n==="1"?"checked":""),children:[e("input",{name:t,type:"checkbox",className:a,checked:n==="1",onChange:c=>{l(t,c.target.checked?"1":"0")}}),e("div",{className:"checkmark"})]}),P=o`
  display: block;
  background-color: transparent;
  background-color: rgba(255, 165, 0, 0.1);
  /* background-color: rgba(0, 68, 255, 0.3); */
  font-size: 1em;
  border: 0;
  height: 0.91rem;
  margin-bottom: 0.31rem;

  &:active,
  &:focus {
    background-color: rgba(255, 165, 0, 0.3);
  }

  &.val {
    width: 2.2em;
    text-align: right;
  }

  &.nbr {
    width: 2.2em;
    text-align: right;
  }

  &.pink {
    background-color: rgba(255, 0, 0, 0.3) !important;
  }

  &.name {
    /* background-color: green; */
    width: 9em;
  }
`,p=({name:t,value:n="",className:a="",setValue:l})=>{let i="text",c=1e4,d=-1e4,r=1e4;return/\bval\b/.test(a)&&(i="number",c=20,d=1,r=2),/\bnbr\b/.test(a)&&(i="number"),e("input",{value:n,type:i,name:t,max:c,min:d,maxLength:r,className:`${a+" "+t}`.trim(),onChange:s=>{l(t,s.target.value)},css:P})},R=o`
  margin-top: 2em;
  display: flex;
  justify-content: space-between;

  input {
    text-align: center !important;
    font-size: 1.1em;
    font-weight: bold;
    display: inline-block;
  }
`,B=o`
  display: flex;
  justify-content: space-between;
  margin: 0.5em 0.2em 0 0.4em;

  .checkbox {
    --color: rgb(202, 0, 0);
    font-size: 1.4em;
  }
`,D=({data:t,setValue:n})=>{const a=[],l=[],i=["str","con","agl","int","wil","cha"],c=["exhausted","sickly","dazed","angry","scared","disheartened"];for(let d=0;d<6;d++){const r="condition-"+c[d];l.push(e(u,{name:r,value:t[r],setValue:n},r))}for(let d=0;d<6;d++){const r="attribute-"+i[d];a.push(e(p,{className:"val",name:r,value:t[r],setValue:n},r))}return b(f,{children:[e("div",{css:R,children:a}),e("div",{css:B,children:l})]})},E=o`
  background-color: transparent;
  background-color: rgba(255, 165, 0, 0.1);
  // background-color: rgb(255, 0, 0, 0.3);

  &.pink {
    background-color: rgba(255, 0, 0, 0.3) !important;
  }

  margin: 0;
  padding: 0 0 0 0.1em;
  border: 0;
  width: 100%;
  overflow: hidden;
`,w=({name:t,value:n="",className:a="",setValue:l})=>e("textarea",{css:E,name:t,value:n,maxLength:1e4,className:a+" "+t,onChange:c=>{l(t,c.target.value)}}),I=o`
  input {
    /* background-color: rgba(0, 255, 255, 0.3); */
    font-size: 0.9em;
    width: 16.5em !important;
    height: 1.3em;

    &.info-kin {
      display: inline-block;
      width: 9.8em !important;
      margin-right: 0.3em;
    }
    &.info-age {
      display: inline-block;
      width: 6.4em !important;
    }
    &.info-profession {
      margin-bottom: 0em;
    }
  }
  .info-weakness {
    margin-top: 0;
    height: 3.3em;
    width: 16.2em;
  }
`,W=o`
  position: absolute;
  left: 17em;
  top: 7em;
  input {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    width: 14em !important;
    // color: blue;
  }
`,A=o`
  position: absolute;
  left: 32.6em;
  top: -0.15em;
  width: 15em;
  textarea {
    height: 7.9em;
    width: 16.2em;
  }
`,M=({data:t,setValue:n})=>{const a=[],l=["player","kin","age","profession"];for(let i=0;i<4;i++){const c="info-"+l[i];a.push(e(p,{className:"name",name:c,value:t[c],setValue:n},c))}return b(f,{children:[b("div",{css:I,children:[a,e(w,{name:"info-weakness",value:t["info-weakness"],setValue:n})]}),e("div",{css:W,children:e(p,{className:"name",name:"info-name",value:t["info-name"],setValue:n})}),e("div",{css:A,children:e(w,{name:"info-appearance",value:t["info-appearance"],setValue:n})})]})},q=o`
  position: absolute;
  width: 10.8em;
  height: 26em;
  left: 0.3em;
  top: 5.5em;
  textarea {
    height: 20.4em;
    line-height: 1.23rem;
  }
`,G=o`
  position: absolute;
  left: 6.8em;
  top: 19.7em;
  input {
    font-size: 1em;
    /* font-weight: bold; */
    width: 3em !important;
    margin-bottom: 1.7em;
    text-align: right;
  }
`,H=o`
  /* background-color: rgba(0, 255, 255, 0.3); */
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 34.7em;
  height: 2em;
  left: 10.7em;
  top: 0.9em;
  input {
    width: 2.2em;
    text-align: center;
  }
`,J=o`
  position: absolute;
  width: 10.8em;
  height: 28em;
  left: 36.7em;
  top: 3.3em;
  /* background-color: rgba(255, 0, 0, 0.3); */
  input {
    margin: 0.6em 0 0.6em 6.5em;
  }

  .inventory {
    height: 13.8em;
    margin-left: 0.7em;
    line-height: 1.38em;
    width: 11.3em;
  }
  .memento {
    height: 3.8em;
    margin: 1.38em 0 2.4em 0;
    line-height: 1.38em;
    /* width: 11.3em; */
  }
  .tiny-items {
    height: 7em;
    margin-left: 0.7em;
    line-height: 1.38em;
    width: 10.7em;
  }
`,K=({data:t,setValue:n})=>{const a=[],l=[],i=[],c=["dmg-bonus-str","dmg-bonus-agl","movement"],d=["gold","silver","copper"],r=["inventory","memento","tiny-items"];for(let s=0;s<3;s++){const h=c[s];i.push(e(p,{className:"",name:h,value:t[h],setValue:n},h))}for(let s=0;s<3;s++){const h="coins-"+d[s];a.push(e(p,{name:h,value:t[h],setValue:n},h))}for(let s=0;s<3;s++){const h=r[s];l.push(e(w,{name:h,value:t[h],setValue:n},h))}return b(f,{children:[e("div",{css:H,children:i}),b("div",{css:q,children:[e(w,{name:"abilities-and-spells",value:t["abilities-and-spells"],setValue:n}),e("div",{css:G,children:a})]}),b("div",{css:J,children:[e(p,{className:"nbr",name:"encumberance-limit",value:t["encumberance-limit"],setValue:n}),l]})]})},$=53.1,O=$*1.291764706,Q=o`
  margin: 0 auto;
  width: ${$}rem;
  height: ${O}rem;
  position: relative;
`,U=o`
  width: 47.5em;
  height: 9em;
  position: absolute;
  top: 2.4em;
  left: 3em;
`,X=o`
  width: 27.7em;
  height: 6em;
  position: absolute;
  top: 11.5em;
  left: 12.7em;
`,Y=o`
  width: 21em;
  height: 25em;
  position: absolute;
  top: 24.43em;
  left: 16.1em;
  input {
    font-size: 0.8em;
  }
`,Z=o`
  position: absolute;
  width: 48em;
  left: 2.7em;
  top: 19em;
`,V=o`
  /* background-color: rgba(0, 255, 255, 0.3);
  height: 20em;
  width: 34em; */

  position: absolute;
  left: 3em;
  top: 53em;
`,ee=o`
  position: absolute;
  left: 35em;
  top: 51em;
`,te=o`
  /* background-color: rgba(0, 255, 255, 0.3); */
  margin-top: 0.5em;
`,N=o`
  position: absolute;
  left: 1.8em;
  top: 4.7em;
  text-align: center !important;
`,ne=o`
  ${N}
  top: 10.5em;
`,_=o`
  position: absolute;
  width: 10.3em;
  left: 4.8em;
  top: 3.75em;
  .checkbox {
    --color: darkred;
    width: 0.96em;
    height: 1.1em;
    margin: 0;
    padding: 0;
  }
`,se=o`
  ${_}
  top: 9.6em;
  .checkbox {
    --color: darkgreen;
  }
`,oe=o`
  ${_}
  top: 13.4em;
  left: 6.5em;
  .checkbox {
    width: 1.25em;
    &.death-roll-failure-1 {
      margin-left: 0.6em;
    }
  }
`,ie=({data:t,setValue:n,lang:a})=>{const l=[],i=[],c=[],d=[];for(let r=1;r<21;r++){let s="wp-check-"+r;l.push(e(u,{name:s,value:t[s],setValue:n},s)),s="hp-check-"+r,i.push(e(u,{name:s,value:t[s],setValue:n},s))}for(let r=1;r<4;r++){let s="death-roll-success-"+r;c.push(e(u,{name:s,value:t[s],setValue:n},s)),s="death-roll-failure-"+r,d.push(e(u,{name:s,value:t[s],setValue:n},s))}return b(f,{children:[b("div",{css:te,children:[e(u,{style:{margin:`${a==="sv"?"0 4em 0 2.75em":"0 4.2em 0 2em"}`},name:"round-rest",value:t["round-rest"],setValue:n}),e(u,{name:"stretch-rest",value:t["stretch-rest"],setValue:n})]}),e("div",{css:_,children:l}),e("div",{css:se,children:i}),b("div",{css:oe,children:[c,d]}),e(p,{css:N,className:"val",name:"wp-points",value:t["wp-points"],setValue:n}),e(p,{css:ne,className:"val",name:"hit-points",value:t["hit-points"],setValue:n})]})},ae=o`
  .checkbox {
    display: block;
    margin-bottom: -0.07em;
  }
`,re=o`
  position: absolute;
  left: 11em;
  top: 1.26em;
  .checkbox {
    display: block;
    margin-bottom: -0.069em;
  }
`,ce=o`
  position: absolute;
  left: 10.93em;
  top: 16em;
  .checkbox {
    display: block;
    margin-bottom: -0.07em;
  }
`,me=o`
  position: absolute;
  left: 1.1em;
  top: 0.29em;
`,le=o`
  position: absolute;
  left: 12.1em;
  top: 1.48em;
`,he=o`
  position: absolute;
  left: 12.1em;
  top: 16.2em;
`,de=o`
  position: absolute;
  left: 14.1em;
  top: 16.2em;
`,pe=({data:t,setValue:n,lang:a})=>{const l={en:["acrobatics","awareness","bartering","beast_lore","bluffing","bushcraft","crafting","evade","healing","hunting_and_fishing","languages","myths_and_legends","performance","persuasion","riding","seamanship","sleight_of_hand","sneaking","spot_hidden","swimming","axes","bows","brawling","crossbows","hammers","knives","slings","spears","staves","swords"],sv:["beast_lore","bluffing","sleight_of_hand","spot_hidden","languages","crafting","acrobatics","hunting_and_fishing","bartering","healing","myths_and_legends","riding","swimming","seamanship","sneaking","evade","performance","awareness","bushcraft","persuasion","crossbows","hammers","knives","bows","brawling","slings","spears","staves","swords","axes"]},i=[],c=[],d=[],r=[],s=[],h=[],v=[];for(let g=0;g<20;g++){let m="check-"+l[a][g];i.push(e(u,{name:m,value:t[m],setValue:n},m)),m="skill-"+l[a][g],r.push(e(p,{className:"val",name:m,value:t[m],setValue:n},m))}for(let g=20;g<30;g++){let m="check-"+l[a][g];c.push(e(u,{name:m,value:t[m],setValue:n},m)),m="skill-"+l[a][g],s.push(e(p,{className:"val",name:m,value:t[m],setValue:n},m))}for(let g=0;g<7;g++){let m="secondary-skill-value-"+g;h.push(e(p,{className:"val",name:m,value:t[m],setValue:n},m)),m="secondary-skill-check-"+g,d.push(e(u,{name:m,value:t[m],setValue:n},m)),m="secondary-skill-name-"+g,v.push(e(p,{className:"name",name:m,value:t[m],setValue:n},m))}return b(f,{children:[e("div",{css:ae,children:i}),e("div",{css:re,children:c}),e("div",{css:ce,children:d}),e("div",{css:me,children:r}),e("div",{css:le,children:s}),e("div",{css:he,children:h}),e("div",{css:de,children:v})]})},ge="/dod-form/assets/form-en-e5a56a74.jpg",be="/dod-form/assets/form-sv-79a70e1b.jpg",ue=o`
  position: absolute;
  left: 0em;
  top: 0em;
  width: 32em;
  /* height: 10em;
  background-color: rgba(0, 255, 255, 0.3); */
  .checkbox {
    position: absolute;
  }

  .bane-sneaking {
    left: 4.2em;
    top: 3.4em;
  }
  .bane-evade {
    left: 9em;
    top: 3.4em;
    &.lang-sv {
      left: 7.9em;
    }
  }
  .bane-acrobatics {
    left: 4.2em;
    top: 4.2em;
  }
  .bane-awareness {
    left: 19.7em;
    top: 3.4em;
  }
  .bane-ranged_attacks {
    left: 19.7em;
    top: 4.2em;
  }
`,z=o`
  font-size: 1.1em;
  height: 1em;
  position: absolute;
  text-align: center;
  left: 4em;
  top: 1.2em;
  width: 9em;
`,fe=o`
  ${z}
  left: 18em;
  width: 9.5em;
`,j=o`
  font-size: 1.5em;
  height: 1em;
  position: absolute;
  text-align: center;
  left: 1em;
  top: 1em;
  width: 1em;
`,ve=o`
  ${j}
  left: 11.3em;
  top: 0.4em;
`,ke=o`
  position: absolute;
  left: 0em;
  top: 8.7em;
  width: 32em;
`,we=o`
  margin-bottom: 0.1em;
  input {
    font-size: 0.9em;
    height: 1.2em;
    display: inline-block;
    margin-right: 0.23em;
  }
  .weapon-name {
    width: 9.6em;
  }
  .weapon-grip {
    width: 2.7em;
  }
  .weapon-range {
    width: 4.1em;
  }
  .weapon-damage {
    width: 4.1em;
  }
  .weapon-durability {
    width: 2.7em;
  }
  .weapon-features {
    width: 9.8em;
  }
`,_e=({data:t,setValue:n,lang:a})=>{const l=["sneaking","evade","acrobatics","awareness","ranged_attacks"];return b(f,{children:[b("div",{css:ue,children:[e(p,{css:j,name:"armor_rating",value:t.armor_rating,setValue:n}),e(p,{css:ve,name:"helmet_rating",value:t.helmet_rating,setValue:n}),e(p,{css:z,name:"armor",value:t.armor,setValue:n}),e(p,{css:fe,name:"helmet",value:t.helmet,setValue:n}),l.map(i=>e(u,{className:"lang-"+a+" bane-"+i,name:"bane-"+i,value:t["bane-"+i],setValue:n},"bane-"+i))]}),e("div",{css:ke,children:[1,2,3].map(i=>e("div",{css:we,children:["name","grip","range","damage","durability","features"].map(c=>e(p,{className:"weapon-"+c,name:"weapon-"+i+"-"+c,value:t["weapon-"+i+"-"+c],setValue:n},i+c))},i))})]})},$e=()=>{const{lang:t,id:n}=T(),[a,l]=k.useState({}),i=k.useRef(),c=k.useRef({});k.useEffect(()=>{const s=C(y(x,"forms",`${n}`),h=>{if(h.metadata.hasPendingWrites)return;const v=h.exists()?h.data():{};l(v)});return()=>{clearTimeout(i.current),s()}},[n]);const d=async()=>{const s={...c.current};c.current={},await S(y(x,"forms",`${n}`),s,{merge:!0})},r=(s,h)=>{clearTimeout(i.current),l({...a,[s]:h}),c.current={...c.current,[s]:h},i.current=setTimeout(()=>{d()},2e3)};return e(f,{children:b("div",{css:Q,style:{background:`url(${t==="sv"?be:ge}) no-repeat`},children:[e(L,{children:e("html",{lang:t==="sv"?"sv":"en"})}),e("div",{css:U,children:e(M,{data:a,setValue:r})}),e("div",{css:Y,children:e(pe,{lang:t==="sv"?"sv":"en",data:a,setValue:r})}),e("div",{css:X,children:e(D,{data:a,setValue:r})}),e("div",{css:Z,children:e(K,{data:a,setValue:r})}),e("div",{css:V,children:e(_e,{lang:t==="sv"?"sv":"en",data:a,setValue:r})}),e("div",{css:ee,children:e(ie,{lang:t==="sv"?"sv":"en",data:a,setValue:r})})]})})};export{$e as default};
