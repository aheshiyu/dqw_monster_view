(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63c036a2"],{3755:function(t,e,s){"use strict";s.r(e);var a=s("8336"),i=s("62ad"),n=s("a523"),r=s("132d"),o=s("a797"),l=s("67b6"),c=s("43a6"),m=s("0fd9"),u=s("2db4"),d=function(){var t=this,e=t._self._c;return e(n["a"],[e(m["a"],{staticClass:"pa-3",attrs:{justify:"center"}},[e(i["a"],{staticClass:"pb-16 mb-16",attrs:{lg:"4",xl:"4"}},[e(m["a"],{staticClass:"justify-end pb-3"},[e(c["a"],{attrs:{row:""},model:{value:t.setting.user,callback:function(e){t.$set(t.setting,"user",e)},expression:"setting.user"}},t._l(t.users,(function(s){return e(l["a"],{key:s.key,attrs:{label:s.name,value:s.key},on:{click:function(e){t.save_setting(),t.initialize()}}})})),1)],1),0==t.filter_strong.length&&0==t.filter_megamon.length&&0==t.filter_hokora.length&&0==t.filter_event.length&&0==t.filter_other.length?e(i["a"],{staticClass:"mt-5"},[e("p",{staticClass:"text-center"},[t._v("表示できるモンスターがいません。")])]):t._e(),t.loading||0==t.filter_strong.length?t._e():e("monster-section",{attrs:{section_title:"強敵",monsters:t.filter_strong},on:{edit:t.edit_monster,delete:t.delete_monster}}),t.loading||0==t.filter_hokora.length?t._e():e("monster-section",{attrs:{section_title:"ほこら",monsters:t.filter_hokora},on:{edit:t.edit_monster,delete:t.delete_monster}}),t.loading||0==t.filter_event.length?t._e():e("monster-section",{attrs:{section_title:"イベント",monsters:t.filter_event},on:{edit:t.edit_monster,delete:t.delete_monster}}),t.loading||0==t.filter_megamon.length?t._e():e("monster-section",{attrs:{section_title:"メガモン",monsters:t.filter_megamon},on:{edit:t.edit_monster,delete:t.delete_monster}}),t.loading||0==t.filter_other.length?t._e():e("monster-section",{attrs:{section_title:"その他",monsters:t.filter_other},on:{edit:t.edit_monster,delete:t.delete_monster}}),e(a["a"],{staticClass:"mb-15 mr-5",attrs:{color:"light-blue",dark:"",fixed:"",bottom:"",right:"",fab:""},on:{click:t.add_monster}},[e(r["a"],{attrs:{size:"32"}},[t._v(" mdi-plus ")])],1),e("additional-kokoro-edit",{ref:"edit",on:{save_monster:t.save_monster}}),e("confirm",{ref:"confirm"})],1),e(o["a"],{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{"z-index":"4",color:"white",opacity:"0.7",value:!0}},[e("img",{attrs:{src:s("4b50"),width:"150",height:"150"}})]),e(u["a"],{staticClass:"mb-2",attrs:{color:"success"},scopedSlots:t._u([{key:"action",fn:function({attrs:s}){return[e(a["a"],t._b({attrs:{icon:"",color:"white"},on:{click:function(e){t.snackbar=!1}}},"v-btn",s,!1),[e(r["a"],[t._v("mdi-close")])],1)]}}]),model:{value:t.snackbar_settings.snackbar,callback:function(e){t.$set(t.snackbar_settings,"snackbar",e)},expression:"snackbar_settings.snackbar"}},[e(m["a"],{attrs:{align:"center"}},[e(i["a"],{staticClass:"pr-0",attrs:{cols:"auto"}},[e(r["a"],{attrs:{small:""}},[t._v("mdi-check-circle")])],1),e(i["a"],{attrs:{cols:"auto"}},[e("p",{staticClass:"mb-0"},[t._v(t._s(t.snackbar_settings.message))])])],1)],1)],1)],1)},_=[],h=(s("14d9"),s("5fb0")),p=s("b0af"),f=s("8e36"),b=function(){var t=this,e=t._self._c;return e(n["a"],{staticClass:"pa-0 pb-7"},[e("p",{staticClass:"text-caption mb-0 pl-3 grey lighten-3 rounded-xl"},[t._v(" "+t._s(t.section_title)+" ")]),t._l(t.monsters,(function(s,n){return e(i["a"],{key:n},[e(p["a"],{attrs:{elevation:"0"}},[e(m["a"],{attrs:{align:"center",justify:"space-between"}},[e(i["a"],{staticClass:"pb-0",attrs:{cols:"8"}},[e(m["a"],[e(i["a"],{attrs:{cols:"auto"}},["rainbow"==s.color?e(r["a"],{attrs:{"x-small":"",color:"orange"}},[t._v("mdi-looks")]):e(r["a"],{attrs:{"x-small":"",color:s.color}},[t._v("mdi-checkbox-blank-circle")]),e("span",{staticClass:"mb-0 text-caption pl-1"},[t._v(t._s(s.cost))]),"イベント"==s.type||"その他"==s.type?e("span",{staticClass:"mb-0 text-caption pl-1"},[t._v(" "+t._s(s.seen)+" ")]):t._e()],1)],1),e("p",{staticClass:"mb-0"},[t._v(t._s(s.name))]),e("div",{staticClass:"pt-1"},[e(f["a"],{attrs:{value:t.get_current_value(s)/t.get_max_value(s)*100,color:"blue darken-2","background-color":"grey lighten-3",height:"5",striped:""}})],1)],1),e(i["a"],{staticClass:"pb-0",attrs:{cols:"auto"}},[e(m["a"],[e(i["a"],{staticClass:"pr-0",attrs:{cols:"auto"}},[e(a["a"],{attrs:{icon:""},on:{click:function(e){return t.$emit("edit",s)}}},[e(r["a"],[t._v("mdi-pencil")])],1)],1),e(i["a"],{staticClass:"pl-0",attrs:{cols:"auto"}},[e(a["a"],{attrs:{icon:""},on:{click:function(e){return t.$emit("delete",s)}}},[e(r["a"],[t._v("mdi-delete")])],1)],1)],1)],1)],1)],1)],1)}))],2)},g=[],x={name:"MonsterSection",props:["section_title","monsters"],data(){return{}},methods:{}},k=x,v=s("2877"),y=Object(v["a"])(k,b,g,!1,null,null,null),w=y.exports,$=s("99d9"),C=s("169a"),S=s("ce7e"),O=s("4bd4"),z=s("b974"),B=s("ba0d"),J=s("8654"),j=function(){var t=this,e=t._self._c;return e(C["a"],{attrs:{persistent:"","max-width":"400"},model:{value:t.show_edit,callback:function(e){t.show_edit=e},expression:"show_edit"}},[e(p["a"],[e(O["a"],{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e($["c"],[t._v(t._s(t.title))]),e(S["a"]),e($["b"],[e(J["a"],{attrs:{label:"モンスター名*",color:"light-blue darken-1",rules:[t.required]},model:{value:t.monster.name,callback:function(e){t.$set(t.monster,"name",e)},expression:"monster.name"}}),e(m["a"],[e(i["a"],[e(J["a"],{attrs:{label:"コスト*",type:"number",color:"light-blue darken-1",rules:[t.required,t.is_plus]},model:{value:t.monster.cost,callback:function(e){t.$set(t.monster,"cost",e)},expression:"monster.cost"}})],1),e(i["a"],{attrs:{cols:"3"}},[e(z["a"],{attrs:{items:t.color_list,"menu-props":{auto:!0,contentClass:"select_color"},label:"色*",rules:[t.required]},scopedSlots:t._u([{key:"selection",fn:function({item:s}){return["rainbow"==s?e(r["a"],{attrs:{color:"orange"}},[t._v("mdi-looks")]):e(r["a"],{attrs:{color:s}},[t._v("mdi-checkbox-blank-circle")])]}},{key:"item",fn:function({item:s}){return["rainbow"==s?e(r["a"],{attrs:{color:"orange"}},[t._v("mdi-looks")]):e(r["a"],{attrs:{color:s}},[t._v("mdi-checkbox-blank-circle")])]}}]),model:{value:t.monster.color,callback:function(e){t.$set(t.monster,"color",e)},expression:"monster.color"}})],1),e(i["a"],[e(z["a"],{attrs:{items:t.monster_type,"menu-props":{auto:!0,contentClass:"select_type"},label:"種類*",rules:[t.required]},model:{value:t.monster.type,callback:function(e){t.$set(t.monster,"type",e)},expression:"monster.type"}})],1)],1),"イベント"==t.monster.type||"その他"==t.monster.type?e(z["a"],{attrs:{items:t.monster_seen,"menu-props":{auto:!0,contentClass:"select_seen"},label:"見かけやすさ",clearable:""},model:{value:t.monster.seen,callback:function(e){t.$set(t.monster,"seen",e)},expression:"monster.seen"}}):t._e()],1),e($["b"],{staticClass:"pt-1 pb-0"},[e(m["a"],{staticClass:"mt-2 pl-3"},[e("img",{attrs:{src:s("2132"),width:"50",height:"50"}}),e(B["a"],{staticClass:"pt-3 px-6",attrs:{color:"primary","track-color":"grey",ticks:"always","tick-size":"7","thumb-label":"always","thumb-size":24,min:"0",max:t.monster.max_s},scopedSlots:t._u([{key:"prepend",fn:function(){return[e(r["a"],{attrs:{color:"primary"},on:{click:function(e){t.monster.max_s=Math.max(t.monster.max_s-1,1)}}},[t._v(" mdi-minus ")])]},proxy:!0},{key:"append",fn:function(){return[e(r["a"],{attrs:{color:"primary"},on:{click:function(e){t.monster.max_s=Math.min(t.monster.max_s+1,10)}}},[t._v(" mdi-plus ")])]},proxy:!0}]),model:{value:t.monster.num_s,callback:function(e){t.$set(t.monster,"num_s",e)},expression:"monster.num_s"}})],1),e(m["a"],{staticClass:"pl-3"},[e("img",{attrs:{src:s("83f9"),width:"50",height:"50"}}),e(B["a"],{staticClass:"pt-3 px-6",attrs:{color:"primary","track-color":"grey",ticks:"always","tick-size":"7","thumb-label":"always","thumb-size":24,min:"0",max:t.monster.max_a},scopedSlots:t._u([{key:"prepend",fn:function(){return[e(r["a"],{attrs:{color:"primary"},on:{click:function(e){t.monster.max_a=Math.max(t.monster.max_a-1,1)}}},[t._v(" mdi-minus ")])]},proxy:!0},{key:"append",fn:function(){return[e(r["a"],{attrs:{color:"primary"},on:{click:function(e){t.monster.max_a=Math.min(t.monster.max_a+1,10)}}},[t._v(" mdi-plus ")])]},proxy:!0}]),model:{value:t.monster.num_a,callback:function(e){t.$set(t.monster,"num_a",e)},expression:"monster.num_a"}})],1),e(m["a"],{staticClass:"pl-3"},[e("img",{attrs:{src:s("5ae5"),width:"50",height:"50"}}),e(B["a"],{staticClass:"pt-3 px-6",attrs:{color:"primary","track-color":"grey",ticks:"always","tick-size":"7","thumb-label":"always","thumb-size":24,min:"0",max:t.monster.max_b},scopedSlots:t._u([{key:"prepend",fn:function(){return[e(r["a"],{attrs:{color:"primary"},on:{click:function(e){t.monster.max_b=Math.max(t.monster.max_b-1,1)}}},[t._v(" mdi-minus ")])]},proxy:!0},{key:"append",fn:function(){return[e(r["a"],{attrs:{color:"primary"},on:{click:function(e){t.monster.max_b=Math.min(t.monster.max_b+1,10)}}},[t._v(" mdi-plus ")])]},proxy:!0}]),model:{value:t.monster.num_b,callback:function(e){t.$set(t.monster,"num_b",e)},expression:"monster.num_b"}})],1)],1),e($["b"],[e(m["a"],{attrs:{justify:"end"}},[e(i["a"],{staticClass:"py-0 px-10",attrs:{cols:"auto"}},[e("span",{staticClass:"grey--text"},[t._v("進捗率: "+t._s(Math.ceil(t.get_current_value(t.monster)/t.get_max_value(t.monster)*100))+"% ("+t._s(t.get_current_value(t.monster))+" / "+t._s(t.get_max_value(t.monster))+")")])])],1)],1),e($["a"],{staticClass:"justify-end pt-4"},[e(a["a"],{attrs:{color:"light-blue darken-3",text:""},on:{click:function(e){return t.close(!0)}}},[t._v(" キャンセル ")]),e(a["a"],{attrs:{color:"light-blue darken-3",text:""},on:{click:t.save}},[t._v(" "+t._s(t.button_label)+" ")])],1)],1)],1),e("confirm",{ref:"confirm"})],1)},N=[],M=s("9420"),V={name:"AdditionalKokoroEdit",components:{Confirm:M["a"]},data(){return{show_edit:!1,title:"",button_label:"",valid:!0,monster:{id:"",name:"",cost:"",color:"",type:"",seen:"",num_s:0,num_a:0,num_b:0,max_s:1,max_a:1,max_b:1},initial_monster:null,monster_type:["強敵","ほこら","イベント","メガモン","その他"],color_list:["red","yellow darken-1","blue","purple","light-green"],monster_seen:["とてもよく見かける","よく見かける","ときどき見かける","あまり見かけない","めったに見かけない"],required:t=>!!t||"入力必須",is_plus:t=>t>=0||"正の値を入力"}},methods:{open(t){this.show_edit=!0,""==t.id?(this.title="こころデータ追加",this.button_label="追加"):(this.title="こころデータ編集",this.button_label="更新"),this.monster=JSON.parse(JSON.stringify(t)),this.initial_monster=JSON.parse(JSON.stringify(t)),this.$refs.form&&this.$refs.form.resetValidation()},async save(){const t=()=>{this.$refs.form.validate()&&("イベント"!=this.monster.type&&"その他"!=this.monster.type&&(this.monster.seen=""),this.$emit("save_monster",this.monster),this.show_edit=!1)},e={...this.$store.state.setting};if(e.user!=e.default_user){const s=h["a"].users.find(t=>t.key==e.user);await this.$refs.confirm.confirm(`本当に${this.button_label}しますか？`,`${s.name}のこころを${this.button_label}します。`)&&t()}else t()},async close(){this.is_change()?await this.$refs.confirm.confirm("変更を破棄しますか？")&&(this.show_edit=!1):this.show_edit=!1},is_change(){return JSON.stringify(this.initial_monster)!==JSON.stringify(this.monster)}}},E=V,q=(s("a4d8"),Object(v["a"])(E,j,N,!1,null,null,null)),A=q.exports,I={name:"Additional",components:{MonsterSection:w,AdditionalKokoroEdit:A,Confirm:M["a"]},data(){return{loading:!1,monsters:[],users:h["a"].users,setting:{user:null,default_user:null},snackbar_settings:{snackbar:!1,message:""}}},computed:{filter_strong:function(){return this.monsters.filter(t=>"強敵"==t.type).sort((t,e)=>t.cost-e.cost)},filter_megamon:function(){return this.monsters.filter(t=>"メガモン"==t.type).sort((t,e)=>t.cost-e.cost)},filter_hokora:function(){return this.monsters.filter(t=>"ほこら"==t.type).sort((t,e)=>t.cost-e.cost)},filter_event:function(){return this.monsters.filter(t=>"イベント"==t.type).sort((t,e)=>t.cost-e.cost)},filter_other:function(){return this.monsters.filter(t=>"その他"==t.type).sort((t,e)=>t.cost-e.cost)}},methods:{save_setting(){this.$store.dispatch({type:"save_setting",setting:JSON.parse(JSON.stringify(this.setting))})},set_snackbar(t,e){this.snackbar_settings.snackbar=t,this.snackbar_settings.message=e},add_monster(){this.snackbar_settings.snackbar=!1;const t={id:"",name:"",cost:"",color:"",type:"",seen:"",num_s:0,num_a:0,num_b:0,max_s:4,max_a:4,max_b:3};this.$refs.edit.open(t)},edit_monster(t){this.snackbar_settings.snackbar=!1,this.$refs.edit.open(t)},save_monster(t){if(""==t.id)t.id=this.create_uuid().slice(0,8),this.monsters.push(t),this.snackbar_settings.message="データを追加しました。",this.snackbar_settings.snackbar=!0;else{const e=this.monsters.findIndex(e=>e.id==t.id);this.$set(this.monsters,e,JSON.parse(JSON.stringify(t))),this.snackbar_settings.message="データを更新しました。",this.snackbar_settings.snackbar=!0}this.$gas.update_additional(this.setting.user,t)},async delete_monster(t){this.snackbar_settings.snackbar=!1,await this.$refs.confirm.confirm("確認","「"+t.name+"」を削除しますか？")&&(this.monsters=this.monsters.filter(e=>e.id!=t.id),this.$gas.delete_additional(this.setting.user,t),this.snackbar_settings.message="データを削除しました。",this.snackbar_settings.snackbar=!0)},create_uuid(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{let e=((new Date).getTime()+16*Math.random())%16|0,s="x"==t?e:3&e|8;return s.toString(16)})},async initialize(){if(this.loading=!0,this.monsters=[],h["a"].users.findIndex(t=>t.key==this.setting.user)<0&&(this.setting.user=this.setting.default_user),this.setting.user){const t=await this.$gas.get_additional(this.setting.user);this.monsters=t}this.loading=!1,console.log("data loaded!")}},mounted(){this.setting={...this.$store.state.setting},this.initialize()},beforeCreate(){this.$store.dispatch("load_setting")}},K=I,T=Object(v["a"])(K,d,_,!1,null,null,null);e["default"]=T.exports},"4bd4":function(t,e,s){"use strict";s("14d9");var a=s("58df"),i=s("7e2b"),n=s("3206");e["a"]=Object(a["a"])(i["a"],Object(n["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),s={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",a=>{a&&(this.errorBag.hasOwnProperty(t._uid)||(s.valid=e(t)))}):s.valid=e(t),s},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const s=this.watchers.find(t=>t._uid===e._uid);s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"64a8":function(t,e,s){},a4d8:function(t,e,s){"use strict";s("64a8")}}]);