(function(t){function e(e){for(var r,o,c=e[0],s=e[1],u=e[2],d=0,h=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&h.push(n[o][0]),n[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,c=1;c<a.length;c++){var s=a[c];0!==n[s]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},i=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/pruebaKeyenceFront/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"034f":function(t,e,a){"use strict";a("85ec")},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},5:function(t,e){},6:function(t,e){},7:function(t,e){},8:function(t,e){},"85ec":function(t,e,a){},9:function(t,e){},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{absolute:"",color:"#6A76AB",dark:"",dense:"",prominent:"","scroll-target":"#scrolling-techniques-3",height:""},scopedSlots:t._u([{key:"extension",fn:function(){return[a("v-tabs",{attrs:{"align-with-title":""}},[a("v-tab",{on:{click:t.goToArchivos}},[t._v("Archivos")]),a("v-tab",{on:{click:t.goToUsuarios}},[t._v("Usuarios")]),a("v-tab",{on:{click:t.goToCarga}},[t._v("Subir archivo")])],1)]},proxy:!0}])},[a("v-app-bar-title",[t._v("Keyence")])],1),a("v-main",{staticStyle:{height:"auto","margin-top":"10%"}},[a("router-view")],1)],1)},i=[],o=a("d4ec"),c=a("bee2"),s=a("257e"),u=a("262e"),l=a("2caf"),d=a("ade3"),h=a("53ca"),p=(a("e439"),a("d3b7"),a("f8c9"),a("7a82"),a("99af"),a("b0c0"),a("1b40")),v=function(t,e,a,r){var n,i=arguments.length,o=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,a):r;if("object"===("undefined"===typeof Reflect?"undefined":Object(h["a"])(Reflect))&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,a,r);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(o=(i<3?n(o):i>3?n(e,a,o):n(e,a))||o);return i>3&&o&&Object.defineProperty(e,a,o),o},m=function(t){Object(u["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;Object(o["a"])(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t=e.call.apply(e,[this].concat(n)),Object(d["a"])(Object(s["a"])(t),"ruta",t.$route.name),t}return Object(c["a"])(a,[{key:"goToUsuarios",value:function(){"/ver"!==this.$route.name&&this.$router.push("/ver")}},{key:"goToArchivos",value:function(){"/"!==this.$route.name&&this.$router.push("/")}},{key:"goToCarga",value:function(){"/subir"!==this.$route.name&&this.$router.push("/subir")}}]),a}(p["b"]);m=v([Object(p["a"])({})],m);var f=m,b=f,g=(a("034f"),a("2877")),O=a("6544"),j=a.n(O),y=a("7496"),w=a("40dc"),x=a("bb78"),C=a("f6c4"),A=a("71a3"),S=a("fe57"),k=Object(g["a"])(b,n,i,!1,null,null,null),_=k.exports;j()(k,{VApp:y["a"],VAppBar:w["a"],VAppBarTitle:x["a"],VMain:C["a"],VTab:A["a"],VTabs:S["a"]});var V=a("2f62"),I=a("0e44"),R=a("bc3a"),T=a.n(R);a("1c46");r["default"].use(V["a"]);var P=new V["a"].Store({plugins:[Object(I["a"])({key:"Windows",storage:window.sessionStorage})],state:{},getters:{},mutations:{},actions:{cargaArchivo:function(t,e){t.commit,t.state;return new Promise((function(t,a){T.a.post("https://35.199.30.118:3000/keyence/createArchivo",e,{headers:{}}).then((function(e){t(e.data)}))["catch"]((function(e){t({replyCode:400,replyText:e.message,data:[]})}))}))},recuperaArchivos:function(t,e){t.commit,t.state;return new Promise((function(t,e){T.a.get("https://35.199.30.118:3000/keyence/recuperaArchivos",{headers:{}}).then((function(e){t(e.data)}))["catch"]((function(e){t({replyCode:400,replyText:e.message,data:[]})}))}))},recuperaArchivoDetalle:function(t,e){t.commit,t.state;return new Promise((function(t,a){T.a.get("https://35.199.30.118:3000/keyence/recuperaArchivoDetalle/"+e,{headers:{}}).then((function(e){t(e.data)}))["catch"]((function(e){t({replyCode:400,replyText:e.message,data:[]})}))}))},recuperaUsuarios:function(t,e){t.commit,t.state;return new Promise((function(t,e){T.a.get("https://35.199.30.118:3000/keyence/recuperaUsuarios",{headers:{}}).then((function(e){t(e.data)}))["catch"]((function(e){t({replyCode:400,replyText:e.message,data:[]})}))}))},actualizaUsuarios:function(t,e){t.commit,t.state;return new Promise((function(t,a){T.a.post("https://35.199.30.118:3000/keyence/actualizaUsuarios",e,{headers:{}}).then((function(e){t(e.data)}))["catch"]((function(e){t({replyCode:400,replyText:e.message,data:[]})}))}))},eliminarArchivo:function(t,e){t.commit,t.state;return new Promise((function(t,a){T.a.post("https://35.199.30.118:3000/keyence/deleteArchivo",e,{headers:{}}).then((function(e){t(e.data)}))["catch"]((function(e){t({replyCode:400,replyText:e.message,data:[]})}))}))},eliminarUsuario:function(t,e){t.commit,t.state;return new Promise((function(t,a){T.a.post("https://35.199.30.118:3000/keyence/eliminaUsuario",e,{headers:{}}).then((function(e){t(e.data)}))["catch"]((function(e){t({replyCode:400,replyText:e.message,data:[]})}))}))}},modules:{}}),D=a("f309");r["default"].use(D["a"]);var U=new D["a"]({}),N=a("8c4f"),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-dialog",{directives:[{name:"show",rawName:"v-show",value:!0===t.alerta,expression:"alerta === true"}],staticStyle:{"margin-left":"auto","margin-right":"auto"},attrs:{transition:"dialog-top-transition",width:"30%"},model:{value:t.alerta,callback:function(e){t.alerta=e},expression:"alerta"}},[a("v-toolbar",{staticStyle:{"margin-left":"auto","margin-right":"auto"},attrs:{dark:"",color:"primary"}},[a("v-toolbar-title",[t._v(t._s(t.mensaje))]),a("v-btn",{staticStyle:{"margin-left":"auto"},attrs:{color:"red",rounded:"","max-width":"40px"},on:{click:function(e){t.alerta=!1}}},[a("v-icon",[t._v(" mdi-window-close ")])],1)],1)],1),a("v-card",{directives:[{name:"show",rawName:"v-show",value:!0===this.detalleArchivo,expression:"this.detalleArchivo === true"}],staticStyle:{width:"80%","margin-top":"1%","margin-left":"auto","margin-right":"auto"}},[a("v-btn",{staticStyle:{"margin-top":"3%","margin-left":"90%"},attrs:{color:"red",rounded:"","max-width":"40px"},on:{click:function(e){t.detalleArchivo=!1}}},[a("v-icon",[t._v(" mdi-window-close ")])],1),a("v-card-title",[a("p",{staticStyle:{"margin-left":"auto","margin-right":"auto"}},[t._v("Archivo "+t._s(this.idCard))])]),a("v-card-subtitle",[a("p",{staticStyle:{"text-align":"center"}},[t._v("En esta pantalla podrás ver el detalle del archivo.")])]),a("v-card-text",[a("p",[t._v("Fecha creación: "+t._s(this.fechaCreacionCard))]),a("v-data-table",{attrs:{title:"Archivo",headers:this.headersArchivo,items:this.datosCard,"item-key":"id","return-object":""}})],1),a("v-card-actions",[a("v-btn",{staticStyle:{"margin-top":"3%","margin-left":"auto","margin-right":"auto",width:"30%","margin-bottom":"3%"},attrs:{color:"red",rounded:""},on:{click:t.eliminarArchivo}},[t._v(" Eliminar Archivo ")])],1)],1),a("v-card",{directives:[{name:"show",rawName:"v-show",value:!1===this.detalleArchivo,expression:"this.detalleArchivo === false"}],staticStyle:{width:"80%","margin-top":"1%","margin-left":"auto","margin-right":"auto"}},[a("v-card-title",[a("p",{staticStyle:{"margin-left":"auto","margin-right":"auto"}},[t._v("Archivos")])]),a("v-card-subtitle",[a("p",{staticStyle:{"text-align":"center"}},[t._v("En esta pantalla podrás ver todos los archivos cargados.")])]),a("v-card-text",[a("v-data-table",{attrs:{title:"Archivos",headers:this.headers,items:this.archivos,"item-key":"id","return-object":""},on:{"click:row":t.verArchivo}})],1)],1)],1)},$=[],E=a("1da1"),z=(a("96cf"),a("d81d"),function(t,e,a,r){var n,i=arguments.length,o=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,a):r;if("object"===("undefined"===typeof Reflect?"undefined":Object(h["a"])(Reflect))&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,a,r);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(o=(i<3?n(o):i>3?n(e,a,o):n(e,a))||o);return i>3&&o&&Object.defineProperty(e,a,o),o}),F=function(t){Object(u["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;Object(o["a"])(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t=e.call.apply(e,[this].concat(n)),Object(d["a"])(Object(s["a"])(t),"headers",[{text:"Id Archivo",align:"start",value:"id"},{text:"Fecha Creación",value:"fechaCreacion"}]),Object(d["a"])(Object(s["a"])(t),"headersArchivo",[{text:"User ID",align:"start",value:"userId"},{text:"User Name",value:"userName"},{text:"Date",value:"date"},{text:"Punch In",value:"punchIn"},{text:"Punch Out",value:"punchOut"}]),Object(d["a"])(Object(s["a"])(t),"archivos",[]),Object(d["a"])(Object(s["a"])(t),"detalleArchivo",!1),Object(d["a"])(Object(s["a"])(t),"modificarArchivo",!1),Object(d["a"])(Object(s["a"])(t),"idCard",0),Object(d["a"])(Object(s["a"])(t),"fechaCreacionCard",""),Object(d["a"])(Object(s["a"])(t),"datosCard",[]),Object(d["a"])(Object(s["a"])(t),"alerta",!1),Object(d["a"])(Object(s["a"])(t),"mensaje",""),Object(d["a"])(Object(s["a"])(t),"userIdCampo",""),Object(d["a"])(Object(s["a"])(t),"userNameCampo",""),Object(d["a"])(Object(s["a"])(t),"dateCampo",""),Object(d["a"])(Object(s["a"])(t),"punchInCampo",""),Object(d["a"])(Object(s["a"])(t),"punchOutCampo",""),Object(d["a"])(Object(s["a"])(t),"userIdCampoMod",""),Object(d["a"])(Object(s["a"])(t),"userNameCampoMod",""),Object(d["a"])(Object(s["a"])(t),"dateCampoMod",""),Object(d["a"])(Object(s["a"])(t),"punchInCampoMod",""),Object(d["a"])(Object(s["a"])(t),"punchOutCampoMod",""),t}return Object(c["a"])(a,[{key:"mounted",value:function(){var t=Object(E["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.recuperaArchivos();case 2:this.archivos=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"recuperaArchivos",value:function(){var t=Object(E["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("recuperaArchivos");case 2:e=t.sent,this.archivos=e.data[0].map((function(t){return{id:t.body.id,fechaCreacion:t.body.fechaCreacion}})),this.archivos.toArray();case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"verArchivo",value:function(){var t=Object(E["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.detalleArchivo=!0,t.next=3,this.$store.dispatch("recuperaArchivoDetalle",e.id);case 3:a=t.sent,this.fechaCreacionCard=a.data[0][0].body.fechaCreacion,this.idCard=a.data[0][0].body.id,this.datosCard=a.data[0][0].body.archivo,this.datosCard=this.datosCard.map((function(t){return{userId:t["User ID"],userName:t["User Name"],date:t["Date"],punchIn:t["Punch In"],punchOut:t["Punch Out"]}})),this.datosCard.toArray();case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"eliminarArchivo",value:function(){var t=Object(E["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={id:this.idCard},t.next=3,this.$store.dispatch("eliminarArchivo",e);case 3:a=t.sent,200===a.replyCode?(this.recuperaArchivos(),this.detalleArchivo=!1):(this.mensaje="Error al borrar el archivo",this.alerta=!0);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),a}(p["b"]);F=z([Object(p["a"])({})],F);var B=F,J=B,K=a("8336"),q=a("b0af"),W=a("99d9"),G=a("8fea"),H=a("169a"),L=a("132d"),Q=a("71d9"),X=a("2a7f"),Y=Object(g["a"])(J,M,$,!1,null,null,null),Z=Y.exports;j()(Y,{VApp:y["a"],VBtn:K["a"],VCard:q["a"],VCardActions:W["a"],VCardSubtitle:W["b"],VCardText:W["c"],VCardTitle:W["d"],VDataTable:G["a"],VDialog:H["a"],VIcon:L["a"],VToolbar:Q["a"],VToolbarTitle:X["a"]});var tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-dialog",{directives:[{name:"show",rawName:"v-show",value:!0===t.alerta,expression:"alerta === true"}],staticStyle:{"margin-left":"auto","margin-right":"auto"},attrs:{transition:"dialog-top-transition",width:"30%"},model:{value:t.alerta,callback:function(e){t.alerta=e},expression:"alerta"}},[a("v-toolbar",{staticStyle:{"margin-left":"auto","margin-right":"auto"},attrs:{dark:"",color:"primary"}},[a("v-toolbar-title",[t._v(t._s(t.mensaje))]),a("v-btn",{staticStyle:{"margin-left":"auto"},attrs:{color:"red",rounded:"","max-width":"40px"},on:{click:function(e){t.alerta=!1}}},[a("v-icon",[t._v(" mdi-window-close ")])],1)],1)],1),a("v-card",{staticStyle:{width:"30%","margin-top":"1%","margin-left":"auto","margin-right":"auto","margin-bottom":"auto"}},[a("v-card-title",[a("p",{staticStyle:{"margin-left":"auto","margin-right":"auto"}},[t._v("Carga de archivos")])]),a("v-card-subtitle",[a("p",{staticStyle:{"text-align":"center"}},[t._v("Pantalla para cargar los archivo.")])]),a("v-card-text",[a("v-file-input",{staticStyle:{width:"70%","margin-left":"auto","margin-right":"auto","margin-top":"2%"},attrs:{"show-size":"",label:"Archivo"},model:{value:t.formato,callback:function(e){t.formato=e},expression:"formato"}},[t._v(" Archivo ")])],1),a("v-card-actions",[a("v-btn",{staticStyle:{"margin-top":"3%","margin-left":"auto","margin-right":"auto",width:"30%","margin-bottom":"3%"},attrs:{color:"blue",rounded:""},on:{click:t.cargaArchivo}},[t._v(" Cargar archivo ")])],1)],1)],1)},et=[],at=function(t,e,a,r){var n,i=arguments.length,o=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,a):r;if("object"===("undefined"===typeof Reflect?"undefined":Object(h["a"])(Reflect))&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,a,r);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(o=(i<3?n(o):i>3?n(e,a,o):n(e,a))||o);return i>3&&o&&Object.defineProperty(e,a,o),o},rt=function(t){Object(u["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;Object(o["a"])(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t=e.call.apply(e,[this].concat(n)),Object(d["a"])(Object(s["a"])(t),"alerta",!1),Object(d["a"])(Object(s["a"])(t),"mensaje",""),Object(d["a"])(Object(s["a"])(t),"formato",""),Object(d["a"])(Object(s["a"])(t),"instFormData",new FormData),t}return Object(c["a"])(a,[{key:"cargaArchivo",value:function(){var t=Object(E["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=new FormData,e.append("archivo",this.formato,this.formato.name),t.next=4,this.$store.dispatch("cargaArchivo",e);case 4:a=t.sent,200===a.replyCode?(console.log(a),this.mensaje="El archivo se cargo con exito",this.alerta=!0,this.formato=""):(this.mensaje="Error al cargar el archivo",this.alerta=!0);case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),a}(p["b"]);rt=at([Object(p["a"])({})],rt);var nt=rt,it=nt,ot=a("23a7"),ct=Object(g["a"])(it,tt,et,!1,null,null,null),st=ct.exports;j()(ct,{VApp:y["a"],VBtn:K["a"],VCard:q["a"],VCardActions:W["a"],VCardSubtitle:W["b"],VCardText:W["c"],VCardTitle:W["d"],VDialog:H["a"],VFileInput:ot["a"],VIcon:L["a"],VToolbar:Q["a"],VToolbarTitle:X["a"]});var ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-dialog",{directives:[{name:"show",rawName:"v-show",value:!0===t.alerta,expression:"alerta === true"}],staticStyle:{"margin-left":"auto","margin-right":"auto"},attrs:{transition:"dialog-top-transition",width:"30%"},model:{value:t.alerta,callback:function(e){t.alerta=e},expression:"alerta"}},[a("v-toolbar",{staticStyle:{"margin-left":"auto","margin-right":"auto"},attrs:{dark:"",color:"primary"}},[a("v-toolbar-title",[t._v(t._s(t.mensaje))]),a("v-btn",{staticStyle:{"margin-left":"auto"},attrs:{color:"red",rounded:"","max-width":"40px"},on:{click:function(e){t.alerta=!1}}},[a("v-icon",[t._v(" mdi-window-close ")])],1)],1)],1),a("v-card",{directives:[{name:"show",rawName:"v-show",value:!0===this.detalleCampo,expression:"this.detalleCampo === true"}],staticStyle:{width:"50%","margin-top":"1%","margin-left":"auto","margin-right":"auto"}},[a("v-btn",{staticStyle:{"margin-top":"3%","margin-left":"90%"},attrs:{color:"red",rounded:"","max-width":"40px"},on:{click:function(e){t.detalleCampo=!1}}},[a("v-icon",[t._v(" mdi-window-close ")])],1),a("v-card-title",[a("p",{staticStyle:{"margin-left":"auto","margin-right":"auto"}},[t._v("Campo")])]),a("v-card-subtitle",[a("p",{staticStyle:{"text-align":"center"}},[t._v("En esta pantalla podrás ver el detalle del campo y editarlos.")])]),a("v-card-text",[a("p",{staticStyle:{"text-align":"center"}},[t._v("User ID: "+t._s(this.userIdCard))]),a("p",{staticStyle:{"text-align":"center"}},[t._v("User Name: "+t._s(this.userNameCard))]),a("p",{staticStyle:{"text-align":"center"}},[t._v("Date: "+t._s(this.dateCard))]),a("p",{staticStyle:{"text-align":"center"}},[t._v("Punch In: "+t._s(this.punchInCard))]),a("p",{staticStyle:{"text-align":"center"}},[t._v("Punch Out: "+t._s(this.punchOutCard))]),a("v-select",{staticStyle:{"margin-top":"3%","margin-left":"auto","margin-right":"auto",width:"30%","margin-bottom":"3%"},attrs:{items:t.itemSelect},model:{value:t.itemSelected,callback:function(e){t.itemSelected=e},expression:"itemSelected"}}),a("v-text-field",{staticStyle:{"margin-top":"3%","margin-left":"auto","margin-right":"auto",width:"30%","margin-bottom":"3%"},attrs:{label:"Escriba el valor del campo"},model:{value:t.valorMod,callback:function(e){t.valorMod=e},expression:"valorMod"}},[t._v(" Valor del campo ")])],1),a("v-card-actions",[a("v-btn",{staticStyle:{"margin-top":"3%","margin-left":"auto","margin-right":"auto",width:"30%","margin-bottom":"3%"},attrs:{color:"red",rounded:""},on:{click:t.eliminarCampo}},[t._v(" Eliminar registro ")]),a("v-btn",{staticStyle:{"margin-top":"3%","margin-left":"auto","margin-right":"auto",width:"30%","margin-bottom":"3%"},attrs:{color:"blue",rounded:""},on:{click:t.actualizaDatosCampo}},[t._v(" Actualizar registro ")])],1)],1),a("v-card",{directives:[{name:"show",rawName:"v-show",value:!1===this.detalleCampo,expression:"this.detalleCampo === false"}],staticStyle:{width:"80%","margin-top":"1%","margin-left":"auto","margin-right":"auto"}},[a("v-card-title",[a("p",{staticStyle:{"margin-left":"auto","margin-right":"auto"}},[t._v("Registros usuarios")])]),a("v-card-subtitle",[a("p",{staticStyle:{"text-align":"center"}},[t._v("En esta pantalla podrás ver todos los registros cargados.")])]),a("v-card-text",[a("v-data-table",{attrs:{title:"Archivos",headers:this.headers,items:this.usuarios,"item-key":"id","return-object":""},on:{"click:row":t.actualizaCampo}})],1)],1)],1)},lt=[],dt=function(t,e,a,r){var n,i=arguments.length,o=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,a):r;if("object"===("undefined"===typeof Reflect?"undefined":Object(h["a"])(Reflect))&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,a,r);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(o=(i<3?n(o):i>3?n(e,a,o):n(e,a))||o);return i>3&&o&&Object.defineProperty(e,a,o),o},ht=function(t){Object(u["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;Object(o["a"])(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t=e.call.apply(e,[this].concat(n)),Object(d["a"])(Object(s["a"])(t),"headers",[{text:"User ID",align:"start",value:"userId"},{text:"User Name",value:"userName"},{text:"Date",value:"date"},{text:"Punch In",value:"punchIn"},{text:"Punch Out",value:"punchOut"},{text:"Registro ID",value:"id"}]),Object(d["a"])(Object(s["a"])(t),"itemSelect",[{text:"User ID",value:0},{text:"User Name",value:1},{text:"Date",value:2},{text:"Punch In",value:3},{text:"Punch Out",value:4}]),Object(d["a"])(Object(s["a"])(t),"usuarios",[]),Object(d["a"])(Object(s["a"])(t),"detalleCampo",!1),Object(d["a"])(Object(s["a"])(t),"userIdCard",""),Object(d["a"])(Object(s["a"])(t),"userNameCard",""),Object(d["a"])(Object(s["a"])(t),"dateCard",""),Object(d["a"])(Object(s["a"])(t),"punchInCard",""),Object(d["a"])(Object(s["a"])(t),"punchOutCard",""),Object(d["a"])(Object(s["a"])(t),"idCard",""),Object(d["a"])(Object(s["a"])(t),"campoValorNuevo",""),Object(d["a"])(Object(s["a"])(t),"itemSelected",""),Object(d["a"])(Object(s["a"])(t),"valorMod",""),Object(d["a"])(Object(s["a"])(t),"alerta",!1),Object(d["a"])(Object(s["a"])(t),"mensaje",""),t}return Object(c["a"])(a,[{key:"mounted",value:function(){var t=Object(E["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.recuperaUsuarios();case 2:this.usuarios=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"recuperaUsuarios",value:function(){var t=Object(E["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("recuperaUsuarios");case 2:e=t.sent,this.usuarios=e.data[0].map((function(t){return{userId:t.user["User ID"],userName:t.user["User Name"],date:t.user["Date"],punchIn:t.user["Punch In"],punchOut:t.user["Punch Out"],id:t["_id"]}})),this.usuarios.toArray();case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"actualizaCampo",value:function(){var t=Object(E["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.detalleCampo=!0,this.userIdCard=e.userId,this.userNameCard=e.userName,this.dateCard=e.date,this.punchInCard=e.punchIn,this.punchOutCard=e.punchOut,this.idCard=e.id;case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"actualizaDatosCampo",value:function(){var t=Object(E["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={id:this.idCard,rubro:this.itemSelected,valor:this.valorMod},t.next=3,this.$store.dispatch("actualizaUsuarios",e);case 3:a=t.sent,200===a.replyCode?(this.detalleCampo=!1,this.recuperaUsuarios(),this.itemSelected="",this.valorMod=""):(this.alerta=!0,this.mensaje="Error al actualizar el registro",this.itemSelected="",this.valorMod="");case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"eliminarCampo",value:function(){var t=Object(E["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={id:this.idCard},t.next=3,this.$store.dispatch("eliminarUsuario",e);case 3:a=t.sent,200===a.replyCode?(this.detalleCampo=!1,this.itemSelected="",this.valorMod="",this.recuperaUsuarios()):(this.alerta=!0,this.mensaje="Error al eliminar el registro",this.itemSelected="",this.valorMod="");case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),a}(p["b"]);ht=dt([Object(p["a"])({})],ht);var pt=ht,vt=pt,mt=a("b974"),ft=a("8654"),bt=Object(g["a"])(vt,ut,lt,!1,null,null,null),gt=bt.exports;j()(bt,{VApp:y["a"],VBtn:K["a"],VCard:q["a"],VCardActions:W["a"],VCardSubtitle:W["b"],VCardText:W["c"],VCardTitle:W["d"],VDataTable:G["a"],VDialog:H["a"],VIcon:L["a"],VSelect:mt["a"],VTextField:ft["a"],VToolbar:Q["a"],VToolbarTitle:X["a"]}),r["default"].use(N["a"]);var Ot=[{path:"/",name:"verArchivo",component:Z},{path:"/ver",name:"verUsuarios",component:gt},{path:"/subir",name:"subir",component:st}],jt=new N["a"]({mode:"history",base:"/",routes:Ot}),yt=jt,wt=(a("d5e8"),a("5363"),a("cb43")),xt=a("5f5b"),Ct=a("b1e0");a("f9e3"),a("2dd8");r["default"].use(xt["a"]),r["default"].use(Ct["a"]),r["default"].config.productionTip=!1,r["default"].use(wt["default"]),new r["default"]({store:P,vuetify:U,router:yt,render:function(t){return t(_)}}).$mount("#app")}});