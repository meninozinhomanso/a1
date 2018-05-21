var normal="abcdefghijklmnñopqrstuvwxyz1234567890"; var a1="48(d3f9h!jk1mnñ0pqr57uvwxy2"; var a2="&#65425;&#20035;cd&#20039;&#65399;g&#12435;&#65417;&#65420;&#12474;&#65434;&#65462;&#20992;o&#65393;q&#23610;&#19970;&#65394;u&#8730;w&#65426;&#65432;&#20057;"; var a3="&#9424;&#9425;&#9426;&#9427;&#9428;&#9429;&#9430;&#9431;&#9432;&#9433;&#9434;&#9435;&#9436;&#9437;ñ&#9438;&#9439;&#9440;&#9441;&#9442;&#9443;&#9444;&#9445;&#9446;&#9447;&#9448;&#9449;&#9312;&#9313;&#9314;&#9315;&#9316;&#9317;&#9318;&#9319;&#9320;0"; var a4="&#9372;&#9373;&#9374;&#9375;&#9376;&#9377;&#9378;&#9379;&#9380;&#9381;&#9382;&#9383;&#9384;&#9385;ñ&#9386;&#9387;&#9388;&#9389;&#9390;&#9391;&#9392;&#9393;&#9394;&#9395;&#9396;&#9397;"; var a5="&#9804;&#9837;&#42142;&#42159;&#12921;f&#42168;&#9836;&#64336;&#42171;kL&#1130;&#1400;ñ&#9825;&#1088;&#1382;r&#1366;&#64416;v&#1377;&#42174;&#1406;&#1344;"; var a6="&#5079;&#5104;&#4936;&#5044;&#5067;&#5030;&#5029;&#5058;&#5029;&#5088;&#5094;&#5085;&#5047;&#5057;ñ&#5031;&#5038;&#5028;&#5074;&#5077;&#5078;&#5100;&#5065;&#5063;&#4864;&#5033;&#4954;"; var a7="&#1337;&#1349;&#1351;&#1338;&#541;&#1330;&#1331;&#615;&#639;&#669;&#409;&#645;&#653;&#1356;&#1342;&#961;&#966;&#1360;&#1359;&#1333;&#1348;&#1506;&#1377;&#1347;&#1358;&#1344;&#921;&#1345;&#4313;&#1063;&#444;&#1073;&#1500;&#547;&#1507;&#952;"; var a8="&#593;&#595;&#596;&#599;&#601;&#643;&#609;&#614;&#618;&#607;&#1008;&#621;&#653;&#942;ñ&#664;&#961;&#966;&#640;&#986;&#647;&#971;&#977;&#1064;&#967;&#980;&#657;"; var a9="Å&#385;&#390;&#394;&#398;&#401;&#403;&#502;&#521;&#496;&#488;&#315;&#625;&#544;ñ&#558;&#569;&#996;&#1043;&#423;&#428;&#532;&#433;&#412;&#983;&#611;&#379;"; var a10="&#945;&#1074;&#962;&#8706;&#1108;fg&#1085;&#953;&#1504;&#1082;&#8467;&#1084;&#1080;Ñ&#963;&#961;&#1507;&#1103;&#1109;&#1090;&#965;&#957;&#969;&#64303;&#1091;z";
function Cambiar(_in, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, ){ var t1="", t2="", t3="", t4="", t5="", t6="", t7="", t8="", t9="", t10=""; 
var n=_in.value.toLowerCase();
if(_in.value.length==0) return;
for(i=0; i<n.length; i++){ var c=n.charAt(i);
for(j=0; (j<normal.length)&&(c!=normal.charAt(j)); j++);
if(j<normal.length){
t1+=a1.charAt(j); t2+=a2.charAt(j); t3+=a3.charAt(j); t4+=a4.charAt(j); t5+=a5.charAt(j); t6+=a6.charAt(j); t7+=a7.charAt(j); t8+=a8.charAt(j); t9+=a9.charAt(j); t10+=a10.charAt(j);
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
