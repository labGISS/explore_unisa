import React, { useRef, useEffect, useState, useContext  } from "react";
import {GeoJSON, MapContainer, Marker, Polyline, Popup, TileLayer, useMapEvents} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';
import { createControlComponent } from "@react-leaflet/core";
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import gh from 'graphhopper-js-api-client';
import {Button, colors} from "@mui/material";
import Sidebar from'../src/components/sidebar/sidebar.jsx'

var myGeo = {
    "type": "FeatureCollection",
    "name": "EdificiCentro",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "id": 328, "Nome": "F3", "Tipologia": null, "Note": null, "Area": 1086 }, "geometry": { "type": "Point", "coordinates": [ 14.78919520612815929894, 40.77509008560196690496 ] } },
        { "type": "Feature", "properties": { "id": 190, "Nome": "H", "Tipologia": null, "Note": null, "Area": 613 }, "geometry": { "type": "Point", "coordinates": [ 14.78874825710092366648, 40.77577309706622799013 ] } },
        { "type": "Feature", "properties": { "id": 150, "Nome": "F2", "Tipologia": null, "Note": null, "Area": 2258 }, "geometry": { "type": "Point", "coordinates": [ 14.78969962861221176809, 40.77447251376911907528 ] } },
        { "type": "Feature", "properties": { "id": 387, "Nome": "F1", "Tipologia": null, "Note": null, "Area": 1603 }, "geometry": { "type": "Point", "coordinates": [ 14.78890751521025492821, 40.77360546040973332538 ] } },
        { "type": "Feature", "properties": { "id": 338, "Nome": "F1", "Tipologia": null, "Note": null, "Area": 1287 }, "geometry": { "type": "Point", "coordinates": [ 14.7901208857104915495, 40.77283974681102307613 ] } },
        { "type": "Feature", "properties": { "id": 242, "Nome": "Biblioteca Scientifica", "Tipologia": null, "Note": null, "Area": 1849 }, "geometry": { "type": "Point", "coordinates": [ 14.78876654289841674483, 40.77244761076013190859 ] } },
        { "type": "Feature", "properties": { "id": 145, "Nome": "Osservatorio dell'Appennino meridionale", "Tipologia": null, "Note": null, "Area": 263 }, "geometry": { "type": "Point", "coordinates": [ 14.78646805571764666354, 40.77377967380891021776 ] } },
        { "type": "Feature", "properties": { "id": 188, "Nome": "Osservatorio dell'Appennino Meridionale 2", "Tipologia": null, "Note": null, "Area": 265 }, "geometry": { "type": "Point", "coordinates": [ 14.78649198478192516859, 40.7735733051929969406 ] } },
        { "type": "Feature", "properties": { "id": 12, "Nome": "I1", "Tipologia": null, "Note": null, "Area": 999 }, "geometry": { "type": "Point", "coordinates": [ 14.7869456428769208145, 40.77624990970723928285 ] } },
        { "type": "Feature", "properties": { "id": 146, "Nome": "E2", "Tipologia": null, "Note": null, "Area": 1097 }, "geometry": { "type": "Point", "coordinates": [ 14.79157476053391562232, 40.7721537179010411478 ] } },
        { "type": "Feature", "properties": { "id": 158, "Nome": "D3", "Tipologia": null, "Note": null, "Area": 1557 }, "geometry": { "type": "Point", "coordinates": [ 14.7907602235147130898, 40.77164374552936010332 ] } },
        { "type": "Feature", "properties": { "id": 309, "Nome": "D2", "Tipologia": null, "Note": null, "Area": 1533 }, "geometry": { "type": "Point", "coordinates": [ 14.79136080665239916243, 40.77101082349663130344 ] } },
        { "type": "Feature", "properties": { "id": 197, "Nome": "B2", "Tipologia": null, "Note": null, "Area": 1817 }, "geometry": { "type": "Point", "coordinates": [ 14.79260730939385126703, 40.77005927300695731219 ] } },
        { "type": "Feature", "properties": { "id": 265, "Nome": "A1", "Tipologia": null, "Note": null, "Area": 4138 }, "geometry": { "type": "Point", "coordinates": [ 14.79189096575815476342, 40.76875903433099068707 ] } },
        { "type": "Feature", "properties": { "id": 307, "Nome": "B1", "Tipologia": null, "Note": null, "Area": 1620 }, "geometry": { "type": "Point", "coordinates": [ 14.79329604747695192657, 40.7695132021273849432 ] } },
        { "type": "Feature", "properties": { "id": 279, "Nome": "A2", "Tipologia": null, "Note": null, "Area": 1791 }, "geometry": { "type": "Point", "coordinates": [ 14.79229220089155205642, 40.76954622263418315242 ] } },
        { "type": "Feature", "properties": { "id": 161, "Nome": "C1", "Tipologia": null, "Note": null, "Area": 1158 }, "geometry": { "type": "Point", "coordinates": [ 14.7936086342154009543, 40.77069901882289570949 ] } },
        { "type": "Feature", "properties": { "id": 148, "Nome": "C2", "Tipologia": null, "Note": null, "Area": 1318 }, "geometry": { "type": "Point", "coordinates": [ 14.79293165134683185613, 40.77165623319163501037 ] } },
        { "type": "Feature", "properties": { "id": 92, "Nome": "D1", "Tipologia": null, "Note": null, "Area": 1091 }, "geometry": { "type": "Point", "coordinates": [ 14.79215827971450103462, 40.77135643353795302346 ] } },
        { "type": "Feature", "properties": { "id": 361, "Nome": "Piscina", "Tipologia": null, "Note": null, "Area": 2126 }, "geometry": { "type": "Point", "coordinates": [ 14.7872919852244724126, 40.77213636621379322378 ] } },
        { "type": "Feature", "properties": { "id": 397, "Nome": "Laboratorio", "Tipologia": null, "Note": null, "Area": 1498 }, "geometry": { "type": "Point", "coordinates": [ 14.79010553660393689768, 40.77066369993937655636 ] } },
        { "type": "Feature", "properties": { "id": 159, "Nome": "Laboratorio", "Tipologia": null, "Note": null, "Area": 817 }, "geometry": { "type": "Point", "coordinates": [ 14.78972178577400597987, 40.7703632319220830027 ] } },
        { "type": "Feature", "properties": { "id": 385, "Nome": "Laboratorio", "Tipologia": null, "Note": null, "Area": 437 }, "geometry": { "type": "Point", "coordinates": [ 14.78916028170710283973, 40.77019205368524978894 ] } },
        { "type": "Feature", "properties": { "id": 162, "Nome": "Laboratorio", "Tipologia": null, "Note": null, "Area": 924 }, "geometry": { "type": "Point", "coordinates": [ 14.78886815516736241705, 40.77056682280723975964 ] } },
        { "type": "Feature", "properties": { "id": 68, "Nome": "Laboratorio", "Tipologia": null, "Note": null, "Area": 408 }, "geometry": { "type": "Point", "coordinates": [ 14.78944370571609745468, 40.77074794310669858532 ] } },
        { "type": "Feature", "properties": { "id": 16, "Nome": "Mensa", "Tipologia": null, "Note": null, "Area": 5726 }, "geometry": { "type": "Point", "coordinates": [ 14.7938270771659681202, 40.77293013531794940718 ] } },
        { "type": "Feature", "properties": { "id": 104, "Nome": "Chiostro della pace", "Tipologia": null, "Note": null, "Area": 796 }, "geometry": { "type": "Point", "coordinates": [ 14.79263629944599678367, 40.76909044696130735019 ] } },
        { "type": "Feature", "properties": { "id": 82, "Nome": "D", "Tipologia": null, "Note": null, "Area": 3415 }, "geometry": { "type": "Point", "coordinates": [ 14.79142567162697297078, 40.77157402593236668054 ] } },
        { "type": "Feature", "properties": { "id": 56, "Nome": "Edisu", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.79427646477684277215, 40.77061448940684584841 ] } },
        { "type": "Feature", "properties": { "id": 114, "Nome": "Residenze", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.79533514614199418702, 40.77059811912628362052 ] } },
        { "type": "Feature", "properties": { "id": 78, "Nome": "Residenze", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.79527639377734082871, 40.77110725445705696757 ] } },
        { "type": "Feature", "properties": { "id": 351, "Nome": "Residenze", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.7953556401479531246, 40.77159828410427167 ] } },
        { "type": "Feature", "properties": { "id": 157, "Nome": "Residenze", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.79511745068348105292, 40.77183131679232985789 ] } },
        { "type": "Feature", "properties": { "id": 83, "Nome": "Presidio Sanitario e Poste", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.78956586730313027545, 40.76912768686313626176 ] } },
        { "type": "Feature", "properties": { "id": 380, "Nome": "Unicredit Bank", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.78954727985188277728, 40.76933221887708214126 ] } },
        { "type": "Feature", "properties": { "id": 353, "Nome": "F", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.78890116417643518787, 40.7745262417276634892 ] } },
        { "type": "Feature", "properties": { "id": 268, "Nome": "E", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.79070310936883636543, 40.77292152051754925424 ] } },
        { "type": "Feature", "properties": { "id": 273, "Nome": "C", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.79267097429085708882, 40.77137010629990498956 ] } },
        { "type": "Feature", "properties": { "id": 196, "Nome": "B", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.79335043166127583447, 40.77008352182066630576 ] } },
        { "type": "Feature", "properties": { "id": 352, "Nome": "Residenze", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.79476163087396045626, 40.77222284621259973392 ] } },
        { "type": "Feature", "properties": { "id": 395, "Nome": "Laboratorio Modelli", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.78997884209623236984, 40.77307006712704406937 ] } },
        { "type": "Feature", "properties": { "id": 278, "Nome": "Masseria", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.79093995342591405517, 40.77477013848975673227 ] } },
        { "type": "Feature", "properties": { "id": 195, "Nome": "Masseria", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.79078806541130752805, 40.7746917181850321299 ] } },
        { "type": "Feature", "properties": { "id": 266, "Nome": "Bibllioteca umanistica", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.7909291629075294594, 40.76906249111235069904 ] } }
    ]
}

var piazze = {
    "type": "FeatureCollection",
    "name": "piazzeUnisa",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "id": 130, "Nome": "Piazza del Sapere", "Area": 6470, "Attrazioni": "Meridiana del Campus, Fontana" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 14.792416698665365, 40.770978550950403 ], [ 14.792464426005443, 40.770977452313545 ], [ 14.792491698771201, 40.770969981582461 ], [ 14.792521872895016, 40.770959874121417 ], [ 14.792540441586597, 40.77094932720393 ], [ 14.792566553809124, 40.770930870094261 ], [ 14.792714523070147, 40.770765634788937 ], [ 14.79276500670038, 40.770668954366535 ], [ 14.792754561811364, 40.770567000314188 ], [ 14.792715103341759, 40.770502839494135 ], [ 14.792073903210667, 40.770217191255711 ], [ 14.792228255459419, 40.770010205380295 ], [ 14.792126127655736, 40.769970104538999 ], [ 14.791928545171896, 40.770046021453695 ], [ 14.791855430948804, 40.770126003290265 ], [ 14.791795082701174, 40.770100075123018 ], [ 14.791724289564529, 40.770196316913221 ], [ 14.791634347464694, 40.770189285554274 ], [ 14.791374966054194, 40.770247733702909 ], [ 14.791296629386594, 40.770366827139902 ], [ 14.791962926264903, 40.770644015189305 ], [ 14.791867616652658, 40.770758933082384 ], [ 14.792416698665365, 40.770978550950403 ] ] ] ] } },
        { "type": "Feature", "properties": { "id": 336, "Nome": "Piazza delle Scienze Matematiche Fisiche e Naturali", "Area": 1644, "Attrazioni": null }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 14.789542033100275, 40.774863436981391 ], [ 14.789565098896851, 40.774833775514352 ], [ 14.7895233193408, 40.774816198342464 ], [ 14.789617903613529, 40.774683929974827 ], [ 14.789315001832147, 40.774556495085768 ], [ 14.789223899189086, 40.774520901158141 ], [ 14.78915020469438, 40.774615598538901 ], [ 14.789172545151438, 40.774625046297878 ], [ 14.789105886450026, 40.77471458022633 ], [ 14.789083110789258, 40.774704583192452 ], [ 14.788983666741778, 40.774840037380727 ], [ 14.789425543574202, 40.775024377673411 ], [ 14.789542033100275, 40.774863436981391 ] ] ] ] } },
        { "type": "Feature", "properties": { "id": 54, "Nome": "Piazza Renato Cacciappoli", "Area": 354, "Attrazioni": null }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 14.789543121109567, 40.774864535553952 ], [ 14.789687753808821, 40.774924627447412 ], [ 14.789805621479982, 40.774763466798866 ], [ 14.789617976147497, 40.774684039832358 ], [ 14.789525042022005, 40.774815669654167 ], [ 14.789566241306515, 40.774833905970091 ], [ 14.789543121109567, 40.774864535553952 ] ] ] ] } },
        { "type": "Feature", "properties": { "id": 228, "Nome": "Piazza De Rosa", "Area": 3424, "Attrazioni": null }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 14.791339841491036, 40.769311588948376 ], [ 14.791394532090532, 40.769346856066505 ], [ 14.791439067936816, 40.769360369630171 ], [ 14.791318371441353, 40.76948122251634 ], [ 14.791309667367161, 40.769555931463309 ], [ 14.791327655787159, 40.769619653734075 ], [ 14.791390325121343, 40.769673707750329 ], [ 14.791463439344554, 40.769704030715793 ], [ 14.791548739271636, 40.76971325944168 ], [ 14.791625335124525, 40.76970490964213 ], [ 14.791686843915484, 40.769673268286958 ], [ 14.791718758854188, 40.769656129213274 ], [ 14.791827269645788, 40.769522532179764 ], [ 14.791851641053524, 40.769530442537913 ], [ 14.792070983723166, 40.769217543208569 ], [ 14.792148740119279, 40.769249184780755 ], [ 14.792191680218629, 40.769199085617842 ], [ 14.79153365220971, 40.768937163063498 ], [ 14.791493033196813, 40.768999567524155 ], [ 14.791559184160674, 40.769025056653192 ], [ 14.791339841491036, 40.769311588948376 ] ] ] ] } },
        { "type": "Feature", "properties": { "id": 124, "Nome": "Piazza della Scienza e della Tecnica \"Giulio Natta\"", "Area": 2802, "Attrazioni": null }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 14.789849994125147, 40.773662157571458 ], [ 14.789931812422552, 40.773558450361072 ], [ 14.789999123929636, 40.773585695491349 ], [ 14.790238776105724, 40.773248646077874 ], [ 14.789656183406466, 40.773013984850792 ], [ 14.78944148290973, 40.773321593032023 ], [ 14.789561018861964, 40.773381356742007 ], [ 14.789505312787135, 40.773465728946945 ], [ 14.789477459749721, 40.773453424673725 ], [ 14.78945192779876, 40.773490776924646 ], [ 14.789849994125147, 40.773662157571458 ] ] ] ] } },
        { "type": "Feature", "properties": { "id": 47, "Nome": "Piazza Renato Maria Capocelli", "Area": 916, "Attrazioni": null }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 14.788976395212062, 40.775111624668654 ], [ 14.789025428163344, 40.775048566806532 ], [ 14.788889064334334, 40.774991221451373 ], [ 14.788865273198208, 40.775027254553876 ], [ 14.788763725665966, 40.774986607455119 ], [ 14.788589934317935, 40.775224777128315 ], [ 14.788771704400641, 40.775302775313556 ], [ 14.788815224771604, 40.775248286450129 ], [ 14.788968126341576, 40.775313980679122 ], [ 14.789084470799946, 40.775157984243393 ], [ 14.788976395212062, 40.775111624668654 ] ] ] ] } },
        { "type": "Feature", "properties": { "id": 165, "Nome": "Piazza della Politica", "Area": 297, "Attrazioni": null }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 14.79192315952977, 40.771088325273865 ], [ 14.792051979827814, 40.771139741373403 ], [ 14.792187183113599, 40.770952973300233 ], [ 14.79205488118588, 40.770898041414107 ], [ 14.79192315952977, 40.771088325273865 ] ] ] ] } },
        { "type": "Feature", "properties": { "id": 108, "Nome": "Piazza della Costituzione Italiana", "Area": 550, "Attrazioni": null }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 14.792737280602529, 40.769892560147177 ], [ 14.79298331576636, 40.770001546614111 ], [ 14.793121420410204, 40.769826640826388 ], [ 14.7928719036167, 40.769715017294061 ], [ 14.792737280602529, 40.769892560147177 ] ] ] ] } },
        { "type": "Feature", "properties": { "id": 334, "Nome": "Piazza Pomponio Leto", "Area": 473, "Attrazioni": null }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 14.791713246273826, 40.771434064818472 ], [ 14.791526979086116, 40.771697076155696 ], [ 14.791683652421574, 40.771757720226098 ], [ 14.79173239523705, 40.771752446830867 ], [ 14.791818565571552, 40.771478229702225 ], [ 14.791713246273826, 40.771434064818472 ] ] ] ] } },
        { "type": "Feature", "properties": { "id": 185, "Nome": "Piazza dell'Economia", "Area": 236, "Attrazioni": null }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 14.792874369771047, 40.771372761274463 ], [ 14.793002754865382, 40.771425825098113 ], [ 14.793117648644719, 40.771287397643192 ], [ 14.792980994679905, 40.771226093963868 ], [ 14.792874369771047, 40.771372761274463 ] ] ] ] } },
        { "type": "Feature", "properties": { "id": 329, "Nome": "Piazza Primo Levi", "Area": 535, "Attrazioni": null }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 14.788924025698988, 40.77273691654846 ], [ 14.789042401107997, 40.772781739730419 ], [ 14.789309616185689, 40.772398434631803 ], [ 14.78919385199894, 40.772352952022771 ], [ 14.788924025698988, 40.77273691654846 ] ] ] ] } },
        { "type": "Feature", "properties": { "id": 291, "Nome": "Piazza dell'Industria", "Area": 448, "Attrazioni": null }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 14.789620351634353, 40.772828210791552 ], [ 14.789679539338854, 40.77285259984609 ], [ 14.789798785155286, 40.772674625458578 ], [ 14.789439306891156, 40.772523676437764 ], [ 14.789620351634353, 40.772828210791552 ] ] ] ] } },
        { "type": "Feature", "properties": { "id": 53, "Nome": "Piazza delle Costruzioni", "Area": 305, "Attrazioni": null }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 14.790911601040742, 40.772906980813865 ], [ 14.791116146784253, 40.772990035296907 ], [ 14.791205363544721, 40.772868090186904 ], [ 14.791002123412339, 40.772783717223042 ], [ 14.790911601040742, 40.772906980813865 ] ] ] ] } },
        { "type": "Feature", "properties": { "id": 353, "Nome": "Piazza Mario Napoli", "Area": 492, "Attrazioni": null }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 14.792278575892599, 40.772201343101173 ], [ 14.792380848764351, 40.772245177890142 ], [ 14.79233297635629, 40.772317027331326 ], [ 14.792463537469171, 40.772374374994662 ], [ 14.792614117952704, 40.77217827214799 ], [ 14.792375191116131, 40.772075111930789 ], [ 14.792278575892599, 40.772201343101173 ] ] ] ] } },
        { "type": "Feature", "properties": { "id": 46, "Nome": "Piazza della Società", "Area": 523, "Attrazioni": null }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 14.793397484629979, 40.771094917083715 ], [ 14.793535009002218, 40.770911664526089 ], [ 14.793402707074495, 40.770852338050219 ], [ 14.793392262185467, 40.770868817632156 ], [ 14.793286942887743, 40.770823333976061 ], [ 14.793160733811959, 40.770994062321378 ], [ 14.793397484629979, 40.771094917083715 ] ] ] ] } }
    ]
}

var bus = {
    "type": "FeatureCollection",
        "name": "busUnisa",
        "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "id": null }, "geometry": { "type": "Point", "coordinates": [ 14.793393186993432, 40.773411938932298 ] } },
        { "type": "Feature", "properties": { "id": null }, "geometry": { "type": "Point", "coordinates": [ 14.793299182992158, 40.773742835407283 ] } },
        { "type": "Feature", "properties": { "id": null }, "geometry": { "type": "Point", "coordinates": [ 14.793530711365666, 40.773848300072906 ] } },
        { "type": "Feature", "properties": { "id": null }, "geometry": { "type": "Point", "coordinates": [ 14.794250538301348, 40.771371813705905 ] } },
        { "type": "Feature", "properties": { "id": null }, "geometry": { "type": "Point", "coordinates": [ 14.792977132247062, 40.767112067603705 ] } }
    ]
}

var strade = {
    "type": "FeatureCollection",
    "name": "percorsoPiedi",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "id": null }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ 14.791249047114448, 40.770745200075019 ], [ 14.790057169223713, 40.772339528334101 ] ] ] } },
        { "type": "Feature", "properties": { "id": null }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ 14.791249627386058, 40.770740366055762 ], [ 14.791493341463037, 40.770842319842117 ], [ 14.791463167339222, 40.77088450757001 ], [ 14.791672065119485, 40.770975914221914 ], [ 14.791600111439616, 40.771072594197683 ], [ 14.791618680131197, 40.771081383279416 ], [ 14.791795082701199, 40.770842319842117 ], [ 14.79206664981554, 40.77095306257074 ], [ 14.791880962899748, 40.771188609982907 ], [ 14.791535121019091, 40.771701889511142 ], [ 14.791690633811067, 40.771761654677952 ] ] ] } }
    ]
}


let count = 0;


function SimpleMap(){

    const mapRef = useRef(null);
    const latitude = 40.7738;
    const longitude = 14.8003;
    const position = [40.7738, 14.8003]

    const [route, setRoute] = useState([]);
    const localizeClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log("Latitude:", position.coords.latitude);
                    console.log("Longitude:", position.coords.longitude);
                    const map = mapRef.current;
                    L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
                    map.flyTo([position.coords.latitude, position.coords.longitude]);


                },
                (error) => {
                    console.error("Error getting geolocation:", error.message);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    };
    let dentro=false;
    let busLayer;
    const handleWaypoints = (mar1,mar2) => {
        const lat1 = mar1.lat.toFixed(6);  // Limita a 6 decimali
        const lng1 = mar1.lng.toFixed(6);
        const lat2 = mar2.lat.toFixed(6);
        const lng2 = mar2.lng.toFixed(6);
        const apiKey = '5b3ce3597851110001cf6248280102de693842a9afa75ce9c91c78df';
        const url = `https://api.openrouteservice.org/v2/directions/foot-walking?api_key=5b3ce3597851110001cf6248280102de693842a9afa75ce9c91c78df&start=${lng1},${lat1}&end=${lng2},${lat2}&language=it`;
         console.log("STAMPA",lat1,lng1,lat2,lng2);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log('Data from API:', data);
                const coordinates = data.features[0].geometry.coordinates;
                const instructions = data.features[0].properties.segments[0].steps;
                console.log('Istruction :', instructions);
                const routeCoordinates = coordinates.map((coord) => [coord[1], coord[0]]);
                // Rimuovi il percorso esistente, se presente
                if (mapRef.current) {
                    const map = mapRef.current;
                    map.eachLayer(layer => {
                        console.log(layer);
                        if (layer instanceof L.Polyline) {
                            map.removeLayer(layer);

                            map.eachLayer(layer => {
                                if(layer instanceof  L.Marker && !dentro){

                                    console.log(markerArray);
                                    setMarkerArray((prevArray) => {

                                        const newPositions = prevArray.slice(1);
                                        markerArray[0].remove();
                                        return newPositions;
                                    });

                                    dentro=true;
                                }
                            });
                            dentro=false;
                        }

                    });
                // }
                //
                // // Aggiungi il nuovo percorso alla mappa
                    L.polyline(routeCoordinates, { color: 'blue' }).addTo(map);

                    // // Aggiungi popup con istruzioni
                    const instructionsDiv = document.getElementById('instructionsDiv');
                    instructionsDiv.innerHTML = ''; // Pulisci il contenuto precedente
                    instructions.forEach((instruction, index) => {
                        const { location, instruction: text } = instruction;
                        instructionsDiv.innerHTML += `<p>Step ${index + 1}: ${text}</p>`;
                    });

                    L.setOptions({language: 'it'})


                }

                setRoute(routeCoordinates);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const deleteWaypoints = () => {
                if (mapRef.current) {
                    const map = mapRef.current;
                    map.eachLayer(layer => {
                        if (layer instanceof L.Polyline) {
                            layer.remove(layer);

                        }
                        if (layer instanceof L.Marker) {
                            layer.remove(layer);
                            count = 0;
                        }

                    });
                }
                setMarkerArray([]);
                setMarkerPositions([]);
    };
    // Dichiarazione di uno stato per tenere traccia del primo marker
    const [markerArray, setMarkerArray] = useState([]);
    const [markerPositions, setMarkerPositions] = useState([]);

    useEffect(() => {
        if (count === 2) {
                // Ora markerPositions è stato aggiornato
                const firstTwoMarkers = markerPositions.slice(0, 2);
                console.log('Coordinate dei primi due marker:', firstTwoMarkers[0], firstTwoMarkers[1]);
                handleWaypoints(firstTwoMarkers[0], firstTwoMarkers[1]);
                // Rimuovi il primo elemento dall'array markerPositions
                setMarkerPositions((prevPositions) => {
                    const newPositions = prevPositions.slice(1);  // Utilizzare slice per ottenere una porzione escludendo il primo elemento
                    return newPositions;
                });


            console.log(' MARKER DOPO:', markerArray);

            count=1;
            }

    }, [count, markerPositions]);
    const handleMapClick = (e) => {
       if (count < 2) {
            if (mapRef.current) {
                const map = mapRef.current;
                const marker = L.marker(e.latlng)
                marker.addTo(map);
                setMarkerPositions((prevPositions) => [...prevPositions, e.latlng]);
                setMarkerArray((prevArray) => [...prevArray, marker]);
                count++;
            }
           console.log(' MARKER:', markerArray);

       }

    };
    const [showGeoJSONLayer1, setShowGeoJSONLayer1] = useState(false);
    const [showGeoJSONLayer2, setShowGeoJSONLayer2] = useState(false);
    const [showGeoJSONLayer3, setShowGeoJSONLayer3] = useState(false);
    const handleCheckboxChange1 = () => {
        setShowGeoJSONLayer1(!showGeoJSONLayer1);
    };
    const handleCheckboxChange2 = () => {
        setShowGeoJSONLayer2(!showGeoJSONLayer2);
    };
    const handleCheckboxChange3 = () => {
        setShowGeoJSONLayer3(!showGeoJSONLayer3);
    };
    return (

        <div style={{ height: '100vh', width: '100%'}} className="SimpleMap">
            <Sidebar></Sidebar>
            <div style={{ height: 'calc(100vh - 64px)', width: '100%', marginTop:'64px'}}>
            <MapContainer center={[latitude, longitude]}
                          zoom={13} ref={mapRef} style={{height: 'calc(100vh - 64px)', width: "100vw"}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {showGeoJSONLayer1 && <GeoJSON data={piazze} style={(feature) => ({ color: 'yellow' })} />}
                {showGeoJSONLayer2 && <GeoJSON
                    data={bus}
                    pointToLayer={(feature, latlng) => {
                        const marker = L.circleMarker(latlng, {
                            radius: 8,
                            fillColor: 'red',  // Cambia il colore di riempimento del marker
                            color: 'white',    // Cambia il colore del bordo del marker
                            weight: 2,
                            opacity: 1,
                            fillOpacity: 0.8,
                        });
                        if (feature.properties && feature.properties.Nome) {
                            marker.bindPopup(feature.properties.Nome);
                        }

                        return marker;
                    }}
                />}
                {showGeoJSONLayer3 && <GeoJSON
                    data={myGeo}
                    pointToLayer={(feature, latlng) => {
                        const marker = L.circleMarker(latlng, {
                            radius: 8,
                            fillColor: 'red',  // Cambia il colore di riempimento del marker
                            color: 'white',    // Cambia il colore del bordo del marker
                            weight: 2,
                            opacity: 1,
                            fillOpacity: 0.8,
                        });
                        if (feature.properties && feature.properties.Nome) {
                            marker.bindPopup(feature.properties.Nome);
                        }

                        return marker;
                    }}
                />}
                <Marker position={position}></Marker>
                <MapEventsHandler handleMapClick={handleMapClick} />
            </MapContainer>
            </div>
            <div>
                <label>
                    Mostra Piazze
                    <input type="checkbox" checked={showGeoJSONLayer1} onChange={handleCheckboxChange1} />
                </label>
                <label>
                    Mostra Bus
                    <input type="checkbox" checked={showGeoJSONLayer2} onChange={handleCheckboxChange2} />
                </label>
                    <label>
                    Mostra Edifici
                    <input type="checkbox" checked={showGeoJSONLayer3} onChange={handleCheckboxChange3} />
                    </label>
            </div>
            {/*<Button onClick={handleWaypoints} type="primary">*/}
            {/*    Calcola Percorso*/}
            {/*</Button>*/}
            <Button onClick={deleteWaypoints} type="primary">
                Elimina Percorso
            </Button>
            <Button onClick={localizeClick} type="primary">
                Localizzami
            </Button>
            <div id="instructionsDiv"></div>

        </div>

    );


}
const MapEventsHandler = ({ handleMapClick }) => {
    useMapEvents({
        click: (e) => handleMapClick(e),
    });
    return null;
};
export default SimpleMap;
