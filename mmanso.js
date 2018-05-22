<script>
var normal="abcdefghijklmnñopqrstuvwxyz1234567890";
var a1="ΔβĆĐ€₣ǤĦƗĴҜŁΜŇØƤΩŘŞŦỮVŴЖ¥Ž1234567890";
var a2="ᏗᏰፈᎴᏋᎦᎥᏂᎥᏠᏦᏝᎷᏁñᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚ";
var a3="ԹՅՇԺȝԲԳɧɿʝƙʅʍՌԾρφՐՏԵՄעաՃՎՀΙՁკЧƼбלȣףθ";
var a4="āƁƈĐēƒǤƕ¡ĵƙŁɱƞѲƤǬƦƨƭƱ√ƜҗƳʑ";
var a5="Æþ©Ð∃ζ∉ΗЇ¿¤∠mÑñΘ¶ØҐŠτυ¥wχyշ";
var a6="丹乃匚刀モ下ム卄工ＪＫㄥ爪れ口ㄗＱ尺ち匕UV山メㄚ乙";
var a7="ᏜℬᏟᗬ℮ℱℊዞℹᎫʞᎱmɲñ⋆℘ɸℛᏕʈʉʋᎳℵᎽᏃ";
var a8="ለbርծΣfցዠijkረወռñፀpզշsէሀvሠxվչ";
var a9="მჩეძპfცhἶქκlოῆñῶρგΓჰནυὗwჯყz";
var a10="ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ";
var a11="ค๒ς๔єŦﻮђเןкl๓ภñ๏קợгรtยשฬץאz";
var a12="ඹദඋd౯ቱ൭իiժḳໄጦnñ0ᎵqṛގᎢᏌކ௰ץYՁ";
var a13="Ωbҫ₫ҼҒᏩӈأᏧҠӀ₥ӣñoҎգԻֆҭմ∨ഢҲұℤ";
var a14="ΔҌﾧdﾼԲɢￃΙۆӃﾤϺﾢñﾷϸϘЯଌȚȗѵ￦ҲעŻ";
var a15="ᕱც꒝Ꭰꂅꊰg♅ᎥϳКլოՈñ☻ᎵգᏒᏕϮuᏉᎳꊼᎩᏃ";
var a16="බƀčdƎƒƓƕƖjƘᒺmƝñƠÞƣƦ꒚tƯvШ꒼ꐯƵ";
var a17="ꀇꁌꁊꀣꂅꁻꁅꀡꀧꁐꁜよꃼꁱñꀒꀾꀝꀋꃶτꀎꃴꁁꁿꂖꁪ";
var a18="▲ьζdҾʧgꀡꀤʝ㉿Łʍnñℴ℗ꀜrㄅ㈦ひ℣w〤y㆚";
var a19="♌♭꒞꒯㉹f꒸♬ﭐ꒻kLѪոñ♡рզrՖﮠvա꒾վՀ";

function marcar(campo) { campo.focus();	campo.select();}

function Raras() {
var ing = document.getElementById("textin");
var t1 = ""; var t2 = ""; var t3 = ""; var t4 = ""; var t5 = ""; var t6 = ""; var t7 = ""; var t8 = "";
var t9 = ""; var t10 = ""; var t11 = ""; var t12 = ""; var t13 = ""; var t14 = ""; var t15 = ""; var t16 = ""; var t17 = ""; var t18 = ""; var t19 = "";
var n = ing.value.toLowerCase(); if (ing.value.length==0) return;
for(i=0; i<n.length; i++) {
var c=n.charAt(i);
for(j=0; (j<normal.length)&&(c!=normal.charAt(j)); j++);
if (j<normal.length) { t1+=a1.charAt(j); } else { t1+=c; }
if (j<normal.length) { t2+=a2.charAt(j); } else { t2+=c; }
if (j<normal.length) { t3+=a3.charAt(j); } else { t3+=c; }
if (j<normal.length) { t4+=a4.charAt(j); } else { t4+=c; }
if (j<normal.length) { t5+=a5.charAt(j); } else { t5+=c; }
if (j<normal.length) { t6+=a6.charAt(j); } else { t6+=c; }
if (j<normal.length) { t7+=a7.charAt(j); } else { t7+=c; }
if (j<normal.length) { t8+=a8.charAt(j); } else { t8+=c; }
if (j<normal.length) { t9+=a9.charAt(j); } else { t9+=c; }
if (j<normal.length) { t10+=a10.charAt(j); } else { t10+=c; }
if (j<normal.length) { t11+=a11.charAt(j); } else { t11+=c; }
if (j<normal.length) { t12+=a12.charAt(j); } else { t12+=c; }
if (j<normal.length) { t13+=a13.charAt(j); } else { t13+=c; }
if (j<normal.length) { t14+=a14.charAt(j); } else { t14+=c; }
if (j<normal.length) { t15+=a15.charAt(j); } else { t15+=c; }
if (j<normal.length) { t16+=a16.charAt(j); } else { t16+=c; }
if (j<normal.length) { t17+=a17.charAt(j); } else { t17+=c; }
if (j<normal.length) { t18+=a18.charAt(j); } else { t18+=c; }
if (j<normal.length) { t19+=a19.charAt(j); } else { t19+=c; }
}
document.f.s1.value=t1;
document.f.s2.value=t2;
document.f.s3.value=t3;
document.f.s4.value=t4;
document.f.s5.value=t5;
document.f.s6.value=t6;
document.f.s7.value=t7;
document.f.s8.value=t8;
document.f.s9.value=t9;
document.f.s10.value=t10;
document.f.s11.value=t11;
document.f.s12.value=t12;
document.f.s13.value=t13;
document.f.s14.value=t14;
document.f.s15.value=t15;
document.f.s16.value=t16;
document.f.s17.value=t17;
document.f.s18.value=t18;
document.f.s19.value=t19;
}
</script>