(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{AgSA:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),e=u("s7LF");class o{constructor(l,n,u,t,o){this.commonservice=l,this.location=n,this.router=u,this.route=t,this.createQuoteService=o,this.totalPremium=0,this.shortFallPremium=0,this.selectedPremium=0,this.isDuplicatePaymentModeSelected=!1,this.isPaymentTypeSingle=!0,this.paymentAmount=1234,this.editPaymentRecord=!1,this.sumOfPayments=0,this.loadMoneyToWalletForm=new e.g({paymentMode:new e.e,amountForSingle:new e.e,amountFormultiple:new e.e,paymentModeForSingle:new e.e(""),paymentModeForMultiple:new e.e("")}),this.isPaymentModeForMultiple=!1,this.isPaymentModeForSingle=!1,this.isAmountEmpty=!1,this.inputForPayment={paymentDetails:{transactionId:"94204CE9030820162402E1DK",amount:0,productInfo:"testing",firstName:"testing",emailAddress:"swargam@gmail.com",phoneNumber:"8143283098"}},this.loadmoneyto="",this.multiplePaymentsList=[],this.onClickmakePayment=!1,this.getVirtualWallet()}onChangeLoadMoney(){this.multiplePaymentsList=[]}getPayementCalDetails(){this.selectedPayments.forEach(l=>{this.totalPremium=l.totalPremium+this.totalPremium}),this.isPaymentTypeSingle&&(this.selectedPremium=null!=this.loadMoneyToWalletForm.value.amountForSingle?parseFloat(this.loadMoneyToWalletForm.value.amountForSingle):0),this.isPaymentTypeSingle||(this.selectedPremium=null!=this.loadMoneyToWalletForm.value.amountFormultiple?parseFloat(this.loadMoneyToWalletForm.value.amountFormultiple):0)}ngOnInit(){this.route.params.subscribe(l=>{"/home/paymentpending"==l.routerFrom?(this.loadmoneyto=l.routerFrom,this.selectedPayments=Object.assign([],JSON.parse(localStorage.getItem("selectedPayments"))),this.getPayementCalDetails()):"/wallet"==l.routerFrom?(this.selectedPayments=[],this.loadmoneyto=l.routerFrom):(this.selectedPayments=[],this.loadmoneyto="")})}deleteSelectedItem(l){const n=this.selectedPayments.indexOf(l);-1!==n&&this.selectedPayments.splice(n,1),localStorage.setItem("selectedPayments",JSON.stringify(this.selectedPayments)),this.totalPremium=0,this.getPayementCalDetails()}validation(){this.isPaymentTypeSingle&&("online"==this.loadMoneyToWalletForm.value.paymentModeForSingle?null!=this.loadMoneyToWalletForm.value.amountForSingle?(this.inputForPayment.paymentDetails.amount=parseFloat(this.loadMoneyToWalletForm.value.amountForSingle),this.isPaymentModeForSingle=!1,this.isAmountEmpty=!1):this.isAmountEmpty=!0:this.isPaymentModeForSingle=!0),0==this.multiplePaymentsList.length&&(this.isPaymentTypeSingle||("online"==this.loadMoneyToWalletForm.value.paymentModeForMultiple?null!=this.loadMoneyToWalletForm.value.amountFormultiple?(this.isPaymentModeForMultiple=!1,this.isAmountEmpty=!1,this.totalPremium=0,this.getPayementCalDetails()):this.isAmountEmpty=!0:this.isPaymentModeForMultiple=!0))}makePayment(){this.payment()}payment(){window.open("http://ec2-13-233-60-5.ap-south-1.compute.amazonaws.com:7776","_self")}payment1(){this.validation(),this.isPaymentTypeSingle?this.isPaymentModeForSingle||this.isAmountEmpty||(this.inputForPayment.paymentDetails.transactionId=(1e16*Math.random()).toString(),this.createQuoteService.makePayment(this.inputForPayment).subscribe(l=>{this.onClickmakePayment=!1,console.log(l),localStorage.removeItem("selectedPayments"),window.open("","_self").document.write(l)},l=>{console.log(l)})):this.isPaymentModeForMultiple||this.isAmountEmpty||(this.inputForPayment.paymentDetails.transactionId=(1e16*Math.random()).toString(),this.createQuoteService.makePayment(this.inputForPayment).subscribe(l=>{this.onClickmakePayment=!1,window.open("","_self").document.write(l)},l=>{console.log(l)}))}setPaymentType(){this.isPaymentTypeSingle=!1,this.loadMoneyToWalletForm.value.amount=null,this.loadMoneyToWalletForm.patchValue({paymentModeForMultiple:"",paymentModeForSingle:""}),this.multiplePaymentsList=[],this.sumOfPayments=0}getVirtualWallet(){this.userID=1,this.createQuoteService.getVirtualWallet(this.userID).subscribe(l=>{this.walletResponse=l,this.walletResponse=this.walletResponse.closingBalance},l=>{})}displaySumAmount(){""==this.loadMoneyToWalletForm.value.amountForSingle&&(this.loadMoneyToWalletForm.value.amountForSingle=0),this.sumOfPayments=parseFloat(this.loadMoneyToWalletForm.value.amountForSingle),this.selectedPremium=this.totalPremium-this.sumOfPayments}resetPaymentType(){this.loadMoneyToWalletForm.patchValue({amountFormultiple:0,amountForSingle:0}),this.isPaymentTypeSingle=!0,this.loadMoneyToWalletForm.value.amount=null,this.loadMoneyToWalletForm.patchValue({paymentModeForMultiple:"",paymentModeForSingle:""}),this.multiplePaymentsList=[],this.sumOfPayments=0}onChangePaymentTypeSingle(){this.loadMoneyToWalletForm.patchValue({amountFormultiple:null,amountForSingle:null}),this.isPaymentModeForSingle="online"!=this.loadMoneyToWalletForm.value.paymentModeForSingle,this.sumOfPayments=0}onChangePaymentTypeMultiple(){this.loadMoneyToWalletForm.patchValue({amountFormultiple:null,amountForSingle:null}),this.isDuplicatePaymentModeSelected=!1,this.isPaymentModeForMultiple="online"!=this.loadMoneyToWalletForm.value.paymentModeForMultiple,this.sumOfPayments=0}addPayment(){this.validation(),this.isPaymentModeForMultiple||this.isAmountEmpty||(this.multiplePaymentsList.some(l=>l.paymentMode==this.loadMoneyToWalletForm.value.paymentMode)?this.isDuplicatePaymentModeSelected=!0:(this.isDuplicatePaymentModeSelected=!1,this.loadMoneyToWalletForm.patchValue({amountFormultiple:parseFloat(this.loadMoneyToWalletForm.value.amountFormultiple).toFixed(2)}),1==this.editPaymentRecord?(this.multiplePaymentsList[this.editRecordIndex]=this.loadMoneyToWalletForm.value,this.editPaymentRecord=!1):(this.isPaymentModeForMultiple=!1,this.multiplePaymentsList.push(this.loadMoneyToWalletForm.value)),this.calulatePaymentListSum(),this.loadMoneyToWalletForm.reset(),this.loadMoneyToWalletForm.patchValue({paymentModeForMultiple:""})))}deletePayment(l){this.multiplePaymentsList.splice(l,1),this.calulatePaymentListSum()}editPayment(l){this.loadMoneyToWalletForm.setValue(this.multiplePaymentsList[l]),this.editPaymentRecord=!0,this.editRecordIndex=l}calulatePaymentListSum(){this.sumOfPayments=0;for(let l of this.multiplePaymentsList)this.sumOfPayments=parseFloat(this.sumOfPayments.toString())+parseFloat(l.amountFormultiple),this.inputForPayment.paymentDetails.amount=this.sumOfPayments,this.selectedPremium=this.totalPremium-this.sumOfPayments}isNumber(l){/[0-9.]/.test(l.key)||l.preventDefault(),this.isAmountEmpty=!1}}class a{}var i=u("pMnS"),s=u("SVse"),r=u("AytR"),m=u("IheW");let c=(()=>{class l{constructor(l){this.httpClient=l,this.baseUrl=""+r.a.serviceBaseUrl}getPaymentResult(l){return this.httpClient.get(this.baseUrl+"api/proposal/dashboardResult/"+l+"/Payment Pending")}}return l.ngInjectableDef=t.Ob({factory:function(){return new l(t.Pb(m.c))},token:l,providedIn:"root"}),l})();var p=u("iInd"),b=u("ilrz"),d=t.nb({encapsulation:0,styles:[[".payment-type[_ngcontent-%COMP%]{display:inline-block;margin-right:28px;font-size:16px;color:#707070;font-weight:300}.payment-type-option[_ngcontent-%COMP%]{display:inline-block!important;margin-right:28px}.payment-type-option[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:18px!important;width:18px!important}.validationMsg[_ngcontent-%COMP%]{color:red;font-weight:700}.payment-type-option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:16px;font-weight:500!important;color:#343741!important;margin:0 8px}.form-box[_ngcontent-%COMP%]{background:#fff;box-shadow:0 3px 6px 0 rgba(0,0,0,.16);padding:32px 42px;margin:24px 0}.payment-form-box[_ngcontent-%COMP%]{padding-bottom:0}.custom-form-control[_ngcontent-%COMP%]{height:50px;background:#fff;border:1px solid #919191;border-radius:3px;color:#000}.payment-type-row[_ngcontent-%COMP%]{margin-top:12px;margin-bottom:36px}.payment-action-section[_ngcontent-%COMP%]{padding:28px 42px;background-color:#727782;margin:42px -42px 0}.icon-pyamt-wallet[_ngcontent-%COMP%]{font-size:48px;color:#fff}.wallet-current-balance[_ngcontent-%COMP%]{display:inline-block;color:#fff;padding-right:32px}.border-right[_ngcontent-%COMP%]{border-right:1px solid #fff}.wallet-icon-area[_ngcontent-%COMP%]{margin:0 16px 0 0;display:inline-block}.add-payment-area[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:16px;width:93%}.add-payment-area[_ngcontent-%COMP%]{text-align:right}.btn-blue[_ngcontent-%COMP%]{background:#727782;border:1px solid #fff;box-shadow:0 3px 0 0 #fff;border-radius:3px;color:#fff;font-weight:700;height:50px}.w-60[_ngcontent-%COMP%]{width:60%!important}.make-payment-btn-area[_ngcontent-%COMP%]{padding-right:0;text-align:right}.make-payment-btn-area[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:16px}.font-md-bold[_ngcontent-%COMP%]{font-size:20px;font-weight:700}.icon-rupee-md[_ngcontent-%COMP%]{font-size:20px;font-weight:300!important;margin-right:4px}.font-sm-regular[_ngcontent-%COMP%]{font-weight:500;font-size:14px}.btn-white[_ngcontent-%COMP%]{background:#fff;border:1px solid #1a1446;box-shadow:0 3px 0 0 #c0bfc0;border-radius:3px;height:50px;color:#1a1446;font-weight:700}.btn[_ngcontent-%COMP%]{width:100%}.payment-list-table[_ngcontent-%COMP%]{margin-top:42px}.custom-table[_ngcontent-%COMP%]{border:1px solid #c0bfc0!important;border-radius:4px!important}.payment-list-table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{margin-bottom:16px}.payment-list-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:none;background-color:#f5f5f5}.payment-list-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none}.payment-list-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:50px}.table-row-bg-blue[_ngcontent-%COMP%]{background-color:#f2fcfc}.table-row-bg-white[_ngcontent-%COMP%]{background-color:#fff}.selected-payment-amount[_ngcontent-%COMP%]{color:#fff;display:inline-block;margin-left:24px}.icon-margin-right[_ngcontent-%COMP%]{margin-right:16px}@media only screen and (max-width:600px){.form-box[_ngcontent-%COMP%]{padding:24px 12px}.payment-action-section[_ngcontent-%COMP%]{padding:24px 12px;margin:12px -12px 0}.wallet-icon-area[_ngcontent-%COMP%]{margin-right:12px}.font-md-bold[_ngcontent-%COMP%]{font-size:18px}.font-sm-regular[_ngcontent-%COMP%]{font-size:12px}.selected-payment-amount[_ngcontent-%COMP%]{margin-left:62px;margin-top:12px}.make-payment-btn-area[_ngcontent-%COMP%]{padding:12px 0}.w-60[_ngcontent-%COMP%]{width:100%!important}.form-margin-mb[_ngcontent-%COMP%]{margin:24px 0}.add-payment-area[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}.payment-type-option[_ngcontent-%COMP%]{display:block!important}.payment-form-box[_ngcontent-%COMP%]{padding-bottom:0}}"]],data:{}});function g(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(2,null,["",""])),(l()(),t.pb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(4,null,["",""])),(l()(),t.pb(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(6,null,["",""])),(l()(),t.pb(7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(8,null,["",""])),(l()(),t.pb(9,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),t.pb(10,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.pb(11,0,null,null,0,"i",[["class","fa fa-trash-o"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.deleteSelectedItem(l.context.$implicit)&&t),t}),null,null))],null,(function(l,n){l(n,2,0,n.context.$implicit.refnumber),l(n,4,0,n.context.$implicit.customerName),l(n,6,0,n.context.$implicit.productName),l(n,8,0,n.context.$implicit.totalPremium)}))}function y(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,19,"div",[["class","search-result-box"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,17,"table",[["class","table table-search-result"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,13,"thead",[],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Proposal/Policy No"])),(l()(),t.pb(6,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Customer name"])),(l()(),t.pb(8,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Products"])),(l()(),t.pb(10,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Premium Amount"])),(l()(),t.pb(12,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Status"])),(l()(),t.pb(14,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Action"])),(l()(),t.pb(16,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,g)),t.ob(18,278528,null,0,s.k,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(19,0,null,null,0,"div",[["class","search-table-border"]],null,null,null,null,null))],(function(l,n){l(n,18,0,n.component.selectedPayments)}),null)}function h(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==t.Ab(l,2).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Ab(l,2).onReset()&&e),e}),null,null)),t.ob(1,16384,null,0,e.w,[],null,null),t.ob(2,4210688,null,0,e.n,[[8,null],[8,null]],null,null),t.Fb(2048,null,e.b,null,[e.n]),t.ob(4,16384,null,0,e.m,[[4,e.b]],null,null),(l()(),t.pb(5,0,null,null,2,"div",[["class",""]],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(7,null,["Selected Proposals ",""])),(l()(),t.eb(16777216,null,null,1,null,y)),t.ob(9,16384,null,0,s.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,9,0,n.component.selectedPayments.length>=0)}),(function(l,n){var u=n.component;l(n,0,0,t.Ab(n,4).ngClassUntouched,t.Ab(n,4).ngClassTouched,t.Ab(n,4).ngClassPristine,t.Ab(n,4).ngClassDirty,t.Ab(n,4).ngClassValid,t.Ab(n,4).ngClassInvalid,t.Ab(n,4).ngClassPending),l(n,7,0,u.selectedPayments.length)}))}function f(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,1,"span",[["class","validationMsg"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Please enter amount"]))],null,null)}function P(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,1,"span",[["class","validationMsg"]],null,null,null,null,null)),(l()(),t.Ib(1,null,[" ",""]))],null,(function(l,n){var u=n.component;l(n,1,0,u.totalPremium>u.sumOfPayments?"There is a shortfall. Please enter amount same as total amount to be paid.":"There is an Excess. Please enter amount same as total amount to be paid.")}))}function M(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,26,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,14,"div",[["class","col-md-6 col-lg-6 col-6"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,13,"select",[["class","form-control custom-form-control"],["formControlName","paymentModeForSingle"],["id","payment-mode"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],(function(l,n,u){var e=!0,o=l.component;return"change"===n&&(e=!1!==t.Ab(l,3).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ab(l,3).onTouched()&&e),"change"===n&&(e=!1!==o.onChangePaymentTypeSingle()&&e),e}),null,null)),t.ob(3,16384,null,0,e.r,[t.B,t.k],null,null),t.Fb(1024,null,e.j,(function(l){return[l]}),[e.r]),t.ob(5,671744,null,0,e.f,[[3,e.b],[8,null],[8,null],[6,e.j],[2,e.u]],{name:[0,"name"]},null),t.Fb(2048,null,e.k,null,[e.f]),t.ob(7,16384,null,0,e.l,[[4,e.k]],null,null),(l()(),t.pb(8,0,null,null,3,"option",[["disabled",""],["hidden",""],["selected",""],["value",""]],null,null,null,null,null)),t.ob(9,147456,null,0,e.p,[t.k,t.B,[2,e.r]],{value:[0,"value"]},null),t.ob(10,147456,null,0,e.v,[t.k,t.B,[8,null]],{value:[0,"value"]},null),(l()(),t.Ib(-1,null,["Payment mode"])),(l()(),t.pb(12,0,null,null,3,"option",[["value","online"]],null,null,null,null,null)),t.ob(13,147456,null,0,e.p,[t.k,t.B,[2,e.r]],{value:[0,"value"]},null),t.ob(14,147456,null,0,e.v,[t.k,t.B,[8,null]],{value:[0,"value"]},null),(l()(),t.Ib(-1,null,["Online"])),(l()(),t.pb(16,0,null,null,10,"div",[["class","col-md-6 col-lg-6 col-6"]],null,null,null,null,null)),(l()(),t.pb(17,0,null,null,5,"input",[["class","form-control custom-form-control"],["formControlName","amountForSingle"],["placeholder","Amount"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keyup"],[null,"keypress"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var e=!0,o=l.component;return"input"===n&&(e=!1!==t.Ab(l,18)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ab(l,18).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Ab(l,18)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Ab(l,18)._compositionEnd(u.target.value)&&e),"keyup"===n&&(e=!1!==o.displaySumAmount()&&e),"keypress"===n&&(e=!1!==o.isNumber(u)&&e),e}),null,null)),t.ob(18,16384,null,0,e.c,[t.B,t.k,[2,e.a]],null,null),t.Fb(1024,null,e.j,(function(l){return[l]}),[e.c]),t.ob(20,671744,null,0,e.f,[[3,e.b],[8,null],[8,null],[6,e.j],[2,e.u]],{name:[0,"name"]},null),t.Fb(2048,null,e.k,null,[e.f]),t.ob(22,16384,null,0,e.l,[[4,e.k]],null,null),(l()(),t.eb(16777216,null,null,1,null,f)),t.ob(24,16384,null,0,s.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,P)),t.ob(26,16384,null,0,s.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,5,0,"paymentModeForSingle"),l(n,9,0,""),l(n,10,0,""),l(n,13,0,"online"),l(n,14,0,"online"),l(n,20,0,"amountForSingle"),l(n,24,0,null==u.loadMoneyToWalletForm.value.amount&&u.isAmountEmpty),l(n,26,0,u.totalPremium!=u.sumOfPayments&&0!=u.sumOfPayments&&u.onClickmakePayment&&"/home/paymentpending"==u.loadmoneyto)}),(function(l,n){l(n,2,0,t.Ab(n,7).ngClassUntouched,t.Ab(n,7).ngClassTouched,t.Ab(n,7).ngClassPristine,t.Ab(n,7).ngClassDirty,t.Ab(n,7).ngClassValid,t.Ab(n,7).ngClassInvalid,t.Ab(n,7).ngClassPending),l(n,17,0,t.Ab(n,22).ngClassUntouched,t.Ab(n,22).ngClassTouched,t.Ab(n,22).ngClassPristine,t.Ab(n,22).ngClassDirty,t.Ab(n,22).ngClassValid,t.Ab(n,22).ngClassInvalid,t.Ab(n,22).ngClassPending)}))}function v(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,1,"span",[["class","validationMsg"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Please enter amount"]))],null,null)}function C(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,1,"span",[["class","validationMsg"]],null,null,null,null,null)),(l()(),t.Ib(1,null,[" ",""]))],null,(function(l,n){var u=n.component;l(n,1,0,u.totalPremium>u.sumOfPayments?"There is a shortfall. Please enter amount same as total amount to be paid.":"There is an Excess. Please enter amount same as total amount to be paid.")}))}function F(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,29,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,14,"div",[["class","col-md-4 col-lg-4 col-4"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,13,"select",[["class","form-control custom-form-control"],["formControlName","paymentModeForMultiple"],["id","payment-mode"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],(function(l,n,u){var e=!0,o=l.component;return"change"===n&&(e=!1!==t.Ab(l,3).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ab(l,3).onTouched()&&e),"change"===n&&(e=!1!==o.onChangePaymentTypeMultiple()&&e),e}),null,null)),t.ob(3,16384,null,0,e.r,[t.B,t.k],null,null),t.Fb(1024,null,e.j,(function(l){return[l]}),[e.r]),t.ob(5,671744,null,0,e.f,[[3,e.b],[8,null],[8,null],[6,e.j],[2,e.u]],{name:[0,"name"]},null),t.Fb(2048,null,e.k,null,[e.f]),t.ob(7,16384,null,0,e.l,[[4,e.k]],null,null),(l()(),t.pb(8,0,null,null,3,"option",[["disabled",""],["hidden",""],["selected",""],["value",""]],null,null,null,null,null)),t.ob(9,147456,null,0,e.p,[t.k,t.B,[2,e.r]],{value:[0,"value"]},null),t.ob(10,147456,null,0,e.v,[t.k,t.B,[8,null]],{value:[0,"value"]},null),(l()(),t.Ib(-1,null,["Payment mode"])),(l()(),t.pb(12,0,null,null,3,"option",[["value","online"]],null,null,null,null,null)),t.ob(13,147456,null,0,e.p,[t.k,t.B,[2,e.r]],{value:[0,"value"]},null),t.ob(14,147456,null,0,e.v,[t.k,t.B,[8,null]],{value:[0,"value"]},null),(l()(),t.Ib(-1,null,["Online"])),(l()(),t.pb(16,0,null,null,10,"div",[["class","col-md-4 col-lg-4 col-4"]],null,null,null,null,null)),(l()(),t.pb(17,0,null,null,5,"input",[["class","form-control custom-form-control"],["formControlName","amountFormultiple"],["placeholder","Amount"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keypress"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var e=!0,o=l.component;return"input"===n&&(e=!1!==t.Ab(l,18)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ab(l,18).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Ab(l,18)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Ab(l,18)._compositionEnd(u.target.value)&&e),"keypress"===n&&(e=!1!==o.isNumber(u)&&e),e}),null,null)),t.ob(18,16384,null,0,e.c,[t.B,t.k,[2,e.a]],null,null),t.Fb(1024,null,e.j,(function(l){return[l]}),[e.c]),t.ob(20,671744,null,0,e.f,[[3,e.b],[8,null],[8,null],[6,e.j],[2,e.u]],{name:[0,"name"]},null),t.Fb(2048,null,e.k,null,[e.f]),t.ob(22,16384,null,0,e.l,[[4,e.k]],null,null),(l()(),t.eb(16777216,null,null,1,null,v)),t.ob(24,16384,null,0,s.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,C)),t.ob(26,16384,null,0,s.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(27,0,null,null,2,"div",[["class","col-md-4 col-lg-4 col-4 add-payment-area"]],null,null,null,null,null)),(l()(),t.pb(28,0,null,null,1,"button",[["class","btn btn-white"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.addPayment()&&t),t}),null,null)),(l()(),t.Ib(-1,null,[" Add Payment "]))],(function(l,n){var u=n.component;l(n,5,0,"paymentModeForMultiple"),l(n,9,0,""),l(n,10,0,""),l(n,13,0,"online"),l(n,14,0,"online"),l(n,20,0,"amountFormultiple"),l(n,24,0,null==u.loadMoneyToWalletForm.value.amount&&u.isAmountEmpty),l(n,26,0,u.totalPremium!=u.sumOfPayments&&0!=u.sumOfPayments&&u.onClickmakePayment&&"/home/paymentpending"==u.loadmoneyto)}),(function(l,n){l(n,2,0,t.Ab(n,7).ngClassUntouched,t.Ab(n,7).ngClassTouched,t.Ab(n,7).ngClassPristine,t.Ab(n,7).ngClassDirty,t.Ab(n,7).ngClassValid,t.Ab(n,7).ngClassInvalid,t.Ab(n,7).ngClassPending),l(n,17,0,t.Ab(n,22).ngClassUntouched,t.Ab(n,22).ngClassTouched,t.Ab(n,22).ngClassPristine,t.Ab(n,22).ngClassDirty,t.Ab(n,22).ngClassValid,t.Ab(n,22).ngClassInvalid,t.Ab(n,22).ngClassPending)}))}function I(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,1,"span",[["class","validationMsg"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Multiple online or wallet payments are not allowed."]))],null,null)}function A(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,1,"span",[["class","validationMsg"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Please select payment mode as Online"]))],null,null)}function k(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,1,"span",[["class","validationMsg"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Please select payment mode as Online"]))],null,null)}function x(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,11,"tr",[],null,null,null,null,null)),t.Fb(512,null,s.s,s.t,[t.q,t.r,t.k,t.B]),t.ob(2,278528,null,0,s.j,[s.s],{ngClass:[0,"ngClass"]},null),(l()(),t.pb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Online"])),(l()(),t.pb(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Intermedairy"])),(l()(),t.pb(7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(8,null,["",""])),(l()(),t.pb(9,0,null,null,2,"td",[["class","text-right"]],null,null,null,null,null)),(l()(),t.pb(10,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-pencil icon-margin-right"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.editPayment(l.context.index)&&t),t}),null,null)),(l()(),t.pb(11,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-trash-o icon-margin-right"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.deletePayment(l.context.index)&&t),t}),null,null))],(function(l,n){l(n,2,0,n.context.index%2==0?"table-row-bg-white":"table-row-bg-blue ")}),(function(l,n){l(n,8,0,n.context.$implicit.amountFormultiple)}))}function O(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,13,"div",[["class","payment-list-table"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,12,"div",[["class","custom-table"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,11,"table",[["class","table"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,1,"th",[["scope","col"],["style","width: 15%;"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Payment mode "])),(l()(),t.pb(6,0,null,null,1,"th",[["scope","col"],["style","width: 10%;"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Payment by "])),(l()(),t.pb(8,0,null,null,1,"th",[["scope","col"],["style","width: 5%; text-align: right;"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Amount "])),(l()(),t.pb(10,0,null,null,1,"th",[["scope","col"],["style","text-align: right;"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Actions "])),(l()(),t.eb(16777216,null,null,1,null,x)),t.ob(13,278528,null,0,s.k,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,13,0,n.component.multiplePaymentsList)}),null)}function w(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,23,"div",[["class","row payment-action-section"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,19,"div",[["class","col-md-6 col-lg-6 col-6"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,1,"div",[["class","wallet-icon-area"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,0,"i",[["aria-hidden","true"],["class","fas fa-wallet icon-pyamt-wallet"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,9,"div",[["class","wallet-current-balance"]],null,null,null,null,null)),t.Fb(512,null,s.s,s.t,[t.q,t.r,t.k,t.B]),t.ob(6,278528,null,0,s.j,[s.s],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),t.pb(7,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,0,"i",[["aria-hidden","true"],["class",""]],null,null,null,null,null)),(l()(),t.pb(9,0,null,null,2,"span",[["class","font-md-bold"]],null,null,null,null,null)),(l()(),t.Ib(10,null,["",""])),t.Eb(11,2),(l()(),t.pb(12,0,null,null,1,"div",[["class","font-sm-regular"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Current Wallet Balance"])),(l()(),t.pb(14,0,null,null,6,"div",[["class","selected-payment-amount"]],null,null,null,null,null)),(l()(),t.pb(15,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t.pb(16,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-inr icon-rupee-md"]],null,null,null,null,null)),(l()(),t.pb(17,0,null,null,1,"span",[["class","font-md-bold"]],null,null,null,null,null)),(l()(),t.Ib(18,null,["",""])),(l()(),t.pb(19,0,null,null,1,"div",[["class","font-sm-regular"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Selected Payment"])),(l()(),t.pb(21,0,null,null,2,"div",[["class","col-md-6 col-lg-6 col-6 make-payment-btn-area"]],null,null,null,null,null)),(l()(),t.pb(22,0,null,null,1,"button",[["class","btn btn-blue w-60"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.makePayment()&&t),t}),null,null)),(l()(),t.Ib(-1,null,["Make Payment"]))],(function(l,n){l(n,6,0,"wallet-current-balance","border-right")}),(function(l,n){var u=n.component,e=t.Jb(n,10,0,l(n,11,0,t.Ab(n.parent,0),u.walletResponse,"\u20b9 "));l(n,10,0,e),l(n,18,0,u.sumOfPayments)}))}function S(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,1,"div",[["class","wallet-icon-area"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,0,"i",[["aria-hidden","true"],["class","fas fa-wallet icon-pyamt-wallet"]],null,null,null,null,null))],null,null)}function T(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,9,"div",[["class","wallet-current-balance"]],null,null,null,null,null)),t.Fb(512,null,s.s,s.t,[t.q,t.r,t.k,t.B]),t.ob(2,278528,null,0,s.j,[s.s],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),t.pb(3,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,0,"i",[["aria-hidden","true"],["class",""]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,2,"span",[["class","font-md-bold"]],null,null,null,null,null)),(l()(),t.Ib(6,null,["",""])),t.Eb(7,2),(l()(),t.pb(8,0,null,null,1,"div",[["class","font-sm-regular"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Current Wallet Balance"]))],(function(l,n){l(n,2,0,"wallet-current-balance","border-right")}),(function(l,n){var u=n.component,e=t.Jb(n,6,0,l(n,7,0,t.Ab(n.parent.parent,0),u.walletResponse,"\u20b9 "));l(n,6,0,e)}))}function _(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,29,"div",[["class","row payment-action-section"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,25,"div",[["class","col-md-7 col-lg-7 col-7"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,S)),t.ob(3,16384,null,0,s.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,T)),t.ob(5,16384,null,0,s.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(6,0,null,null,6,"div",[["class","selected-payment-amount"]],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-inr icon-rupee-md"]],null,null,null,null,null)),(l()(),t.pb(9,0,null,null,1,"span",[["class","font-md-bold"]],null,null,null,null,null)),(l()(),t.Ib(10,null,["",""])),(l()(),t.pb(11,0,null,null,1,"div",[["class","font-sm-regular"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Total Premium"])),(l()(),t.pb(13,0,null,null,6,"div",[["class","selected-payment-amount"]],null,null,null,null,null)),(l()(),t.pb(14,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t.pb(15,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-inr icon-rupee-md"]],null,null,null,null,null)),(l()(),t.pb(16,0,null,null,1,"span",[["class","font-md-bold"]],null,null,null,null,null)),(l()(),t.Ib(17,null,["",""])),(l()(),t.pb(18,0,null,null,1,"div",[["class","font-sm-regular"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Selected Payment"])),(l()(),t.pb(20,0,null,null,6,"div",[["class","selected-payment-amount"]],null,null,null,null,null)),(l()(),t.pb(21,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t.pb(22,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-inr icon-rupee-md"]],null,null,null,null,null)),(l()(),t.pb(23,0,null,null,1,"span",[["class","font-md-bold"]],null,null,null,null,null)),(l()(),t.Ib(24,null,["",""])),(l()(),t.pb(25,0,null,null,1,"div",[["class","font-sm-regular"]],null,null,null,null,null)),(l()(),t.Ib(26,null,["",""])),(l()(),t.pb(27,0,null,null,2,"div",[["class","col-md-5 col-lg-5 col-5 make-payment-btn-area"]],null,null,null,null,null)),(l()(),t.pb(28,0,null,null,1,"button",[["class","btn btn-blue w-60"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.makePayment()&&t),t}),null,null)),(l()(),t.Ib(-1,null,["Make Payment"]))],(function(l,n){var u=n.component;l(n,3,0,"Virtual Wallet"==u.loadMoneyToWalletForm.value.paymentModeForSingle||"Virtual Wallet"==u.loadMoneyToWalletForm.value.paymentModeForMultiple),l(n,5,0,"Virtual Wallet"==u.loadMoneyToWalletForm.value.paymentModeForSingle||"Virtual Wallet"==u.loadMoneyToWalletForm.value.paymentModeForMultiple)}),(function(l,n){var u=n.component;l(n,10,0,u.totalPremium),l(n,17,0,u.sumOfPayments),l(n,24,0,u.totalPremium>=u.sumOfPayments&&"/home/paymentpending"==u.loadmoneyto?u.totalPremium-u.sumOfPayments:u.sumOfPayments-u.totalPremium),l(n,26,0,u.totalPremium>=u.sumOfPayments&&"/home/paymentpending"==u.loadmoneyto?"Short Fall":"Excess")}))}function W(l){return t.Kb(0,[t.Cb(0,s.c,[t.s]),(l()(),t.pb(1,0,null,null,54,"div",[],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,22,"div",[["class","form-box"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,18,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==t.Ab(l,5).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Ab(l,5).onReset()&&e),e}),null,null)),t.ob(4,16384,null,0,e.w,[],null,null),t.ob(5,4210688,null,0,e.n,[[8,null],[8,null]],null,null),t.Fb(2048,null,e.b,null,[e.n]),t.ob(7,16384,null,0,e.m,[[4,e.b]],null,null),(l()(),t.pb(8,0,null,null,13,"select",[["class","form-control custom-form-control"],["id","load-money-to1"],["name","cars"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],(function(l,n,u){var e=!0,o=l.component;return"change"===n&&(e=!1!==t.Ab(l,9).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ab(l,9).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(o.loadmoneyto=u)&&e),e}),null,null)),t.ob(9,16384,null,0,e.r,[t.B,t.k],null,null),t.Fb(1024,null,e.j,(function(l){return[l]}),[e.r]),t.ob(11,671744,[["loadMoney",4]],0,e.o,[[2,e.b],[8,null],[8,null],[6,e.j]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Fb(2048,null,e.k,null,[e.o]),t.ob(13,16384,null,0,e.l,[[4,e.k]],null,null),(l()(),t.pb(14,0,null,null,3,"option",[["disabled",""],["hidden",""],["selected",""],["value",""]],null,null,null,null,null)),t.ob(15,147456,null,0,e.p,[t.k,t.B,[2,e.r]],{value:[0,"value"]},null),t.ob(16,147456,null,0,e.v,[t.k,t.B,[8,null]],{value:[0,"value"]},null),(l()(),t.Ib(-1,null,["Load money to"])),(l()(),t.pb(18,0,null,null,3,"option",[["value","/wallet"]],null,null,null,null,null)),t.ob(19,147456,null,0,e.p,[t.k,t.B,[2,e.r]],{value:[0,"value"]},null),t.ob(20,147456,null,0,e.v,[t.k,t.B,[8,null]],{value:[0,"value"]},null),(l()(),t.Ib(-1,null,["Virtual Wallet"])),(l()(),t.pb(22,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,h)),t.ob(24,16384,null,0,s.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(25,0,null,null,30,"div",[["class",""]],null,null,null,null,null)),(l()(),t.pb(26,0,null,null,29,"div",[["class","form-box payment-form-box"]],null,null,null,null,null)),(l()(),t.pb(27,0,null,null,21,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==t.Ab(l,29).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Ab(l,29).onReset()&&e),e}),null,null)),t.ob(28,16384,null,0,e.w,[],null,null),t.ob(29,540672,null,0,e.h,[[8,null],[8,null]],{form:[0,"form"]},null),t.Fb(2048,null,e.b,null,[e.h]),t.ob(31,16384,null,0,e.m,[[4,e.b]],null,null),(l()(),t.pb(32,0,null,null,6,"div",[["class","payment-type-row"]],null,null,null,null,null)),(l()(),t.pb(33,0,null,null,1,"div",[["class","payment-type"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Payment Type"])),(l()(),t.pb(35,0,null,null,3,"div",[["class","payment-type-option"]],null,null,null,null,null)),(l()(),t.pb(36,0,null,null,0,"input",[["checked","checked"],["name","payment-type"],["type","radio"],["value","single"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.resetPaymentType()&&t),t}),null,null)),(l()(),t.pb(37,0,null,null,1,"label",[["class",""],["for",""]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Single"])),(l()(),t.eb(16777216,null,null,1,null,M)),t.ob(40,16384,null,0,s.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,F)),t.ob(42,16384,null,0,s.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,I)),t.ob(44,16384,null,0,s.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,A)),t.ob(46,16384,null,0,s.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,k)),t.ob(48,16384,null,0,s.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,O)),t.ob(50,16384,null,0,s.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(51,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,w)),t.ob(53,16384,null,0,s.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,_)),t.ob(55,16384,null,0,s.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,11,0,"cars",u.loadmoneyto),l(n,15,0,""),l(n,16,0,""),l(n,19,0,"/wallet"),l(n,20,0,"/wallet"),l(n,24,0,"/home/paymentpending"==u.loadmoneyto),l(n,29,0,u.loadMoneyToWalletForm),l(n,40,0,u.isPaymentTypeSingle),l(n,42,0,!u.isPaymentTypeSingle),l(n,44,0,u.isDuplicatePaymentModeSelected),l(n,46,0,!u.isPaymentTypeSingle&&u.isPaymentModeForMultiple),l(n,48,0,u.isPaymentTypeSingle&&u.isPaymentModeForSingle),l(n,50,0,!u.isPaymentTypeSingle&&u.multiplePaymentsList.length>0),l(n,53,0,"/home/paymentpending"!=u.loadmoneyto),l(n,55,0,"/home/paymentpending"==u.loadmoneyto)}),(function(l,n){l(n,3,0,t.Ab(n,7).ngClassUntouched,t.Ab(n,7).ngClassTouched,t.Ab(n,7).ngClassPristine,t.Ab(n,7).ngClassDirty,t.Ab(n,7).ngClassValid,t.Ab(n,7).ngClassInvalid,t.Ab(n,7).ngClassPending),l(n,8,0,t.Ab(n,13).ngClassUntouched,t.Ab(n,13).ngClassTouched,t.Ab(n,13).ngClassPristine,t.Ab(n,13).ngClassDirty,t.Ab(n,13).ngClassValid,t.Ab(n,13).ngClassInvalid,t.Ab(n,13).ngClassPending),l(n,27,0,t.Ab(n,31).ngClassUntouched,t.Ab(n,31).ngClassTouched,t.Ab(n,31).ngClassPristine,t.Ab(n,31).ngClassDirty,t.Ab(n,31).ngClassValid,t.Ab(n,31).ngClassInvalid,t.Ab(n,31).ngClassPending)}))}function D(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,1,"app-payments",[],null,null,null,W,d)),t.ob(1,114688,null,0,o,[c,s.h,p.k,p.a,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}var J=t.lb("app-payments",o,D,{},{},[]);u.d(n,"PaymentsModuleNgFactory",(function(){return V}));var V=t.mb(a,[],(function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[i.a,J]],[3,t.j],t.v]),t.zb(4608,s.n,s.m,[t.s,[2,s.v]]),t.zb(4608,e.d,e.d,[]),t.zb(4608,e.t,e.t,[]),t.zb(1073742336,s.b,s.b,[]),t.zb(1073742336,e.s,e.s,[]),t.zb(1073742336,e.q,e.q,[]),t.zb(1073742336,e.i,e.i,[]),t.zb(1073742336,p.o,p.o,[[2,p.t],[2,p.k]]),t.zb(1073742336,a,a,[]),t.zb(1024,p.i,(function(){return[[{path:"",component:o},{path:":mode/:unmappedstatus/:mihpayid/:PG_TYPE/:txind/:status",component:o},{path:":routerFrom",component:o}]]}),[])])}))}}]);