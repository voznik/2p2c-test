(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{BO3I:function(t,e,r){"use strict";r.r(e),r.d(e,"PaymentWrapperModule",(function(){return $}));var n=r("wygS"),c=r("2cnC"),o=r("6Jna"),i=r("ROBh"),s=r("YtkY"),a=r("4e/d"),l=r("BwBJ");const b=[{id:"dc30d2e0-92ea-4643-b7f1-18fff8de6667",product:"ABCD - Success",date:Date.now()-2e5,amount:122.0333},{id:"5a104834-8e80-4d61-b315-250da78b2c83",product:"XYZ - Error",date:Date.now()-1e5,amount:47.49}];var d=r("EM62");let m=(()=>{class t{constructor(t,e){this.http=t,this.logger=e,this.baseUrl="http://www.mocky.io/v2",this.submitUrlSuccess="5d8de422310000b19d2b517a",this.submitUrlError="5d8de441310000a2612b517c"}getPayment(t){return Object(i.a)(b.find(e=>e.id===t))}getPaymentsList(){return Object(i.a)(b)}getCardsList({excludeId:t}){return this.http.get(this.baseUrl+"/5d145fa22f0000ff3ec4f030").pipe(Object(s.a)(e=>this.newMethod(e,t)),Object(a.a)(t=>(this.logger.error(t),[])))}newMethod(t,e){return e?t.cardTypes.filter(t=>t.id!==e):t.cardTypes}submitPayment(t){return this.http.post(`${this.baseUrl}/${t.payment.id===b[1].id?this.submitUrlError:this.submitUrlSuccess}`,t).pipe(Object(l.a)(1e3))}}return t.\u0275fac=function(e){return new(e||t)(d.Ub(n.HttpService),d.Ub(n.Logger))},t.\u0275prov=d.Gb({token:t,factory:t.\u0275fac}),t})();var p=r("6Oco"),u=r("J+dc"),y=r("cJ9h"),f=r("sEIs");let h=(()=>{class t{constructor(t,e){this.ps=t,this.router=e}resolve(t,e){const r=t.paramMap.get("id");return this.ps.getPayment(r).pipe(Object(u.a)(1),Object(y.a)(t=>t?Object(i.a)(t):(this.router.navigate(["/payments/list"]),p.a)))}}return t.\u0275fac=function(e){return new(e||t)(d.Ub(m),d.Ub(f.c))},t.\u0275prov=d.Gb({token:t,factory:t.\u0275fac}),t})();var g=r("C05f"),P=r("nIj0"),v=r("Kej3"),x=r("2kYt");function Q(t,e){if(1&t&&(d.Qb(0,"option",13),d.xc(1),d.Pb()),2&t){const t=e.$implicit;d.gc("ngValue",t.id),d.yb(1),d.yc(t.value)}}function O(t,e){1&t&&(d.Qb(0,"clr-control-error"),d.xc(1,"This field is required!"),d.Pb())}function w(t,e){1&t&&(d.Qb(0,"clr-control-error"),d.xc(1,"This field is required!"),d.Pb())}function C(t,e){1&t&&(d.Qb(0,"clr-control-error"),d.xc(1,"Card Number is not valid"),d.Pb())}function E(t,e){1&t&&(d.Qb(0,"clr-control-error"),d.xc(1,"This field is required!"),d.Pb())}function L(t,e){1&t&&(d.Qb(0,"clr-control-error"),d.xc(1,"Expiration date can contain digits only, MM/YY format"),d.Pb())}function I(t,e){1&t&&(d.Qb(0,"clr-control-error"),d.xc(1,"Expiration date is not valid"),d.Pb())}function S(t,e){1&t&&(d.Qb(0,"clr-control-error"),d.xc(1,"This field is required!"),d.Pb())}function k(t,e){1&t&&(d.Qb(0,"clr-control-error"),d.xc(1,"The Text is too long"),d.Pb())}function M(t,e){1&t&&(d.Qb(0,"clr-control-error"),d.xc(1,"Only Letters are aloowed"),d.Pb())}function F(t,e){1&t&&(d.Qb(0,"clr-control-error"),d.xc(1,"Email is not valid"),d.Pb())}let j=(()=>{class t{constructor(t,e){this.formBuilder=t,this.logger=e,this.cardsList=[],this.submitted=new d.n,this.submitBtnState=v.p.DEFAULT,this.paymentForm=new P.f({})}set submission(t){Object(c.f)(this.paymentForm)||Object(c.f)(t.loading)||(this.paymentForm.dirty&&t.loading?this.submitBtnState=v.p.LOADING:t.error?this.submitBtnState=v.p.ERROR:(this.submitBtnState=v.p.SUCCESS,this.reset()))}ngOnInit(){this.initForm()}submit(){if(this.paymentForm.invalid)this.clrForm.markAsTouched();else{const t=this.paymentForm.getRawValue();this.submitted.emit(t)}}reset(){this.paymentForm.reset(),this.paymentForm.markAsPristine()}initForm(){this.paymentForm=this.formBuilder.group({cardType:[null,[P.v.required]],cardNumber:["",[P.v.required,Object(c.c)()]],cardExpiry:["",[P.v.required,Object(c.b)()]],cardHolder:["",[P.v.required,P.v.maxLength(50),Object(c.g)()]],email:["",[Object(c.d)()]]})}}return t.\u0275fac=function(e){return new(e||t)(d.Kb(P.c),d.Kb(n.Logger))},t.\u0275cmp=d.Eb({type:t,selectors:[["test-payment-form"]],viewQuery:function(t,e){var r;1&t&&d.Dc(v.g,!0),2&t&&d.lc(r=d.Zb())&&(e.clrForm=r.first)},inputs:{cardsList:"cardsList",submission:"submission"},outputs:{submitted:"submitted"},decls:38,vars:15,consts:[["clrForm","",3,"formGroup"],[1,"payment-form-body"],[1,"full-width-container"],["clrSelect","","formControlName","cardType"],["disabled","",3,"ngValue"],[3,"ngValue",4,"ngFor","ngForOf"],[4,"clrIfError"],["clrInput","","type","text","formControlName","cardNumber","placeholder","Enter Card Number"],["clrInput","","type","text","formControlName","cardExpiry","placeholder","Enter Expiry"],["clrInput","","type","text","formControlName","cardHolder","placeholder","Enter Name"],["clrInput","","type","text","formControlName","email","placeholder","Enter Email"],[1,"payment-form-footer"],["type","submit",1,"btn","btn-primary",3,"clrLoading","disabled","click"],[3,"ngValue"]],template:function(t,e){1&t&&(d.Qb(0,"form",0),d.Qb(1,"div",1),d.Qb(2,"clr-select-container",2),d.Qb(3,"label"),d.xc(4,"Card Types"),d.Pb(),d.Qb(5,"select",3),d.Qb(6,"option",4),d.xc(7,"- Select Card Type -"),d.Pb(),d.vc(8,Q,2,2,"option",5),d.Pb(),d.vc(9,O,2,0,"clr-control-error",6),d.Pb(),d.Qb(10,"clr-input-container",2),d.Qb(11,"label"),d.xc(12,"Card Number"),d.Pb(),d.Lb(13,"input",7),d.vc(14,w,2,0,"clr-control-error",6),d.vc(15,C,2,0,"clr-control-error",6),d.Pb(),d.Qb(16,"clr-input-container"),d.Qb(17,"label"),d.xc(18,"Expiry"),d.Pb(),d.Lb(19,"input",8),d.vc(20,E,2,0,"clr-control-error",6),d.vc(21,L,2,0,"clr-control-error",6),d.vc(22,I,2,0,"clr-control-error",6),d.Pb(),d.Qb(23,"clr-input-container",2),d.Qb(24,"label"),d.xc(25,"Name"),d.Pb(),d.Lb(26,"input",9),d.vc(27,S,2,0,"clr-control-error",6),d.vc(28,k,2,0,"clr-control-error",6),d.vc(29,M,2,0,"clr-control-error",6),d.Pb(),d.Qb(30,"clr-input-container",2),d.Qb(31,"label"),d.xc(32,"Email"),d.Pb(),d.Lb(33,"input",10),d.vc(34,F,2,0,"clr-control-error",6),d.Pb(),d.Pb(),d.Qb(35,"div",11),d.Qb(36,"button",12),d.Yb("click",(function(){return e.submit()})),d.xc(37," Confirm Payment "),d.Pb(),d.Pb(),d.Pb()),2&t&&(d.gc("formGroup",e.paymentForm),d.yb(6),d.gc("ngValue",null),d.yb(2),d.gc("ngForOf",e.cardsList),d.yb(1),d.gc("clrIfError","required"),d.yb(5),d.gc("clrIfError","required"),d.yb(1),d.gc("clrIfError","creditCard"),d.yb(5),d.gc("clrIfError","required"),d.yb(1),d.gc("clrIfError","creditCardExpiry"),d.yb(1),d.gc("clrIfError","creditCardExpiryDate"),d.yb(5),d.gc("clrIfError","required"),d.yb(1),d.gc("clrIfError","maxLength"),d.yb(1),d.gc("clrIfError","letters"),d.yb(5),d.gc("clrIfError","email"),d.yb(2),d.gc("clrLoading",e.submitBtnState)("disabled",e.paymentForm.invalid))},directives:[P.x,P.l,v.g,P.g,v.v,v.m,P.t,v.u,P.k,P.e,P.p,P.w,x.n,v.j,v.l,P.b,v.k,v.o,v.n,v.f],styles:[".payment-form-footer{text-align:center;margin-top:1rem}.payment-form-footer .btn{margin-left:16.6666666667%}@media screen and (max-width:576px){.payment-form-footer .btn{margin-left:auto!important;margin-right:auto!important}}.full-width-container .clr-input,.full-width-container .clr-select,.full-width-container .clr-select-wrapper{width:100%}"],encapsulation:2,changeDetection:0}),t})(),N=(()=>{class t{constructor(){this.payment={}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d.Eb({type:t,selectors:[["test-payment-info"]],inputs:{payment:"payment"},decls:15,vars:9,template:function(t,e){1&t&&(d.Qb(0,"dl"),d.Qb(1,"dt"),d.xc(2,"Product:"),d.Pb(),d.Qb(3,"dd"),d.xc(4),d.Pb(),d.Qb(5,"dt"),d.xc(6,"Date:"),d.Pb(),d.Qb(7,"dd"),d.xc(8),d.bc(9,"date"),d.Pb(),d.Qb(10,"dt"),d.xc(11,"Amount:"),d.Pb(),d.Qb(12,"dd"),d.xc(13),d.bc(14,"currency"),d.Pb(),d.Pb()),2&t&&(d.yb(4),d.yc(e.payment.product),d.yb(4),d.yc(d.dc(9,3,e.payment.date,"short")),d.yb(5),d.yc(d.dc(14,6,e.payment.amount,"USD")))},pipes:[x.f,x.d],styles:["dl[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}dl[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], dl[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{display:inline-flex;margin:0;min-width:49%}"],changeDetection:0}),t})();function T(t,e){if(1&t&&(d.Ob(0),d.Lb(1,"test-payment-info",6),d.Qb(2,"p"),d.xc(3," Your Payment for Invoice No: "),d.Qb(4,"b"),d.xc(5),d.Pb(),d.xc(6," has been successfully processed "),d.Pb(),d.Qb(7,"p"),d.xc(8," Your approvalCode is "),d.Qb(9,"code"),d.xc(10),d.Pb(),d.Pb(),d.Nb()),2&t){const t=d.ac();d.yb(1),d.gc("payment",t.payment),d.yb(4),d.zc('"',t.paymentResponse.invoiceNo,'"'),d.yb(5),d.yc(t.paymentResponse.approvalCode)}}const B=function(){return["../","list"]};let U=(()=>{class t{constructor(t,e,r,c,o){this.router=t,this.route=e,this.paymentService=r,this.dialogService=c,this.logger=o,this.payment={},this.paymentResponse=null,this.modalOpened=!1,this.isDev=!n.environment.production,this.submission=new g.a({loading:!1}),this.submission$=this.submission.asObservable()}ngOnInit(){this.cardsList$=this.paymentService.getCardsList({excludeId:"3"}),this.route.data.subscribe(t=>{this.payment=t.payment})}submitPayment(t){this.submission.next({loading:!0}),this.paymentService.submitPayment({payment:this.payment,card:t}).subscribe(t=>{this.paymentResponse=t,this.modalOpened=!0,this.dialogService.showAlert({id:"",type:"info",text:"Payment Succeeded"}),this.submission.next({loading:!1}),this.paymentForm.reset()},t=>{this.paymentResponse=t,this.submission.next({loading:!1,error:t}),this.dialogService.showAlert({id:"",type:"danger",text:"Payment Failed"})})}onModalClose(t){this.router.navigate(["..","list"],{relativeTo:this.route})}}return t.\u0275fac=function(e){return new(e||t)(d.Kb(f.c),d.Kb(f.a),d.Kb(m),d.Kb(o.a),d.Kb(n.Logger))},t.\u0275cmp=d.Eb({type:t,selectors:[["test-payment"]],viewQuery:function(t,e){var r;1&t&&d.Dc(j,!0),2&t&&d.lc(r=d.Zb())&&(e.paymentForm=r.first)},decls:21,vars:14,consts:[[1,"card"],[1,"card-header"],["title","Go Back to List",1,"btn","btn-link","back-link",3,"routerLink"],["shape","angle",2,"transform","rotate(270deg)"],[1,"card-block","clr-row"],[1,"payment-info","clr-col-sm-12","clr-col-md-6"],[3,"payment"],[1,"payment-form","clr-col-sm-12","clr-col-md-6"],[3,"cardsList","submission","submitted"],[3,"clrModalOpen","clrModalSize","clrModalClosable","clrModalStaticBackdrop","clrModalOpenChange"],[1,"modal-title"],[1,"modal-body"],[4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(t,e){1&t&&(d.Qb(0,"div",0),d.Qb(1,"div",1),d.Qb(2,"a",2),d.Lb(3,"clr-icon",3),d.Pb(),d.Qb(4,"span"),d.xc(5,"Pyment Confirmation:"),d.Pb(),d.Pb(),d.Qb(6,"div",4),d.Qb(7,"div",5),d.Lb(8,"test-payment-info",6),d.Pb(),d.Qb(9,"div",7),d.Qb(10,"test-payment-form",8),d.Yb("submitted",(function(t){return e.submitPayment(t)})),d.bc(11,"async"),d.bc(12,"async"),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Qb(13,"clr-modal",9),d.Yb("clrModalOpenChange",(function(t){return e.modalOpened=t}))("clrModalOpenChange",(function(t){return e.onModalClose(t)})),d.Qb(14,"h3",10),d.xc(15,"Payment Success"),d.Pb(),d.Qb(16,"div",11),d.vc(17,T,11,3,"ng-container",12),d.Pb(),d.Qb(18,"div",13),d.Qb(19,"button",14),d.Yb("click",(function(){return e.modalOpened=!1})),d.xc(20," OK "),d.Pb(),d.Pb(),d.Pb()),2&t&&(d.yb(2),d.gc("routerLink",d.jc(13,B)),d.yb(6),d.gc("payment",e.payment),d.yb(2),d.gc("cardsList",d.cc(11,9,e.cardsList$))("submission",d.cc(12,11,e.submission$)),d.yb(3),d.gc("clrModalOpen",e.modalOpened)("clrModalSize","xl")("clrModalClosable",!1)("clrModalStaticBackdrop",!1),d.yb(4),d.gc("ngIf",e.paymentResponse))},directives:[f.d,v.i,N,j,v.r,v.s,x.o],pipes:[x.b],styles:[".card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{vertical-align:sub}.card-header[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%]{width:2rem}"]}),t})();const D=function(t){return["..",t]};function q(t,e){if(1&t&&(d.Qb(0,"li"),d.Qb(1,"a",1),d.Lb(2,"clr-icon",2),d.xc(3),d.Pb(),d.Pb()),2&t){const t=e.$implicit;d.yb(1),d.gc("routerLink",d.kc(2,D,t.id)),d.yb(2),d.zc(" ",t.product,"")}}const R=[{path:"list",component:(()=>{class t{constructor(t){this.paymentService=t,this.payments$=this.paymentService.getPaymentsList()}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(d.Kb(m))},t.\u0275cmp=d.Eb({type:t,selectors:[["test-payment-list"]],decls:3,vars:3,consts:[[4,"ngFor","ngForOf"],[3,"routerLink"],["shape","credit-card"]],template:function(t,e){1&t&&(d.Qb(0,"ul"),d.vc(1,q,4,4,"li",0),d.bc(2,"async"),d.Pb()),2&t&&(d.yb(1),d.gc("ngForOf",d.cc(2,1,e.payments$)))},directives:[x.n,f.d,v.i],pipes:[x.b],styles:[""]}),t})()},{path:":id",component:U,resolve:{payment:h},runGuardsAndResolvers:"always"},{path:"",redirectTo:"list"}];let Y=(()=>{class t{}return t.\u0275mod=d.Ib({type:t}),t.\u0275inj=d.Hb({factory:function(e){return new(e||t)},imports:[[f.e.forChild(R)]]}),t})(),K=(()=>{class t{constructor(t){this.logger=t,this.logger.log("Payment Lib initialised")}}return t.\u0275mod=d.Ib({type:t}),t.\u0275inj=d.Hb({factory:function(e){return new(e||t)(d.Ub(n.Logger))},providers:[m,h],imports:[[c.a,o.b,Y]]}),t})(),$=(()=>{class t{}return t.\u0275mod=d.Ib({type:t}),t.\u0275inj=d.Hb({factory:function(e){return new(e||t)},imports:[[K]]}),t})()}}]);