import{H as X,C as Y}from"./index-eFjSoLDB.js";import{d as w,a as y,o as a,c as S,w as p,t as V,b as i,_ as C,r as P,e as _,f as A,p as R,g as F,u as N,x as O,h as I,l as f,n as m,F as z,m as E,y as H,z as Z,A as tt,v as $,B as et,j,i as q,q as J,s as K,k as st}from"./index-Njdadao4.js";import{u as ot}from"./uuidv4-qdT5rVQP.js";import{A as nt}from"./AppLoadingMask-IEc7RwFL.js";const at={class:"task-card__title"},rt=w({__name:"index",props:{title:{},estimation:{}},setup(e){return(o,s)=>{const n=y("v-card");return a(),S(n,{class:"task-card"},{default:p(()=>[i("div",at,V(o.title),1)]),_:1})}}}),it=C(rt,[["__scopeId","data-v-0b35e105"]]),ct=e=>(R("data-v-eed59d0e"),e=e(),F(),e),lt={class:"create-new-story-card__header"},dt=ct(()=>i("div",{class:"create-new-story-card__title"},"Add stories",-1)),ut={class:"create-new-story-card__buttons"},_t=w({__name:"index",props:{isOpen:{type:Boolean}},emits:["update:is-open","add-new-story"],setup(e,{emit:o}){const s=e,n=o,c=P(null),r=P(null),u=()=>{c.value&&(n("add-new-story",{text:c.value,link:r.value}),c.value=null,r.value=null,n("update:is-open",!1))};return(t,l)=>{const v=y("v-icon"),d=y("v-btn"),x=y("v-text-field"),B=y("v-card"),D=y("v-dialog");return a(),S(D,{modelValue:s.isOpen,"onUpdate:modelValue":l[4]||(l[4]=h=>s.isOpen=h),persistent:"",class:"create-new-story"},{default:p(()=>[_(B,{class:"create-new-story__card create-new-story-card"},{default:p(()=>[i("div",lt,[dt,_(d,{density:"compact",variant:"flat",icon:"",onClick:l[0]||(l[0]=h=>n("update:is-open",!1))},{default:p(()=>[_(v,{icon:"mdi mdi-close"})]),_:1})]),_(x,{modelValue:c.value,"onUpdate:modelValue":l[1]||(l[1]=h=>c.value=h),label:"title *",density:"compact",variant:"outlined"},null,8,["modelValue"]),_(x,{label:"link",modelValue:r.value,"onUpdate:modelValue":l[2]||(l[2]=h=>r.value=h),density:"compact",variant:"outlined"},null,8,["modelValue"]),i("div",ut,[_(d,{density:"compact",color:"grey",style:{"font-size":"10px"},class:"mr-2",onClick:l[3]||(l[3]=h=>n("update:is-open",!1))},{default:p(()=>[A(" Cancel ")]),_:1}),_(d,{disabled:!c.value,density:"compact",color:"blue-accent-4",style:{"font-size":"10px"},onClick:u},{default:p(()=>[A(" Add story ")]),_:1},8,["disabled"])])]),_:1})]),_:1},8,["modelValue"])}}}),pt=C(_t,[["__scopeId","data-v-eed59d0e"]]),vt=async(e,o)=>{const s=N(),n={id:ot(),text:o.text,link:o.link,status:"created",estimation:0,totalTime:0};await s.createNewStory(e,n),O().addNewStory(n)},mt=vt,yt=(e,o)=>{N().startObserveStory(e,o)},Q=e=>(R("data-v-a1aff014"),e=e(),F(),e),ft={class:"task-list"},St=Q(()=>i("div",{class:"task-list__title"},"Stories",-1)),kt={key:0,class:"task-list__list"},$t={key:1,class:"task-list__empty"},bt=Q(()=>i("span",null,"Add story",-1)),xt=w({__name:"index",props:{sessionId:{}},setup(e){const o=e,s=O(),n=P(!1),c=u=>{s.currentStoryId=u,yt(o.sessionId,u)},r=I(()=>s.stories.find(u=>u.id===s.currentStoryId));return I(()=>{var u;return((u=r.value)==null?void 0:u.status)==="done"?"light-green-lighten-3":""}),(u,t)=>{const l=y("v-icon"),v=y("v-btn");return a(),f("div",ft,[St,m(s).stories.length?(a(),f("div",kt,[(a(!0),f(z,null,E(m(s).stories,d=>{var x;return a(),S(m(it),{title:d.text,estimation:d.estimation,class:Z(`mb-3 ${d.id===((x=r.value)==null?void 0:x.id)?"selected":""}`),style:tt(`background: ${d.status==="done"?"#C5E1A5":""}`),onClick:B=>c(d.id)},null,8,["title","estimation","class","style","onClick"])}),256))])):(a(),f("div",$t," No stories in session ")),_(v,{density:"compact",color:"indigo-accent-4",style:{"font-size":"10px"},onClick:t[0]||(t[0]=d=>n.value=!0)},{default:p(()=>[_(l,{icon:"mdi mdi-plus",class:"mr-1"}),bt]),_:1}),_(m(pt),{"is-open":n.value,"onUpdate:isOpen":t[1]||(t[1]=d=>n.value=d),onAddNewStory:t[2]||(t[2]=d=>{m(mt)(m(H).currentRoute.value.params.id,d)})},null,8,["is-open"])])}}}),wt=C(xt,[["__scopeId","data-v-a1aff014"]]),Ct={class:"start-estimation-story"},ht=w({__name:"index",props:{storyStatus:{}},emits:["start-estimation","reveal-all-cards","done","restart"],setup(e,{emit:o}){const s=e,n=o,c=I(()=>(s.storyStatus==="voted"||s.storyStatus==="done")??!1),r=I(()=>s.storyStatus==="done");return(u,t)=>{const l=y("v-icon"),v=y("v-btn");return a(),f("div",Ct,[s.storyStatus==="created"?(a(),S(v,{key:0,density:"compact",color:"indigo-accent-4",style:{"font-size":"10px"},class:"mr-4",onClick:t[0]||(t[0]=d=>n("start-estimation"))},{default:p(()=>[_(l,{icon:"mdi mdi-play",class:"mr-1"}),A(" Start story ")]),_:1})):(a(),f(z,{key:1},[c.value?$("",!0):(a(),S(v,{key:0,density:"compact",color:"indigo-accent-4",style:{"font-size":"10px"},class:"mr-4",onClick:t[1]||(t[1]=d=>n("reveal-all-cards"))},{default:p(()=>[_(l,{icon:"mdi mdi-book-open-blank-variant-outline",class:"mr-1"}),A(" Reveal all cards ")]),_:1})),c.value&&!r.value?(a(),S(v,{key:1,density:"compact",color:"indigo-accent-4",style:{"font-size":"10px"},class:"mr-4",onClick:t[2]||(t[2]=d=>n("done"))},{default:p(()=>[_(l,{icon:"mdi mdi-check",class:"mr-1"}),A(" Done ")]),_:1})):$("",!0),r.value?(a(),S(v,{key:2,density:"compact",color:"indigo-accent-4",style:{"font-size":"10px"},class:"mr-4",onClick:t[3]||(t[3]=d=>n("restart"))},{default:p(()=>[_(l,{icon:"mdi mdi-restart",class:"mr-1"}),A(" restart ")]),_:1})):$("",!0)],64))])}}}),Vt=C(ht,[["__scopeId","data-v-efeb7812"]]),M=e=>(R("data-v-d18e9e13"),e=e(),F(),e),gt={class:"story-team"},It=M(()=>i("div",{class:"story-team__title"},"AIST",-1)),At={class:"story-team__list"},Nt=M(()=>i("span",null,"Vote",-1)),Pt=M(()=>i("span",null,"ReVote",-1)),zt=w({__name:"index",props:{canVote:{type:Boolean},storyStatus:{}},emits:["open-vote-modal"],setup(e,{emit:o}){const s=e,n=o,c=I(()=>s.storyStatus==="voted"||s.storyStatus==="done");return(r,u)=>{const t=y("v-icon"),l=y("v-btn");return a(),f("div",gt,[It,i("div",At,[et(r.$slots,"default",{},void 0,!0)]),i("div",null,[r.canVote?(a(),S(l,{key:0,density:"compact",color:"indigo-accent-4",style:{"font-size":"10px"},class:"mr-4",onClick:u[0]||(u[0]=v=>n("open-vote-modal"))},{default:p(()=>[_(t,{icon:"mdi mdi-vote"}),Nt]),_:1})):$("",!0),!r.canVote&&!c.value?(a(),S(l,{key:1,density:"compact",color:"blue-grey-lighten-2",style:{"font-size":"10px"},class:"mr-4"},{default:p(()=>[_(t,{icon:"mdi mdi-restart",class:"mr-2"}),Pt]),_:1})):$("",!0)])])}}}),Ot=C(zt,[["__scopeId","data-v-d18e9e13"]]),Bt={class:"person-card"},Tt={class:"person-card__card"},Ut={key:1,class:"person-card__result"},Lt={class:"person-card__username"},Rt=w({__name:"index",props:{userName:{},isVoted:{type:Boolean},score:{},storyStatus:{}},setup(e){const o=e,s=I(()=>o.storyStatus==="voted"||o.storyStatus==="done");return(n,c)=>{const r=y("v-icon");return a(),f("div",Bt,[i("div",Tt,[n.isVoted&&!s.value?(a(),S(r,{key:0,size:"x-large",icon:"mdi mdi-check-circle",color:"blue-accent-4"})):$("",!0),s.value?(a(),f("div",Ut,V(o.score),1)):$("",!0)]),i("div",Lt,V(o.userName),1)])}}}),Ft=C(Rt,[["__scopeId","data-v-868d8e97"]]),Dt={class:"vote-card"},Et=w({__name:"VoteCard",props:{title:{}},setup(e){return(o,s)=>(a(),f("div",Dt,V(o.title),1))}}),Mt=C(Et,[["__scopeId","data-v-29443403"]]),Gt={class:"vote-cards__title"},Ht={class:"vote-cards__list"},jt=w({__name:"index",props:{isOpen:{type:Boolean},title:{}},emits:["select","update:is-open"],setup(e,{emit:o}){const s=e,n=o,c=P([{name:"1h",value:1},{name:"2h",value:2},{name:"3h",value:3},{name:"4h",value:4},{name:"6h",value:6},{name:"1d",value:8},{name:"2d",value:16}]);return(r,u)=>{const t=y("v-card"),l=y("v-dialog");return a(),S(l,{modelValue:s.isOpen,"onUpdate:modelValue":u[0]||(u[0]=v=>s.isOpen=v),persistent:""},{default:p(()=>[_(t,{class:"vote-cards"},{default:p(()=>[i("div",Gt,V(r.title),1),i("div",Ht,[(a(!0),f(z,null,E(c.value,v=>(a(),S(Mt,{key:v.value,title:v.name,onClick:d=>{n("select",v.value),n("update:is-open",!1)}},null,8,["title","onClick"]))),128))])]),_:1})]),_:1},8,["modelValue"])}}}),qt=C(jt,[["__scopeId","data-v-8e0a19c9"]]),Jt=async(e,o,s)=>{await N().changeStoryStatus(e,o,s)},Kt=async(e,o,s)=>{await N().setParticipantsToStory(e,o,s),O().setParticipantsToCurrentStory(o,s)},Qt=async(e,o,s)=>{await N().voteForStory(e,o,s)},G=async(e,o,s)=>{await N().changeStoryStatus(e,o,s)},W=e=>(R("data-v-cad4d795"),e=e(),F(),e),Wt={class:"current-story__header"},Xt=W(()=>i("div",{class:"current-story__title"},"Current Story",-1)),Yt={class:"current-story__subtitle"},Zt={key:0,class:"d-flex flex-column align-items-end"},te=W(()=>i("div",{class:"current-story__title"},"Story score",-1)),ee={class:"current-story__subtitle ml-auto"},se={key:0,class:"current-story__content"},oe={key:1,class:"current-story__empty"},ne=w({__name:"index",props:{sessionId:{}},setup(e){const o=O(),s=j(),n=q(),c=J(),r=e,u=P(!1),t=I(()=>o.stories.find(b=>b.id===o.currentStoryId)),l=()=>{var b;(b=t.value)!=null&&b.link&&window.open(t.value.link,"_blank")},v=async b=>{if(t.value){const{currentUser:k}=K(c);k.value&&await Qt(r.sessionId,t.value.id,{id:k.value.id,username:k.value.username,isVoted:!0,result:b})}},d=async()=>{if(t.value){s.isGlobalLoading=!0,await Jt(r.sessionId,t.value.id,"inProgress");const b=n.sessionParticipants.map(k=>({...k,result:0,isVoted:!1}));await Kt(r.sessionId,t.value.id,b),s.isGlobalLoading=!1}},x=I(()=>{var b,k;if(t.value&&((b=t.value)!=null&&b.participants)){const T=t.value.participants.find(U=>{var g;return U.id===((g=c.currentUser)==null?void 0:g.id)});return((k=t.value)==null?void 0:k.status)==="inProgress"&&T&&!T.isVoted}return!1}),B=async()=>{await G(r.sessionId,t.value.id,"voted")},D=async()=>{await G(r.sessionId,t.value.id,"done")},h=async()=>{await d()};return(b,k)=>{const T=y("v-card");return a(),S(T,{class:"current-story"},{default:p(()=>{var U;return[i("div",Wt,[i("div",null,[Xt,t.value?(a(),f(z,{key:0},[i("div",Yt,V(t.value.text),1),i("a",{class:"current-story__link",onClick:l},V(t.value.link),1)],64)):$("",!0)]),t.value?(a(),f("div",Zt,[te,i("div",ee,V(t.value.estimation),1)])):$("",!0)]),t.value?(a(),f("div",se,[_(m(Vt),{"story-status":t.value.status,class:"mb-4",onStartEstimation:d,onRevealAllCards:B,onDone:D,onRestart:h},null,8,["story-status"]),t.value.status!=="created"?(a(),S(m(Ot),{key:0,"story-status":t.value.status,"can-vote":x.value,onOpenVoteModal:k[0]||(k[0]=g=>u.value=!0)},{default:p(()=>{var g;return[(g=t.value)!=null&&g.participants?(a(!0),f(z,{key:0},E(t.value.participants,L=>(a(),S(m(Ft),{key:L.id,"user-name":L.username,"is-voted":L.isVoted,score:L.result,"story-status":t.value.status},null,8,["user-name","is-voted","score","story-status"]))),128)):$("",!0)]}),_:1},8,["story-status","can-vote"])):$("",!0)])):(a(),f("div",oe," Story not selected ")),t.value?(a(),S(m(qt),{key:2,"is-open":u.value,"onUpdate:isOpen":k[1]||(k[1]=g=>u.value=g),title:(U=t.value)==null?void 0:U.text,onSelect:v},null,8,["is-open","title"])):$("",!0)]}),_:1})}}}),ae=C(ne,[["__scopeId","data-v-cad4d795"]]),re=async e=>await N().getPokerSessionById(e),ie={class:"poker-session"},ce={class:"poker-session__header"},le={class:"poker-session__content"},de=w({__name:"index",async setup(e){let o,s;const{isGlobalLoading:n}=K(j()),c=O(),r=q();J();const{id:u}=H.currentRoute.value.params;n.value=!0;let t=([o,s]=st(()=>re(u)),o=await o,s(),o);return c.currentStoryId=null,t&&t.stories?c.setStories(t.stories):c.setStories([]),t&&t.participants&&r.setSessionParticipants(t.participants),n.value=!1,(l,v)=>{const d=y("v-card");return a(),f("div",ie,[_(m(X)),_(Y,null,{default:p(()=>{var x;return[i("div",ce,[i("div",null,[A("Session: "),i("span",null,V((x=m(t))==null?void 0:x.title),1)])]),i("div",le,[_(d,null,{default:p(()=>[_(m(wt),{"session-id":m(t).id},null,8,["session-id"])]),_:1}),_(m(ae),{"session-id":m(t).id},null,8,["session-id"])])]}),_:1}),m(n)?(a(),S(m(nt),{key:0})):$("",!0)])}}}),me=C(de,[["__scopeId","data-v-bb999742"]]);export{me as default};
