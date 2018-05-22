var normal="abcdefghijklmnñopqrstuvwxyz1234567890"; var a1="丹乃匚刀モ下ム卄工ＪＫㄥ爪れñ口ㄗＫ尺ち匕∪∨山メㄚ乙"; var a2="𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟ñ𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫"; var a3="[̲̅a][̲̅b][̲̅c][̲̅d][̲̅e][̲̅f][̲̅g][̲̅h][̲̅i][̲̅j][̲̅k][̲̅l][̲̅m][̲̅n]ñ[̲̅o][̲̅p][̲̅q][̲̅r][̲̅s][̲̅t][̲̅u][̲̅v][̲̅w][̲̅x][̲̅y][̲̅z]"; var a4="a҉b҉c҉d҉e҉f҉g҉h҉i҉j҉k҉l҉m҉n҉ño҉p҉q҉r҉s҉t҉u҉v҉w҉x҉y҉z҉"; var a5="𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟ñ𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫"; var a6="𝓪ⓑ𝕔𝐝ᵉғgĦĮ𝒿Ｋ𝕃𝓶ᑎñỖｐ𝐐Řｓⓣυｖ𝔴乂ƳŽ"; var a7="🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽ñ🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉"; var a8="𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃ñ𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏"; var a9="ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿñᵒᵖqʳˢᵗᵘᵛʷˣʸᶻ"; var a10="ₐbcdₑfgₕᵢⱼₖₗₘₙñₒₚqᵣₛₜᵤᵥwₓyz";
function Cambiar(_in, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10){ var t1="", t2="", t3="", t4="", t5="", t6="", t7="", t8="", t9="", t10=""; 
var n=_in.value.toLowerCase();
if(_in.value.length==0) return;
for(i=0; i<n.length; i++){ var c=n.charAt(i);
for(j=0; (j<normal.length)&&(c!=normal.charAt(j)); j++);
if(j<normal.length){
t1+=a1.charAt(j); t2+=a2.charAt(j); t3+=a3.charAt(j); t4+=a4.charAt(j); t5+=a5.charAt(j); t6+=a6.charAt(j); t7+=a7.charAt(j); t8+=a8.charAt(j); t9+=a9.charAt(j); t10+=a10.charAt(j); }
else { t1+=c; t2+=c; t3+=c; t4+=c; t5+=c; t6+=c; t7+=c; t8+=c; t9+=c; t10+=c;
}}
s1.value=t1; s2.value=t2; s3.value=t3; s4.value=t4; s5.value=t5; s6.value=t6; s7.value=t7; s8.value=t8; s9.value=t9; s10.value=t10;}
function Alternante(_in, _out){ var s=""; var n=_in.value.toLowerCase(); if (_in.value.length==0) return; for(i=0; i<n.length; i++){ var c=n.charAt(i); s+=i%2?c:c.toUpperCase();} _out.value=s;}
function rev(){var text=document.editor.textin.value; var backwards=""; for(count=text.length; count >= 0; count--)backwards+=text.substring(count,count-1); var conteudo = backwards; document.editor.srev.value= conteudo;}
function inv(){var text=document.editor.textin.value; var invertido=""; for(count=text.length; count >= 0; count--)invertido+=text.substring(count,count-1);var conteudo = invertido; document.editor.sinv.value= conteudo;}
function marcar(campo) { campo.focus();	campo.select();}
function goFocus(elementID){}
function Cambiar_Solo(_in, s1, abcd){
var t1="";
var n=_in.value.toLowerCase(); if (_in.value.length==0) return;
for(i=0; i<n.length; i++){ var c=n.charAt(i);
for(j=0; (j<normal.length)&&(c!=normal.charAt(j)); j++);
if (j<normal.length) { t1+=abcd.charAt(j);}
else{t1+=c;} }
s1.value=t1;}
