/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";const t="w",e="b",i="p",s="b",o="k",r="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",n=-1,h={NORMAL:"n",CAPTURE:"c",BIG_PAWN:"b",EP_CAPTURE:"e",PROMOTION:"p",KSIDE_CASTLE:"k",QSIDE_CASTLE:"q"},a={NORMAL:1,CAPTURE:2,BIG_PAWN:4,EP_CAPTURE:8,PROMOTION:16,KSIDE_CASTLE:32,QSIDE_CASTLE:64},l={a8:0,b8:1,c8:2,d8:3,e8:4,f8:5,g8:6,h8:7,a7:16,b7:17,c7:18,d7:19,e7:20,f7:21,g7:22,h7:23,a6:32,b6:33,c6:34,d6:35,e6:36,f6:37,g6:38,h6:39,a5:48,b5:49,c5:50,d5:51,e5:52,f5:53,g5:54,h5:55,a4:64,b4:65,c4:66,d4:67,e4:68,f4:69,g4:70,h4:71,a3:80,b3:81,c3:82,d3:83,e3:84,f3:85,g3:86,h3:87,a2:96,b2:97,c2:98,d2:99,e2:100,f2:101,g2:102,h2:103,a1:112,b1:113,c1:114,d1:115,e1:116,f1:117,g1:118,h1:119},c={b:[16,32,17,15],w:[-16,-32,-17,-15]},_={n:[-18,-33,-31,-14,18,33,31,14],b:[-17,-15,17,15],r:[-16,1,16,-1],q:[-17,-16,-15,1,17,16,15,-1],k:[-17,-16,-15,1,17,16,15,-1]},f=[20,0,0,0,0,0,0,24,0,0,0,0,0,0,20,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,24,24,24,24,24,24,56,0,56,24,24,24,24,24,24,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,20,0,0,0,0,0,0,24,0,0,0,0,0,0,20],u=[17,0,0,0,0,0,0,16,0,0,0,0,0,0,15,0,0,17,0,0,0,0,0,16,0,0,0,0,0,15,0,0,0,0,17,0,0,0,0,16,0,0,0,0,15,0,0,0,0,0,0,17,0,0,0,16,0,0,0,15,0,0,0,0,0,0,0,0,17,0,0,16,0,0,15,0,0,0,0,0,0,0,0,0,0,17,0,16,0,15,0,0,0,0,0,0,0,0,0,0,0,0,17,16,15,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,-15,-16,-17,0,0,0,0,0,0,0,0,0,0,0,0,-15,0,-16,0,-17,0,0,0,0,0,0,0,0,0,0,-15,0,0,-16,0,0,-17,0,0,0,0,0,0,0,0,-15,0,0,0,-16,0,0,0,-17,0,0,0,0,0,0,-15,0,0,0,0,-16,0,0,0,0,-17,0,0,0,0,-15,0,0,0,0,0,-16,0,0,0,0,0,-17,0,0,-15,0,0,0,0,0,0,-16,0,0,0,0,0,0,-17],p={p:1,n:2,b:4,r:8,q:16,k:32},d=["n",s,"r","q"],m=7,g=0,b={w:[{square:l.a1,flag:a.QSIDE_CASTLE},{square:l.h1,flag:a.KSIDE_CASTLE}],b:[{square:l.a8,flag:a.QSIDE_CASTLE},{square:l.h8,flag:a.KSIDE_CASTLE}]},v={b:1,w:6},k=["1-0","0-1","1/2-1/2","*"];function E(t){return t>>4}function S(t){return 15&t}function C(t){return-1!=="0123456789".indexOf(t)}function A(t){const e=S(t),i=E(t);return"abcdefgh".substring(e,e+1)+"87654321".substring(i,i+1)}function I(i){return i===t?e:t}function w(t,e,s,o,r,n=undefined,h=a.NORMAL){const l=E(o);if(r!==i||l!==m&&l!==g)t.push({color:e,from:s,to:o,piece:r,captured:n,flags:h});else for(let i=0;i<d.length;i++){const l=d[i];t.push({color:e,from:s,to:o,piece:r,captured:n,promotion:l,flags:h|a.PROMOTION})}}function y(t){let e=t.charAt(0);if(e>="a"&&e<="h"){if(t.match(/[a-h]\d.*[a-h]\d/))return;return i}return e=e.toLowerCase(),"o"===e?o:e}function N(t){return t.replace(/=/,"").replace(/[+#]?[?!]*$/,"")}const T=new class{constructor(e=r){this._board=new Array(128),this._turn=t,this._header={},this._kings={w:n,b:n},this._epSquare=-1,this._halfMoves=0,this._moveNumber=0,this._history=[],this._comments={},this._castling={w:0,b:0},this.load(e)}clear(e=!1){this._board=new Array(128),this._kings={w:n,b:n},this._turn=t,this._castling={w:0,b:0},this._epSquare=n,this._halfMoves=0,this._moveNumber=1,this._history=[],this._comments={},this._header=e?this._header:{},this._updateSetup(this.fen())}load(i,s=!1){let o=i.split(/\s+/);if(o.length>=2&&o.length<6){const t=["-","-","0","1"];i=o.concat(t.slice(-(6-o.length))).join(" ")}o=i.split(/\s+/);const{ok:r,error:h}=function(t){const e=t.split(/\s+/);if(6!==e.length)return{ok:!1,error:"Invalid FEN: must contain six space-delimited fields"};const i=parseInt(e[5],10);if(isNaN(i)||i<=0)return{ok:!1,error:"Invalid FEN: move number must be a positive integer"};const s=parseInt(e[4],10);if(isNaN(s)||s<0)return{ok:!1,error:"Invalid FEN: half move counter number must be a non-negative integer"};if(!/^(-|[abcdefgh][36])$/.test(e[3]))return{ok:!1,error:"Invalid FEN: en-passant square is invalid"};if(/[^kKqQ-]/.test(e[2]))return{ok:!1,error:"Invalid FEN: castling availability is invalid"};if(!/^(w|b)$/.test(e[1]))return{ok:!1,error:"Invalid FEN: side-to-move is invalid"};const o=e[0].split("/");if(8!==o.length)return{ok:!1,error:"Invalid FEN: piece data does not contain 8 '/'-delimited rows"};for(let t=0;t<o.length;t++){let e=0,i=!1;for(let s=0;s<o[t].length;s++)if(C(o[t][s])){if(i)return{ok:!1,error:"Invalid FEN: piece data is invalid (consecutive number)"};e+=parseInt(o[t][s],10),i=!0}else{if(!/^[prnbqkPRNBQK]$/.test(o[t][s]))return{ok:!1,error:"Invalid FEN: piece data is invalid (invalid piece)"};e+=1,i=!1}if(8!==e)return{ok:!1,error:"Invalid FEN: piece data is invalid (too many squares in rank)"}}if("3"==e[3][1]&&"w"==e[1]||"6"==e[3][1]&&"b"==e[1])return{ok:!1,error:"Invalid FEN: illegal en-passant square"};const r=[{color:"white",regex:/K/g},{color:"black",regex:/k/g}];for(const{color:t,regex:i}of r){if(!i.test(e[0]))return{ok:!1,error:`Invalid FEN: missing ${t} king`};if((e[0].match(i)||[]).length>1)return{ok:!1,error:`Invalid FEN: too many ${t} kings`}}return{ok:!0}}(i);if(!r)throw new Error(h);const c=o[0];let _=0;this.clear(s);for(let i=0;i<c.length;i++){const s=c.charAt(i);if("/"===s)_+=8;else if(C(s))_+=parseInt(s,10);else{const i=s<"a"?t:e;this.put({type:s.toLowerCase(),color:i},A(_)),_++}}this._turn=o[1],o[2].indexOf("K")>-1&&(this._castling.w|=a.KSIDE_CASTLE),o[2].indexOf("Q")>-1&&(this._castling.w|=a.QSIDE_CASTLE),o[2].indexOf("k")>-1&&(this._castling.b|=a.KSIDE_CASTLE),o[2].indexOf("q")>-1&&(this._castling.b|=a.QSIDE_CASTLE),this._epSquare="-"===o[3]?n:l[o[3]],this._halfMoves=parseInt(o[4],10),this._moveNumber=parseInt(o[5],10),this._updateSetup(this.fen())}fen(){var s,o;let r=0,h="";for(let e=l.a8;e<=l.h1;e++){if(this._board[e]){r>0&&(h+=r,r=0);const{color:i,type:s}=this._board[e];h+=i===t?s.toUpperCase():s.toLowerCase()}else r++;e+1&136&&(r>0&&(h+=r),e!==l.h1&&(h+="/"),r=0,e+=8)}let c="";this._castling[t]&a.KSIDE_CASTLE&&(c+="K"),this._castling[t]&a.QSIDE_CASTLE&&(c+="Q"),this._castling[e]&a.KSIDE_CASTLE&&(c+="k"),this._castling[e]&a.QSIDE_CASTLE&&(c+="q"),c=c||"-";let _="-";if(this._epSquare!==n){const e=this._epSquare+(this._turn===t?16:-16),r=[e+1,e-1];for(const t of r){if(136&t)continue;const e=this._turn;if((null===(s=this._board[t])||void 0===s?void 0:s.color)===e&&(null===(o=this._board[t])||void 0===o?void 0:o.type)===i){this._makeMove({color:e,from:t,to:this._epSquare,piece:i,captured:i,flags:a.EP_CAPTURE});const s=!this._isKingAttacked(e);if(this._undoMove(),s){_=A(this._epSquare);break}}}}return[h,this._turn,c,_,this._halfMoves,this._moveNumber].join(" ")}_updateSetup(t){this._history.length>0||(t!==r?(this._header.SetUp="1",this._header.FEN=t):(delete this._header.SetUp,delete this._header.FEN))}reset(){this.load(r)}get(t){return this._board[l[t]]||!1}put({type:t,color:e},i){if(-1==="pnbrqkPNBRQK".indexOf(t.toLowerCase()))return!1;if(!(i in l))return!1;const s=l[i];return(t!=o||this._kings[e]==n||this._kings[e]==s)&&(this._board[s]={type:t,color:e},t===o&&(this._kings[e]=s),this._updateSetup(this.fen()),!0)}remove(t){const e=this.get(t);return delete this._board[l[t]],e&&e.type===o&&(this._kings[e.color]=n),this._updateSetup(this.fen()),e}_attacked(s,o){for(let r=l.a8;r<=l.h1;r++){if(136&r){r+=7;continue}if(void 0===this._board[r]||this._board[r].color!==s)continue;const n=this._board[r],h=r-o;if(0===h)continue;const a=h+119;if(f[a]&p[n.type]){if(n.type===i){if(h>0){if(n.color===t)return!0}else if(n.color===e)return!0;continue}if("n"===n.type||"k"===n.type)return!0;const s=u[a];let l=r+s,c=!1;for(;l!==o;){if(null!=this._board[l]){c=!0;break}l+=s}if(!c)return!0}}return!1}_isKingAttacked(t){return this._attacked(I(t),this._kings[t])}isAttacked(t,e){return this._attacked(e,l[t])}isCheck(){return this._isKingAttacked(this._turn)}inCheck(){return this.isCheck()}isCheckmate(){return this.isCheck()&&0===this._moves().length}isStalemate(){return!this.isCheck()&&0===this._moves().length}isInsufficientMaterial(){const t={b:0,n:0,r:0,q:0,k:0,p:0},e=[];let i=0,o=0;for(let r=l.a8;r<=l.h1;r++){if(o=(o+1)%2,136&r){r+=7;continue}const n=this._board[r];n&&(t[n.type]=n.type in t?t[n.type]+1:1,n.type===s&&e.push(o),i++)}if(2===i)return!0;if(3===i&&(1===t[s]||1===t.n))return!0;if(i===t[s]+2){let t=0;const i=e.length;for(let s=0;s<i;s++)t+=e[s];if(0===t||t===i)return!0}return!1}isThreefoldRepetition(){const t=[],e={};let i=!1;for(;;){const e=this._undoMove();if(!e)break;t.push(e)}for(;;){const s=this.fen().split(" ").slice(0,4).join(" ");e[s]=s in e?e[s]+1:1,e[s]>=3&&(i=!0);const o=t.pop();if(!o)break;this._makeMove(o)}return i}isDraw(){return this._halfMoves>=100||this.isStalemate()||this.isInsufficientMaterial()||this.isThreefoldRepetition()}isGameOver(){return this.isCheckmate()||this.isStalemate()||this.isDraw()}moves({verbose:t=!1,square:e,piece:i}={}){const s=this._moves({square:e,piece:i});return t?s.map((t=>this._makePretty(t))):s.map((t=>this._moveToSan(t,s)))}_moves({legal:t=!0,piece:e,square:s}={}){var r;const n=s?s.toLowerCase():void 0,h=null==e?void 0:e.toLowerCase(),f=[],u=this._turn,p=I(u);let d=l.a8,m=l.h1,g=!1;if(n){if(!(n in l))return[];d=m=l[n],g=!0}for(let t=d;t<=m;t++){if(136&t){t+=7;continue}if(!this._board[t]||this._board[t].color===p)continue;const{type:e}=this._board[t];let s;if(e===i){if(h&&h!==e)continue;s=t+c[u][0],this._board[s]||(w(f,u,t,s,i),s=t+c[u][1],v[u]!==E(t)||this._board[s]||w(f,u,t,s,i,void 0,a.BIG_PAWN));for(let e=2;e<4;e++)s=t+c[u][e],136&s||((null===(r=this._board[s])||void 0===r?void 0:r.color)===p?w(f,u,t,s,i,this._board[s].type,a.CAPTURE):s===this._epSquare&&w(f,u,t,s,i,i,a.EP_CAPTURE))}else{if(h&&h!==e)continue;for(let i=0,r=_[e].length;i<r;i++){const r=_[e][i];for(s=t;s+=r,!(136&s);){if(this._board[s]){if(this._board[s].color===u)break;w(f,u,t,s,e,this._board[s].type,a.CAPTURE);break}if(w(f,u,t,s,e),"n"===e||e===o)break}}}}if(!(void 0!==h&&h!==o||g&&m!==this._kings[u])){if(this._castling[u]&a.KSIDE_CASTLE){const t=this._kings[u],e=t+2;this._board[t+1]||this._board[e]||this._attacked(p,this._kings[u])||this._attacked(p,t+1)||this._attacked(p,e)||w(f,u,this._kings[u],e,o,void 0,a.KSIDE_CASTLE)}if(this._castling[u]&a.QSIDE_CASTLE){const t=this._kings[u],e=t-2;this._board[t-1]||this._board[t-2]||this._board[t-3]||this._attacked(p,this._kings[u])||this._attacked(p,t-1)||this._attacked(p,e)||w(f,u,this._kings[u],e,o,void 0,a.QSIDE_CASTLE)}}if(!t)return f;const b=[];for(let t=0,e=f.length;t<e;t++)this._makeMove(f[t]),this._isKingAttacked(u)||b.push(f[t]),this._undoMove();return b}move(t,{strict:e=!1}={}){let i=null;if("string"==typeof t)i=this._moveFromSan(t,e);else if("object"==typeof t){const e=this._moves();for(let s=0,o=e.length;s<o;s++)if(t.from===A(e[s].from)&&t.to===A(e[s].to)&&(!("promotion"in e[s])||t.promotion===e[s].promotion)){i=e[s];break}}if(!i)throw"string"==typeof t?new Error(`Invalid move: ${t}`):new Error(`Invalid move: ${JSON.stringify(t)}`);const s=this._makePretty(i);return this._makeMove(i),s}_push(t){this._history.push({move:t,kings:{b:this._kings.b,w:this._kings.w},turn:this._turn,castling:{b:this._castling.b,w:this._castling.w},epSquare:this._epSquare,halfMoves:this._halfMoves,moveNumber:this._moveNumber})}_makeMove(t){const s=this._turn,r=I(s);if(this._push(t),this._board[t.to]=this._board[t.from],delete this._board[t.from],t.flags&a.EP_CAPTURE&&(this._turn===e?delete this._board[t.to-16]:delete this._board[t.to+16]),t.promotion&&(this._board[t.to]={type:t.promotion,color:s}),this._board[t.to].type===o){if(this._kings[s]=t.to,t.flags&a.KSIDE_CASTLE){const e=t.to-1,i=t.to+1;this._board[e]=this._board[i],delete this._board[i]}else if(t.flags&a.QSIDE_CASTLE){const e=t.to+1,i=t.to-2;this._board[e]=this._board[i],delete this._board[i]}this._castling[s]=0}if(this._castling[s])for(let e=0,i=b[s].length;e<i;e++)if(t.from===b[s][e].square&&this._castling[s]&b[s][e].flag){this._castling[s]^=b[s][e].flag;break}if(this._castling[r])for(let e=0,i=b[r].length;e<i;e++)if(t.to===b[r][e].square&&this._castling[r]&b[r][e].flag){this._castling[r]^=b[r][e].flag;break}t.flags&a.BIG_PAWN?this._epSquare=s===e?t.to-16:t.to+16:this._epSquare=n,t.piece===i||t.flags&(a.CAPTURE|a.EP_CAPTURE)?this._halfMoves=0:this._halfMoves++,s===e&&this._moveNumber++,this._turn=r}undo(){const t=this._undoMove();return t?this._makePretty(t):null}_undoMove(){const t=this._history.pop();if(void 0===t)return null;const s=t.move;this._kings=t.kings,this._turn=t.turn,this._castling=t.castling,this._epSquare=t.epSquare,this._halfMoves=t.halfMoves,this._moveNumber=t.moveNumber;const o=this._turn,r=I(o);if(this._board[s.from]=this._board[s.to],this._board[s.from].type=s.piece,delete this._board[s.to],s.captured)if(s.flags&a.EP_CAPTURE){let t;t=o===e?s.to-16:s.to+16,this._board[t]={type:i,color:r}}else this._board[s.to]={type:s.captured,color:r};if(s.flags&(a.KSIDE_CASTLE|a.QSIDE_CASTLE)){let t,e;s.flags&a.KSIDE_CASTLE?(t=s.to+1,e=s.to-1):(t=s.to-2,e=s.to+1),this._board[t]=this._board[e],delete this._board[e]}return s}pgn({newline:t="\n",maxWidth:e=0}={}){const i=[];let s=!1;for(const e in this._header)i.push("["+e+' "'+this._header[e]+'"]'+t),s=!0;s&&this._history.length&&i.push(t);const o=t=>{const e=this._comments[this.fen()];return void 0!==e&&(t=`${t}${t.length>0?" ":""}{${e}}`),t},r=[];for(;this._history.length>0;)r.push(this._undoMove());const n=[];let h="";for(0===r.length&&n.push(o(""));r.length>0;){h=o(h);const t=r.pop();if(!t)break;if(this._history.length||"b"!==t.color)"w"===t.color&&(h.length&&n.push(h),h=this._moveNumber+".");else{const t=`${this._moveNumber}. ...`;h=h?`${h} ${t}`:t}h=h+" "+this._moveToSan(t,this._moves({legal:!0})),this._makeMove(t)}if(h.length&&n.push(o(h)),void 0!==this._header.Result&&n.push(this._header.Result),0===e)return i.join("")+n.join(" ");const a=function(){return i.length>0&&" "===i[i.length-1]&&(i.pop(),!0)},l=function(s,o){for(const r of o.split(" "))if(r){if(s+r.length>e){for(;a();)s--;i.push(t),s=0}i.push(r),s+=r.length,i.push(" "),s++}return a()&&s--,s};let c=0;for(let s=0;s<n.length;s++)c+n[s].length>e&&n[s].includes("{")?c=l(c,n[s]):(c+n[s].length>e&&0!==s?(" "===i[i.length-1]&&i.pop(),i.push(t),c=0):0!==s&&(i.push(" "),c++),i.push(n[s]),c+=n[s].length);return i.join("")}header(...t){for(let e=0;e<t.length;e+=2)"string"==typeof t[e]&&"string"==typeof t[e+1]&&(this._header[t[e]]=t[e+1]);return this._header}loadPgn(t,{strict:e=!1,newlineChar:i="\r?\n"}={}){function s(t){return t.replace(/\\/g,"\\")}t=t.trim();const o=new RegExp("^(\\[((?:"+s(i)+")|.)*\\])((?:\\s*"+s(i)+"){2}|(?:\\s*"+s(i)+")*$)").exec(t),r=o&&o.length>=2?o[1]:"";this.reset();const n=function(t){const e={},o=t.split(new RegExp(s(i)));let r="",n="";for(let t=0;t<o.length;t++){const i=/^\s*\[\s*([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;r=o[t].replace(i,"$1"),n=o[t].replace(i,"$2"),r.trim().length>0&&(e[r]=n)}return e}(r);let h="";for(const t in n)"fen"===t.toLowerCase()&&(h=n[t]),this.header(t,n[t]);if(e){if("1"===n.SetUp){if(!("FEN"in n))throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");this.load(n.FEN,!0)}}else h&&this.load(h,!0);const a=function(t){return`{${function(t){return Array.from(t).map((function(t){return t.charCodeAt(0)<128?t.charCodeAt(0).toString(16):encodeURIComponent(t).replace(/%/g,"").toLowerCase()})).join("")}((t=t.replace(new RegExp(s(i),"g")," ")).slice(1,t.length-1))}}`},l=function(t){if(t.startsWith("{")&&t.endsWith("}"))return function(t){return 0==t.length?"":decodeURIComponent("%"+(t.match(/.{1,2}/g)||[]).join("%"))}(t.slice(1,t.length-1))};let c=t.replace(r,"").replace(new RegExp(`({[^}]*})+?|;([^${s(i)}]*)`,"g"),(function(t,e,i){return void 0!==e?a(e):" "+a(`{${i.slice(1)}}`)})).replace(new RegExp(s(i),"g")," ");const _=/(\([^()]+\))+?/g;for(;_.test(c);)c=c.replace(_,"");c=c.replace(/\d+\.(\.\.)?/g,""),c=c.replace(/\.\.\./g,""),c=c.replace(/\$\d+/g,"");let f=c.trim().split(new RegExp(/\s+/));f=f.filter((t=>""!==t));let u="";for(let t=0;t<f.length;t++){const i=l(f[t]);if(void 0!==i){this._comments[this.fen()]=i;continue}const s=this._moveFromSan(f[t],e);if(null==s){if(!(k.indexOf(f[t])>-1))throw new Error(`Invalid move in PGN: ${f[t]}`);u=f[t]}else u="",this._makeMove(s)}u&&Object.keys(this._header).length&&!this._header.Result&&this.header("Result",u)}_moveToSan(t,e){let s="";if(t.flags&a.KSIDE_CASTLE)s="O-O";else if(t.flags&a.QSIDE_CASTLE)s="O-O-O";else{if(t.piece!==i){const i=function(t,e){const i=t.from,s=t.to,o=t.piece;let r=0,n=0,h=0;for(let t=0,a=e.length;t<a;t++){const a=e[t].from,l=e[t].to;o===e[t].piece&&i!==a&&s===l&&(r++,E(i)===E(a)&&n++,S(i)===S(a)&&h++)}return r>0?n>0&&h>0?A(i):h>0?A(i).charAt(1):A(i).charAt(0):""}(t,e);s+=t.piece.toUpperCase()+i}t.flags&(a.CAPTURE|a.EP_CAPTURE)&&(t.piece===i&&(s+=A(t.from)[0]),s+="x"),s+=A(t.to),t.promotion&&(s+="="+t.promotion.toUpperCase())}return this._makeMove(t),this.isCheck()&&(this.isCheckmate()?s+="#":s+="+"),this._undoMove(),s}_moveFromSan(t,e=!1){const i=N(t);let s,o,r,n,h,a=y(i),c=this._moves({legal:!0,piece:a});for(let t=0,e=c.length;t<e;t++)if(i===N(this._moveToSan(c[t],c)))return c[t];if(e)return null;let _=!1;o=i.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/),o?(s=o[1],r=o[2],n=o[3],h=o[4],1==r.length&&(_=!0)):(o=i.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/),o&&(s=o[1],r=o[2],n=o[3],h=o[4],1==r.length&&(_=!0))),a=y(i),c=this._moves({legal:!0,piece:s||a});for(let t=0,e=c.length;t<e;t++)if(r&&n){if(!(s&&s.toLowerCase()!=c[t].piece||l[r]!=c[t].from||l[n]!=c[t].to||h&&h.toLowerCase()!=c[t].promotion))return c[t];if(_){const e=A(c[t].from);if(!(s&&s.toLowerCase()!=c[t].piece||l[n]!=c[t].to||r!=e[0]&&r!=e[1]||h&&h.toLowerCase()!=c[t].promotion))return c[t]}}return null}ascii(){let e="   +------------------------+\n";for(let i=l.a8;i<=l.h1;i++){if(0===S(i)&&(e+=" "+"87654321"[E(i)]+" |"),this._board[i]){const s=this._board[i].type;e+=" "+(this._board[i].color===t?s.toUpperCase():s.toLowerCase())+" "}else e+=" . ";i+1&136&&(e+="|\n",i+=8)}return e+="   +------------------------+\n",e+="     a  b  c  d  e  f  g  h",e}perft(t){const e=this._moves({legal:!1});let i=0;const s=this._turn;for(let o=0,r=e.length;o<r;o++)this._makeMove(e[o]),this._isKingAttacked(s)||(t-1>0?i+=this.perft(t-1):i++),this._undoMove();return i}_makePretty(t){const{color:e,piece:i,from:s,to:o,flags:r,captured:n,promotion:l}=t;let c="";for(const t in a)a[t]&r&&(c+=h[t]);const _=A(s),f=A(o),u={color:e,piece:i,from:_,to:f,san:this._moveToSan(t,this._moves({legal:!0})),flags:c,lan:_+f,before:this.fen(),after:""};return this._makeMove(t),u.after=this.fen(),this._undoMove(),n&&(u.captured=n),l&&(u.promotion=l,u.lan+=l),u}turn(){return this._turn}board(){const t=[];let e=[];for(let i=l.a8;i<=l.h1;i++)null==this._board[i]?e.push(null):e.push({square:A(i),type:this._board[i].type,color:this._board[i].color}),i+1&136&&(t.push(e),e=[],i+=8);return t}squareColor(t){if(t in l){const e=l[t];return(E(e)+S(e))%2==0?"light":"dark"}return null}history({verbose:t=!1}={}){const e=[],i=[];for(;this._history.length>0;)e.push(this._undoMove());for(;;){const s=e.pop();if(!s)break;t?i.push(this._makePretty(s)):i.push(this._moveToSan(s,this._moves())),this._makeMove(s)}return i}_pruneComments(){const t=[],e={},i=t=>{t in this._comments&&(e[t]=this._comments[t])};for(;this._history.length>0;)t.push(this._undoMove());for(i(this.fen());;){const e=t.pop();if(!e)break;this._makeMove(e),i(this.fen())}this._comments=e}getComment(){return this._comments[this.fen()]}setComment(t){this._comments[this.fen()]=t.replace("{","[").replace("}","]")}deleteComment(){const t=this._comments[this.fen()];return delete this._comments[this.fen()],t}getComments(){return this._pruneComments(),Object.keys(this._comments).map((t=>({fen:t,comment:this._comments[t]})))}deleteComments(){return this._pruneComments(),Object.keys(this._comments).map((t=>{const e=this._comments[t];return delete this._comments[t],{fen:t,comment:e}}))}};for(;!T.isGameOver();){const t=T.moves(),e=t[Math.floor(Math.random()*t.length)];T.move(e)}console.log(T.pgn())})();