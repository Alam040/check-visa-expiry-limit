"use strict";(self.webpackChunkcheck_visa_time_limit=self.webpackChunkcheck_visa_time_limit||[]).push([[609],{2984:function(e,t,i){i.d(t,{i:function(){return r}});var n=i.p+"static/media/beard-man-4928324-4107700.cc2bd486706aee2a39ed.png",r=[{id:1,passport:"ABC123456",name:"Jahangir Alam",country:"Bangladesh",date:"2022-08-25",expire:"2024-08-25",lastupdate:"2023-03-06",image:n,status:"Active"},{id:2,passport:"ABC234567",name:"Jahangir Alam",country:"Bangladesh",date:"2021-03-05",expire:"2023-03-05",lastupdate:"2023-03-06",image:n,status:"Active"},{id:3,passport:"ABC345678",name:"Jahangir",country:"Bangladesh",date:"2019-07-05",expire:"2020-07-05",lastupdate:"2023-03-06",image:n,status:"Active"},{id:4,passport:"ABC456789",name:"Jahangir Alam",country:"Bangladesh",date:"2023-02-05",expire:"2023-02-05",lastupdate:"2023-03-06",image:n,status:"Active"},{id:5,passport:"ABC567890",name:"Jahangir Alam",country:"Bangladesh",date:"2022-10-05",expire:"2023-10-05",lastupdate:"2023-03-06",image:n,status:"Active"},{id:6,passport:"ABC678901",name:"Jahangir Alam",country:"Bangladesh",date:"2023-03-05",expire:"2024-03-05",lastupdate:"2023-03-06",image:n,status:"Active"},{id:7,passport:"ABC789012",name:"Jahangir Alam",country:"Bangladesh",date:"2022-05-05",expire:"2023-05-05",lastupdate:"2023-03-06",image:n,status:"Active"},{id:8,passport:"ABC890123",name:"Jahangir Alam",country:"Bangladesh",date:"2022-11-05",expire:"2023-11-05",lastupdate:"2023-03-06",image:n,status:"Active"},{id:9,passport:"ABC901234",name:"Jahangir Alam",country:"Bangladesh",date:"2022-12-05",expire:"2023-12-05",lastupdate:"2023-03-06",image:n,status:"Active"},{id:10,passport:"ABC012345",name:"Jahangir Alam",country:"Bangladesh",date:"2021-06-05",expire:"2023-06-05",lastupdate:"2023-03-06",image:n,status:"Active"},{id:11,passport:"ABC123987",name:"Jahangir Alam",country:"Bangladesh",date:"2023-03-05",expire:"2025-03-05",lastupdate:"2023-03-06",image:n,status:"Active"},{id:12,passport:"ABC120087",name:"Jahangir Alam",country:"Bangladesh",date:"2023-03-05",expire:"2024-03-05",lastupdate:"2023-03-06",image:n,status:"Active"}]},2053:function(e,t,i){i.r(t),i.d(t,{ActionContainer:function(){return ue},Button:function(){return Ie},ButtonContainer:function(){return Pe},Image:function(){return Se},Input:function(){return je},InputGroup:function(){return fe},InputGroupText:function(){return be},PageNumber:function(){return De},Section:function(){return he},Select:function(){return we},SortBy:function(){return ge},TData:function(){return Ze},THead:function(){return ve},TRow:function(){return Ce},Table:function(){return ye},TableContainer:function(){return pe},TableFooter:function(){return ke},Title:function(){return xe},default:function(){return me}});var n=i(9439),r=i(2791),a=i(6444),o=i(1578),d=i(2984),s=i(860),l=i(6856),c=i(3479),m=i(9126),h=i(5880),p=i(9434),u=i(6555),x=i(644),g=i(184),f=function(e){var t=e.data,i=(0,r.useState)(new Date(t.expire).getMonth()),a=(0,n.Z)(i,2),o=a[0],d=a[1],f=(0,r.useState)(new Date(t.expire).getFullYear()),C=(0,n.Z)(f,2),Z=C[0],S=C[1],k=(0,r.useState)(0),P=(0,n.Z)(k,2),I=P[0],A=P[1],D=(0,p.I0)();(0,r.useEffect)((function(){var e=new Date,t=e.getFullYear(),i=e.getMonth();o<i?(S(Z-1),d(o+12-i)):d(o-i),d(12*(Z-t)+o)}),[I]);var z=function(e){var i="",n=o;i=n>3?"Safe":n<0?"Reject":"Danger",D((0,u.yJ)({data:t,month:n,evt:e,zone:i})),x.Z.setItem("u",t),x.Z.setItem("m",n),x.Z.setItem("e",e),x.Z.setItem("z",i),A(0)};return(0,g.jsxs)(b,{children:[(0,g.jsx)(j,{children:(0,g.jsx)(y,{src:t.image,alt:"avatar"})}),(0,g.jsx)(j,{children:t.name}),(0,g.jsx)(j,{children:t.passport}),(0,g.jsx)(j,{children:t.country}),(0,g.jsx)(j,{children:t.date}),(0,g.jsx)(j,{month:o,style:o<=3?{color:"red"}:null,children:t.expire}),(0,g.jsxs)(j,{className:"",month:o,style:o<=3?{color:"red"}:null,children:[o," Mth"]}),(0,g.jsx)(j,{month:o,children:o>3?"Safe":o<0?"Reject":"Danger"}),(0,g.jsx)(j,{children:t.lastupdate}),(0,g.jsx)(j,{visible:I,children:(0,g.jsxs)(w,{visible:I,children:[(0,g.jsx)(v,{onClick:function(){return z("View")},children:(0,g.jsx)(c.s9X,{})}),(0,g.jsx)(v,{onClick:function(){return z("Edit")},children:(0,g.jsx)(s.G3y,{})}),(0,g.jsx)(v,{onClick:function(){return z("Delete")},children:(0,g.jsx)(l.F1H,{})}),(0,g.jsx)(v,{onClick:function(){return A(0)},children:(0,g.jsx)(h.hhk,{})})]})}),(0,g.jsx)(j,{children:(0,g.jsx)(v,{onClick:function(){return A(1===I?0:1)},children:(0,g.jsx)(m.Jh_,{})})})]})},b=(a.ZP.table({width:"100%",marginBottom:"10px"}),a.ZP.thead({}),a.ZP.tbody({}),a.ZP.tr({padding:"0.3rem 0",background:"rgba(241, 242, 246,0.2)",border:"1px solid #ced4da",width:"100%",position:"relative"})),j=a.ZP.td((function(e){return{fontWeight:400,fontSize:"1rem",padding:"0.5rem 1rem",whiteSpace:"wrap",position:"relative",":nth-child(11)":{fontSize:"1rem",maxWidth:"50px !important",display:"none"},":nth-child(6)":{color:"#333 !important",fontWeight:400,"::before":{position:"absolute",content:"''",width:"2%",height:"30px",display:"block",top:"0",left:"0",bottom:"0",margin:"auto",color:"#333",background:e.month>3?"rgba(46, 213, 115, 1)":e.month>1?"rgba(255, 165, 2,1)":"rgba(234, 32, 39, 1)",borderRadius:"5px","@media (min-width: 1200px)":{width:"2%"},"@media (max-width: 992px)":{width:"6%"}}},":nth-child(10)":{},":nth-child(1)":{width:"62px"},"@media (max-width: 1200px)":{fontSize:"0.9rem",padding:"0.5rem 0.3rem"},"@media (max-width: 992px)":{":nth-child(9)":{display:"none"}},"@media (max-width: 890px)":{":nth-child(4)":{display:"none"}},"@media (max-width: 768px)":{":nth-child(8)":{display:"none"}},"@media (max-width: 687px)":{":nth-child(5)":{display:"none"}},"@media (max-width: 551px)":{fontSize:"0.9rem",":nth-child(1)":{width:"52px"},":nth-child(3)":{display:"none"}},"@media (max-width: 450px)":{":nth-child(7)":{display:""},":nth-child(11)":{display:"block",height:"100%",margin:"0.32rem 0.2rem 0.32rem 0.1rem",textAlign:"center",width:"30px"}}}})),w=a.ZP.div((function(e){return{display:"grid",gridTemplateColumns:"auto auto auto",gap:"0.3rem","@media (max-width: 450px)":{gridTemplateColumns:"auto auto auto auto",gap:"0.3rem 1rem",fontSize:"0.7rem",padding:"0.5rem 0.35rem",position:"absolute",content:"''",top:0,right:0,bottom:0,background:"rgba(25, 42, 86, 1.0)",margin:"0.3rem",paddingLeft:"1rem",paddingRight:"1rem",borderRadius:"5px",color:"#fff",width:"200px",transition:"all ease-in 2s",display:0===e.visible?"none":"grid",zIndex:"1"}}})),y=a.ZP.img({width:"30px",height:"auto",borderRadius:"5px",border:"2px solid rgba(255, 165, 2,1.0)"}),v=a.ZP.div({width:"25px",height:"25px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.3rem",borderRadius:"2px",cursor:"pointer",":nth-child(4)":{display:"none","@media (max-width: 450px)":{display:"flex"}}}),C=(a.ZP.div({position:"absolute",content:"''",width:"100%",height:"20px",background:"#705f93"}),(0,a.ZP)(j)({}),i(4942)),Z=i(1413),S=i(71),k=i.p+"static/media/warning-1.83c8c718efce27324df7.png",P=i.p+"static/media/check.660feb19aa3c432a4892.png",I=function(e){var t=e.data,i=e.month,a=e.zone,o=e.evt,s=e.dataChange,l=(0,r.useState)({id:t.id,name:t.name,passport:t.passport,country:t.country,date:t.date,expire:t.expire,lastupdate:(new Date).toISOString().substring(0,10),image:t.image,status:t.status}),c=(0,n.Z)(l,2),m=c[0],h=c[1],x=(0,p.I0)(),f=(0,r.useState)(o),b=(0,n.Z)(f,2),j=b[0],w=b[1],y=(0,r.useState)(!1),v=(0,n.Z)(y,2),I=v[0],se=v[1],le=(0,r.useState)(!1),ce=(0,n.Z)(le,2),me=ce[0],he=ce[1],pe=(0,r.useState)(t.image),ue=(0,n.Z)(pe,2),xe=ue[0],ge=ue[1];(0,r.useEffect)((function(){w(o)}),[o]);var fe=function(e){if(h((0,Z.Z)((0,Z.Z)({},m),{},(0,C.Z)({},e.target.name,e.target.value))),"image"===e.target.name){var t=new FileReader;t.readAsDataURL(e.target.files[0]),t.onload=function(){if(2===t.readyState){var e=t.result;ge(e)}}}};return(0,g.jsxs)(r.Fragment,{children:["View"===j?(0,g.jsx)(D,{children:(0,g.jsxs)(z,{children:[(0,g.jsx)(V,{onClick:function(){return x((0,u.mc)())},children:(0,g.jsx)(S.IOM,{})}),(0,g.jsx)(W,{children:"Employee Information"}),(0,g.jsxs)(T,{children:[(0,g.jsx)(R,{src:t.image,alt:t.name}),(0,g.jsxs)(L,{children:[(0,g.jsx)(F,{children:t.name}),(0,g.jsxs)(J,{children:["Passport: ",t.passport]}),(0,g.jsxs)(N,{children:["Country: ",t.country]}),(0,g.jsxs)(E,{children:["Status: ",t.status]})]})]}),(0,g.jsxs)(M,{children:[(0,g.jsxs)(U,{children:[(0,g.jsx)(O,{children:"Issue Date:"}),(0,g.jsx)(_,{children:t.date}),(0,g.jsx)(O,{children:"Expiry Date:"}),(0,g.jsx)(_,{children:t.expire})]}),(0,g.jsxs)(U,{children:[(0,g.jsx)(O,{children:"Last Update:"}),(0,g.jsx)(_,{children:t.lastupdate}),(0,g.jsx)(O,{children:"Available Month:"}),(0,g.jsx)(_,{children:i<-1?"NaN":"".concat(i," Months")})]}),(0,g.jsxs)(U,{children:[(0,g.jsx)(O,{children:"Zone:"}),(0,g.jsx)(_,{children:a})]})]}),(0,g.jsxs)(G,{children:[(0,g.jsx)(X,{onClick:function(){return x((0,u.mc)())},children:"Cancel"}),(0,g.jsx)(X,{onClick:function(){return w("Edit")},children:"Edit"}),(0,g.jsx)(X,{onClick:function(){return w("Delete")},children:"Delete"})]})]})}):null,"Edit"===j?(0,g.jsx)(r.Fragment,{children:!0!==me?(0,g.jsx)(A,{children:(0,g.jsxs)(z,{children:[(0,g.jsx)(V,{onClick:function(){return x((0,u.mc)())},children:(0,g.jsx)(S.IOM,{})}),(0,g.jsxs)(Q,{onSubmit:function(e){e.preventDefault();var i=d.i.findIndex((function(e){return e.id===t.id}));d.i[i]=m,he(!0)},children:[(0,g.jsx)(W,{children:"Update Information"}),(0,g.jsxs)($,{children:[(0,g.jsxs)(U,{children:[(0,g.jsx)(H,{children:"Name"}),(0,g.jsx)(q,{type:"name",name:"name",value:m.name,onChange:fe}),(0,g.jsx)(H,{children:"Passport No"}),(0,g.jsx)(q,{type:"name",name:"passport",value:m.passport,onChange:fe}),(0,g.jsx)(H,{children:"Country"}),(0,g.jsx)(q,{type:"name",name:"country",value:m.country,onChange:fe}),(0,g.jsx)(H,{children:"Status"}),(0,g.jsxs)(K,{name:"status",value:m.status,onChange:fe,children:[(0,g.jsx)("option",{value:"Active",children:"Active"}),(0,g.jsx)("option",{value:"Rejected",children:"Rejected"}),(0,g.jsx)("option",{value:"Process",children:"Process"}),"s"]}),(0,g.jsx)(H,{children:"Visa Issue Date"}),(0,g.jsx)(q,{type:"date",name:"date",value:m.date,onChange:fe}),(0,g.jsx)(H,{children:"Visa Expiry Date"}),(0,g.jsx)(q,{type:"date",name:"expire",value:m.expire,onChange:fe})]}),(0,g.jsxs)(U,{className:"image-cont",children:[(0,g.jsx)("h5",{className:"mb-3",children:"Update Image"}),(0,g.jsx)(B,{children:(0,g.jsx)(R,{src:xe,alt:t.name,onChange:fe})}),(0,g.jsx)(q,{style:{display:"none"},type:"file",id:"img",name:"image",accept:"image/*",onChange:fe}),(0,g.jsx)(ee,{htmlFor:"img",children:"Upload"})]})]}),(0,g.jsxs)(G,{children:[(0,g.jsx)(X,{type:"submit",style:{background:"rgb(108, 45, 199)",width:"150px"},children:"Update"}),(0,g.jsx)(X,{onClick:function(){return x((0,u.mc)())},style:{background:"rgb(250, 42, 85)",width:"150px"},children:"Cancel"})]})]})]})}):(0,g.jsx)(D,{children:(0,g.jsxs)(te,{children:[(0,g.jsx)(ie,{children:"Update User Successfully"}),(0,g.jsx)(Y,{onClick:function(){s(d.i),x((0,u.mc)())},children:(0,g.jsx)(S.IOM,{})}),(0,g.jsxs)(ne,{children:[(0,g.jsx)(re,{src:P,alt:"ok"}),(0,g.jsx)(ae,{children:"Update Successfully."})]}),(0,g.jsx)(oe,{children:(0,g.jsx)(de,{style:{padding:"0.5rem 2rem",background:"rgba(72, 52, 212,1.0)"},onClick:function(){s(d.i),x((0,u.mc)())},children:"Ok"})})]})})}):null,"Delete"===j?(0,g.jsx)(D,{children:!0!==I?(0,g.jsxs)(te,{children:[(0,g.jsx)(ie,{children:"Delete User"}),(0,g.jsx)(Y,{onClick:function(){return x((0,u.mc)())},children:(0,g.jsx)(S.IOM,{})}),(0,g.jsxs)(ne,{children:[(0,g.jsx)(re,{src:k,alt:"Delete"}),(0,g.jsx)(ae,{children:"Do you want to delete this?"})]}),(0,g.jsxs)(oe,{children:[(0,g.jsx)(de,{style:{background:"rgb(250, 42, 85)"},onClick:function(){return x((0,u.mc)())},children:"Cancel"}),(0,g.jsx)(de,{style:{padding:"0.5rem 2rem",background:"rgba(72, 52, 212,1.0)"},onClick:function(){var e=d.i.findIndex((function(e){return e.id===t.id}));d.i.splice(e,1),se(!0)},children:"Ok"})]})]}):(0,g.jsxs)(te,{children:[(0,g.jsx)(ie,{children:"Delete User Successfully"}),(0,g.jsx)(Y,{onClick:function(){s(d.i),x((0,u.mc)())},children:(0,g.jsx)(S.IOM,{})}),(0,g.jsxs)(ne,{children:[(0,g.jsx)(re,{src:P,alt:"ok"}),(0,g.jsx)(ae,{children:"Delete Successfully."})]}),(0,g.jsx)(oe,{children:(0,g.jsx)(de,{style:{padding:"0.5rem 2rem",background:"rgba(72, 52, 212,1.0)"},onClick:function(){s(d.i),x((0,u.mc)())},children:"Ok"})})]})}):null]})},A=a.ZP.div({position:"absolute",top:"80px",left:0,right:0,bottom:0,margin:"auto",width:"100%",minHeight:"100vh",display:"flex",alignItems:"baseline",justifyContent:"center",background:"rgba(3,3,3, 0.7)",transition:"all ease-out 1s",overflow:"scroll",paddingTop:"45px","@media (max-width: 992px)":{top:"55px",paddingTop:"5px"},"@media (max-width: 540px)":{top:"55px",paddingTop:"5px"}}),D=(0,a.ZP)(A)({alignItems:"baseline","@media (max-width: 540px)":{alignItems:"baseline"}}),z=a.ZP.div({width:"40%",height:"auto",padding:"1rem 2rem",display:"flex",flexDirection:"column",background:"#fff",minHeight:"500px",borderRadius:"5px",transition:"all ease 1s",position:"relative",border:"1px solid rgba(27, 20, 100,1.0)",overflow:"hidden",":nth-child(2)":{"@media (max-width: 1100px)":{width:"60%"},"@media (max-width: 850px)":{width:"70%"},"@media (max-width: 540px)":{width:"95%",padding:"0.5rem"}},"@media (max-width: 992px)":{width:"50%"},"@media (max-width: 850px)":{width:"70%"},"@media (max-width: 540px)":{width:"95%",padding:"0.5rem"}}),W=a.ZP.h1({fontSize:"1.3rem"}),T=a.ZP.div({display:"grid",gridTemplateColumns:"160px auto",gap:"0.3rem 0.5rem",marginTop:"0.5rem","@media (max-width: 540px)":{width:"95%",padding:"0.5rem",gridTemplateColumns:"120px auto"}}),R=a.ZP.img({width:"98%",height:"auto"}),B=a.ZP.div({width:"120px",height:"130px",borderRadius:"5px",border:"1px dashed rgba(255, 165, 2,1.0)",display:"flex",alignItems:"center",justifyContent:"center"}),L=a.ZP.div({display:"flex",flexDirection:"column",gap:"0.3rem",overflow:"hidden"}),F=a.ZP.h1({fontSize:"1.25rem",fontWeight:"700"}),J=a.ZP.h2({fontSize:".97rem",fontWeight:"600"}),N=a.ZP.p({fontSize:".9rem",fontWeight:"500"}),E=(0,a.ZP)(N)({position:"relative"}),M=a.ZP.div({display:"grid",gridTemplateColumns:"auto auto auto","@media (max-width: 540px)":{gridTemplateColumns:"auto auto"}}),U=a.ZP.div({display:"flex",flexDirection:"column",msFlexDirection:"column",WebkitFlexDirection:"column",padding:"0.7rem 0.3rem",overflow:"hidden"}),O=a.ZP.label({fontSize:"0.8rem",fontWeight:500,"@media (max-width: 992px)":{fontSize:"0.7rem"}}),H=a.ZP.label({fontSize:"0.8rem",fontWeight:500,marginTop:"0.7rem",":nth-child(1)":{marginTop:0},"@media (max-width: 992px)":{fontSize:"0.7rem"}}),_=a.ZP.h4({fontWeight:"500",fontSize:"1.1rem",marginBottom:"1rem","@media (max-width: 992px)":{fontSize:"1rem"},"@media (max-width: 600px)":{fontSize:"1rem"}}),V=a.ZP.div({width:"45px",height:"35px",position:"absolute",top:"5px",right:"5px",border:"1px solid red",fontSize:"1.6rem",display:"flex",textAlign:"center",alignItems:"center",justifyContent:"center",margin:"auto",borderRadius:"5px",color:"red",cursor:"pointer",":hover":{background:"red",color:"#fff"}}),Y=(0,a.ZP)(V)({border:"1px solid #fff",color:"#fff"}),G=a.ZP.div({display:"flex",width:"100%",flexDirection:"row",msFlexDirection:"row",WebkitFlexDirection:"row",alignItems:"center",WebkitAlignItems:"center",justifyContent:"center",WebkitJustifyContent:"center",padding:"1rem 0.3rem",gap:"0.5rem"}),X=a.ZP.button({padding:"0.5rem 1rem",border:"none",outline:"none",fontSize:".9rem",fontWeight:"500",color:"#fff",":nth-child(1)":{background:"rgb(128, 0, 128)"},":nth-child(2)":{background:"rgb(108, 45, 199)"},":nth-child(3)":{background:"rgb(250, 42, 85)"}}),q=a.ZP.input({padding:"0.5rem 1rem",border:"1px solid rgba(55, 66, 250,0.5)",width:"100%",fontSize:"1rem",borderTopLeftRadius:0,borderBottomLeftRadius:0,display:"block",":focus":{outline:"none",border:"1px dashed rgba(55, 66, 250,0.5)"}}),K=a.ZP.select({padding:"0.5rem 1rem",border:"1px solid rgba(55, 66, 250,0.5)",width:"100%",fontSize:"1rem",borderTopLeftRadius:0,borderBottomLeftRadius:0,display:"block",":focus":{outline:"none",border:"1px dashed rgba(55, 66, 250,0.5)"}}),Q=a.ZP.form({display:"grid",gridTemplateColumns:"auto"}),$=a.ZP.div({display:"grid",gridTemplateColumns:"auto auto",gap:"0.5rem","@media (max-width: 992px)":{gridTemplateColumns:"auto"}}),ee=a.ZP.label({padding:"0.5rem 1rem",border:"none",outline:"none",fontSize:".9rem",fontWeight:"500",color:"#fff",marginTop:"0.5rem",background:"rgb(128, 0, 128)"}),te=(a.ZP.div((function(e){return{display:"flex",flexDirection:"row",msFlexDirection:"row",WebkitFlexDirection:"row",alignItems:e.alignItemsCenter?"center":"baseline",WebkitAlignItems:e.alignItemsCenter?"center":"baseline",justifyContent:e.justifyContentCenter?"center":"",WebkitJustifyContent:e.justifyContentCenter?"center":"",flexWrap:e.nowrap?"nowrap":"wrap",WebkitFlexWrap:e.nowrap?"nowrap":"wrap"}})),a.ZP.div((function(e){return{display:"flex",flexDirection:"column",msFlexDirection:"column",WebkitFlexDirection:"column",alignItems:e.alignItemsCenter?"center":"baseline",WebkitAlignItems:e.alignItemsCenter?"center":"baseline",justifyContent:e.justifyContentCenter?"center":"",WebkitJustifyContent:e.justifyContentCenter?"center":""}})),a.ZP.div({width:"540px",height:"auto",background:"#fff",borderRadius:"5px",padding:"0.5rem",paddingTop:"3.5rem",position:"relative",minHeight:"50px",display:"flex",flexDirection:"column",msFlexDirection:"column",WebkitFlexDirection:"column",marginTop:"150px","@media (max-width: 540px)":{width:"90%",marginTop:"150px"}})),ie=a.ZP.p({position:"absolute",left:0,top:0,margin:"auto 0",fontSize:"0.9rem",fontWeight:"400",color:"#fff",background:"#576574",width:"100%",lineHeight:"3.1",borderTopLeftRadius:"5px",borderTopRightRadius:"5px",paddingLeft:"10px"}),ne=a.ZP.div({display:"grid",padding:"1rem",gridTemplateColumns:"50px auto",gap:"0.3rem",alignItems:"center"}),re=a.ZP.img({width:"95%",height:"auto"}),ae=a.ZP.p({fontSize:"1.1rem"}),oe=a.ZP.div({padding:"1rem 0.3rem",display:"flex",flexDirection:"row",msFlexDirection:"row",WebkitFlexDirection:"row",alignItems:"center",WebkitAlignItems:"center",justifyContent:"center",WebkitJustifyContent:"center",gap:"0.5rem 1rem"}),de=a.ZP.button({padding:"0.5rem 1rem",border:"none",outline:"none",fontSize:".9rem",fontWeight:"500",color:"#fff"}),se=i(8565),le=i(7689),ce=i(6876),me=function(){var e=(0,r.useState)(1),t=(0,n.Z)(e,2),i=t[0],a=t[1],s=(0,r.useState)(null),l=(0,n.Z)(s,2),c=l[0],m=l[1],h=(0,r.useState)(10),b=(0,n.Z)(h,2),j=b[0],w=b[1],y=(0,r.useState)(1),v=(0,n.Z)(y,2),C=v[0],Z=v[1],S=(0,r.useState)(0),k=(0,n.Z)(S,2),P=k[0],A=k[1],D=(0,r.useState)(0),z=(0,n.Z)(D,2),W=z[0],T=z[1],R=(0,r.useState)(C),B=(0,n.Z)(R,2),L=B[0],F=B[1],J=(0,p.v9)((function(e){return e.employee})),N=J.empData,E=J.myEvent,M=J.month,U=J.zone,O=(0,p.v9)((function(e){return e.login})).data,H=(0,r.useState)(),_=(0,n.Z)(H,2),V=_[0],Y=_[1],G=(0,r.useState)(),X=(0,n.Z)(G,2),q=X[0],K=X[1],Q=(0,r.useState)(!0),$=(0,n.Z)(Q,2),ee=$[0],te=$[1],ie=(0,p.I0)(),ne=(0,le.s0)();(0,r.useEffect)((function(){var e=x.Z.getItem("data"),t=x.Z.getItem("u");0===O.length&&(null!==e?d.i.map((function(t){return t.username===e.username&&t.password===e.password&&ie((0,se.R9)(e)),null})):ne("/"),null!==t&&ie((0,u.yJ)({data:e,month:x.Z.getItem("m"),evt:x.Z.getItem("e"),zone:x.Z.getItem("z")}))),document.title="Employee's Information";var i=localStorage.getItem("row");null===i?(window.innerWidth<993&&w(10),localStorage.setItem("row",j)):w(i);var n=localStorage.getItem("sortby");null===n?localStorage.setItem("sortby",1):a(n);var r=sessionStorage.getItem("t-page");null===r?sessionStorage.setItem("t-page",1):Z(r);var o=sessionStorage.getItem("l-index");null===o?sessionStorage.setItem("l-index",0):T(o),A(Math.ceil(d.i.length/j)),Y(d.i),K(E),te(!1)}),[c,j,E,ie,ne,O.length]);var re=function(e){F(e),P>=e&&""!==e&&(Z(e),sessionStorage.setItem("l-index",(Number(e)-1)*j),sessionStorage.setItem("t-page",Number(e)),T((Number(e)-1)*j),Z(Number(e)))};return(0,g.jsx)(r.Fragment,{children:ee?(0,g.jsx)(ce.default,{}):(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(he,{children:[(0,g.jsx)(xe,{children:"Employees Information"}),(0,g.jsxs)(ue,{children:[(0,g.jsx)(ge,{onClick:function(){var e=1===i?0:1;a(e),localStorage.setItem("sortby",e)},children:i>0?(0,g.jsx)(o.Ds3,{}):(0,g.jsx)(o.ADs,{})}),(0,g.jsx)(fe,{children:(0,g.jsx)(je,{type:"search",placeholder:"Search",onChange:function(e){return m(e.target.value)}})})]}),(0,g.jsxs)(pe,{children:[(0,g.jsxs)(ye,{children:[(0,g.jsx)("thead",{children:(0,g.jsxs)(Ce,{children:[(0,g.jsx)(ve,{children:"Img"}),(0,g.jsx)(ve,{children:"Name"}),(0,g.jsx)(ve,{children:"Passport"}),(0,g.jsx)(ve,{children:"Country"}),(0,g.jsx)(ve,{children:"Issue"}),(0,g.jsx)(ve,{children:"Expiry"}),(0,g.jsx)(ve,{children:"Month"}),(0,g.jsx)(ve,{children:"Zone"}),(0,g.jsx)(ve,{children:"Last Update"}),(0,g.jsx)(ve,{children:"Action"})]})}),(0,g.jsx)("tbody",{children:V&&V.sort((function(e,t){var n=new Date(e.expire),r=new Date(t.expire);return i<1&&(n=new Date(t.expire),r=new Date(e.expire)),n<r?-1:1})).filter((function(e){var t=new Date(e.expire).getFullYear(),i=new Date(e.expire).getMonth(),n=new Date,r=n.getFullYear(),a=n.getMonth();return i<a?(t-=1,i=i+12-a):i-=a,i=12*(t-r)+i,null!==c&&""!==c&&void 0!==c||"Active"!==e.status&&"Process"!==e.status&&"In-Active"!==e.status?Object.values(e).toLocaleString().toLocaleLowerCase().includes(c.toLocaleLowerCase())&&"Active"===e.status||"safe".includes(c.toLocaleLowerCase())&&i>3||"danger".includes(c.toLocaleLowerCase())&&i<4&&i>0||"reject".includes(c.toLocaleLowerCase())&&i<1||"".concat(i).includes(c.toLocaleLowerCase())||"".concat(i,"mth").startsWith(c.toLocaleLowerCase())?e:null:e})).slice(W,j*C).map((function(e,t){return(0,g.jsx)(f,{data:e},e.id)}))})]}),(0,g.jsxs)(ke,{children:[(0,g.jsxs)(we,{name:"row",value:j,onChange:function(e){w(e.target.value),localStorage.setItem("row",e.target.value)},children:[(0,g.jsx)("option",{value:5,children:"5"}),(0,g.jsx)("option",{value:10,children:"10"}),(0,g.jsx)("option",{value:20,children:"20"}),(0,g.jsx)("option",{value:50,children:"50"}),(0,g.jsx)("option",{value:100,children:"100"})]}),(0,g.jsxs)(De,{children:["Pages: 1 to ",P]}),(0,g.jsxs)(Pe,{children:[(0,g.jsx)(Ie,{disabled:1===C,onClick:function(){C>1&&re(Number(C)-1)},children:"Previous"}),(0,g.jsx)(Ae,{type:"number",onChange:function(e){var t=e.target.value;console.log(t),re(t)},value:L}),(0,g.jsx)(Ie,{disabled:C===P,onClick:function(){P>C&&re(Number(C)+1)},children:"Next"})]})]})]}),Object.values(N).length>0&&(0,g.jsx)(I,{data:N,month:M,zone:U,evt:q,dataChange:function(e){te(!0),Y(e),setTimeout((function(){te(!1)}),2e3)}})]})})})},he=a.ZP.section({width:"100%",minHeight:"90vh",display:"flex",flexDirection:"column",padding:"0.5rem 1rem",position:"relative",paddingTop:"90px","@media (max-width: 992px)":{paddingTop:"65px"}}),pe=a.ZP.div({width:"100%",height:"auto",border:"1px solid rgba(3,3,3,0.2)",padding:"0.1rem 0.3rem"}),ue=a.ZP.div({width:"100%",display:"flex",alignItems:"center",border:"1px solid rgba(3,3,3,0.2)",padding:"0.3rem"}),xe=a.ZP.h1({fontSize:"1.3rem",fontWeight:700,color:"rgba(3,3,3, 0.7)",marginBottom:"1rem"}),ge=a.ZP.div({width:"38px",height:"38px",border:"1px solid rgba(3,3,3, 0.5)",borderRadius:"3px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.5rem",marginRight:"0.5rem"}),fe=a.ZP.div({position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"stretch",marginLeft:"auto"}),be=a.ZP.span({display:"flex",alignItems:"center",padding:"0.375rem 0.75rem",whiteSpace:"nowrap",fontSize:"1rem",lineHeight:1.5,fontWeight:"400",textAlign:"center",color:"#fff",background:"rgba(55, 66, 250,0.5)",border:"1px solid rgba(55, 66, 250,0.5)",borderTopRightRadius:0,borderBottomRightRadius:0}),je=a.ZP.input({padding:"0.5rem 1rem",border:"1px solid rgba(55, 66, 250,0.5)",width:"100%",fontSize:"1rem",borderTopLeftRadius:0,borderBottomLeftRadius:0,display:"block",":focus":{outline:"none"}}),we=a.ZP.select({padding:"0.5rem",maxWidth:"80px",border:"1px solid rgba(55, 66, 250,0.5)",width:"100%",fontSize:"1rem",borderTopLeftRadius:0,borderBottomLeftRadius:0,display:"block",margin:"0.3rem"}),ye=a.ZP.table({width:"100%"}),ve=a.ZP.th({fontWeight:500,fontSize:"1rem",padding:"0.5rem 1rem",whiteSpace:"wrap",textAlign:"left",":nth-child(1)":{width:"62px"},"@media (max-width: 1200px)":{fontSize:"0.9rem",padding:"0.5rem 0.3rem"},"@media (max-width: 992px)":{":nth-child(9)":{display:"none"}},"@media (max-width: 890px)":{":nth-child(4)":{display:"none"}},"@media (max-width: 768px)":{":nth-child(8)":{display:"none"}},"@media (max-width: 687px)":{":nth-child(5)":{display:"none"}},"@media (max-width: 551px)":{fontSize:"0.9rem",":nth-child(1)":{width:"52px"},":nth-child(3)":{display:"none"}},"@media (max-width: 450px)":{fontSize:"0.7rem",padding:"0.5rem 0.35rem",":nth-child(10)":{display:"none"},":nth-child(7)":{display:"block"}}}),Ce=a.ZP.tr({padding:"0.3rem 0",background:"rgba(241, 242, 246,0.2)",border:"1px solid #ced4da",width:"100%"}),Ze=a.ZP.td((function(e){return{fontWeight:400,fontSize:"1rem",padding:"0.5rem 1rem",whiteSpace:"wrap",position:"relative",":nth-child(6)":{color:"#333 !important",fontWeight:400,"::before":{position:"absolute",content:"''",width:"2%",height:"30px",display:"block",top:"0",left:"0",bottom:"0",margin:"auto",color:"#333",background:e.month>3?"rgba(46, 213, 115, 1)":e.month>1?"rgba(255, 165, 2,1)":"rgba(234, 32, 39, 1)",borderRadius:"5px","@media (min-width: 1200px)":{width:"2%"},"@media (max-width: 992px)":{width:"6%"}}},":nth-child(1)":{width:"62px"},"@media (max-width: 768px)":{":nth-child(7)":{display:"none"}},"@media (max-width: 687px)":{":nth-child(4)":{display:"none"}},"@media (max-width: 550px)":{fontSize:"0.9rem",":nth-child(1)":{width:"62px"}},"@media (max-width: 450px)":{fontSize:"0.7rem",padding:"0.5rem 0.35rem"}}})),Se=a.ZP.img({width:"30px",height:"auto",borderRadius:"5px",border:"2px solid rgba(255, 165, 2,1.0)"}),ke=a.ZP.div({display:"flex",alignItems:"center",justifyContent:"flex-end",width:"100%"}),Pe=a.ZP.div({display:"flex",flexDirection:"row",alignItems:"center",margin:"0 0.3rem"}),Ie=a.ZP.button({padding:"0.5rem 1rem",border:"none",outline:"none",fontWeight:600,borderRadius:"3px",color:"#fff","&:nth-child(1)":{background:"#8a5082"},"&:nth-child(3)":{background:"rgba(255, 71, 87,1.0)"},"@media (max-width: 450px)":{padding:"0.5rem 0.7rem",fontSize:"0.8rem"}}),Ae=(0,a.ZP)(je)({margin:"0 0.3rem",width:"50px",padding:"0.5rem 0.3rem",textAlign:"center",fontWeight:600}),De=a.ZP.p({padding:"0 0.5rem",fontWeight:500,opacity:.7,"@media (max-width: 450px)":{fontSize:"0.8rem"}})}}]);
//# sourceMappingURL=609.32b70edd.chunk.js.map