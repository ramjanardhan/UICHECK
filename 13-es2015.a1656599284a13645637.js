(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{wBSO:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),e=u("EVdn");class o{constructor(l,n,u,t,e){this.datepipe=l,this.createQuoteService=n,this.commonService=u,this.fileuploadService=t,this.router=e,this.fileToUpload=null,this.msg="No file chosen",this.sucesserror=""}ngOnInit(){this.getuploadedData()}handleFileInput(l){this.fileToUpload=l.item(0),this.msg=this.fileToUpload.name}excelUpload(){"No file chosen"==this.msg&&(this.sucesserror="Please select excel file for upload",e("#AlertModal").show()),"xlsx"!=this.fileToUpload.name.substr(this.fileToUpload.name.lastIndexOf(".")+1)&&(this.msg="No file chosen",this.sucesserror="Please upload excel file",e("#AlertModal").show());let l=new FormData;l.append("file",this.fileToUpload),this.fileuploadService.uploadFile(l).subscribe(l=>{console.log(l),""!=l&&(this.response=l,this.msg="No file chosen",this.getuploadedData(),this.sucesserror=this.response.message,e("#AlertModal").show())},l=>{this.sucesserror="There is some problem for uploading the sheet. Please contact to Administrator",e("#AlertModal").show()})}getuploadedData(){this.fileuploadService.getuploadedData().subscribe(l=>{this.uploaddata=l},l=>{this.sucesserror="There is some problem for getting the uploaded data. Please contact to Administrator",e("#AlertModal").show()})}}class a{}var s=u("pMnS"),i=u("SVse"),c=u("iInd"),p=u("ilrz"),r=u("nVTO"),b=u("IheW"),d=u("AytR");let h=new b.g;h=h.append("Content-Type","application/json"),h=h.append("Authorization","application/json");let m=(()=>{class l{constructor(l){this.httpClient=l,this.baseUrl=""+d.a.serviceBaseUrl}uploadFile(l){console.log(l);let n=new b.g;return n.append("Content-Type","application/json"),this.httpClient.post("http://ec2-65-0-30-35.ap-south-1.compute.amazonaws.com:7779/excelupload",l,{headers:n})}getuploadedData(){return this.httpClient.get("http://ec2-65-0-30-35.ap-south-1.compute.amazonaws.com:7779/tutorials")}}return l.ngInjectableDef=t.Ob({factory:function(){return new l(t.Pb(b.c))},token:l,providedIn:"root"}),l})();var g=t.nb({encapsulation:0,styles:["#alert[_ngcontent-%COMP%]\n{\n  top: 40%;\n  width: 25%;\n}",[".main-content-box[_ngcontent-%COMP%]{background:#fff;box-shadow:0 3px 6px 0 rgba(0,0,0,.16);padding:12px 28px;margin:18px 0}.collapse-panel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:28px 0 12px}.collapse-panel-header-text-lg[_ngcontent-%COMP%]{font-weight:300;font-size:24px;color:#343741}.icon-style-md[_ngcontent-%COMP%]{font-size:28px!important;color:#06748c}.section-line[_ngcontent-%COMP%]{border:1px solid #c0bfc0;margin-bottom:18px}.text-sm-light[_ngcontent-%COMP%]{font-weight:500;font-size:12px;color:#707070}.text-md-regular[_ngcontent-%COMP%]{font-weight:500;font-size:16px;color:#343741}.text-md-bold[_ngcontent-%COMP%]{font-weight:700;font-size:18px;color:#343741}.row-margin[_ngcontent-%COMP%]{margin-top:28px;margin-bottom:32px}.page-top-links[_ngcontent-%COMP%]{text-align:right;margin-top:32px}.page-top-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;margin:0 24px;font-size:16px;color:#343741}.page-top-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child{margin-right:0}.icon-margin[_ngcontent-%COMP%]{margin:0 8px}.rotate[_ngcontent-%COMP%]{transform:rotate(180deg)}.custom-icon-style[_ngcontent-%COMP%]{padding-top:6px}.border-text[_ngcontent-%COMP%]{font-weight:500;font-size:16px;color:#000;padding:8px 0;background-color:#fff;border:1px solid #c0bfc0;border-radius:3px}.disp-inline-block[_ngcontent-%COMP%]{display:inline-block}"]],data:{}});function f(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,18,"tr",[["class","alert alert-light"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(2,null,["",""])),(l()(),t.pb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(4,null,["",""])),(l()(),t.pb(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(6,null,["",""])),(l()(),t.pb(7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(8,null,["",""])),(l()(),t.pb(9,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(10,null,["",""])),(l()(),t.pb(11,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(12,null,["",""])),(l()(),t.pb(13,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(14,null,["",""])),(l()(),t.pb(15,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(16,null,["",""])),(l()(),t.pb(17,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(18,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit.uploadPID),l(n,4,0,n.context.$implicit.firstname),l(n,6,0,n.context.$implicit.lastname),l(n,8,0,n.context.$implicit.lob_name),l(n,10,0,n.context.$implicit.product_name),l(n,12,0,n.context.$implicit.proposal_startdate),l(n,14,0,n.context.$implicit.proposal_status),l(n,16,0,n.context.$implicit.user_id),l(n,18,0,n.context.$implicit.uw_approved)}))}function x(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,23,"table",[["style","width: 100%;font-size: 12px;"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,19,"thead",[],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,18,"tr",[["class","grid-style"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Proposal No"])),(l()(),t.pb(5,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["First Name"])),(l()(),t.pb(7,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Last Name"])),(l()(),t.pb(9,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["LOB Name"])),(l()(),t.pb(11,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Product Name"])),(l()(),t.pb(13,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Proposal Startdate"])),(l()(),t.pb(15,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Proposal Status"])),(l()(),t.pb(17,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["User ID"])),(l()(),t.pb(19,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["UW Approved"])),(l()(),t.pb(21,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,f)),t.ob(23,278528,null,0,i.k,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,23,0,n.component.uploaddata)}),null)}function v(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,1,"div",[["class","heading-top"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["File Upload"])),(l()(),t.pb(2,0,null,null,11,"div",[["class","page-top-links"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Ab(l,4).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.ob(4,671744,null,0,c.n,[c.k,c.a,i.i],{routerLink:[0,"routerLink"]},null),t.Bb(5,1),(l()(),t.pb(6,0,null,null,0,"span",[["class","mr-5"]],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,6,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Ab(l,8).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.ob(8,671744,null,0,c.n,[c.k,c.a,i.i],{routerLink:[0,"routerLink"]},null),t.Bb(9,1),(l()(),t.pb(10,0,null,null,1,"i",[["aria-hidden","true"],["class","fas fa-file-upload"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["\xa0 "])),(l()(),t.pb(12,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["File Retry Upload"])),(l()(),t.pb(14,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(15,0,null,null,32,"div",[["class","container-box"]],null,null,null,null,null)),(l()(),t.pb(16,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(17,0,null,null,3,"div",[["class","col-lg-12 col-md-12 col-sm-12"]],null,null,null,null,null)),(l()(),t.pb(18,0,null,null,2,"a",[["class","quote-search-button2"],["href","./assets/Templates/Sample.xlsx"],["style","color: white;line-height: 60px;"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Download Template \xa0\xa0"])),(l()(),t.pb(20,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-download"]],null,null,null,null,null)),(l()(),t.pb(21,0,null,null,0,"div",[["class","col-lg-10 col-md-10 col-sm-10"]],null,null,null,null,null)),(l()(),t.pb(22,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(23,0,null,null,3,"div",[["class","col-lg-10 col-md-10 col-sm-10"]],null,null,null,null,null)),(l()(),t.pb(24,0,null,null,1,"label",[["class","custom-file-label"],["for","file"]],null,null,null,null,null)),(l()(),t.Ib(25,null,[""," "])),(l()(),t.pb(26,0,null,null,0,"input",[["class","custom-file-input"],["id","file"],["placeholder","Chose file"],["type","file"]],null,[[null,"change"]],(function(l,n,u){var t=!0;return"change"===n&&(t=!1!==l.component.handleFileInput(u.target.files)&&t),t}),null,null)),(l()(),t.pb(27,0,null,null,2,"div",[["class","col-lg-2 col-md-2 col-sm-2"]],null,null,null,null,null)),(l()(),t.pb(28,0,null,null,1,"button",[["class","quote-search-button1"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.excelUpload()&&t),t}),null,null)),(l()(),t.Ib(-1,null,[" Upload "])),(l()(),t.pb(30,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(31,0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(32,0,null,null,0,"div",[["class","col-lg-10 col-md-10 col-sm-10"]],null,null,null,null,null)),(l()(),t.pb(33,0,null,null,9,"div",[["class","col-lg-2 col-md-2 col-sm-2"]],null,null,null,null,null)),(l()(),t.pb(34,0,null,null,8,"div",[["class","dropdown"]],null,null,null,null,null)),(l()(),t.pb(35,0,null,null,2,"button",[["class","dropbtn"],["onclick","myFunction()"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Download \xa0\xa0"])),(l()(),t.pb(37,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-angle-down"]],null,null,null,null,null)),(l()(),t.pb(38,0,null,null,4,"div",[["class","dropdown-content"],["id","myDropdown"]],null,null,null,null,null)),(l()(),t.pb(39,0,null,null,1,"a",[["href","http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7779/downloadexcel"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Export to excel"])),(l()(),t.pb(41,0,null,null,1,"a",[["href","http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7779/downloadpdf"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Export to pdf"])),(l()(),t.pb(43,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(44,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(45,0,null,null,2,"div",[["class","col-lg-12 col-md-12 col-sm-12"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,x)),t.ob(47,16384,null,0,i.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(48,0,null,null,14,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.pb(49,0,null,null,13,"div",[["class","modal"],["id","AlertModal"]],null,null,null,null,null)),(l()(),t.pb(50,0,null,null,12,"div",[["class","modal-dialog"],["id","alert"]],null,null,null,null,null)),(l()(),t.pb(51,0,null,null,11,"div",[["class","modal-content"]],null,null,null,null,null)),(l()(),t.pb(52,0,null,null,4,"div",[["class","modal-header"]],null,null,null,null,null)),(l()(),t.pb(53,0,null,null,1,"h4",[["class","modal-title"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Alert"])),(l()(),t.pb(55,0,null,null,1,"button",[["class","close"],["onclick","alertscreenbtnback()"],["type","button"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["\xd7"])),(l()(),t.pb(57,0,null,null,2,"div",[["class","modal-body"]],null,null,null,null,null)),(l()(),t.pb(58,0,null,null,1,"div",[["style","font-size: 12px;"]],null,null,null,null,null)),(l()(),t.Ib(59,null,[" "," "])),(l()(),t.pb(60,0,null,null,2,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),t.pb(61,0,null,null,1,"button",[["class","btn btn-danger"],["onclick","alertscreenbtnback()"],["type","button"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Close"]))],(function(l,n){var u=n.component,t=l(n,5,0,"/create-topic");l(n,4,0,t);var e=l(n,9,0,"/file-reupload");l(n,8,0,e),l(n,47,0,null!=u.uploaddata)}),(function(l,n){var u=n.component;l(n,3,0,t.Ab(n,4).target,t.Ab(n,4).href),l(n,7,0,t.Ab(n,8).target,t.Ab(n,8).href),l(n,25,0,u.msg),l(n,59,0,u.sucesserror)}))}function w(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,1,"ng-component",[],null,null,null,v,g)),t.ob(1,114688,null,0,o,[i.e,p.a,r.a,m,c.k],null,null)],(function(l,n){l(n,1,0)}),null)}var I=t.lb("ng-component",o,w,{},{},[]),k=u("s7LF");u.d(n,"FileUploadModuleNgFactory",(function(){return y}));var y=t.mb(a,[],(function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[s.a,I]],[3,t.j],t.v]),t.zb(4608,i.n,i.m,[t.s,[2,i.v]]),t.zb(4608,k.t,k.t,[]),t.zb(1073742336,i.b,i.b,[]),t.zb(1073742336,k.s,k.s,[]),t.zb(1073742336,k.i,k.i,[]),t.zb(1073742336,c.o,c.o,[[2,c.t],[2,c.k]]),t.zb(1073742336,a,a,[]),t.zb(1024,c.i,(function(){return[[{path:"",component:o}]]}),[])])}))}}]);