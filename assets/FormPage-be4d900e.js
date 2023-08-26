import{s as T,j as u,a as e,F as f,b as C,r as k,o as L,d as y,e as x,W as F,f as P}from"./index-01724f04.js";function i(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return T(n)}const R=i`
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
`,b=({name:t,value:n,className:s,setValue:l,style:a})=>u("label",{style:a,css:R,title:t,className:s+" checkbox "+t+" checkbox "+(n==="1"?"checked":""),children:[e("input",{type:"checkbox",className:s,checked:n==="1",onChange:c=>{l(t,c.target.checked?"1":"0")}}),e("div",{className:"checkmark"})]}),A=i`
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
`,p=({name:t,value:n="",className:s="",setValue:l})=>{let a="text",c=1e4,d=-1e4,r=1e4;return/\bval\b/.test(s)&&(a="number",c=20,d=1,r=2),/\bnbr\b/.test(s)&&(a="number"),e("input",{value:n,type:a,title:t,max:c,min:d,maxLength:r,className:`${s+" "+t}`.trim(),onChange:o=>{l(t,o.target.value)},css:A})},B=i`
  margin-top: 2em;
  display: flex;
  justify-content: space-between;

  input {
    text-align: center !important;
    font-size: 1.1em;
    font-weight: bold;
    display: inline-block;
  }
`,D=i`
  display: flex;
  justify-content: space-between;
  margin: 0.5em 0.2em 0 0.4em;

  .checkbox {
    --color: rgb(202, 0, 0);
    font-size: 1.4em;
  }
`,E=({data:t,setValue:n})=>{const s=[],l=[],a=["str","con","agl","int","wil","cha"],c=["exhausted","sickly","dazed","angry","scared","disheartened"];for(let d=0;d<6;d++){const r="condition-"+c[d];l.push(e(b,{name:r,value:t[r],setValue:n},r))}for(let d=0;d<6;d++){const r="attribute-"+a[d];s.push(e(p,{className:"val",name:r,value:t[r],setValue:n},r))}return u(f,{children:[e("div",{css:B,children:s}),e("div",{css:D,children:l})]})},I=i`
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
`,w=({name:t,value:n="",className:s="",setValue:l})=>e("textarea",{css:I,value:n,title:t,maxLength:1e4,className:s+" "+t,onChange:c=>{l(t,c.target.value)}}),W=i`
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
`,M=i`
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
`,q=i`
  position: absolute;
  left: 32.6em;
  top: -0.15em;
  width: 15em;
  textarea {
    height: 7.9em;
    width: 16.2em;
  }
`,G=({data:t,setValue:n})=>{const s=[],l=["player","kin","age","profession"];for(let a=0;a<4;a++){const c="info-"+l[a];s.push(e(p,{className:"name",name:c,value:t[c],setValue:n},c))}return u(f,{children:[u("div",{css:W,children:[s,e(w,{name:"info-weakness",value:t["info-weakness"],setValue:n})]}),e("div",{css:M,children:e(p,{className:"name",name:"info-name",value:t["info-name"],setValue:n})}),e("div",{css:q,children:e(w,{name:"info-appearance",value:t["info-appearance"],setValue:n})})]})},H=i`
  position: absolute;
  width: 10.8em;
  height: 26em;
  left: 0.3em;
  top: 5.5em;
  textarea {
    height: 20.4em;
    line-height: 1.23rem;
  }
`,J=i`
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
`,K=i`
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
`,O=i`
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
`,Q=({data:t,setValue:n})=>{const s=[],l=[],a=[],c=["dmg-bonus-str","dmg-bonus-agl","movement"],d=["gold","silver","copper"],r=["inventory","memento","tiny-items"];for(let o=0;o<3;o++){const h=c[o];a.push(e(p,{className:"",name:h,value:t[h],setValue:n},h))}for(let o=0;o<3;o++){const h="coins-"+d[o];s.push(e(p,{name:h,value:t[h],setValue:n},h))}for(let o=0;o<3;o++){const h=r[o];l.push(e(w,{name:h,value:t[h],setValue:n},h))}return u(f,{children:[e("div",{css:K,children:a}),u("div",{css:H,children:[e(w,{name:"abilities-and-spells",value:t["abilities-and-spells"],setValue:n}),e("div",{css:J,children:s})]}),u("div",{css:O,children:[e(p,{className:"nbr",name:"encumberance-limit",value:t["encumberance-limit"],setValue:n}),l]})]})},$="/dod-form/assets/form-en-e5a56a74.jpg",N=53.1,U=N*1.291764706,X=i`
  margin: 0 auto;
  width: ${N}rem;
  height: ${U}rem;
  /* background: url(${$}) no-repeat; */
  position: relative;
`,Y=i`
  width: 47.5em;
  height: 9em;
  position: absolute;
  top: 2.4em;
  left: 3em;
`,Z=i`
  width: 27.7em;
  height: 6em;
  position: absolute;
  top: 11.5em;
  left: 12.7em;
`,V=i`
  width: 21em;
  height: 25em;
  position: absolute;
  top: 24.43em;
  left: 16.1em;
  input {
    font-size: 0.8em;
  }
`,ee=i`
  position: absolute;
  width: 48em;
  left: 2.7em;
  top: 19em;
`,te=i`
  /* background-color: rgba(0, 255, 255, 0.3);
  height: 20em;
  width: 34em; */

  position: absolute;
  left: 3em;
  top: 53em;
`,ne=i`
  position: absolute;
  left: 35em;
  top: 51em;
`,se=i`
  /* background-color: rgba(0, 255, 255, 0.3); */
  margin-top: 0.5em;
`,z=i`
  position: absolute;
  left: 1.8em;
  top: 4.7em;
  text-align: center !important;
`,oe=i`
  ${z}
  top: 10.5em;
`,_=i`
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
`,ie=i`
  ${_}
  top: 9.6em;
  .checkbox {
    --color: darkgreen;
  }
`,ae=i`
  ${_}
  top: 13.4em;
  left: 6.5em;
  .checkbox {
    width: 1.25em;
    &.death-roll-failure-1 {
      margin-left: 0.6em;
    }
  }
`,re=({data:t,setValue:n,lang:s})=>{const l=[],a=[],c=[],d=[];for(let r=1;r<21;r++){let o="wp-check-"+r;l.push(e(b,{name:o,value:t[o],setValue:n},o)),o="hp-check-"+r,a.push(e(b,{name:o,value:t[o],setValue:n},o))}for(let r=1;r<4;r++){let o="death-roll-success-"+r;c.push(e(b,{name:o,value:t[o],setValue:n},o)),o="death-roll-failure-"+r,d.push(e(b,{name:o,value:t[o],setValue:n},o))}return u(f,{children:[u("div",{css:se,children:[e(b,{style:{margin:`${s==="sv"?"0 4em 0 2.75em":"0 4.2em 0 2em"}`},name:"round-rest",value:t["round-rest"],setValue:n}),e(b,{name:"stretch-rest",value:t["stretch-rest"],setValue:n})]}),e("div",{css:_,children:l}),e("div",{css:ie,children:a}),u("div",{css:ae,children:[c,d]}),e(p,{css:z,className:"val",name:"wp-points",value:t["wp-points"],setValue:n}),e(p,{css:oe,className:"val",name:"hit-points",value:t["hit-points"],setValue:n})]})},ce=i`
  .checkbox {
    display: block;
    margin-bottom: -0.07em;
  }
`,me=i`
  position: absolute;
  left: 11em;
  top: 1.26em;
  .checkbox {
    display: block;
    margin-bottom: -0.069em;
  }
`,le=i`
  position: absolute;
  left: 10.93em;
  top: 16em;
  .checkbox {
    display: block;
    margin-bottom: -0.07em;
  }
`,he=i`
  position: absolute;
  left: 1.1em;
  top: 0.29em;
`,de=i`
  position: absolute;
  left: 12.1em;
  top: 1.48em;
`,pe=i`
  position: absolute;
  left: 12.1em;
  top: 16.2em;
`,ge=i`
  position: absolute;
  left: 14.1em;
  top: 16.2em;
`,ue=({data:t,setValue:n,lang:s})=>{const l={en:["acrobatics","awareness","bartering","beast_lore","bluffing","bushcraft","crafting","evade","healing","hunting_and_fishing","languages","myths_and_legends","performance","persuasion","riding","seamanship","sleight_of_hand","sneaking","spot_hidden","swimming","axes","bows","brawling","crossbows","hammers","knives","slings","spears","staves","swords"],sv:["beast_lore","bluffing","sleight_of_hand","spot_hidden","languages","crafting","acrobatics","hunting_and_fishing","bartering","healing","myths_and_legends","riding","swimming","seamanship","sneaking","evade","performance","awareness","bushcraft","persuasion","crossbows","hammers","knives","bows","brawling","slings","spears","staves","swords","axes"]},a=[],c=[],d=[],r=[],o=[],h=[],v=[];for(let g=0;g<20;g++){let m="check-"+l[s][g];a.push(e(b,{name:m,value:t[m],setValue:n},m)),m="skill-"+l[s][g],r.push(e(p,{className:"val",name:m,value:t[m],setValue:n},m))}for(let g=20;g<30;g++){let m="check-"+l[s][g];c.push(e(b,{name:m,value:t[m],setValue:n},m)),m="skill-"+l[s][g],o.push(e(p,{className:"val",name:m,value:t[m],setValue:n},m))}for(let g=0;g<7;g++){let m="secondary-skill-value-"+g;h.push(e(p,{className:"val",name:m,value:t[m],setValue:n},m)),m="secondary-skill-check-"+g,d.push(e(b,{name:m,value:t[m],setValue:n},m)),m="secondary-skill-name-"+g,v.push(e(p,{className:"name",name:m,value:t[m],setValue:n},m))}return u(f,{children:[e("div",{css:ce,children:a}),e("div",{css:me,children:c}),e("div",{css:le,children:d}),e("div",{css:he,children:r}),e("div",{css:de,children:o}),e("div",{css:pe,children:h}),e("div",{css:ge,children:v})]})},be="/dod-form/assets/form-sv-79a70e1b.jpg",fe=i`
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
`,j=i`
  font-size: 1.1em;
  height: 1em;
  position: absolute;
  text-align: center;
  left: 4em;
  top: 1.2em;
  width: 9em;
`,ve=i`
  ${j}
  left: 18em;
  width: 9.5em;
`,S=i`
  font-size: 1.5em;
  height: 1em;
  position: absolute;
  text-align: center;
  left: 1em;
  top: 1em;
  width: 1em;
`,ke=i`
  ${S}
  left: 11.3em;
  top: 0.4em;
`,we=i`
  position: absolute;
  left: 0em;
  top: 8.7em;
  width: 32em;
`,_e=i`
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
`,ye=({data:t,setValue:n,lang:s})=>{const l=["sneaking","evade","acrobatics","awareness","ranged_attacks"];return u(f,{children:[u("div",{css:fe,children:[e(p,{css:S,name:"armor_rating",value:t.armor_rating,setValue:n}),e(p,{css:ke,name:"helmet_rating",value:t.helmet_rating,setValue:n}),e(p,{css:j,name:"armor",value:t.armor,setValue:n}),e(p,{css:ve,name:"helmet",value:t.helmet,setValue:n}),l.map(a=>e(b,{className:"lang-"+s+" bane-"+a,name:"bane-"+a,value:t["bane-"+a],setValue:n},"bane-"+a))]}),e("div",{css:we,children:[1,2,3].map(a=>e("div",{css:_e,children:["name","grip","range","damage","durability","features"].map(c=>e(p,{className:"weapon-"+c,name:"weapon-"+a+"-"+c,value:t["weapon-"+a+"-"+c],setValue:n},a+c))},a))})]})},$e=()=>{const{lang:t,id:n}=C(),[s,l]=k.useState({}),a=k.useRef(),c=k.useRef({});k.useEffect(()=>{const o=L(y(x,"forms",`${n}`),h=>{if(h.metadata.hasPendingWrites)return;const v=h.exists()?h.data():{};l(v)});return()=>{clearTimeout(a.current),o()}},[n]);const d=async()=>{const o={...c.current};c.current={},await P(y(x,"forms",`${n}`),o,{merge:!0})},r=(o,h)=>{clearTimeout(a.current),l({...s,[o]:h}),c.current={...c.current,[o]:h},a.current=setTimeout(()=>{d()},2e3)};return e(f,{children:u("div",{css:X,style:{background:`url(${t==="sv"?be:$}) no-repeat`},children:[e(F,{children:e("html",{lang:t==="sv"?"sv":"en"})}),e("div",{css:Y,children:e(G,{data:s,setValue:r})}),e("div",{css:V,children:e(ue,{lang:t==="sv"?"sv":"en",data:s,setValue:r})}),e("div",{css:Z,children:e(E,{data:s,setValue:r})}),e("div",{css:ee,children:e(Q,{data:s,setValue:r})}),e("div",{css:te,children:e(ye,{lang:t==="sv"?"sv":"en",data:s,setValue:r})}),e("div",{css:ne,children:e(re,{lang:t==="sv"?"sv":"en",data:s,setValue:r})})]})})};export{$e as default};
