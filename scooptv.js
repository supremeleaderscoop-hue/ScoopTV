// SCOOPTV CHANNELS. Edit this list. Keep every quote on one line or the room goes blank.
// url: one link. urls: the season library for that station. SHUFFLE rerolls it. order: 1 plays straight through until SHUFFLE.
// Part 1 / Part Two stay together. Each viewer's set is private. Chat is the only shared piece.

const SCOOP_CHANNELS = [
    { ch: 200, station: "CNN NEWS", url: "https://www.youtube.com/watch?v=GotlA1KKWoo", desc: "CNN Headlines: 24/7 Live News" },
    { ch: 201, station: "NATURE ESCAPE", url: "https://www.youtube.com/watch?v=i6DH-eLlLjo", desc: "24/7 nature documentaries and animal habitats." },
    { ch: 202, station: "90S KIDS", urls: ["flint-the-time-detective","wishbone_20230214_20230214_1416","billnyethescienceguythecompleteseries-07-28-2021","big-wolf-on-campus_202211","animorphs-season-1-and-2-the-complete-series","beastwarstransformers1080p","goosebumps-s01","salute-your-shorts-complete","are-you-afraid-of-the-dark-1992","savedbythebell_202507","saved-by-the-bell-the-new-class-1993-tv-series-first-season","saved-by-the-bell-the-new-class-1993-second-season"], desc: "English. Flint, Wishbone, Bill Nye, Big Wolf, Animorphs, Beast Wars, Goosebumps, Salute Your Shorts, Are You Afraid of the Dark, Saved by the Bell, The New Class." },
    { ch: 203, station: "DOCTOR WHO", url: "doctor-who_202210", order: 1, desc: "Classic serials, in story order." },
    { ch: 204, station: "SITCOM CLASSICS", urls: ["bevhill-s01e01-36","alf-complete","GreenAcresCompleteSeries","the-addams-family__season-1","the-addams-family__season-2","munsters_the","the-munsters-today-season-1-3-complete","mister-ed-s-01","get-smart","leave-it-to-beaver-the-complete-series-1957-1963","The_Dick_van_Dyke_Show"], desc: "Beverly Hillbillies, ALF, Green Acres, The Addams Family, The Munsters, Munsters Today, Mister Ed, Get Smart, Leave It to Beaver, Dick Van Dyke. English." },
    { ch: 205, station: "RICKI LAKE", urls: ["https://www.youtube.com/watch?v=SzaRwUYq0KY","https://www.youtube.com/watch?v=oA4LsUYup_w"], desc: "Secret Crushes, December 1997, plus another crush hour." },
    { ch: 206, station: "AEW", urls: ["aew-double-or-nothing-2022-29-05-22","aew-double-or-nothing-2021-30-05-21","aew.-revolution.-2020.-ppv.-web.h-264-heel","aew-all-out-2021","AEWAllOut2024","aew-dynamite-grand-slam-22-09-21","aew-dynamite-road-rager-2022-15-06-22","aew-dynamite-on-fite-episode-118-05-01-22","aew-dynamite-on-fite-episode-113-01-12-21"], desc: "Dynamite, All Out, Double or Nothing, Revolution, Grand Slam, Road Rager." },
    { ch: 207, station: "CLASSIC WRESTLING", urls: ["wwe-monday-night-raw-2002-12-23-hd","wwe-monday-night-raw-2010-12-13-hd","wwe-monday-night-raw-2011-01-03-hd","wwe-raw-royal-rumble-january-2005-sky-sports-3","WWFroualrumble93","ecw-barely-legal-1997","ecw-dec-17th-1996","ecw-hardcore-tv-1996-02-20","nwa.-wcw-.worldwide_complete","nwa-clash-of-the-champions-1-27-03-1988","nwa-clash-of-the-champions-2-miami-mayhem-08-06-1988","nwa-clash-of-the-champions-6-ragin-cajun-02-04-1989","nwa-clash-of-the-champions-9-new-york-knock-out-15-11-1989","best-of-the-survivor-series-1987-1997","sep.-1995","sep.-1996","jun.-1997","dec.-1997"], desc: "Raw, Royal Rumble, ECW, NWA Worldwide, Clash of the Champions, Nitro, Survivor Series." },
    { ch: 208, station: "REALITY RACE", url: "big-brother-uk_202306", order: 1, desc: "Big Brother UK, in order." },
    { ch: 209, station: "GAME CLASSICS", urls: ["pressyourluck-bmp","hollywood-squares_202304","matchgame1973-BMP","matchgame1975-bmp","tpir-7275-bmp","supermarketsweep-bmp","family-feud-gsn_202504","cardsharks1978-bmp","cardsharks1986-bmp"], desc: "Press Your Luck, Hollywood Squares, Match Game, The Price Is Right, Supermarket Sweep, Family Feud, Card Sharks." },
    { ch: 210, station: "ANIME VAULT", subs: 1, urls: ["db-bebop-of-the-cowboys-1080p","digimon-digital-monsters-the-complete-collection-saban-entertainment-edited-version","digimon-tamers-the-complete-collection-saban-entertainment-edited-version","digimon-data-squad-the-complete-series","yu-gi-oh-s0-hd"], desc: "Bebop, Digimon, Tamers, Data Squad, Yu-Gi-Oh. Digimon is the English dub. Subtitles turn on when the file has them." },
    { ch: 211, station: "KAIJU CINEMA", urls: ["1954-godzilla-2021","1989gojirataibiorante.720p.ac3.cg","1992gojirataimosura.720p.ac3.cg","godzilla-vs-mechagodzilla-english-dub","king-kong-vs-godzilla","rodan_202108","MOTHRAJapEngSub"], desc: "Godzilla 1954, Biollante, vs Mothra, Mechagodzilla, King Kong vs Godzilla, Rodan, Mothra." },
    { ch: 212, station: "SCI-FI CINEMA", urls: ["twilight-zone-season-one-DVD","the-twilight-zone-s-2-e-1-colorized-720p-hd","the-twilight-zone-s-3e-1-colorized-720p-hd","the-twilight-zone-s-4e-3-colorized-720p-hd","the-outer-limits-s-1e-1-1963-colorized"], desc: "Twilight Zone seasons 1 to 4 and The Outer Limits, 1963. English." },
    { ch: 213, station: "HOWARD TV", urls: ["https://www.youtube.com/watch?v=wdBpzF5N0ok","https://www.youtube.com/watch?v=g7CGrkS-BaE","https://www.youtube.com/watch?v=tAKYnqMk8Lk","https://www.youtube.com/watch?v=uOYIWCXrEDc","https://www.youtube.com/watch?v=cMWSWi2DidU","howard-stern-show-on-e-1995-gary-and-scott-fight-over-best-of","wcw-vs-wack-pack-wcw-nitro"], desc: "Artie fights, the Bro Fight, Sal, Bob Levy, Gary and Scott, Wack Pack vs WCW." },
    { ch: 214, station: "MTV REALITY", urls: ["celebrity_deathmatch_season1","s-7-ep-41-beavis-butthead-are-dead"], desc: "Celebrity Deathmatch and Beavis and Butt-Head." },
    { ch: 215, station: "MOVIE VAULT", urls: ["Night_Of_The_Living_Dead_raw_HD_WS","plan-9-from-outer-space","The_House_On_Haunted_Hill","CarnivalofSouls","his_girl_friday","TheGeneral_201312","Metropolis1927EnglishVersion","Detour","DasKabinettdesDoktorCaligariTheCabinetofDrCaligari","ThePhantomoftheOpera","https://www.youtube.com/watch?v=MQ8ZKw7YIfQ"], desc: "Night of the Living Dead, Plan 9, House on Haunted Hill, Carnival of Souls, His Girl Friday, The General, Metropolis, Detour, Caligari, Phantom of the Opera. Public domain." },
    { ch: 216, station: "NICK GAMES", urls: ["figure-it-out-complete-series-proper","double-dare-1988_202011","doubledare-1986_202010","supersloppydoubledare-1987","nickelodeon-guts-season-1","nickelodeon-guts-season-2","nickelodeon-guts-season-3","legends-of-the-hidden-temple-episode-041","legends-of-the-hidden-temple-jewel-encrusted-egg-of-catherine-the-great"], desc: "Figure It Out, Double Dare, Guts, Legends of the Hidden Temple." },
    { ch: 217, station: "ESPN OCHO", urls: ["robot-wars-1998-2018","cc-battlebots-s3","cc-battlebots-s4"], desc: "Robot Wars and Comedy Central BattleBots." },
    { ch: 218, station: "EMERIL", urls: ["Emeril_2001","theironchefhdcollection"], desc: "Emeril Live and Iron Chef." },
    { ch: 219, station: "NICK LIVE", urls: ["the-amanda-show","season-2-episode-all-that-partial-series-proper","clarissa-explains-it-all-season-1","hey-dude_202211"], desc: "The Amanda Show, All That, Clarissa Explains It All, and Hey Dude." },
    { ch: 220, station: "NICKTOONS", urls: ["invader-zim-seasons-1-2-full-series","thenewadventuresofgilligans1","thenewadventuresofgilliganseason2","hey-arnold-marathon-jan-29-2000","cat-dog-together-forever-1999-vhs-full","the-bullwinkle-show-1959-season-1","theres-no-need-to-fear-underdog-is-here"], desc: "Invader Zim, Gilligan, a Hey Arnold marathon, CatDog, Bullwinkle season 1, and Underdog." },
    { ch: 221, station: "STAR TREK", urls: ["startrekcontinues_202006","star-trek-new-voyages-phase-ii-2004","startrekhiddenfrontier"], order: 1, desc: "Star Trek Continues, New Voyages, and Hidden Frontier, in story order." },
    { ch: 222, station: "XENA", urls: ["xena-s01","xena-s02","xena-s03","xena-s04"], desc: "Xena seasons 1 to 4. English." },
    { ch: 223, station: "SHONEN", subs: 1, urls: ["bleach-complete","naruto-completo"], desc: "Bleach and Naruto. English subtitles turn on when the file has them." },
    { ch: 224, station: "COLUMBO", urls: ["columbo-pilot-episodes","10.1ColumboGoesToCollege","9.2ColumboCriesWolf","10.3ColumboAndTheMurderOfARockStar"], desc: "A handful of Columbo cases." },
    { ch: 225, station: "QUANTUM LEAP", urls: ["QLSeason1","QLSeason2","qlseason-3"], desc: "Quantum Leap seasons 1, 2, and 3. English." },
    { ch: 226, station: "USA WEATHER", url: "https://www.youtube.com/watch?v=3dDyjHc8DkA", desc: "WeatherNation live. USA forecasts and radar." }
];
// Engine below. Leave it alone.
function bootScoopTV(){
if($('#mainpage').length===0){setTimeout(bootScoopTV,250);return;}
$('body').addClass('scooptv-on');
if(!$('#scooptv-viewport').length){
const keys=[1,2,3,4,5,6,7,8,9].map(n=>`<button type="button" data-d="${n}">${n}</button>`).join('');
$('body').append(`<div id="scooptv-viewport"><div id="scoop-header"><div id="scoop-brand"><b>SCOOPTV</b> CABLE GUIDE</div><div id="scoop-clock">--:--:-- --</div><a id="scoop-exit" href="/r/latenitescoop">EXIT TO MAIN ROOM</a></div><div id="scoop-main-row"><div id="tv-stage"><div id="static-fx"></div><div id="osd"><div id="osd-channel">NO SIGNAL</div><div id="osd-station"></div><div id="osd-show"></div></div><iframe id="scoop-screen" title="Your ScoopTV" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe><video id="scoop-archive" controls autoplay playsinline></video></div><div id="scoop-side"><div id="scoop-side-head"><span id="scoop-side-title">YOUR SET</span><button id="toggle-panel-btn" type="button">FLIP TO CHAT</button></div><div id="panel-info-view"><div><div id="card-station">SCOOPTV</div><h3 id="card-title">Your own set</h3><p id="card-desc">Punch in a channel. Only your set changes.</p></div><div id="scoop-remote"><div id="scoop-dial">---</div>${keys}<button type="button" id="ch-last">LAST</button><button type="button" data-d="0">0</button><button type="button" id="ch-enter">GO</button><button type="button" id="ch-prev">CH−</button><button type="button" id="ch-mute">MUTE</button><button type="button" id="ch-next">CH+</button><button type="button" id="ch-shuffle">SHUFFLE</button><button type="button" id="ch-fav">FAV</button><button type="button" id="ch-surf">SURF</button><button type="button" id="ch-power">POWER</button></div><div id="scoop-statusline"><span>CHAT</span><span id="scoop-status">CONNECTING...</span></div></div><div id="panel-chat-view"><div id="scoop-chat-area"><div id="scoop-chat-buffer"></div><div id="scoop-userlist"></div></div><div id="scoop-chat-compose"><input id="scoop-chat-input" type="text" placeholder="Type a message..." autocomplete="off"></div></div></div></div><div id="scoop-guide"><div id="scoop-guide-head"><span>CHANNEL GUIDE</span><small id="scoop-hint">TYPE A CHANNEL · ARROWS</small></div><div id="scoop-guide-scroll"><table><thead><tr><th>CH</th><th>STATION</th><th>NOW PLAYING</th><th>STATUS</th></tr></thead><tbody id="dynamic-cable-grid"></tbody></table></div></div></div>`);
}
let tuned=-1,prev=-1,powered=true,muted=false,dial='',dialTimer=0,zapTimer=0,favTimer=0,favs=[];
try{const saved=JSON.parse(localStorage.getItem('scooptv-favs')||'[]');if(Array.isArray(saved))favs=saved.map(Number).filter(function(n){return n>0;});}catch(e){}
const titles={};
try{const n=+localStorage.getItem('scooptv-ch');if(n>=0&&n<SCOOP_CHANNELS.length)tuned=n;}catch(e){}
let chatMode=false;
$('#toggle-panel-btn').off('click.scoop').on('click.scoop',function(){
chatMode=!chatMode;
$('#panel-info-view').toggle(!chatMode);
$('#panel-chat-view').css('display',chatMode?'flex':'none');
$('#scoop-side-title').text(chatMode?'COMMUNITY CHAT':'YOUR SET');
$(this).text(chatMode?'FLIP TO INFO':'FLIP TO CHAT');
if(chatMode)setTimeout(()=>$('#scoop-chat-input').trigger('focus'),80);
});
function pad(n){return n<10?'0'+n:''+n;}
function tickClock(){const d=new Date(),h0=d.getHours(),h=h0%12||12;$('#scoop-clock').text(pad(h)+':'+pad(d.getMinutes())+':'+pad(d.getSeconds())+' '+(h0>=12?'PM':'AM'));}
function hush(){
try{
document.querySelectorAll('#videowrap video').forEach(v=>{v.muted=true;v.volume=0;});
const P=window.PLAYER,y=P&&(P.player||P.yt||P.media);
if(P&&typeof P.setVolume==='function')P.setVolume(0);
if(P&&typeof P.mute==='function')P.mute();
if(y&&typeof y.setVolume==='function')y.setVolume(0);
if(y&&typeof y.mute==='function')y.mute();
}catch(e){}
}
if(window.scoopTVTimer)clearInterval(window.scoopTVTimer);
window.scoopTVTimer=setInterval(()=>{
tickClock();hush();
const $cb=$('#scoop-chat-buffer'),el=$cb[0];
if($('#messagebuffer').length&&el){const h=$('#messagebuffer').html();if($cb.html()!==h){const bottom=el.scrollHeight-el.scrollTop-el.clientHeight<45;$cb.html(h);if(bottom)$cb.scrollTop(el.scrollHeight);}}
if($('#userlist').length&&$('#scoop-userlist').html()!==$('#userlist').html())$('#scoop-userlist').html($('#userlist').html());
const nUsers=$('#userlist').children().length;
$('#scoop-hint').text((nUsers?nUsers+' IN CHAT · ':'')+'TYPE '+SCOOP_CHANNELS[0].ch+'–'+SCOOP_CHANNELS[SCOOP_CHANNELS.length-1].ch+' · ARROWS');
const online=typeof socket!=='undefined'&&socket.connected;
$('#scoop-status').text(online?'LIVE':'RECONNECTING').css('color',online?'#7efcff':'#ff5577');
},650);
tickClock();
$(document).off('keydown.scoop','#scoop-chat-input').on('keydown.scoop','#scoop-chat-input',function(e){
e.stopPropagation();
if(e.which===13){e.preventDefault();const msg=$(this).val().trim();if(msg&&typeof socket!=='undefined'){socket.emit('chatMsg',{msg,meta:{}});$(this).val('');}}
});
const safe=s=>$('<div>').text(s==null?'':String(s)).html();
const attr=s=>safe(s).replace(/"/g,'&quot;');
function mediaFor(url){if(!url||typeof window.parseMediaLink!=='function')return null;try{return window.parseMediaLink(url)||null;}catch(e){return null;}}
function ytId(url){
if(!url)return '';
const pre=String(url).match(/^yt:([\w-]{11})$/);
if(pre)return pre[1];
const m=mediaFor(url);
if(m&&m.id&&(m.type==='yt'||m.type==='yp'))return String(m.id);
const g=String(url).match(/(?:youtu\.be\/|\/live\/|\/shorts\/|[?&]v=|\/embed\/)([\w-]{11})/);
return g?g[1]:'';
}
function clean(t){return String(t||'').replace(/\s+/g,' ').trim();}
function nowPlaying(c){const id=ytId(c.url);return id&&titles[id]?titles[id]:'';}
function zap(label){
$('#osd-channel').text(label).addClass('slam');
$('#static-fx').removeClass('hold').addClass('on');
$('#tv-stage').addClass('zap');
clearTimeout(zapTimer);
zapTimer=setTimeout(()=>{$('#static-fx').removeClass('on');$('#osd-channel').removeClass('slam');$('#tv-stage').removeClass('zap');},680);
}
function showDial(s){$('#scoop-dial').text(s);}
function showNow(text){const s=String(text||'').split('/').pop().replace(/\.[^.]+$/,'').trim();$('#osd-show').text(s);}
function applyCard(c){
const live=nowPlaying(c),ids=stationTokens(c),key=ids.join('|');
$('#card-station').text('CH '+c.ch+'   '+c.station);
$('#osd-station').text(c.station);
showDial(String(c.ch));
if(ids.length){$('#card-title').text(key===arcKey&&arcLabel?arcLabel:c.station);$('#card-desc').text(key===arcKey&&arcList.length?(c.desc||'Station mix'):(c.desc||'Loading the station...'));}
else if(!c.url){$('#card-title').text('No signal');$('#card-desc').text('Paste a link for '+c.station+'.');}
else if(!ytId(c.url)){$('#card-title').text('Bad link');$('#card-desc').text('Use a YouTube link or an archive.org/details link.');}
else{$('#card-title').text(live||c.station);$('#card-desc').text(c.desc||'');}
showNow($('#card-title').text());
}
function reveal(row){
const box=document.getElementById('scoop-guide-scroll');
if(!row||!box)return;
const r=row.getBoundingClientRect(),b=box.getBoundingClientRect();
if(r.top<b.top)box.scrollTop-=b.top-r.top;
else if(r.bottom>b.bottom)box.scrollTop+=r.bottom-b.bottom;
}
function syncGuide(){
let html='';
$('#ch-fav').toggleClass('lit',tuned>=0&&powered&&favs.indexOf(SCOOP_CHANNELS[tuned].ch)>=0);
SCOOP_CHANNELS.forEach((c,i)=>{
const on=i===tuned&&powered,prog=programText(c),fav=favs.indexOf(c.ch)>=0;
const tip='CH '+c.ch+' · '+c.station+' · '+prog;
html+=`<tr class="ch-row${on?' active-ch':''}${fav?' fav-ch':''}" role="button" tabindex="0" data-i="${i}" title="${attr(tip)}"><td class="ch-number">${c.ch}</td><td class="ch-station">${fav?'★ ':''}${safe(c.station)}</td><td class="ch-program">${safe(prog)}</td><td class="ch-status"><span class="ch-badge">${on?'TUNED':fav?'FAV':(c.url||(c.urls&&c.urls.length))?'READY':'SETUP'}</span></td></tr>`;
});
if($('#dynamic-cable-grid').html()!==html)$('#dynamic-cable-grid').html(html);
}
function ytCmd(func){
const f=document.getElementById('scoop-screen');
if(f&&f.contentWindow)f.contentWindow.postMessage(JSON.stringify({event:'command',func:func,args:[]}),'*');
}
const arcMemo={},arcSubs={};
let subUrl='',ytArm=0;
let arcEp=0,arcList=[],arcKey='',arcLabel='',arcOrder=false;
function arcId(url){const s=String(url||'').trim();const m=s.match(/archive\.org\/(?:details|embed|download)\/([^\/?#]+)/i);if(m)return decodeURIComponent(m[1]);return /^[A-Za-z0-9][\w.-]{2,}$/.test(s)?s:'';}
function stationTokens(c){const raw=c&&Array.isArray(c.urls)?c.urls:(c&&c.url?[c.url]:[]);const arcs=[],yts=[];raw.forEach(function(u){const y=ytId(u);if(y){if(yts.indexOf(y)<0)yts.push(y);return;}const a=arcId(u);if(a&&arcs.indexOf(a)<0)arcs.push(a);});if(!arcs.length&&yts.length<2)return [];return arcs.concat(yts.map(function(id){return 'yt:'+id;}));}
function channelIds(c){const raw=c&&Array.isArray(c.urls)?c.urls:(c&&c.url?[c.url]:[]);const ids=[];raw.forEach(function(u){const id=arcId(u);if(id&&ids.indexOf(id)<0)ids.push(id);});return ids;}
function arcPick(files){const mp4=[],m4v=[];(files||[]).forEach(function(f){const n=f&&f.name||'';if(f.size&&+f.size<1000000)return;if(/\.ia\.mp4$/i.test(n))return;if(/\.mp4$/i.test(n))mp4.push(n);else if(/\.m4v$/i.test(n))m4v.push(n);});const names=mp4.length?mp4:m4v;names.sort(function(a,b){return a.localeCompare(b,undefined,{numeric:true});});return names;}
function arcInfo(name){let s=String(name).replace(/\.[^.]+$/,'').replace(/\s*\[[^\]]*\]/g,'');let part=0;const pm=s.match(/\(\s*part\s*(\d+)\s*\)/i);const pw=pm?null:s.match(/\bpart\s+(one|two|three|four|five|six|\d+)\b/i);if(pm){part=+pm[1];s=s.replace(pm[0],'');}else if(pw){const w={one:1,two:2,three:3,four:4,five:5,six:6};part=/^\d+$/.test(pw[1])?+pw[1]:(w[pw[1].toLowerCase()]||0);s=s.replace(pw[0],'');}s=s.replace(/\b\d{1,2}x\d{2}\b/ig,'').replace(/\bs\d+e\d+\b/ig,'').replace(/\s+/g,' ').trim().toLowerCase();return {part:part,base:s};}
function arcBlocks(id,names){const blocks=[];names.forEach(function(name){const info=arcInfo(name),prev=blocks[blocks.length-1],item={id:id,file:name};if(prev&&info.part>1&&prev.part+1===info.part&&prev.base===info.base){prev.files.push(item);prev.part=info.part;}else blocks.push({base:info.base,part:info.part,files:[item]});});return blocks;}
function arcShuffle(list){const a=list.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));const t=a[i];a[i]=a[j];a[j]=t;}return a;}
function arcLineup(key,blocks){const store='scooptv-mix-'+key;let saved=null;try{saved=JSON.parse(localStorage.getItem(store)||'');}catch(e){}const all=[];blocks.forEach(function(b){b.files.forEach(function(f){all.push(f.id+'|'+f.file);});});if(Array.isArray(saved)&&saved.length===all.length&&saved.every(function(n){return n&&all.indexOf(n.id+'|'+n.file)>=0;}))return saved;const flat=[];arcShuffle(blocks).forEach(function(b){b.files.forEach(function(f){flat.push(f);});});try{localStorage.setItem(store,JSON.stringify(flat));}catch(e){}return flat;}
function stopArc(){arcKey='';$('#tv-stage').removeClass('archive');const v=document.getElementById('scoop-archive');if(!v)return;v.pause();v.removeAttribute('src');v.removeAttribute('data-file');try{v.load();}catch(e){}}
function arcSrc(id,file){return 'https://archive.org/download/'+encodeURIComponent(id)+'/'+String(file).split('/').map(encodeURIComponent).join('/');}
function arcNice(file){return String(file||'').replace(/\.[^.]+$/,'').replace(/\s*\[[^\]]*\]/g,'').trim();}
function arcSubMap(files){const map={};(files||[]).forEach(function(f){const n=f&&f.name||'';if(!/\.(vtt|srt)$/i.test(n)||/\.ia\./i.test(n))return;const base=n.replace(/\.(en|eng|english)\.(vtt|srt)$/i,'').replace(/\.(vtt|srt)$/i,'').split('/').pop().toLowerCase();const score=(/\.vtt$/i.test(n)?2:1)+(/english|\.en\.|\.eng\./i.test(n)?3:0);if(!map[base]||score>=map[base].score)map[base]={name:n,score:score};});return map;}
function clearSub(v){const old=v&&v.querySelector&&v.querySelector('track');if(old)old.remove();if(subUrl){URL.revokeObjectURL(subUrl);subUrl='';}}
function attachVtt(v,src){const tr=document.createElement('track');tr.kind='subtitles';tr.label='English';tr.srclang='en';tr.default=true;tr.src=src;v.appendChild(tr);tr.addEventListener('load',function(){if(tr.track)tr.track.mode='showing';});}
function showSub(v,id,file,want){clearSub(v);const map=arcSubs[id]||{};const base=String(file).split('/').pop().replace(/\.[^.]+$/,'').toLowerCase();const hit=map[base];if(hit){const src=arcSrc(id,hit.name);if(/\.vtt$/i.test(hit.name)){attachVtt(v,src);return;}fetch(src).then(function(r){return r.text();}).then(function(text){subUrl=URL.createObjectURL(new Blob(['WEBVTT\n\n'+text.replace(/\r/g,'').replace(/(\d\d:\d\d:\d\d),(\d{3})/g,'$1.$2')],{type:'text/vtt'}));attachVtt(v,subUrl);}).catch(function(){});return;}if(want){const on=function(){v.removeEventListener('loadedmetadata',on);const tracks=v.textTracks;for(let i=0;i<tracks.length;i++)tracks[i].mode='showing';};v.addEventListener('loadedmetadata',on);}}
function ytSrc(id,subs){return 'https://www.youtube.com/embed/'+id+'?autoplay=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&cc_load_policy='+(subs?1:0)+'&cc_lang_pref=en&origin='+encodeURIComponent(location.origin);}
function armYt(){const f=document.getElementById('scoop-screen');if(f&&f.contentWindow){f.contentWindow.postMessage(JSON.stringify({event:'listening',id:1,channel:'widget'}),'*');if(muted)f.contentWindow.postMessage(JSON.stringify({event:'command',func:'mute',args:[]}),'*');}}
function advance(){if(!arcKey)return;const ids=arcKey.split('|');if(arcEp<arcList.length-1)playMix(ids,arcEp+1,arcOrder);else{if(!arcOrder){try{localStorage.removeItem('scooptv-mix-'+arcKey);localStorage.removeItem('scooptv-arc-'+arcKey);}catch(e){}}playMix(ids,0,arcOrder);}}
function playMix(ids,ep,inOrder){
const key=ids.join('|');
let left=ids.length;
function ready(){
if(!powered||!SCOOP_CHANNELS[tuned]||stationTokens(SCOOP_CHANNELS[tuned]).join('|')!==key)return;
const blocks=[];
ids.forEach(function(id){
if(id.slice(0,3)==='yt:'){blocks.push({base:id,part:0,files:[{id:id,file:id.slice(3),yt:id.slice(3)}]});return;}
arcBlocks(id,arcMemo[id]||[]).forEach(function(b){blocks.push(b);});
});
arcOrder=!!inOrder;const list=inOrder?(function(){const o=[];blocks.forEach(function(b){b.files.forEach(function(f){o.push(f);});});return o;})():arcLineup(key,blocks);
arcKey=key;arcList=list;
if(!list.length){$('#card-title').text('No episodes');$('#card-desc').text('No playable videos on this station.');syncGuide();return;}
if(ep==null||isNaN(ep)){try{ep=+localStorage.getItem('scooptv-arc-'+key)||0;}catch(e){ep=0;}}
ep=Math.max(0,Math.min(list.length-1,ep|0));
arcEp=ep;
try{localStorage.setItem('scooptv-arc-'+key,String(ep));}catch(e){}
const item=list[ep],v=document.getElementById('scoop-archive'),c=SCOOP_CHANNELS[tuned];
const here=item.yt?{part:0,base:''}:arcInfo(item.file);
const nxt=list[ep+1]&&!list[ep+1].yt&&!item.yt?arcInfo(list[ep+1].file):null;
const same=here.part&&nxt&&list[ep+1].id===item.id&&nxt.base===here.base&&nxt.part===here.part+1;
if(item.yt){
v.pause();clearSub(v);
$('#tv-stage').removeClass('archive');
const src=ytSrc(item.yt,c&&c.subs);
if($('#scoop-screen').attr('src')!==src)$('#scoop-screen').attr('src',src);
ytArm=Date.now()+2000;
setTimeout(armYt,600);
arcLabel=titles[item.yt]||'YouTube';
if(!Object.prototype.hasOwnProperty.call(titles,item.yt)){titles[item.yt]='';fetch('https://www.youtube.com/oembed?format=json&url='+encodeURIComponent('https://www.youtube.com/watch?v='+item.yt)).then(function(r){return r.json();}).then(function(d){titles[item.yt]=clean(d&&d.title)||'YouTube';if(arcList[arcEp]&&arcList[arcEp].yt===item.yt){arcLabel=titles[item.yt];$('#card-title').text(arcLabel);showNow(arcLabel);syncGuide();}}).catch(function(){});}
}else{
const mark=item.id+'|'+item.file;
$('#scoop-screen').attr('src','about:blank');
$('#tv-stage').addClass('archive');
if(v.getAttribute('data-file')!==mark){showSub(v,item.id,item.file,c&&c.subs);v.src=arcSrc(item.id,item.file);v.setAttribute('data-file',mark);}
v.muted=!!muted;
const go=v.play();if(go&&go.catch)go.catch(function(){});
arcLabel=arcNice(item.file);
}
$('#card-title').text(arcLabel);
showNow(arcLabel);
$('#card-desc').text((same?('Part '+here.part+' · next is part '+nxt.part):(inOrder?'In story order':'Station mix'))+' · '+list.length+' in the lineup');
syncGuide();
}
function tick(){if(--left===0)ready();}
if(!ids.length)return;
ids.forEach(function(id){
if(id.slice(0,3)==='yt:'){tick();return;}
if(Object.prototype.hasOwnProperty.call(arcMemo,id)){tick();return;}
fetch('https://archive.org/metadata/'+encodeURIComponent(id)).then(function(r){return r.json();}).then(function(meta){arcMemo[id]=arcPick(meta&&meta.files);arcSubs[id]=arcSubMap(meta&&meta.files);}).catch(function(){arcMemo[id]=[];arcSubs[id]={};}).then(tick);
});
}
function programText(c){
const live=nowPlaying(c);if(live)return live;
const ids=stationTokens(c);
if(ids.length)return ids.join('|')===arcKey&&arcLabel?arcLabel:(c.desc||'Station mix');
if(!c.url)return 'No signal';
return ytId(c.url)?'Loading...':(c.desc||'Bad link');
}
function tune(i){
const c=SCOOP_CHANNELS[i];if(!c)return;
if(!powered){powered=true;$('#ch-power').removeClass('lit').text('POWER');}
if(tuned!==i&&tuned>=0)prev=tuned;
tuned=i;
try{localStorage.setItem('scooptv-ch',String(i));}catch(e){}
applyCard(c);
const tokens=stationTokens(c),id=ytId(c.url)||(!tokens.length&&Array.isArray(c.urls)?ytId(c.urls[0]):''),$screen=$('#scoop-screen');
let force=false;try{force=localStorage.getItem('scooptv-force-'+tokens.join('|'))==='1';}catch(e){}
if(tokens.length){$screen.attr('src','about:blank');playMix(tokens,null,!!c.order&&!force);}
else if(!id){stopArc();$screen.attr('src','about:blank');}
else{
stopArc();
const src=ytSrc(id,c.subs);
if($screen.attr('src')!==src)$screen.attr('src',src);
else if(muted)ytCmd('mute');
}
zap('CH '+c.ch);
syncGuide();
reveal($('#dynamic-cable-grid .ch-row').get(i));
}
function ensureTitles(){
SCOOP_CHANNELS.forEach((c,i)=>{
const raw=[];if(c.url)raw.push(c.url);if(Array.isArray(c.urls))c.urls.forEach(function(u){raw.push(u);});
raw.forEach(function(u){
const id=ytId(u);
if(!id||Object.prototype.hasOwnProperty.call(titles,id))return;
titles[id]='';
fetch('https://www.youtube.com/oembed?format=json&url='+encodeURIComponent('https://www.youtube.com/watch?v='+id))
.then(r=>r.json()).then(d=>{titles[id]=clean(d&&d.title)||'';syncGuide();if(tuned===i&&powered)applyCard(c);})
.catch(()=>{titles[id]='';});
});
});
}
function step(d){const n=SCOOP_CHANNELS.length;tune(((tuned<0?(d>0?0:n-1):tuned)+d+n)%n);}
function pushDigit(d){
if(!powered){powered=true;$('#static-fx').removeClass('hold on');$('#ch-power').removeClass('lit').text('POWER');}
dial=(dial+d).slice(-3);
showDial(dial);
clearTimeout(dialTimer);
if(dial.length<3){dialTimer=setTimeout(()=>{dial='';showDial(tuned>=0?String(SCOOP_CHANNELS[tuned].ch):'---');},1400);return;}
const want=dial;dial='';
const i=SCOOP_CHANNELS.findIndex(c=>String(c.ch)===want);
if(i>=0)tune(i);
else{showDial('NO CH');zap('NO CH');$('#osd-station').text('');dialTimer=setTimeout(()=>{if(tuned>=0){showDial(SCOOP_CHANNELS[tuned].ch);$('#osd-channel').text('CH '+SCOOP_CHANNELS[tuned].ch);$('#osd-station').text(SCOOP_CHANNELS[tuned].station);}else showDial('---');},800);}
}
function goDial(){
if(dial.length===3){pushDigit('');return;}
if(!dial){if(tuned>=0)tune(tuned);return;}
const hit=SCOOP_CHANNELS.findIndex(c=>String(c.ch).endsWith(dial)||String(c.ch)===dial);
dial='';
if(hit>=0)tune(hit);else{showDial('NO CH');setTimeout(()=>showDial(tuned>=0?String(SCOOP_CHANNELS[tuned].ch):'---'),700);}
}
function toggleMute(){muted=!muted;ytCmd(muted?'mute':'unMute');const v=document.getElementById('scoop-archive');if(v)v.muted=muted;$('#ch-mute').text(muted?'SOUND':'MUTE').toggleClass('lit',muted);}
function togglePower(){
powered=!powered;
$('#ch-power').toggleClass('lit',!powered).text(powered?'POWER':'ON');
if(!powered){
clearTimeout(zapTimer);
$('#scoop-screen').attr('src','about:blank');stopArc();
$('#static-fx').addClass('on hold');
$('#osd-channel').text('OFF');$('#osd-station').text('PRESS POWER');$('#osd-show').text('');
$('#card-title').text('Set is off');$('#card-desc').text('Press POWER or enter a channel.');
showDial('OFF');syncGuide();
}else if(tuned>=0)tune(tuned);
else{$('#static-fx').removeClass('on hold');$('#osd-channel').text('NO SIGNAL');$('#osd-station').text('');$('#osd-show').text('');showDial('---');}
}
$('#scoop-screen').off('load.scoop').on('load.scoop',function(){armYt();});
$('#scoop-archive').off('ended.scoop').on('ended.scoop',function(){advance();});if(!window.__scoopYt){window.__scoopYt=1;window.addEventListener('message',function(ev){if(!arcKey||Date.now()<ytArm)return;let d=ev.data;if(typeof d==='string'){try{d=JSON.parse(d);}catch(e){return;}}if(!d||typeof d!=='object')return;const st=d.event==='onStateChange'?d.info:(d.info&&typeof d.info.playerState==='number'?d.info.playerState:null);if(st!==0)return;const item=arcList[arcEp];if(!item||!item.yt)return;advance();});}
$('#scoop-remote').off('click.scoop').on('click.scoop','[data-d]',function(){pushDigit(this.getAttribute('data-d'));});
$('#ch-prev').off('click.scoop').on('click.scoop',()=>step(-1));
$('#ch-next').off('click.scoop').on('click.scoop',()=>step(1));
$('#ch-last').off('click.scoop').on('click.scoop',()=>{if(prev>=0)tune(prev);});
$('#ch-enter').off('click.scoop').on('click.scoop',goDial);
$('#ch-mute').off('click.scoop').on('click.scoop',toggleMute);
function shuffleChannel(){
if(!powered||tuned<0)return;
const c=SCOOP_CHANNELS[tuned],tokens=stationTokens(c);
if(!tokens.length){zap('LIVE');setTimeout(function(){if(tuned>=0)$('#osd-channel').text('CH '+SCOOP_CHANNELS[tuned].ch);},700);return;}
const key=tokens.join('|');
try{localStorage.removeItem('scooptv-mix-'+key);localStorage.removeItem('scooptv-arc-'+key);localStorage.setItem('scooptv-force-'+key,'1');}catch(e){}
playMix(tokens,0,false);
zap('SHUFFLE');
setTimeout(function(){if(tuned>=0)$('#osd-channel').text('CH '+SCOOP_CHANNELS[tuned].ch);},700);
}
function favChannel(){
if(!powered||tuned<0)return;
const n=SCOOP_CHANNELS[tuned].ch,at=favs.indexOf(n);
if(at<0){favs.push(n);try{localStorage.setItem('scooptv-favs',JSON.stringify(favs));}catch(e){}zap('FAV');setTimeout(function(){if(tuned>=0)$('#osd-channel').text('CH '+SCOOP_CHANNELS[tuned].ch);},700);syncGuide();return;}
if(favTimer){clearTimeout(favTimer);favTimer=0;favs.splice(at,1);try{localStorage.setItem('scooptv-favs',JSON.stringify(favs));}catch(e){}zap('CLEAR');setTimeout(function(){if(tuned>=0)$('#osd-channel').text('CH '+SCOOP_CHANNELS[tuned].ch);},700);syncGuide();return;}
favTimer=setTimeout(function(){favTimer=0;if(favs.length<2){zap('FAV');setTimeout(function(){if(tuned>=0)$('#osd-channel').text('CH '+SCOOP_CHANNELS[tuned].ch);},700);return;}const nxt=favs[(at+1)%favs.length];const i=SCOOP_CHANNELS.findIndex(function(c){return c.ch===nxt;});if(i>=0)tune(i);},320);
}
function surfChannel(){
if(!powered)return;
let i=Math.floor(Math.random()*SCOOP_CHANNELS.length);
if(SCOOP_CHANNELS.length>1&&i===tuned)i=(i+1)%SCOOP_CHANNELS.length;
tune(i);
}
$('#ch-power').off('click.scoop').on('click.scoop',togglePower);
$('#ch-shuffle').off('click.scoop').on('click.scoop',shuffleChannel);
$('#ch-fav').off('click.scoop').on('click.scoop',favChannel);
$('#ch-surf').off('click.scoop').on('click.scoop',surfChannel);
$(document).off('click.scoop keydown.scoop','.ch-row').on('click.scoop keydown.scoop','.ch-row',function(e){
if(e.type==='click'||e.which===13||e.which===32){e.preventDefault();if(e.type==='keydown')$(this).trigger('click');else tune(Number($(this).attr('data-i')));}
});
$(document).off('keydown.scoopnav').on('keydown.scoopnav',function(e){
if($(e.target).is('input,textarea,select,[contenteditable]'))return;
if(e.which===27){dial='';showDial(tuned>=0?String(SCOOP_CHANNELS[tuned].ch):'---');return;}
const digit=e.which>=48&&e.which<=57?e.which-48:e.which>=96&&e.which<=105?e.which-96:-1;
if(digit>=0){e.preventDefault();pushDigit(String(digit));return;}
if(e.which===38||e.which===40){e.preventDefault();step(e.which===38?-1:1);}
else if(e.which===13){e.preventDefault();goDial();}
});
ensureTitles();
if(tuned>=0)tune(tuned);else syncGuide();
}
$(document).ready(bootScoopTV);
