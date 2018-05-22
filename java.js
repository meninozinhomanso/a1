var normal="abcdefghijklmnñopqrstuvwxyz1234567890"; var a1="ƛƁƇƊЄƑƓӇƖʆƘԼMƝñƠƤƢƦƧƬMƝƠƤƢƦƧƬƲƔƜҲƳȤ"; var a2="𝓪𝓫𝓬𝓭𝒆𝒇𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷ñ𝓸𝓹𝓺𝓻𝓼𝓽𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃"; var a3="(̲̅a̲̅)(̲̅b̲̅)(̲̅c̲̅)(̲̅d̲̅)(̲̅e̲̅)(̲̅f̲̅)(̲̅g̲̅)(̲̅h̲̅)(̲̅i̲̅)(̲̅j̲̅)(̲̅k̲̅)(̲̅l̲̅)(̲̅m̲̅)(̲̅n̲̅)ñ(̲̅o̲̅)(̲̅p̲̅)(̲̅q̲̅)(̲̅r̲̅)(̲̅s̲̅)(̲̅t̲̅)(̲̅m̲̅)(̲̅n̲̅)(̲̅o̲̅)(̲̅p̲̅)(̲̅q̲̅)(̲̅r̲̅)(̲̅s̲̅)(̲̅t̲̅)(̲̅u̲̅)(̲̅v̲̅)(̲̅w̲̅)(̲̅x̲̅)(̲̅y̲̅)(̲̅z̲̅)"; var a4="⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩ñ⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵"; var a5="♌♭꒞꒯㉹f꒸♬ﭐ꒻kLѪոñ♡рզrՖﮠvա꒾վՀ"; var a6="ᏗᏰፈᎴᏋᎦᎥᏂᎥᏠᏦᏝᎷᏁñᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚ"; var a7="【a】【b】【c】【d】【e】【f】【g】【h】【i】【j】【k】【l】【m】【n】ñ【o】【p】【q】【r】【s】【t】【u】【v】【w】【x】【y】【z】"; var a8="『a』『b』『c』『d』『e』『f』『g』『h』『i』『j』『k』『l』『m』『n』ñ『o』『p』『q』『r』『s』『t』『u』『v』『w』『x』『y』『z』"; var a9="ÅƁƆƊƎƑƓǶȉǰǨĻɱȠñȮȹϤГƧƬȔƱƜϗɣŻ"; var a10="αвς∂єfgнιנкℓмиÑσρףяѕтυνωאָуz";
function Cambiar(_in, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10,""; 
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