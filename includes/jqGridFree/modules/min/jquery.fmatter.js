var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(b,l,t){if(t.get||t.set)throw new TypeError("ES3 does not support getters and setters.");b!=Array.prototype&&b!=Object.prototype&&(b[l]=t.value)};$jscomp.getGlobal=function(b){return"undefined"!=typeof window&&window===b?b:"undefined"!=typeof global?global:b};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(b){return $jscomp.SYMBOL_PREFIX+(b||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var b=$jscomp.global.Symbol.iterator;b||(b=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[b]&&$jscomp.defineProperty(Array.prototype,b,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(b){var l=0;return $jscomp.iteratorPrototype(function(){return l<b.length?{done:!1,value:b[l++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(b){$jscomp.initSymbolIterator();b={next:b};b[$jscomp.global.Symbol.iterator]=function(){return this};return b};$jscomp.array=$jscomp.array||{};$jscomp.iteratorFromArray=function(b,l){$jscomp.initSymbolIterator();b instanceof String&&(b+="");var t=0,r={next:function(){if(t<b.length){var q=t++;return{value:l(q,b[q]),done:!1}}r.next=function(){return{done:!0,value:void 0}};return r.next()}};r[Symbol.iterator]=function(){return r};return r};
$jscomp.polyfill=function(b,l,t,r){if(l){t=$jscomp.global;b=b.split(".");for(r=0;r<b.length-1;r++){var q=b[r];q in t||(t[q]={});t=t[q]}b=b[b.length-1];r=t[b];l=l(r);l!=r&&null!=l&&$jscomp.defineProperty(t,b,{configurable:!0,writable:!0,value:l})}};$jscomp.polyfill("Array.prototype.keys",function(b){return b?b:function(){return $jscomp.iteratorFromArray(this,function(b){return b})}},"es6-impl","es3");
$jscomp.findInternal=function(b,l,t){b instanceof String&&(b=String(b));for(var r=b.length,q=0;q<r;q++){var w=b[q];if(l.call(t,w,q,b))return{i:q,v:w}}return{i:-1,v:void 0}};$jscomp.polyfill("Array.prototype.find",function(b){return b?b:function(b,t){return $jscomp.findInternal(this,b,t).v}},"es6-impl","es3");
(function(b){"function"===typeof define&&define.amd?define(["jquery","./grid.base"],b):"object"===typeof exports?b(require("jquery")):b(jQuery)})(function(b){b.jgrid=b.jgrid||{};var l=b.jgrid,t=l.getMethod("getGridRes"),r=b.fn.jqGrid;b.fmatter=b.fmatter||{};var q=b.fmatter,w=function(a,c){var b=a.formatoptions||{};return b.hasOwnProperty(c)?b[c]:(a.editoptions||{})[c]},u=function(a){return String(a).replace(/\'/g,"&#39;")},y=function(a){var c=a.colModel||a.cm,b,f=!1!==c.title?" title='"+u(a.colName||
c.name)+"'":"";a=w(c,"checkedClass");b=w(c,"uncheckedClass");var e=w(c,"value"),g="string"===typeof e?e.split(":")[0]||"Yes":"Yes",e="string"===typeof e?e.split(":")[1]||"No":"No",k=function(a){return"<i class='"+u(a)+"'"+f+"></i>"},c=w(c,"disabled");void 0===c&&(c=l.formatter.checkbox.disabled);!0===c&&r.isInCommonIconClass.call(this,"fa")?(a=a||"fa fa-check-square-o fa-lg",c=k(a),b=k(b||"fa fa-square-o fa-lg")):!0===c&&r.isInCommonIconClass.call(this,"glyphicon")?(a=a||"glyphicon glyphicon-check",
c=k(a),b=k(b||"glyphicon glyphicon-unchecked")):(a="",f+=!0===c?" disabled='disabled'":"",c="<input type='checkbox' checked='checked'"+f+" />",b="<input type='checkbox'"+f+" />");return{checkedClasses:a,checked:c,unchecked:b,yes:g,no:e}},D={1:1,x:1,"true":1,yes:1,on:1},F={0:1,"false":1,no:1,off:1};b.extend(!0,l,{formatter:{date:{parseRe:/[#%\\\/:_;.,\t\s\-]/,masks:{ISO8601Long:"Y-m-d H:i:s",ISO8601Short:"Y-m-d",SortableDateTime:"Y-m-d\\TH:i:s",UniversalSortableDateTime:"Y-m-d H:i:sO"},reformatAfterEdit:!0,
userLocalTime:!1},baseLinkUrl:"",showAction:"",target:"",checkbox:{disabled:!0},idName:"id"},cmTemplate:{integerStr:{formatter:"integer",align:"right",sorttype:"integer",searchoptions:{sopt:"eq ne lt le gt ge".split(" ")}},integer:{formatter:"integer",align:"right",sorttype:"integer",convertOnSave:function(a){a=a.newValue;return isNaN(a)?a:parseInt(a,10)},searchoptions:{sopt:"eq ne lt le gt ge".split(" ")}},numberStr:{formatter:"number",align:"right",sorttype:"number",searchoptions:{sopt:"eq ne lt le gt ge".split(" ")}},
number:{formatter:"number",align:"right",sorttype:"number",convertOnSave:function(a){a=a.newValue;return isNaN(a)?a:parseFloat(a)},searchoptions:{sopt:"eq ne lt le gt ge".split(" ")}},booleanCheckbox:{align:"center",formatter:"checkbox",edittype:"checkbox",editoptions:{value:"true:false",defaultValue:"false"},convertOnSave:function(a){var b=a.newValue;a=y.call(this,a);var d=String(b).toLowerCase();if(D[d]||d===a.yes.toLowerCase())b=!0;else if(F[d]||d===a.no.toLowerCase())b=!1;return b},stype:"select",
searchoptions:{sopt:["eq","ne"],value:"true:Yes;false:No",noFilterText:"Any"}},actions:function(){return{formatter:"actions",width:(null!=this.p&&(r.isInCommonIconClass.call(this,"fa")||r.isInCommonIconClass.call(this,"glyphicon"))?b(this).jqGrid("isBootstrapGuiStyle")?45:39:40)+(l.cellWidth()?5:0),align:"center",label:"",autoResizable:!1,frozen:!0,fixed:!0,hidedlg:!0,resizable:!1,sortable:!1,search:!1,editable:!1,viewable:!1}}}});l.cmTemplate.booleanCheckboxFa=l.cmTemplate.booleanCheckbox;b.extend(q,
{isObject:function(a){return a&&("object"===typeof a||b.isFunction(a))||!1},isNumber:function(a){return"number"===typeof a&&isFinite(a)},isValue:function(a){return this.isObject(a)||"string"===typeof a||this.isNumber(a)||"boolean"===typeof a},isEmpty:function(a){if("string"!==typeof a&&this.isValue(a))return!1;if(!this.isValue(a))return!0;a=b.trim(a).replace(/&nbsp;/ig,"").replace(/&#160;/ig,"");return""===a},NumberFormat:function(a,b){var d=q.isNumber;d(a)||(a*=1);if(d(a)){var f=0>a,e=String(a),
g=b.decimalSeparator||".";if(d(b.decimalPlaces)){var k=b.decimalPlaces,e=Math.pow(10,k),e=String(Math.round(a*e)/e),d=e.lastIndexOf(".");if(0<k)for(0>d?(e+=g,d=e.length-1):"."!==g&&(e=e.replace(".",g));e.length-1-d<k;)e+="0"}if(b.thousandsSeparator){var k=b.thousandsSeparator,d=e.lastIndexOf(g),d=-1<d?d:e.length,g=void 0===b.decimalSeparator?"":e.substring(d),n=-1,m;for(m=d;0<m;m--)n++,0===n%3&&m!==d&&(!f||1<m)&&(g=k+g),g=e.charAt(m-1)+g;e=g}return e}return a}});var p=function(a,c,d,f,e){var g=c;
d=b.extend({},t.call(b(this),"formatter"),d);try{g=b.fn.fmatter[a].call(this,c,d,f,e)}catch(k){}return g};b.fn.fmatter=p;p.getCellBuilder=function(a,c,d){a=null!=b.fn.fmatter[a]?b.fn.fmatter[a].getCellBuilder:null;return b.isFunction(a)?a.call(this,b.extend({},t.call(b(this),"formatter"),c),d):null};p.defaultFormat=function(a,b){return q.isValue(a)&&""!==a?a:b.defaultValue||"&#160;"};var v=p.defaultFormat,E=function(a,b,d){if(void 0===a||q.isEmpty(a))a=w(d,"defaultValue");a=String(a).toLowerCase();
return D[a]||a===b.yes.toLowerCase()?b.checked:b.unchecked};p.email=function(a,b){return q.isEmpty(a)?v(a,b):"<a href='mailto:"+u(a)+"'>"+a+"</a>"};p.checkbox=function(a,b){var d=y.call(this,b);return E(a,d,b.colModel)};p.checkbox.getCellBuilder=function(a){var b,d=a.colModel;a.colName=a.colName||this.p.colNames[a.pos];b=y.call(this,a);return function(a){return E(a,b,d)}};p.checkbox.unformat=function(a,c,d){a=y.call(this,c);d=b(d);return(a.checkedClasses?l.hasAllClasses(d.children("i"),a.checkedClasses):
d.children("input").is(":checked"))?a.yes:a.no};p.checkboxFontAwesome4=p.checkbox;p.checkboxFontAwesome4.getCellBuilder=p.checkbox.getCellBuilder;p.checkboxFontAwesome4.unformat=p.checkbox.unformat;p.link=function(a,c){var d=c.colModel,f="",e={target:c.target};null!=d&&(e=b.extend({},e,d.formatoptions||{}));e.target&&(f="target="+e.target);return q.isEmpty(a)?v(a,e):"<a "+f+" href='"+u(a)+"'>"+a+"</a>"};p.showlink=function(a,c,d){var f=this,e=c.colModel,g={baseLinkUrl:c.baseLinkUrl,showAction:c.showAction,
addParam:c.addParam||"",target:c.target,idName:c.idName,hrefDefaultValue:"#"},k="",n,m,h=function(e){return b.isFunction(e)?e.call(f,{cellValue:a,rowid:c.rowId,rowData:d,options:g}):e||""};null!=e&&(g=b.extend({},g,e.formatoptions||{}));g.target&&(k="target="+h(g.target));e=h(g.baseLinkUrl)+h(g.showAction);n=g.idName?encodeURIComponent(h(g.idName))+"="+encodeURIComponent(h(g.rowId)||c.rowId):"";m=h(g.addParam);"object"===typeof m&&null!==m&&(m=(""!==n?"&":"")+b.param(m));e+=n||m?"?"+n+m:"";""===e&&
(e=h(g.hrefDefaultValue));return"string"===typeof a||q.isNumber(a)||b.isFunction(g.cellValue)?"<a "+k+" href='"+u(e)+"'>"+(b.isFunction(g.cellValue)?h(g.cellValue):a)+"</a>":v(a,g)};p.showlink.getCellBuilder=function(a){var c={baseLinkUrl:a.baseLinkUrl,showAction:a.showAction,addParam:a.addParam||"",target:a.target,idName:a.idName,hrefDefaultValue:"#"};a=a.colModel;null!=a&&(c=b.extend({},c,a.formatoptions||{}));return function(a,f,e){var g=this,k=f.rowId,n="",m,h,l=function(f){return b.isFunction(f)?
f.call(g,{cellValue:a,rowid:k,rowData:e,options:c}):f||""};c.target&&(n="target="+l(c.target));m=l(c.baseLinkUrl)+l(c.showAction);f=c.idName?encodeURIComponent(l(c.idName))+"="+encodeURIComponent(l(k)||f.rowId):"";h=l(c.addParam);"object"===typeof h&&null!==h&&(h=(""!==f?"&":"")+b.param(h));m+=f||h?"?"+f+h:"";""===m&&(m=l(c.hrefDefaultValue));return"string"===typeof a||q.isNumber(a)||b.isFunction(c.cellValue)?"<a "+n+" href='"+u(m)+"'>"+(b.isFunction(c.cellValue)?l(c.cellValue):a)+"</a>":v(a,c)}};
p.showlink.pageFinalization=function(a){var c=b(this),d=this.p,f=d.colModel[a],e,g=this.rows,k=g.length,n,m=function(d){var e=b(this).closest(".jqgrow");if(0<e.length)return f.formatoptions.onClick.call(c[0],{iCol:a,iRow:e[0].rowIndex,rowid:e.attr("id"),cm:f,cmName:f.name,cellValue:b(this).text(),a:this,event:d})};if(null!=f.formatoptions&&b.isFunction(f.formatoptions.onClick))for(e=0;e<k;e++)n=g[e],b(n).hasClass("jqgrow")&&(n=n.cells[a],f.autoResizable&&null!=n&&b(n.firstChild).hasClass(d.autoResizing.wrapperClassName)&&
(n=n.firstChild),null!=n&&b(n.firstChild).bind("click",m))};var A=function(a,b){a=b.prefix?b.prefix+a:a;return b.suffix?a+b.suffix:a},B=function(a,c,d){var f=c.colModel;c=b.extend({},c[d]);null!=f&&(c=b.extend({},c,f.formatoptions||{}));return q.isEmpty(a)?A(c.defaultValue,c):A(q.NumberFormat(a,c),c)};p.integer=function(a,b){return B(a,b,"integer")};p.number=function(a,b){return B(a,b,"number")};p.currency=function(a,b){return B(a,b,"currency")};var C=function(a,c){var d=a.colModel,f=b.extend({},
a[c]);null!=d&&(f=b.extend({},f,d.formatoptions||{}));var e=q.NumberFormat,g=f.defaultValue?A(f.defaultValue,f):"";return function(a){return q.isEmpty(a)?g:A(e(a,f),f)}};p.integer.getCellBuilder=function(a){return C(a,"integer")};p.number.getCellBuilder=function(a){return C(a,"number")};p.currency.getCellBuilder=function(a){return C(a,"currency")};p.date=function(a,c,d,f){d=c.colModel;c=b.extend({},c.date);null!=d&&(c=b.extend({},c,d.formatoptions||{}));return c.reformatAfterEdit||"edit"!==f?q.isEmpty(a)?
v(a,c):l.parseDate.call(this,c.srcformat,a,c.newformat,c):v(a,c)};p.date.getCellBuilder=function(a,c){var d=b.extend({},a.date);null!=a.colModel&&(d=b.extend({},d,a.colModel.formatoptions||{}));var f=l.parseDate,e=d.srcformat,g=d.newformat;return d.reformatAfterEdit||"edit"!==c?function(a){return q.isEmpty(a)?v(a,d):f.call(this,e,a,g,d)}:function(a){return v(a,d)}};p.select=function(a,c){var d=[],f=c.colModel,e,f=b.extend({},f.editoptions||{},f.formatoptions||{}),g=f.value,k=f.separator||":",n=f.delimiter||
";";if(g){var m=!0===f.multiple?!0:!1,h=[],l=function(a,b){if(0<b)return a};m&&(h=b.map(String(a).split(","),function(a){return b.trim(a)}));if("string"===typeof g){var z=g.split(n),x,p;for(x=0;x<z.length;x++)if(n=z[x].split(k),2<n.length&&(n[1]=b.map(n,l).join(k)),p=b.trim(n[0]),f.defaultValue===p&&(e=n[1]),m)-1<b.inArray(p,h)&&d.push(n[1]);else if(p===b.trim(a)){d=[n[1]];break}}else q.isObject(g)&&(e=g[f.defaultValue],d=m?b.map(h,function(a){return g[a]}):[void 0===g[a]?"":g[a]])}a=d.join(", ");
return""!==a?a:void 0!==f.defaultValue?e:v(a,f)};p.select.getCellBuilder=function(a){a=a.colModel;var c=p.defaultFormat,d=b.extend({},a.editoptions||{},a.formatoptions||{}),f=d.value;a=d.separator||":";var e=d.delimiter||";",g,k=void 0!==d.defaultValue,n=!0===d.multiple?!0:!1,m,h={},l=function(a,b){if(0<b)return a};if("string"===typeof f)for(f=f.split(e),e=f.length,m=e-1;0<=m;m--)e=f[m].split(a),2<e.length&&(e[1]=b.map(e,l).join(a)),h[b.trim(e[0])]=e[1];else if(q.isObject(f))h=f;else return function(a){return a?
String(a):c(a,d)};k&&(g=h[d.defaultValue]);return n?function(a){var e=[],f,m=b.map(String(a).split(","),function(a){return b.trim(a)});for(f=0;f<m.length;f++)a=m[f],h.hasOwnProperty(a)&&e.push(h[a]);a=e.join(", ");return""!==a?a:k?g:c(a,d)}:function(a){var b=h[String(a)];return""!==b&&void 0!==b?b:k?g:c(a,d)}};p.rowactions=function(a,c){var d=b(this).closest("tr.jqgrow"),f=d.attr("id"),e=b(this).closest("table.ui-jqgrid-btable").attr("id").replace(/_frozen([^_]*)$/,"$1"),g=b("#"+l.jqID(e)),e=g[0],
k=e.p,n,m;n=function(){var a=d[0],c=g.closest(".ui-jqgrid")[0];return null!=a.getBoundingClientRect&&null!=c.getBoundingClientRect?a.getBoundingClientRect().top+d.outerHeight()-c.getBoundingClientRect().top:d.offset().top+d.outerHeight()-b(c).offset().top};var h=k.colModel[l.getCellIndex(this)],h=b.extend(!0,{extraparam:{}},l.actionsNav||{},k.actionsNavOptions||{},h.formatoptions||{});void 0!==k.editOptions&&(h.editOptions=b.extend(!0,h.editOptions||{},k.editOptions));void 0!==k.delOptions&&(h.delOptions=
k.delOptions);d.hasClass("jqgrid-new-row")&&(h.extraparam[k.prmNames.oper]=k.prmNames.addoper);m={keys:h.keys,oneditfunc:h.onEdit,successfunc:h.onSuccess,url:h.url,extraparam:h.extraparam,aftersavefunc:h.afterSave,errorfunc:h.onError,afterrestorefunc:h.afterRestore,restoreAfterError:h.restoreAfterError,mtype:h.mtype};!k.multiselect&&f!==k.selrow||k.multiselect&&0>b.inArray(f,k.selarrrow)?g.jqGrid("setSelection",f,!0,a):l.fullBoolFeedback.call(e,"onSelectRow","jqGridSelectRow",f,!0,a);switch(c){case "edit":g.jqGrid("editRow",
f,m);break;case "save":g.jqGrid("saveRow",f,m);break;case "cancel":g.jqGrid("restoreRow",f,h.afterRestore);break;case "del":h.delOptions=h.delOptions||{};void 0===h.delOptions.top&&(h.delOptions.top=n());g.jqGrid("delGridRow",f,h.delOptions);break;case "formedit":h.editOptions=h.editOptions||{};void 0===h.editOptions.top&&(h.editOptions.top=n(),h.editOptions.recreateForm=!0);g.jqGrid("editGridRow",f,h.editOptions);break;default:if(null!=h.custom&&0<h.custom.length)for(n=h.custom.length,k=0;k<n;k++)m=
h.custom[k],m.action===c&&b.isFunction(m.onClick)&&m.onClick.call(e,{rowid:f,event:a,action:c,options:m})}a.stopPropagation&&a.stopPropagation();return!1};p.actions=function(a,c,d,f){a=c.rowId;var e="",g=this.p,k=b(this),n={},m=t.call(k,"edit")||{},g=b.extend({editbutton:!0,delbutton:!0,editformbutton:!1,commonIconClass:"ui-icon",editicon:"ui-icon-pencil",delicon:"ui-icon-trash",saveicon:"ui-icon-disk",cancelicon:"ui-icon-cancel",savetitle:m.bSubmit||"",canceltitle:m.bCancel||""},t.call(k,"nav")||
{},l.nav||{},g.navOptions||{},t.call(k,"actionsNav")||{},l.actionsNav||{},g.actionsNavOptions||{},c.colModel.formatoptions||{}),m=k.jqGrid("getGuiStyles","states.hover"),m="onmouseover=\"jQuery(this).addClass('"+m+"');\" onmouseout=\"jQuery(this).removeClass('"+m+"');\"",h=[{action:"edit",actionName:"formedit",display:g.editformbutton},{action:"edit",display:!g.editformbutton&&g.editbutton},{action:"del",idPrefix:"Delete",display:g.delbutton},{action:"save",display:g.editformbutton||g.editbutton,
hidden:!0},{action:"cancel",display:g.editformbutton||g.editbutton,hidden:!0}],p=null!=g.custom?g.custom.length-1:-1;if(void 0===a||q.isEmpty(a))return"";if(b.isFunction(g.isDisplayButtons))try{n=g.isDisplayButtons.call(this,c,d,f)||{}}catch(r){}for(;0<=p;)c=g.custom[p--],h["first"===c.position?"unshift":"push"](c);c=0;for(p=h.length;c<p;c++)if(d=b.extend({},h[c],n[h[c].action]||{}),!1!==d.display){f=d.action;var z=d.actionName||f,x=void 0!==d.idPrefix?d.idPrefix:f.charAt(0).toUpperCase()+f.substring(1);
d="<div title='"+u(g[f+"title"])+(d.hidden?"' style='display:none;":"")+"' class='"+u(k.jqGrid("getGuiStyles","actionsButton","ui-pg-div ui-inline-"+f))+"' "+(null!==x?"id='j"+u(x+"Button_"+a):"")+"' onclick=\"return jQuery.fn.fmatter.rowactions.call(this,event,'"+z+"');\" "+(d.noHovering?"":m)+"><span class='"+u(l.mergeCssClasses(g.commonIconClass,g[f+"icon"]))+"'></span></div>";e+=d}return"<div class='"+u(k.jqGrid("getGuiStyles","actionsDiv","ui-jqgrid-actions"))+"'>"+e+"</div>"};p.actions.pageFinalization=
function(a){var c=b(this),d=this.p,f=d.colModel,e=f[a],g=function(g,h){var k=0,n,l;n=f.length;for(l=0;l<n&&!0===f[l].frozen;l++)k=l;n=c.jqGrid("getGridRowById",h);null!=n&&null!=n.cells&&(a=d.iColByName[e.name],l=b(n.cells[a]).children(".ui-jqgrid-actions"),e.frozen&&d.frozenColumns&&a<=k&&(l=l.add(b(c[0].grid.fbRows[n.rowIndex].cells[a]).children(".ui-jqgrid-actions"))),g?(l.find(">.ui-inline-edit,>.ui-inline-del").show(),l.find(">.ui-inline-save,>.ui-inline-cancel").hide()):(l.find(">.ui-inline-edit,>.ui-inline-del").hide(),
l.find(">.ui-inline-save,>.ui-inline-cancel").show()))},k=function(a,b){g(!0,b);return!1},n=function(a,b){g(!1,b);return!1};null!=e.formatoptions&&e.formatoptions.editformbutton||(c.unbind("jqGridInlineAfterRestoreRow.jqGridFormatter jqGridInlineAfterSaveRow.jqGridFormatter",k),c.bind("jqGridInlineAfterRestoreRow.jqGridFormatter jqGridInlineAfterSaveRow.jqGridFormatter",k),c.unbind("jqGridInlineEditRow.jqGridFormatter",n),c.bind("jqGridInlineEditRow.jqGridFormatter",n))};b.unformat=function(a,c,d,
f){var e,g=c.colModel,k=g.formatter,n=this.p,m=g.formatoptions||{},h=g.unformat||p[k]&&p[k].unformat;a instanceof jQuery&&0<a.length&&(a=a[0]);n.treeGrid&&null!=a&&b(a.firstChild).hasClass("tree-wrap")&&(b(a.lastChild).hasClass("cell-wrapper")||b(a.lastChild).hasClass("cell-wrapperleaf"))&&(a=a.lastChild);g.autoResizable&&null!=a&&b(a.firstChild).hasClass(n.autoResizing.wrapperClassName)&&(a=a.firstChild);if(void 0!==h&&b.isFunction(h))e=h.call(this,b(a).text(),c,a);else if(void 0!==k&&"string"===
typeof k){var q=b(this),r=function(a,b){return void 0!==m[b]?m[b]:t.call(q,"formatter."+a+"."+b)},g=function(a,b){var c=r(a,"thousandsSeparator").replace(/([\.\*\_\'\(\)\{\}\+\?\\])/g,"\\$1");return b.replace(new RegExp(c,"g"),"")};switch(k){case "integer":e=g("integer",b(a).text());break;case "number":e=g("number",b(a).text()).replace(r("number","decimalSeparator"),".");break;case "currency":e=b(a).text();c=r("currency","prefix");d=r("currency","suffix");c&&c.length&&(e=e.substr(c.length));d&&d.length&&
(e=e.substr(0,e.length-d.length));e=g("number",e).replace(r("number","decimalSeparator"),".");break;case "checkbox":e=p.checkbox.unformat(a,c,a);break;case "select":e=b.unformat.select(a,c,d,f);break;case "actions":return"";default:e=b(a).text()}}return e=void 0!==e?e:!0===f?b(a).text():l.htmlDecode(b(a).html())};b.unformat.select=function(a,c,d,f){d=[];a=b(a).text();c=c.colModel;if(!0===f)return a;c=b.extend({},c.editoptions||{},c.formatoptions||{});f=void 0===c.separator?":":c.separator;var e=void 0===
c.delimiter?";":c.delimiter;if(c.value){var g=c.value;c=!0===c.multiple?!0:!1;var k=[],l=function(a,b){if(0<b)return a};c&&(k=a.split(","),k=b.map(k,function(a){return b.trim(a)}));if("string"===typeof g){var m=g.split(e),h=0,p;for(p=0;p<m.length;p++)if(e=m[p].split(f),2<e.length&&(e[1]=b.map(e,l).join(f)),c)-1<b.inArray(b.trim(e[1]),k)&&(d[h]=e[0],h++);else if(b.trim(e[1])===b.trim(a)){d[0]=e[0];break}}else if(q.isObject(g)||b.isArray(g))c||(k[0]=a),d=b.map(k,function(a){var c;b.each(g,function(b,
d){if(d===a)return c=b,!1});if(void 0!==c)return c});return d.join(", ")}return a||""};b.unformat.date=function(a,c){var d=b.extend(!0,{},t.call(b(this),"formatter.date"),l.formatter.date||{},c.formatoptions||{});return q.isEmpty(a)?"":l.parseDate.call(this,d.newformat,a,d.srcformat,d)}});
//# sourceMappingURL=jquery.fmatter.map