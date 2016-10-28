var data = [{
		id : 'aikataulurivit',
		header : '/Aikataulurivit/FeatureServer/0',
		description : 'Junien aikataulut, yksi rivi vastaa yhden junatapahtuman asemalla (Lähtö/saapuminen).',
		fields : [{
				name : 'OBJECTID',
				type : 'esriFieldTypeOID',
				nullable : false,
				description : 'ArcGis Onlinen antama ID'
			}, {
				name : 'RIVI_ID ',
				type : 'esriFieldTypeString',
				nullable : false,
				description : 'Tapahtuman ID Liikennetilanne palvelussa'
			}, {
				name : 'LIIKENPAIK ',
				type : 'esriFieldTypeString',
				nullable : false,
				description : 'Juna-aseman tunnus'
			}, {
				name : 'TAPAHTUMA',
				type : 'esriFieldTypeString',
				nullable : false,
				description : 'Tapahtuman tyyppi (LAHTO tai SAAPUMINEN)'
			}, {
				name : 'RAIDE',
				type : 'esriFieldTypeString',
				nullable : false,
				description : 'Juna-aseman raide'
			}, {
				name : 'AIKA_ENNUS',
				type : 'esriFieldTypeDate',
				nullable : true,
				description : 'Tapahtuman ennustettu aika'
			}, {
				name : 'AIKA_SUUNN ',
				type : 'esriFieldTypeDate',
				nullable : true,
				description : 'Tapatuman aikataulun mukainen suunniteltu aika'
			}, {
				name : 'AIKA_TOTEU',
				type : 'esriFieldTypeDate',
				nullable : true,
				description : 'Tapahtuman toteutettu aika'
			}, {
				name : 'POIKKEAMA',
				type : 'esriFieldTypeDate',
				nullable : false,
				description : 'suunniteltun tai ennustetun ja toteutetun ajan poikkeama'
			}, {
				name : 'PERUTTU',
				type : 'esriFieldTypeSmallInteger',
				nullable : false,
				description : 'Tieto onko kyseinen tapahtuma peruttu vai ei (0 = ei peruttu ja 1 = peruttu)'
			}, {
				name : 'JUNANRO',
				type : 'esriFieldTypeSmallInteger',
				nullable : false,
				description : 'Junan virallinen numero'
			}, {
				name : 'LAHIJUNA',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Onko juna lähijuna vai kaukojuna (0 = kaukojuna ja 1 = lähijuna)'
			}, {
				name : 'LAHTOASEMA_EXTRA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Junan toinen lähtöasema jos tämä muuttuu matkan aikana. (Esim. I ja P juna Helsinki – Lentoasema – Helsinki)'
			}, {
				name : 'PAATEASEMA_EXTRA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Junan toinen pääteasema jos tämä muuttuu matkan aikana. (Esim. I ja P juna Helsinki – Lentoasema – Helsinki)'
			}, {
				name : 'VARI',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Tapahtuman väritys Liikennetilanne palvelussa. (0 = peruttu, 1 = normaali, 2 = keltainen, 3 = punainen)'
			}, {
				name : 'geometry',
				type : 'Point',
				nullable : true,
				description : 'Tapahtumalla ei ole sijaintia. '
			}
		]
	}, {
		id : 'hairio_0',
		header : '/Hairio/FeatureServer/0',
		description : 'Pistemäiset tiehäiriöt tiedot ovat Häti –järjestelmän käyttämä InfoXML muodossa. Tietojen selitykset löytyvät mm. tästä: <a target="_blank" href="http://www.kalkati.net/content/ltk/data/TieliikenteenTiedot/LiikenneHairioInfo/LiikennehairioInfo_v5%200_fi_eng.doc">http://www.kalkati.net/content/ltk/data/TieliikenteenTiedot/LiikenneHairioInfo/LiikennehairioInfo_v5%200_fi_eng.doc</a>',
		fields : [{
				name : 'OBJECTID',
				type : 'esriFieldTypeOID',
				nullable : false,
				description : 'ArcGis Onlinen antama ID'
			}, {
				name : 'SNMID',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Liikennetilanteen yksilöivä tunnus. Liikennetilanne on tiettyyn paikkaan sidottu ja siinä voi olla useita vaiheita (tapahtumia). Esimerkiksi liikennetilanne voi olla onnettomuus tai ruuhka. Samasta tilanteesta voidaan tiedottaa useilla viesteillä. Tilanne muodostuu kaikista sitä kuvaavista tietolajeista.'
			}, {
				name : 'ERFID',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Liikennetapahtuman yksilöivä tunnus. Liikennetapahtuma on tietyssä paikassa tapahtuvan liikennetilanteen yksi vaihe. Esimerkiksi liikennetilanteen "ajoneuvon rikkoontuminen" vaiheita eli eri tapahtumia ovat "rikkoontunut ajoneuvo tienvarressa" ja "ajoneuvoa siirretään tienvarresta".'
			}, {
				name : 'TPI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'ELY-keskuksen nimi'
			}, {
				name : 'TRO1',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Häiriötilanteen alkupisteen (paikan) tierekisteriosoite. Numero [tienumero, tieosanumero, etäisyys tieosan alusta]'
			}, {
				name : 'TRO2',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Häiriötilanteen loppupisteen (paikan) tierekisteriosoite. Numero [tienumero, tieosanumero, etäisyys tieosan alusta]'
			}, {
				name : 'INP',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Ilmoitusaika. Järjestelmän generoima ilmoituksen tallennusaika. Muoto on "yyyyMMddHHmmss", esimerkiksi 20160606030000 = 06.06.2016 klo 03:00:00.'
			}, {
				name : 'SOT',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Asiakkaan luokka.'
			}, {
				name : 'CO1X',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Häiriötilanteen Alkupisteen koordinaatit. X koordinaatti.'
			}, {
				name : 'CO1Y',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Häiriötilanteen Alkupisteen koordinaatit. Y koordinaatti.'
			}, {
				name : 'CO2X',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Loppupisteen koordinaatit. Attribuutteina X koordinaatti.'
			}, {
				name : 'CO2Y',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Loppupisteen koordinaatit. Attribuutteina Y koordinaatti.'
			}, {
				name : 'ICOX',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Tiejaksosta muodostuvan paikannuspisteen (tyyppi L) X koordinaatti. Attribuutteina tiejakson määrittelevän janan X ja Y koordinaatit. Käytetään jos CO1:stä ja CO2:sta ei ole annettu.'
			}, {
				name : 'ICOY',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Tiejaksosta muodostuvan paikannuspisteen (tyyppi L) Y koordinaatti. Attribuutteina tiejakson määrittelevän janan X ja Y koordinaatit. Käytetään jos CO1:stä ja CO2:sta ei ole annettu.'
			}, {
				name : 'ARE',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Hallinnollisen alueen nimi, kun häiriötilanne koskee kuntaa, maakuntaa tai lääniä.'
			}, {
				name : 'ARE2',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Häiriötilanteen loppupisteen hallinnollisen alueen nimi, kun häiriötilanne ulottuu useamman kunnan, maakunnan tai läänin alueelle. HallinnollinenAlue tieto toimii alkupisteenä. '
			}, {
				name : 'RNO',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Tienumero, jolla häiriötilanne on. Kenttä ei käytössä katso ROAD_NR'
			}, {
				name : 'RNA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Tien virallinen tai yleisesti tunnettu nimi.'
			}, {
				name : 'LCOfCode',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Paikannustaulukosta saatava piste, jota käytetään määrittelemään häiriötilanteen sijainnin alkamispaikkaa.'
			}, {
				name : 'LCOsCode',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Paikannustaulukosta saatava piste, jota käytetään määrittelemään häiriötilanteen sijainnin päättymispaikkaa.'
			}, {
				name : 'LFNs',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Häiriötilanteen loppupisteen nimi.'
			}, {
				name : 'DSL',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Häiriötilanteen loppupaikan etäisyys Loppupisteestä. Käytetään määrittelemään tarkka häiriön vaikutusalue.'
			}, {
				name : 'DPL',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Häiriötilanteen alkupaikan etäisyys alkupisteestä. Käytetään määrittelemään tarkka häiriön vaikutusalue.'
			}, {
				name : 'SUP',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Tiedon lähettäjän tunnistekoodi.'
			}, {
				name : 'RDI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Häiriötilanteen vaikutussuunta. Koodien selitykset:\nN = negatiivinen\nP = positiivinen\nB = molempiin suuntiin\nU = ei tietoa'
			}, {
				name : 'STA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Aika, jolloin häiriön arvioidaan alkavan tai on ilmoitettu alkaneen. Muoto on "yyyyMMddHHmmssSS", esimerkiksi 20160606030000 = 06.06.2016 klo 03:00:00.'
			}, {
				name : 'STO',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Aika, jolloin häiriön arvioidaan loppuvan tai on ilmoitettu loppuneen. Muoto on "yyyyMMddHHmmss", esimerkiksi 20160606030000 = 06.06.2016 klo 03:00:00.'
			}, {
				name : 'DOP',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Loogisesti yhteenkuuluva luokka eri tyyppisiä liikennetietoja. Koodien selitykset:\nACC	Onnettomuus\nACT	Tapahtumat\nLOS	Palvelutaso\nMHZ	Liikkuva vaara/ este\nOHZ	Vaara / Este\nRMT	Tien kunnossapito/Tienrakennustyöt\nSHZ	Liukkaus / muu\nkuin lumesta johtuva\nRES	Liikennerajoitukset'
			}, {
				name : 'PHRNumber',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'PHRCode koodin arvo'
			}, {
				name : 'PHRCode',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Selite, jonka avulla kuvataan tarkemmin esimerkiksi häiriön syytä tai vaikutuksia. Kentän sisältämä koodi otetaan DATEX-standardin fraasilistasta, joka sisältää runsaasti eri fraaseja kuvaamaan eri asioita.'
			}, {
				name : 'PRVCode',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Tilanteen alkuaikan maakunnan koodi.'
			}, {
				name : 'SNA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'PRV2Code',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Tilanteen loppupaikan maakunnan koodi.'
			}, {
				name : 'SYMBOLOGY',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Liikennetilannepalvelun käyttämä ikonin numero'
			}, {
				name : 'PHRNumber2',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'PHRCode2 kentän koodin arvo'
			}, {
				name : 'PHRNumber3',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'PHRCode3 kentän koodin arvo'
			}, {
				name : 'PHRNumber4',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'PHRCode4 kentän koodin arvo'
			}, {
				name : 'PHRCode2',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Selite, jonka avulla kuvataan tarkemmin esimerkiksi häiriön syytä tai vaikutuksia. Kentän sisältämä koodi otetaan DATEX-standardin fraasilistasta, joka sisältää runsaasti eri fraaseja kuvaamaan eri asioita.'
			}, {
				name : 'PHRCode3',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Selite, jonka avulla kuvataan tarkemmin esimerkiksi häiriön syytä tai vaikutuksia. Kentän sisältämä koodi otetaan DATEX-standardin fraasilistasta, joka sisältää runsaasti eri fraaseja kuvaamaan eri asioita.'
			}, {
				name : 'PHRCode4',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Selite, jonka avulla kuvataan tarkemmin esimerkiksi häiriön syytä tai vaikutuksia. Kentän sisältämä koodi otetaan DATEX-standardin fraasilistasta, joka sisältää runsaasti eri fraaseja kuvaamaan eri asioita.'
			}, {
				name : 'AttUnits',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'ATTValues arvojen yksikkö'
			}, {
				name : 'AttSev',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : ''
			}, {
				name : 'TIT',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Tiedotetekstin otsikko.'
			}, {
				name : 'MES',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Tiedotetekstin seliteosuus. Yleinen vapaa kuvaus häiriötilanteesta.'
			}, {
				name : 'LFNf',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Häiriötilanteen alkupisteen nimi.'
			}, {
				name : 'LDT',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Paikan yleinen kuvaus.'
			}, {
				name : 'TIM',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Häiriön keston kuvaus tekstinä.'
			}, {
				name : 'ATTCodes',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Lisätiedot, joilla kuvataan Datex-koodeina häiriön kestoa, paikkaa ja vaikutuksia. Annetaan niin monta kuin on lisätietojakin.\n\nDatex-koodien selitykset:\nLEN = vaikutusalueen pituus\nDUR = kesto\nNVE = ajoneuvojen lukumäärä\nHEI = ajoneuvon suurin korkeus\nWID = ajoneuvon suurin leveys\nVLN = ajoneuvon suurin pituus\nWEI = ajoneuvon suurin kokonaispaino\nSEV = haitta-aste\nDAD = kiertotie\nSAD = lisämääre\nSMP = nopeusrajoitus\nURG = viestin kiireellisyys\nEND = Tilanne ohi (arvot Y/N)'
			}, {
				name : 'ATTValues',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'ATTCodes kentän koodien arvot samassa järjestyksessä'
			}, {
				name : 'DIV',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Kiertotien kuvaus tekstinä.'
			}, {
				name : 'ROAD_NR',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Tienumero, jolla häiriötilanne on.'
			}, {
				name : 'geometry',
				type : 'Point',
				nullable : true,
				description : 'Pistemmäiset häiriöt'
			}
		]
	}, {
		id : 'hairio_1',
		header : '/Hairio/FeatureServer/1',
		description : 'Viivamaiset tiehäiriöt tiedot ovat Häti –järjestelmän käyttämä InfoXML muodossa. Katso /Hairio/FeatureServer/0 –kohta.',
		fields : [{
				name : 'OBJECTID',
				type : 'esriFieldTypeOID',
				nullable : false,
				description : 'ArcGis Onlinen antama ID'
			}, {
				name : 'SNMID',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Liikennetilanteen yksilöivä tunnus. Liikennetilanne on tiettyyn paikkaan sidottu ja siinä voi olla useita vaiheita (tapahtumia). Esimerkiksi liikennetilanne voi olla onnettomuus tai ruuhka. Samasta tilanteesta voidaan tiedottaa useilla viesteillä. Tilanne muodostuu kaikista sitä kuvaavista tietolajeista.'
			}, {
				name : 'ERFID',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Liikennetapahtuman yksilöivä tunnus. Liikennetapahtuma on tietyssä paikassa tapahtuvan liikennetilanteen yksi vaihe. Esimerkiksi liikennetilanteen "ajoneuvon rikkoontuminen" vaiheita eli eri tapahtumia ovat "rikkoontunut ajoneuvo tienvarressa" ja "ajoneuvoa siirretään tienvarresta".'
			}, {
				name : 'TPI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'ELY-keskuksen nimi'
			}, {
				name : 'TRO1',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Häiriötilanteen alkupisteen (paikan) tierekisteriosoite. Numero [tienumero, tieosanumero, etäisyys tieosan alusta]'
			}, {
				name : 'TRO2',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Häiriötilanteen loppupisteen (paikan) tierekisteriosoite. Numero [tienumero, tieosanumero, etäisyys tieosan alusta]'
			}, {
				name : 'INP',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Ilmoitusaika. Järjestelmän generoima ilmoituksen tallennusaika. Muoto on "yyyyMMddHHmmss", esimerkiksi 20160606030000 = 06.06.2016 klo 03:00:00.'
			}, {
				name : 'SOT',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Asiakkaan luokka.'
			}, {
				name : 'CO1X',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Häiriötilanteen Alkupisteen koordinaatit. X koordinaatti.'
			}, {
				name : 'CO1Y',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Häiriötilanteen Alkupisteen koordinaatit. Y koordinaatti.'
			}, {
				name : 'CO2X',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Loppupisteen koordinaatit. Attribuutteina X koordinaatti.'
			}, {
				name : 'CO2Y',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Loppupisteen koordinaatit. Attribuutteina Y koordinaatti.'
			}, {
				name : 'ICOX',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Tiejaksosta muodostuvan paikannuspisteen (tyyppi L) X koordinaatti. Attribuutteina tiejakson määrittelevän janan X ja Y koordinaatit. Käytetään jos CO1:stä ja CO2:sta ei ole annettu.'
			}, {
				name : 'ICOY',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Tiejaksosta muodostuvan paikannuspisteen (tyyppi L) Y koordinaatti. Attribuutteina tiejakson määrittelevän janan X ja Y koordinaatit. Käytetään jos CO1:stä ja CO2:sta ei ole annettu.'
			}, {
				name : 'ARE',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Hallinnollisen alueen nimi, kun häiriötilanne koskee kuntaa, maakuntaa tai lääniä.'
			}, {
				name : 'ARE2',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Häiriötilanteen loppupisteen hallinnollisen alueen nimi, kun häiriötilanne ulottuu useamman kunnan, maakunnan tai läänin alueelle. HallinnollinenAlue tieto toimii alkupisteenä. '
			}, {
				name : 'RNO',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Tienumero, jolla häiriötilanne on. Kenttä ei käytössä katso ROAD_NR'
			}, {
				name : 'RNA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Tien virallinen tai yleisesti tunnettu nimi.'
			}, {
				name : 'LCOfCode',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Paikannustaulukosta saatava piste, jota käytetään määrittelemään häiriötilanteen sijainnin alkamispaikkaa.'
			}, {
				name : 'LCOsCode',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Paikannustaulukosta saatava piste, jota käytetään määrittelemään häiriötilanteen sijainnin päättymispaikkaa.'
			}, {
				name : 'LFNs',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Häiriötilanteen loppupisteen nimi.'
			}, {
				name : 'DSL',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Häiriötilanteen loppupaikan etäisyys Loppupisteestä. Käytetään määrittelemään tarkka häiriön vaikutusalue.'
			}, {
				name : 'DPL',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Häiriötilanteen alkupaikan etäisyys alkupisteestä. Käytetään määrittelemään tarkka häiriön vaikutusalue.'
			}, {
				name : 'SUP',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Tiedon lähettäjän tunnistekoodi.'
			}, {
				name : 'RDI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Häiriötilanteen vaikutussuunta. Koodien selitykset:\nN = negatiivinen\nP = positiivinen\nB = molempiin suuntiin\nU = ei tietoa'
			}, {
				name : 'STA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Aika, jolloin häiriön arvioidaan alkavan tai on ilmoitettu alkaneen. Muoto on "yyyyMMddHHmmssSS", esimerkiksi 20160606030000 = 06.06.2016 klo 03:00:00.'
			}, {
				name : 'STO',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Aika, jolloin häiriön arvioidaan loppuvan tai on ilmoitettu loppuneen. Muoto on "yyyyMMddHHmmss", esimerkiksi 20160606030000 = 06.06.2016 klo 03:00:00.'
			}, {
				name : 'DOP',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Loogisesti yhteenkuuluva luokka eri tyyppisiä liikennetietoja. Koodien selitykset:\nACC	Onnettomuus\nACT	Tapahtumat\nLOS	Palvelutaso\nMHZ	Liikkuva vaara/ este\nOHZ	Vaara / Este\nRMT	Tien kunnossapito/Tienrakennustyöt\nSHZ	Liukkaus / muu\nkuin lumesta johtuva\nRES	Liikennerajoitukset'
			}, {
				name : 'PHRNumber',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'PHRCode koodin arvo'
			}, {
				name : 'PHRCode',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Selite, jonka avulla kuvataan tarkemmin esimerkiksi häiriön syytä tai vaikutuksia. Kentän sisältämä koodi otetaan DATEX-standardin fraasilistasta, joka sisältää runsaasti eri fraaseja kuvaamaan eri asioita.'
			}, {
				name : 'PRVCode',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Tilanteen alkuaikan maakunnan koodi.'
			}, {
				name : 'SNA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'PRV2Code',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Tilanteen loppupaikan maakunnan koodi.'
			}, {
				name : 'SYMBOLOGY',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Liikennetilannepalvelun käyttämä ikonin numero'
			}, {
				name : 'PHRNumber2',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'PHRCode2 kentän koodin arvo'
			}, {
				name : 'PHRNumber3',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'PHRCode3 kentän koodin arvo'
			}, {
				name : 'PHRNumber4',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'PHRCode4 kentän koodin arvo'
			}, {
				name : 'PHRCode2',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Selite, jonka avulla kuvataan tarkemmin esimerkiksi häiriön syytä tai vaikutuksia. Kentän sisältämä koodi otetaan DATEX-standardin fraasilistasta, joka sisältää runsaasti eri fraaseja kuvaamaan eri asioita.'
			}, {
				name : 'PHRCode3',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Selite, jonka avulla kuvataan tarkemmin esimerkiksi häiriön syytä tai vaikutuksia. Kentän sisältämä koodi otetaan DATEX-standardin fraasilistasta, joka sisältää runsaasti eri fraaseja kuvaamaan eri asioita.'
			}, {
				name : 'PHRCode4',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Selite, jonka avulla kuvataan tarkemmin esimerkiksi häiriön syytä tai vaikutuksia. Kentän sisältämä koodi otetaan DATEX-standardin fraasilistasta, joka sisältää runsaasti eri fraaseja kuvaamaan eri asioita.'
			}, {
				name : 'AttUnits',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'ATTValues arvojen yksikkö'
			}, {
				name : 'AttSev',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : ''
			}, {
				name : 'TIT',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Tiedotetekstin otsikko.'
			}, {
				name : 'MES',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Tiedotetekstin seliteosuus. Yleinen vapaa kuvaus häiriötilanteesta.'
			}, {
				name : 'LFNf',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Häiriötilanteen alkupisteen nimi.'
			}, {
				name : 'LDT',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Paikan yleinen kuvaus.'
			}, {
				name : 'TIM',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Häiriön keston kuvaus tekstinä.'
			}, {
				name : 'ATTCodes',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Lisätiedot, joilla kuvataan Datex-koodeina häiriön kestoa, paikkaa ja vaikutuksia. Annetaan niin monta kuin on lisätietojakin.\n\nDatex-koodien selitykset:\nLEN = vaikutusalueen pituus\nDUR = kesto\nNVE = ajoneuvojen lukumäärä\nHEI = ajoneuvon suurin korkeus\nWID = ajoneuvon suurin leveys\nVLN = ajoneuvon suurin pituus\nWEI = ajoneuvon suurin kokonaispaino\nSEV = haitta-aste\nDAD = kiertotie\nSAD = lisämääre\nSMP = nopeusrajoitus\nURG = viestin kiireellisyys\nEND = Tilanne ohi (arvot Y/N)'
			}, {
				name : 'ATTValues',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'ATTCodes kentän koodien arvot samassa järjestyksessä'
			}, {
				name : 'DIV',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Kiertotien kuvaus tekstinä.'
			}, {
				name : 'ROAD_NR',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Tienumero, jolla häiriötilanne on.'
			}, {
				name : 'geometry',
				type : 'esriGeometryPolyline',
				nullable : true,
				description : 'Viivamaiset häiriöt'
			}
		]
	}, {
		id : 'juna_syy',
		header : '/Juna_Syytietorivit/FeatureServer/0',
		description : 'Lisää tietoa perutetuista junista, junien myöhästymisistä jne.',
		fields : [{
				name : 'OBJECTID',
				type : '',
				nullable : false,
				description : 'ArcGis Onlinen antama ID'
			}, {
				name : 'SYYRIVIID',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Liikennetilannepalvelun antama ID'
			}, {
				name : 'SELITE',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Syyn selite tekstinä.'
			}, {
				name : 'SYYKOODI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Liikenneviraston käyttämä syykoodi'
			}, {
				name : 'SYYLUOKKA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Liikenneviraston käyttämä syyluokka'
			}, {
				name : 'LIIKENPAIK',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Kyseisen aseman lyhenne.'
			}, {
				name : 'geometry',
				type : 'Point',
				nullable : true,
				description : 'Syytiedolla ei ole sijaintia.'
			}
		]
	}, {
		id : 'junat',
		header : '/Junat/FeatureServer/0',
		description : 'Junien tiedot',
		fields : [{
				name : 'OBJECTID',
				type : 'esriFieldTypeOID',
				nullable : false,
				description : 'ArcGis Onlinen antama ID'
			}, {
				name : 'JUNANRO',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Junan numero'
			}, {
				name : 'LAHTOPAIVA',
				type : 'esriFieldTypeDate',
				nullable : true,
				description : 'Lähtöpäivämäärä ja aika'
			}, {
				name : 'JUNALAJI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Junan laji (Kaukoliikenne/Lähiliikenne)'
			}, {
				name : 'JUNATYYPPI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Junan tyyppi, esim IC'
			}, {
				name : 'LINJATUNNU',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Lähiliikenteen linjatunnus'
			}, {
				name : 'KULUSSA',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Tieto onko juna kulussa tällä hetkellä (0 = ei, 1= kyllä)'
			}, {
				name : 'PERUTTU',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Tieto onko juna kokonaan peruttu (0 = ei, 1= kyllä)'
			}, {
				name : 'PAATEASEMA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Junan aikataulun mukainen pääteasema.'
			}, {
				name : 'LAHTOASEMA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Junan aikataulun mukainen lähtöasema.'
			}, {
				name : 'PAATEASEMA_TOD',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Junan todellinen pääteasema (jos juna osittain peruttu).'
			}, {
				name : 'LAHTOASEMA_TOD',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Junan todellinen lähtöasema (jos juna osittain peruttu).'
			}, {
				name : 'OSITTAIN_PERUTTU',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Onko juna osittain peruttu (0 = ei, 1= kyllä)'
			}, {
				name : 'LAHTOASEMA_PER',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Asema mistä lähtien juna on osittain peruutettu, jos on.'
			}, {
				name : 'PAATEASEMA_PER',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Asema mihin asti juna on osittain peruutettu, jos on.'
			}, {
				name : 'geometry',
				type : 'Point',
				nullable : true,
				description : 'Junilla ei ole tässä palvelussa sijaintia.'
			}
		]
	}, {
		id : 'kelijakso',
		header : '/Kelijakso_PK/FeatureServer/0',
		description : 'Nykyiset tiejaksokohtaiset säätiedot sekä ennusteet. Ennusteiden tiedot ovat merkattuja _1 ..._4 nimillä. Vastaavan ennusteen aikaleiman löytyy kentästä ForecastTime. Kenttiä ilman alaviiva ja numero näyttävät ajankohtaista tietoa. Katso myös Digitrafficin dokumentaatio: \n<a target="_blank" href="https://github.com/finnishtransportagency/digitraffic/wiki/Tiejaksojen%20keliennusteet">https://github.com/finnishtransportagency/digitraffic/wiki/Tiejaksojen%20keliennusteet</a>',
		fields : [{
				name : 'OBJECTID',
				type : 'esriFieldTypeOID',
				nullable : false,
				description : 'ArcGis Onlinen antama ID'
			}, {
				name : 'tienumer',
				type : 'esriFieldTypeInteger',
				nullable : false,
				description : 'Tienumero'
			}, {
				name : 'tiejakso',
				type : 'esriFieldTypeInteger',
				nullable : false,
				description : 'Tiejakson tieosa'
			}, {
				name : 'versio',
				type : 'esriFieldTypeInteger',
				nullable : false,
				description : ''
			}, {
				name : 'selite1',
				type : 'esriFieldTypeString',
				nullable : false,
				description : ''
			}, {
				name : 'TIE',
				type : 'esriFieldTypeInteger',
				nullable : false,
				description : 'Tien numero'
			}, {
				name : 'AOSA',
				type : 'esriFieldTypeInteger',
				nullable : false,
				description : 'Alkupisteen tiejakson tieosa'
			}, {
				name : 'AET',
				type : 'esriFieldTypeInteger',
				nullable : false,
				description : 'Alkupisteen etäisyys tieosan alkupisteestä'
			}, {
				name : 'LOSA',
				type : 'esriFieldTypeInteger',
				nullable : false,
				description : 'Loppupisteen tiejakson tieosa'
			}, {
				name : 'LET',
				type : 'esriFieldTypeInteger',
				nullable : false,
				description : 'Loppupisteen etäisyys tieosan alkupisteestä'
			}, {
				name : 'Pituus',
				type : 'esriFieldTypeInteger',
				nullable : false,
				description : 'Tiejakson pituus'
			}, {
				name : 'SHAPE_Leng',
				type : 'esriFieldTypeDouble',
				nullable : false,
				description : ''
			}, {
				name : 'Daylight',
				type : 'esriFieldTypeSmallInteger',
				nullable : false,
				description : 'Onko autinko noussut (1 = kyllä, 0 = ei)'
			}, {
				name : 'OverallRoadCondition',
				type : 'esriFieldTypeSmallInteger',
				nullable : false,
				description : 'Tien yleinen kunto\n1 = Normaali (vihreä)\n2 = Heikko (keltainen)\n3 = Erittäin heikko (punainen)\n-1 = Ei tietoa'
			}, {
				name : 'Reliability',
				type : 'esriFieldTypeSmallInteger',
				nullable : false,
				description : 'Kertoo onnistuiko datan haku asemalta:\n0 = onnistui\n1 = data ei saatavilla\n2 = haku epäonnistui'
			}, {
				name : 'RoadTemperature',
				type : 'esriFieldTypeDouble',
				nullable : false,
				description : 'Tien lämpötila'
			}, {
				name : 'Temperature',
				type : 'esriFieldTypeDouble',
				nullable : false,
				description : 'Ilman lämpötila'
			}, {
				name : 'WindDirection',
				type : 'esriFieldTypeSmallInteger',
				nullable : false,
				description : 'Tuulen suunta asteina. 0 jos ei ole tuulta tai suunta vaihtelee paljon.'
			}, {
				name : 'WindSpeed',
				type : 'esriFieldTypeDouble',
				nullable : false,
				description : 'Tuulen voimakkuus (m/s)'
			}, {
				name : 'RoadPartId',
				type : 'esriFieldTypeString',
				nullable : false,
				description : 'Tiejaksotunniste 15 merkkiä.\nTienumero 5 merkkiä esim 00004\nTiejakson tieosa esim 120\nTiejakson versionumero esim 000\nVarattu numero tulevaisuuden käytölle oletus 0.\nErotinmerkkinä alaviiva. Eli kokonaisuudessaan esimerkki 00004_120_000_0.'
			}, {
				name : 'RoadCondition',
				type : 'esriFieldTypeSmallInteger',
				nullable : false,
				description : 'Tien kunto:\n1 = kuiva\n2 = kostea\n3 = märkä\n4 = sohjo\n5 = kuura\n6 = osittain jäinen\n7 = jäinen\n8 = lumi'
			}, {
				name : 'PrecipitationCondition',
				type : 'esriFieldTypeSmallInteger',
				nullable : false,
				description : 'Sade:\n1 = pouta\n2 = heikko vesisade\n3 = kohtalainen vesisade\n4 = voimakas vesisade\n5 = heikko lumisade\n6 = kohtalainen lumisade\n7 = voimakas lumisade'
			}, {
				name : 'WindCondition',
				type : 'esriFieldTypeSmallInteger',
				nullable : false,
				description : 'Tuuli:\n1 = heikko\n2 = kohtalainen\n3 = navakka\n4 = kova'
			}, {
				name : 'FreezingRainCondition',
				type : 'esriFieldTypeString',
				nullable : false,
				description : 'Onko sade jäätävä:\n1 = Kyllä\n0 = Ei'
			}, {
				name : 'WinterSlipperiness',
				type : 'esriFieldTypeString',
				nullable : false,
				description : 'Onko tie liukas:\n1 = Kyllä\n0 = Ei'
			}, {
				name : 'VisibilityCondition',
				type : 'esriFieldTypeSmallInteger',
				nullable : false,
				description : 'Näkyvyys:\n1 = melko huono ( 400 m)\n2 = huono ( 200 m )'
			}, {
				name : 'FrictionCondition',
				type : 'esriFieldTypeSmallInteger',
				nullable : false,
				description : 'Tien liukkaus:\n1 = liukas\n2 = tosi liukas'
			}, {
				name : 'OverallRoadCondition_1',
				type : 'esriFieldTypeSmallInteger',
				nullable : false,
				description : 'Tien yleinen kunto\n1 = Normaali (vihreä)\n2 = Heikko (keltainen)\n3 = Erittäin heikko (punainen)\n-1 = Ei tietoa'
			}, {
				name : 'RoadTemperature_1',
				type : 'esriFieldTypeDouble',
				nullable : false,
				description : 'Tien lämpötila'
			}, {
				name : 'Temperature_1',
				type : 'esriFieldTypeDouble',
				nullable : false,
				description : 'Ilman lämpötila'
			}, {
				name : 'WindDirection_1',
				type : 'esriFieldTypeSmallInteger',
				nullable : false,
				description : 'Tuulen suunta asteina. 0 jos ei ole tuulta tai suunta vaihtelee paljon.'
			}, {
				name : 'WindSpeed_1',
				type : 'esriFieldTypeDouble',
				nullable : false,
				description : 'Tuulen voimakkuus (m/s)'
			}, {
				name : 'OverallRoadCondition_2',
				type : 'esriFieldTypeSmallInteger',
				nullable : false,
				description : 'Tien yleinen kunto\n1 = Normaali (vihreä)\n2 = Heikko (keltainen)\n3 = Erittäin heikko (punainen)\n-1 = Ei tietoa'
			}, {
				name : 'RoadTemperature_2',
				type : 'esriFieldTypeDouble',
				nullable : false,
				description : 'Tien lämpötila'
			}, {
				name : 'Temperature_2',
				type : 'esriFieldTypeDouble',
				nullable : false,
				description : 'Ilman lämpötila'
			}, {
				name : 'WindDirection_2',
				type : 'esriFieldTypeSmallInteger',
				nullable : false,
				description : 'Tuulen suunta asteina. 0 jos ei ole tuulta tai suunta vaihtelee paljon.'
			}, {
				name : 'WindSpeed_2',
				type : 'esriFieldTypeDouble',
				nullable : false,
				description : 'Tuulen voimakkuus (m/s)'
			}, {
				name : 'OverallRoadCondition_3',
				type : 'esriFieldTypeSmallInteger',
				nullable : false,
				description : 'Tien yleinen kunto\n1 = Normaali (vihreä)\n2 = Heikko (keltainen)\n3 = Erittäin heikko (punainen)\n-1 = Ei tietoa'
			}, {
				name : 'RoadTemperature_3',
				type : 'esriFieldTypeDouble',
				nullable : false,
				description : 'Tien lämpötila'
			}, {
				name : 'Temperature_3',
				type : 'esriFieldTypeDouble',
				nullable : false,
				description : 'Ilman lämpötila'
			}, {
				name : 'WindDirection_3',
				type : 'esriFieldTypeSmallInteger',
				nullable : false,
				description : 'Tuulen suunta asteina. 0 jos ei ole tuulta tai suunta vaihtelee paljon.'
			}, {
				name : 'WindSpeed_3',
				type : 'esriFieldTypeDouble',
				nullable : false,
				description : 'Tuulen voimakkuus (m/s)'
			}, {
				name : 'OverallRoadCondition_4',
				type : 'esriFieldTypeSmallInteger',
				nullable : false,
				description : 'Tien yleinen kunto\n1 = Normaali (vihreä)\n2 = Heikko (keltainen)\n3 = Erittäin heikko (punainen)\n-1 = Ei tietoa'
			}, {
				name : 'RoadTemperature_4',
				type : 'esriFieldTypeDouble',
				nullable : false,
				description : 'Tien lämpötila'
			}, {
				name : 'WindDirection_4',
				type : 'esriFieldTypeSmallInteger',
				nullable : false,
				description : 'Tuulen suunta asteina. 0 jos ei ole tuulta tai suunta vaihtelee paljon.'
			}, {
				name : 'WindSpeed_4',
				type : 'esriFieldTypeDouble',
				nullable : false,
				description : 'Tuulen voimakkuus (m/s)'
			}, {
				name : 'selite2',
				type : 'esriFieldTypeString',
				nullable : false,
				description : ''
			}, {
				name : 'Temperature_4',
				type : 'esriFieldTypeDouble',
				nullable : false,
				description : 'Ilman lämpötila'
			}, {
				name : 'RoadCondition_1',
				type : 'esriFieldTypeSmallInteger',
				nullable : false,
				description : 'Tien kunto:\n1 = kuiva\n2 = kostea\n3 = märkä\n4 = sohjo\n5 = kuura\n6 = osittain jäinen\n7 = jäinen\n8 = lumi'
			}, {
				name : 'RoadCondition_2',
				type : 'esriFieldTypeSmallInteger',
				nullable : false,
				description : 'Tien kunto:\n1 = kuiva\n2 = kostea\n3 = märkä\n4 = sohjo\n5 = kuura\n6 = osittain jäinen\n7 = jäinen\n8 = lumi'
			}, {
				name : 'RoadCondition_3',
				type : 'esriFieldTypeSmallInteger',
				nullable : false,
				description : 'Tien kunto:\n1 = kuiva\n2 = kostea\n3 = märkä\n4 = sohjo\n5 = kuura\n6 = osittain jäinen\n7 = jäinen\n8 = lumi'
			}, {
				name : 'RoadCondition_4',
				type : 'esriFieldTypeSmallInteger',
				nullable : false,
				description : 'Tien kunto:\n1 = kuiva\n2 = kostea\n3 = märkä\n4 = sohjo\n5 = kuura\n6 = osittain jäinen\n7 = jäinen\n8 = lumi'
			}, {
				name : 'ForecastTime',
				type : 'esriFieldTypeString',
				nullable : false,
				description : 'Säätietojen aikaleima'
			}, {
				name : 'ForecastTime_1',
				type : 'esriFieldTypeString',
				nullable : false,
				description : 'Ensimmäisen ennusteen aikaleima (+2 tuntia)'
			}, {
				name : 'ForecastTime_2',
				type : 'esriFieldTypeString',
				nullable : false,
				description : 'Toisen ennusteen aikaleima (+4 tuntia)'
			}, {
				name : 'ForecastTime_3',
				type : 'esriFieldTypeString',
				nullable : false,
				description : 'Kolmannen ennusteen aikaleima (+6 tuntia)'
			}, {
				name : 'ForecastTime_4',
				type : 'esriFieldTypeString',
				nullable : false,
				description : 'Neljännen ennusteen aikaleima (+12 tuntia)'
			}, {
				name : 'WeatherSymbol',
				type : 'esriFieldTypeString',
				nullable : false,
				description : 'Päiväsymbolit alkavat d -kirjaimella jonka seuraa kolminumeroinen koodi. Yösymbolit alkavat taas n -kirjaimella'
			}, {
				name : 'WeatherSymbol_1',
				type : 'esriFieldTypeString',
				nullable : false,
				description : 'Päiväsymbolit alkavat d -kirjaimella jonka seuraa kolminumeroinen koodi. Yösymbolit alkavat taas n -kirjaimella'
			}, {
				name : 'WeatherSymbol_2',
				type : 'esriFieldTypeString',
				nullable : false,
				description : 'Päiväsymbolit alkavat d -kirjaimella jonka seuraa kolminumeroinen koodi. Yösymbolit alkavat taas n -kirjaimella'
			}, {
				name : 'WeatherSymbol_3',
				type : 'esriFieldTypeString',
				nullable : false,
				description : 'Päiväsymbolit alkavat d -kirjaimella jonka seuraa kolminumeroinen koodi. Yösymbolit alkavat taas n -kirjaimella'
			}, {
				name : 'WeatherSymbol_4',
				type : 'esriFieldTypeString',
				nullable : false,
				description : 'Päiväsymbolit alkavat d -kirjaimella jonka seuraa kolminumeroinen koodi. Yösymbolit alkavat taas n -kirjaimella'
			}, {
				name : 'geometry',
				type : 'esriGeometryPolyline',
				nullable : false,
				description : 'Viivamainen geometria'
			}
			]
	}, {
		id : 'lam',
		header : '/LAM/FeatureServer/0',
		description : 'Sisältää LAM (Liikenteen Automaattinen Mittaus)–asemien mittaustiedot. Viestissä on kullekin LAM-asemalle liikennemäärä molempiin suuntiin, ja mitattu keskinopeus molempiin suuntiin. Viesti päivitetään, kun Liikenneviraston palvelimelta saadaan uudet LAM –asemien tiedot. Tyypillisesti siis kerran 5 minuutissa. Lisää tietoa: \n<a target="_blank" href="https://github.com/finnishtransportagency/digitraffic/wiki/Ajantasaiset%20LAM%20mittaustiedot">https://github.com/finnishtransportagency/digitraffic/wiki/Ajantasaiset%20LAM%20mittaustiedot</a>',
		fields : [{
				name : 'OBJECTID',
				type : 'esriFieldTypeOID',
				nullable : false,
				description : 'ArcGis Onlinen antama ID'
			}, {
				name : 'lamid',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'LAM-aseman tunniste'
			}, {
				name : 'tie',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Tien numero'
			}, {
				name : 'osa',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Tiejakson tieosa'
			}, {
				name : 'etaisyys',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Etäisyys tieosan alusta (m)'
			}, {
				name : 'lam_x',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'LAM-aseman x-koordinaatti'
			}, {
				name : 'lam_y',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'LAM-aseman y-koordinaatti'
			}, {
				name : 'ed_x',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'edellisen LAM-aseman x-koordinaatti'
			}, {
				name : 'ed_y',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Edellisen LAM-aseman y-koordinaatti'
			}, {
				name : 'seur_x',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Seuraavan LAM-aseman x-koordinaatti'
			}, {
				name : 'seur_y',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Seuraavan LAM-aseman y-koordinaatti'
			}, {
				name : 'suunta',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Suunta 1 asteina.'
			}, {
				name : 'Symbology',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Aseman symboli Liikennetilanne-palvelussa.'
			}, {
				name : 'UTC',
				type : 'esriFieldTypeDate',
				nullable : true,
				description : 'Yksittäisen aseman tietojen päivityshetki UTC ajassa'
			}, {
				name : 'Localime',
				type : 'esriFieldTypeDate',
				nullable : true,
				description : 'Yksittäisen aseman tietojen päivityshetki paikallista aikaa'
			}, {
				name : 'Trafficvolume1',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : '5 minuutin liikennemäärä suuntaan 1 (kasvavaan suuntaan) (0 => 1-2 autoa/5 min, 5 => 5-6 autoa/5 min, jne.).'
			}, {
				name : 'Trafficvolume2',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : '5 minuutin liikennemäärä suuntaan 2 (laskevaan suuntaan)'
			}, {
				name : 'Averagespeed1',
				type : 'esriFieldTypeSingle',
				nullable : true,
				description : 'Keskinopeus suuntaan 1 (kasvavaan suuntaan)'
			}, {
				name : 'Averagespeed2',
				type : 'esriFieldTypeSingle',
				nullable : true,
				description : 'Keskinopeus suuntaan 2 (laskevaan suuntaan)'
			}, {
				name : 'Laststaticdataupdate',
				type : 'esriFieldTypeDate',
				nullable : true,
				description : 'Aikaleima milloin staattiset datat ovat viimeksi päivitetty'
			}, {
				name : 'Freeflowspeed1',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : ''
			}, {
				name : 'Freeflowspeed2',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : ''
			}, {
				name : 'Suunta_1',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Suunta 1 selitys'
			}, {
				name : 'Suunta_2',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Suunta 2 selitys'
			}, {
				name : 'MeasurementTime',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Yksittäisen aseman tietojen päivityshetki stringinä. Muoto on "yyyyMMddHHmmss", esimerkiksi 20160606030000 = 06.06.2016 klo 03:00:00.'
			}, {
				name : 'geometry',
				type : 'Point',
				nullable : true,
				description : ''
			}
		]
	}, {
		id : 'merivaroitukset_0',
		header : '/Merivaroitukset/FeatureServer/0',
		description : 'Pistemäiset varoitukset merenkulkijoille.',
		fields : [{
				name : 'OBJECTID',
				type : 'esriFieldTypeOID',
				nullable : false,
				description : 'ArcGis Onlinen antama ID'
			}, {
				name : 'NUMERO',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Varoituksen numero. Numero on vuosikohtaisesti juokseva.'
			}, {
				name : 'TYYPPI_FI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen tyyppi suomeksi'
			}, {
				name : 'TYYPPI_SV',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen tyyppi ruotsiksi'
			}, {
				name : 'SIJAINTI_FI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen sijainnin kuvaus suomeksi'
			}, {
				name : 'SIJAINTI_SV',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen sijainnin kuvaus ruotsiksi'
			}, {
				name : 'SISALTO_FI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen sisältö suomeksi'
			}, {
				name : 'SISALTO_SV',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen sisältö ruotsiksi'
			}, {
				name : 'PAIVAYS_AIKA_FI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen päiväys'
			}, {
				name : 'PAIVAYS_AIKA_SV',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen päiväys'
			}, {
				name : 'TYYPPI_EN',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen tyyppi englanniksi'
			}, {
				name : 'SISALTO_EN',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen sisältö englanniksi'
			}, {
				name : 'PAIVAYS_AIKA_EN',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen päiväys'
			}, {
				name : 'SIJAINTI_EN',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen sijainnin kuvaus englanniksi'
			}, {
				name : 'geometry',
				type : 'Point',
				nullable : true,
				description : 'Pistemäiset merivaroitukset'
			}
		]
	}, {
		id : 'merivaroitukset_1',
		header : '/Merivaroitukset/FeatureServer/1',
		description : 'Viivamaiset varoitukset merenkulkijoille.',
		fields : [{
				name : 'OBJECTID',
				type : 'esriFieldTypeOID',
				nullable : false,
				description : 'ArcGis Onlinen antama ID'
			}, {
				name : 'NUMERO',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Varoituksen numero. Numero on vuosikohtaisesti juokseva.'
			}, {
				name : 'TYYPPI_FI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen tyyppi suomeksi'
			}, {
				name : 'TYYPPI_SV',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen tyyppi ruotsiksi'
			}, {
				name : 'SIJAINTI_FI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen sijainnin kuvaus suomeksi'
			}, {
				name : 'SIJAINTI_SV',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen sijainnin kuvaus ruotsiksi'
			}, {
				name : 'SISALTO_FI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen sisältö suomeksi'
			}, {
				name : 'SISALTO_SV',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen sisältö ruotsiksi'
			}, {
				name : 'PAIVAYS_AIKA_FI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen päiväys'
			}, {
				name : 'PAIVAYS_AIKA_SV',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen päiväys'
			}, {
				name : 'TYYPPI_EN',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen tyyppi englanniksi'
			}, {
				name : 'SISALTO_EN',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen sisältö englanniksi'
			}, {
				name : 'PAIVAYS_AIKA_EN',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen päiväys'
			}, {
				name : 'SIJAINTI_EN',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen sijainnin kuvaus englanniksi'
			}, {
				name : 'geometry',
				type : 'esriGeometryPolyline',
				nullable : true,
				description : 'Viivamaiset merivaroitukset'
			}
		]
	}, {
		id : 'merivaroitukset_2',
		header : '/Merivaroitukset/FeatureServer/2',
		description : 'Aluemaiset varoitukset merenkulkijoille.',
		fields : [{
				name : 'OBJECTID',
				type : 'esriFieldTypeOID',
				nullable : false,
				description : 'ArcGis Onlinen antama ID'
			}, {
				name : 'NUMERO',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Varoituksen numero. Numero on vuosikohtaisesti juokseva.'
			}, {
				name : 'TYYPPI_FI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen tyyppi suomeksi'
			}, {
				name : 'TYYPPI_SV',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen tyyppi ruotsiksi'
			}, {
				name : 'SIJAINTI_FI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen sijainnin kuvaus suomeksi'
			}, {
				name : 'SIJAINTI_SV',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen sijainnin kuvaus ruotsiksi'
			}, {
				name : 'SISALTO_FI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen sisältö suomeksi'
			}, {
				name : 'SISALTO_SV',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen sisältö ruotsiksi'
			}, {
				name : 'PAIVAYS_AIKA_FI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen päiväys'
			}, {
				name : 'PAIVAYS_AIKA_SV',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen päiväys'
			}, {
				name : 'TYYPPI_EN',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen tyyppi englanniksi'
			}, {
				name : 'SISALTO_EN',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen sisältö englanniksi'
			}, {
				name : 'PAIVAYS_AIKA_EN',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen päiväys'
			}, {
				name : 'SIJAINTI_EN',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Varoituksen sijainnin kuvaus englanniksi'
			}, {
				name : 'geometry',
				type : 'esriGeometryPolygon',
				nullable : true,
				description : 'Aluemaiset merivaroitukset'
			}
		]
	}, {
		id : 'rautatieasemat_1',
		header : '/Rautatieasemat_1/FeatureServer/0',
		description : 'Tärkeämmät kaukoliikenteen juna-asemat.',
		fields : [{
				name : 'OBJECTID',
				type : 'esriFieldTypeOID',
				nullable : false,
				description : 'ArcGis Onlinen antama ID'
			}, {
				name : 'ID',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Liikenneviraston käyttämä ID'
			}, {
				name : 'RPID',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Liikenneviraston käyttämä RPID'
			}, {
				name : 'RAUTATIELI',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : ''
			}, {
				name : 'NIMI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Aseman nimi suomeksi'
			}, {
				name : 'TOINEN_NIM',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Aseman nimi ruotsiksi'
			}, {
				name : 'LYHENNE',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Aseman lyhenne'
			}, {
				name : 'KOODI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Aseman koodi'
			}, {
				name : 'HENKILO_TA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'TYYPPI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Aseman tyyppi  (liikennepaikka tai liikennepaikan osa)'
			}, {
				name : 'TILA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'onko asema käytössä / ei käytössä'
			}, {
				name : 'AVATTU',
				type : 'esriFieldTypeDate',
				nullable : true,
				description : 'Asema avattu päivämäärä'
			}, {
				name : 'PAIVITYSPV',
				type : 'esriFieldTypeDate',
				nullable : true,
				description : 'Aseman tietojen viimeinen päivitys'
			}, {
				name : 'LISATIETO',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Lisätietokenttä'
			}, {
				name : 'X_KOORD',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'X koordinaatti (YKJ)'
			}, {
				name : 'Y_KOORD',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Y koordinaatti (YKJ)'
			}, {
				name : 'KUNTA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Kertoo missä kunnassa asema sijaitsee'
			}, {
				name : 'ALKUKM_M',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'LOPPUKM_M',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'PISTEKM_M',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'SIJAINTIRA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'RATANUMERO',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'KUNNOSSA_1',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'LAHDE',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Juna-asematietojen lähde'
			}, {
				name : 'X_EUREF',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'X koordinaatti'
			}, {
				name : 'Y_EUREF',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Y koordinaatti'
			}, {
				name : 'ASEMALUOKK',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Aseman luokka (luokitus 1-8)'
			}, {
				name : 'ASEMATILAN',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Liikennetilanne palvelun symbolin väritys (0 = harmaa, 1 = vihreä, 2= keltainen, 3 = punainen, 4-7 sama väri mutta symboli myös huutomerkillä'
			}, {
				name : 'ICONOFFSET',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Liikennetilanne palvelun käyttämä tieto ikonin piirtämisestä.'
			}, {
				name : 'geometry',
				type : 'Point',
				nullable : true,
				description : ''
			}
		]
	}, {
		id : 'rautatieasemat_2',
		header : '/Rautatieasemat_2/FeatureServer/0',
		description : 'Pienemmät kaukoliikenteen juna-asemat.',
		fields : [{
				name : 'OBJECTID',
				type : 'esriFieldTypeOID',
				nullable : false,
				description : 'ArcGis Onlinen antama ID'
			}, {
				name : 'ID',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Liikenneviraston käyttämä ID'
			}, {
				name : 'RPID',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Liikenneviraston käyttämä RPID'
			}, {
				name : 'RAUTATIELI',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : ''
			}, {
				name : 'NIMI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Aseman nimi suomeksi'
			}, {
				name : 'TOINEN_NIM',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Aseman nimi ruotsiksi'
			}, {
				name : 'LYHENNE',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Aseman lyhenne'
			}, {
				name : 'KOODI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Aseman koodi'
			}, {
				name : 'HENKILO_TA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'TYYPPI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Aseman tyyppi  (liikennepaikka/liikennepaikan osa)'
			}, {
				name : 'TILA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'onko asema käytössä / ei käytössä'
			}, {
				name : 'AVATTU',
				type : 'esriFieldTypeDate',
				nullable : true,
				description : 'Asema avattu päivämäärä'
			}, {
				name : 'PAIVITYSPV',
				type : 'esriFieldTypeDate',
				nullable : true,
				description : 'Aseman tietojen viimeinen päivitys'
			}, {
				name : 'LISATIETO',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Lisätietokenttä'
			}, {
				name : 'X_KOORD',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'X koordinaatti (YKJ)'
			}, {
				name : 'Y_KOORD',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Y koordinaatti (YKJ)'
			}, {
				name : 'KUNTA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Kertoo missä kunnassa asema sijaitsee'
			}, {
				name : 'ALKUKM_M',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'LOPPUKM_M',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'PISTEKM_M',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'SIJAINTIRA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'RATANUMERO',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'KUNNOSSA_1',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'LAHDE',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Juna-asematietojen lähde'
			}, {
				name : 'X_EUREF',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'X koordinaatti'
			}, {
				name : 'Y_EUREF',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Y koordinaatti'
			}, {
				name : 'ASEMALUOKK',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Aseman luokka (luokitus 1-8)'
			}, {
				name : 'ASEMATILAN',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Liikennetilanne palvelun symbolin väritys (0 = harmaa, 1 = vihreä, 2= keltainen, 3 = punainen, 4-7 huutomerkillä'
			}, {
				name : 'ICONOFFSET',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Liikennetilanne palvelun käyttämä tieto ikonin piirtämisestä.'
			}, {
				name : 'geometry',
				type : 'Point',
				nullable : true,
				description : ''
			}
		]
	}, {
		id : 'rautatieasemat_3',
		header : '/Rautatieasemat_3/FeatureServer/0',
		description : 'Tärkeämmät lähiliikenteen juna-asemat.',
		fields : [{
				name : 'OBJECTID',
				type : 'esriFieldTypeOID',
				nullable : false,
				description : 'ArcGis Onlinen antama ID'
			}, {
				name : 'ID',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Liikenneviraston käyttämä ID'
			}, {
				name : 'RPID',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Liikenneviraston käyttämä RPID'
			}, {
				name : 'RAUTATIELI',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : ''
			}, {
				name : 'NIMI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Aseman nimi suomeksi'
			}, {
				name : 'TOINEN_NIM',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Aseman nimi ruotsiksi'
			}, {
				name : 'LYHENNE',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Aseman lyhenne'
			}, {
				name : 'KOODI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Aseman koodi'
			}, {
				name : 'HENKILO_TA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'TYYPPI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Aseman tyyppi  (liikennepaikka/liikennepaikan osa)'
			}, {
				name : 'TILA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'onko asema käytössä / ei käytössä'
			}, {
				name : 'AVATTU',
				type : 'esriFieldTypeDate',
				nullable : true,
				description : 'Asema avattu päivämäärä'
			}, {
				name : 'PAIVITYSPV',
				type : 'esriFieldTypeDate',
				nullable : true,
				description : 'Aseman tietojen viimeinen päivitys'
			}, {
				name : 'LISATIETO',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Lisätietokenttä'
			}, {
				name : 'X_KOORD',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'X koordinaatti (YKJ)'
			}, {
				name : 'Y_KOORD',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Y koordinaatti (YKJ)'
			}, {
				name : 'KUNTA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Kertoo missä kunnassa asema sijaitsee'
			}, {
				name : 'ALKUKM_M',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'LOPPUKM_M',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'PISTEKM_M',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'SIJAINTIRA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'RATANUMERO',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'KUNNOSSA_1',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'LAHDE',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Juna-asematietojen lähde'
			}, {
				name : 'X_EUREF',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'X koordinaatti'
			}, {
				name : 'Y_EUREF',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Y koordinaatti'
			}, {
				name : 'ASEMALUOKK',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Aseman luokka (luokitus 1-8)'
			}, {
				name : 'ASEMATILAN',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Liikennetilanne palvelun symbolin väritys (0 = harmaa, 1 = vihreä, 2= keltainen, 3 = punainen, 4-7 huutomerkillä'
			}, {
				name : 'ICONOFFSET',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Liikennetilanne palvelun käyttämä tieto ikonin piirtämisestä.'
			}, {
				name : 'geometry',
				type : 'Point',
				nullable : true,
				description : ''
			}
		]
	}, {
		id : 'rautatieasemat_4',
		header : '/Rautatieasemat_4/FeatureServer/0',
		description : 'Pienemmät lähiliikenteen juna-asemat',
		fields : [{
				name : 'OBJECTID',
				type : 'esriFieldTypeOID',
				nullable : false,
				description : 'ArcGis Onlinen antama ID'
			}, {
				name : 'ID',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Liikenneviraston käyttämä ID'
			}, {
				name : 'RPID',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Liikenneviraston käyttämä RPID'
			}, {
				name : 'RAUTATIELI',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : ''
			}, {
				name : 'NIMI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Aseman nimi suomeksi'
			}, {
				name : 'TOINEN_NIM',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Aseman nimi ruotsiksi'
			}, {
				name : 'LYHENNE',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Aseman lyhenne'
			}, {
				name : 'KOODI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Aseman koodi'
			}, {
				name : 'HENKILO_TA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'TYYPPI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Aseman tyyppi  (liikennepaikka/liikennepaikan osa)'
			}, {
				name : 'TILA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'onko asema käytössä / ei käytössä'
			}, {
				name : 'AVATTU',
				type : 'esriFieldTypeDate',
				nullable : true,
				description : 'Asema avattu päivämäärä'
			}, {
				name : 'PAIVITYSPV',
				type : 'esriFieldTypeDate',
				nullable : true,
				description : 'Aseman tietojen viimeinen päivitys'
			}, {
				name : 'LISATIETO',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Lisätietokenttä'
			}, {
				name : 'X_KOORD',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'X koordinaatti (YKJ)'
			}, {
				name : 'Y_KOORD',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Y koordinaatti (YKJ)'
			}, {
				name : 'KUNTA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Kertoo missä kunnassa asema sijaitsee'
			}, {
				name : 'ALKUKM_M',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'LOPPUKM_M',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'PISTEKM_M',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'SIJAINTIRA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'RATANUMERO',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'KUNNOSSA_1',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'LAHDE',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Juna-asematietojen lähde'
			}, {
				name : 'X_EUREF',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'X koordinaatti'
			}, {
				name : 'Y_EUREF',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Y koordinaatti'
			}, {
				name : 'ASEMALUOKK',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Aseman luokka (luokitus 1-8)'
			}, {
				name : 'ASEMATILAN',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Liikennetilanne palvelun symbolin väritys (0 = harmaa, 1 = vihreä, 2= keltainen, 3 = punainen, 4-7 huutomerkillä'
			}, {
				name : 'ICONOFFSET',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Liikennetilanne palvelun käyttämä tieto ikonin piirtämisestä.'
			}, {
				name : 'geometry',
				type : 'Point',
				nullable : true,
				description : ''
			}
		]
	}, {
		id : 'rwcamera',
		header : '/RWcamera/FeatureServer/0',
		description : 'Tietoa suomen tiesääkameroista (Road Weather Camera). Digitrafficin kuvaus: <a target="_blank" href="https://github.com/finnishtransportagency/digitraffic/wiki/Kelikameroiden%20esiasetukset">https://github.com/finnishtransportagency/digitraffic/wiki/Kelikameroiden%20esiasetukset</a>',
		fields : [{
				name : 'OBJECTID',
				type : 'esriFieldTypeOID',
				nullable : false,
				description : 'ArcGis Onlinen antama ID'
			}, {
				name : 'CameraPanID',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Kameran suunnan ID'
			}, {
				name : 'ClosestRoadweatherStationID',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Kameran lähimmän tiesääaseman id'
			}, {
				name : 'CameraName',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Kameran nimi'
			}, {
				name : 'Direction',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Kameran suunnan kuvaus'
			}, {
				name : 'Tie',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Tien numero'
			}, {
				name : 'Tieosa',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Tiejakson tieosa'
			}, {
				name : 'Aet',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Etäisyys tieosan alusta'
			}, {
				name : 'Y',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Y-koordinaatti (YKJ)'
			}, {
				name : 'X',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'X-koordinaatti (YKJ)'
			}, {
				name : 'KUNNAN_NIMI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Kunnan nimi'
			}, {
				name : 'EA_JULKINEN',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Lippu joka kertoo onko kamera julkinen vai ei.\nfalse = ei julkinen\ntrue = julkinen'
			}, {
				name : 'LEVEYS_ASTE',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Latitudi koordinaatin aseet'
			}, {
				name : 'LEVEYS_MINUUTTI',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Latitudi koordinaatin minuutit'
			}, {
				name : 'LEVEYS_SEKUNTI',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Latitudi koordinaatin sekunnit'
			}, {
				name : 'PITUUS_ASTE',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Longitudi koordinaatin asteet'
			}, {
				name : 'PITUUS_MINUUTTI',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Longitudi koordinaatin minuutit'
			}, {
				name : 'PITUUS_SEKUNTI',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Longitudi koordinaatin sekunnit'
			}, {
				name : 'lat',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Kameran latitudi'
			}, {
				name : 'lon',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Kameran longitudi'
			}, {
				name : 'utc',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Kameran tiedot päivitetty utc ajassa'
			}, {
				name : 'localtime',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Kameran tiedot päivitetty'
			}, {
				name : 'cameraid',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Kameran id'
			}, {
				name : 'presetid',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Kameran esiasennon tunniste'
			}, {
				name : 'roadstationid',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Kameran tunniste'
			}, {
				name : 'public_',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Lippu joka kertoo onko kamera julkinen vai ei.\nfalse = ei julkinen\ntrue = julkinen'
			}, {
				name : 'presetname1',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Esiasetuksen nimi 1'
			}, {
				name : 'presetname2',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Esiasetuksen nimi 2'
			}, {
				name : 'nearestroadstationid',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Lähimmän tieaseman tunniste '
			}, {
				name : 'timestamps',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Viimeisimmät aikaleimat jolloin kamera on ottanut kuvia'
			}, {
				name : 'CAMERA_ACTIVE',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Onko kyseinen kamera käytössä (0 = ei, 1 = kyllä)'
			}, {
				name : 'CAMERA_PAN_ACTIVE',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Onko kyseinen kamerasuunta käytössä (0 = ei, 1 = kyllä)'
			}, {
				name : 'geometry',
				type : 'Point',
				nullable : true,
				description : 'Geometria pisteenä'
			}
		]
	}, {
		id : 'rws_station',
		header : '/RWS_station/FeatureServer/0',
		description : 'Tiesääasemien staattiset ja päivittyvät tiedot.\n <a target="_blank" href="https://github.com/finnishtransportagency/digitraffic/wiki/Ties%C3%A4%C3%A4asemien%20ajantasaiset%20mittaustiedot">https://github.com/finnishtransportagency/digitraffic/wiki/Ties%C3%A4%C3%A4asemien%20ajantasaiset%20mittaustiedot</a>',
		fields : [{
				name : 'OBJECTID',
				type : 'esriFieldTypeOID',
				nullable : false,
				description : 'ArcGis Onlinen antama ID'
			}, {
				name : 'NUMERO',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Tiesääaseman numero'
			}, {
				name : 'TSA_NIMI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Tiesääaseman nimi'
			}, {
				name : 'TIE',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Tien numero'
			}, {
				name : 'TIEOSA',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Tiejakson tieosa'
			}, {
				name : 'ETAISYYS',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Etäisyys tieosan alusta'
			}, {
				name : 'X',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'X-koodrinaatti (YKJ)'
			}, {
				name : 'Y',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Y-koodrinaatti (YKJ)'
			}, {
				name : 'KORKEUS',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Tiesääaseman korkeus vedenpinnasta'
			}, {
				name : 'KUNTAKOODI',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Kunnan koodi'
			}, {
				name : 'KUNNAN_NIMI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Kunnan nimi'
			}, {
				name : 'TIEPIIRIN_NIMI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Tiepiirin nimi'
			}, {
				name : 'SIJOITTELU',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Aseman sijoittelu'
			}, {
				name : 'LEVEYS_ASTE',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Latitudi koordinaatin asteet'
			}, {
				name : 'LEVEYS_MINUUTTI',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Latitudi koordinaatin minuutit'
			}, {
				name : 'LEVEYS_SEKUNTI',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Latitudi koordinaatin sekunnit'
			}, {
				name : 'PITUUS_ASTE',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Longitudi koordinaatin asteet'
			}, {
				name : 'PITUUS_MINUUTTI',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Longitudi koordinaatin minuutit'
			}, {
				name : 'PITUUS_SEKUNTI',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Longitudi koordinaatin sekunnit'
			}, {
				name : 'lat',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Latitudi'
			}, {
				name : 'lon',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : 'Longitudi'
			}, {
				name : 'roadSurfaceCondition',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Tiepinnan kunto\n0 = anturissa on vikaa\n1 = kuiva\n2 = kostea\n3 = märkä\n4 = märkä ja suolattu\n5 = kuura\n6 = lumi\n7 = jää\n8 = todennäköisesti kostea ja suolainen'
			}, {
				name : 'airTemperature',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Ilman lämpötila'
			}, {
				name : 'roadTemperature',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Tiepinnan lämpötila'
			}, {
				name : 'windSpeed',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Tuulen keskinopeus 10 minuutin ajalta (m/s)'
			}, {
				name : 'windDirection',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Keskimääräinen tuulensuunta 10 minuutin ajalta (asteena)'
			}, {
				name : 'precipitationType',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Sateen olomuoto näkyvyys-/sääanturilla.\n7 = pouta\n8 = hyvin heikko sade\n9 = tihku\n10 = vesisade\n11 = lumisade\n12 = märkä räntä\n13 = räntä\n14 = rakeita\n15 = jääkiteitä\n16 = lumijyväsiä\n17 = lumirakeita\n18 = jäätävä tihku\n19 = jäätävä sade'
			}, {
				name : 'measurementTime',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Yksittäisen aseman tietojen päivityshetki tekstinä. Muoto on "yyyyMMddHHmmss", esimerkiksi 20160606030000 = 06.06.2016 klo 03:00:00.'
			}, {
				name : 'geometry',
				type : 'Point',
				nullable : true,
				description : ''
			}
		]
	}, {
		id : 'satamakutsut',
		header : '/Satamakutsut/FeatureServer/0',
		description : 'Laivojen ilmoitetut satamakäynnit.',
		fields : [{
				name : 'OBJECTID',
				type : 'esriFieldTypeOID',
				nullable : false,
				description : 'ArcGis Onlinen antama ID'
			}, {
				name : 'PORTCALL_ID',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Satamakäynnin yksiselitteinen tekninen tunniste Portnet-järjestelmässä.'
			}, {
				name : 'PORTCALL_TIMESTAMP',
				type : 'esriFieldTypeDate',
				nullable : true,
				description : 'Satamakäyntitietojen muokkausajankohta Portnet-järjestelmässä.'
			}, {
				name : 'LAIVA_NIMI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Laivan nimi'
			}, {
				name : 'LAIVA_MAA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Laivan kotimaa'
			}, {
				name : 'SATAMA_VIIM',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Aluksen edellisen sataman koodi. Koodi UN/LOCODE mukaan, yksittäisiä poikkeamia saattaa esiintyä. <a target="_blank" href="http://www.unece.org/cefact/codesfortrade/codes_index.html">http://www.unece.org/cefact/codesfortrade/codes_index.html</a>'
			}, {
				name : 'SATAMA_SEUR',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Aluksen seuraavan sataman koodi. Koodi UN/LOCODE mukaan, yksittäisiä poikkeamia saattaa esiintyä. <a target="_blank" href="http://www.unece.org/cefact/codesfortrade/codes_index.html">http://www.unece.org/cefact/codesfortrade/codes_index.html</a>'
			}, {
				name : 'ETA',
				type : 'esriFieldTypeDate',
				nullable : true,
				description : 'Arvioitu saapumisaika (-1 = ei ilmoitettu)'
			}, {
				name : 'ATA',
				type : 'esriFieldTypeDate',
				nullable : true,
				description : 'Toteutunut saapumisaika. (-1 = ei ilmoitettu)'
			}, {
				name : 'ETD',
				type : 'esriFieldTypeDate',
				nullable : true,
				description : 'Arvioitu lähtöaika (-1 = ei ilmoitettu)'
			}, {
				name : 'ATD',
				type : 'esriFieldTypeDate',
				nullable : true,
				description : 'Toteutunut lähtöaika. (-1 = ei ilmoitettu)'
			}, {
				name : 'SATAMA_NIMI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Sataman nimi'
			}, {
				name : 'SATAMA_KOODI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Sataman koodi'
			}, {
				name : 'SATAMA_RYHMA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Satamanosaryhmän nimi.'
			}, {
				name : 'SATAMA_OSA',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Satamanosan nimi'
			}, {
				name : 'LAITURI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Laituripaikan nimi ja/tai numero.'
			}
		]
	}, {
		id : 'satamat',
		header : '/Satamat/FeatureServer/0',
		description : 'Suomen satamat ja niiden tiedot.',
		fields : [{
				name : 'OBJECTID',
				type : 'esriFieldTypeOID',
				nullable : false,
				description : 'ArcGis Onlinen antama ID'
			}, {
				name : 'PORT_COD',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Sataman koodi.'
			}, {
				name : 'PORT_NME',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Sataman nimi.'
			}, {
				name : 'BALT_COD',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'BALT_NME',
				type : 'esriFieldTypeString',
				nullable : true,
				description : ''
			}, {
				name : 'LOC_COD',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Sataman koodi UN/LOCODE mukaan. <a target="_blank" href="http://www.unece.org/cefact/codesfortrade/codes_index.html">http://www.unece.org/cefact/codesfortrade/codes_index.html</a>'
			}, {
				name : 'LOC_NME',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Sataman nimi UN/LOCODE mukaan. <a target="_blank" href="http://www.unece.org/cefact/codesfortrade/codes_index.html">http://www.unece.org/cefact/codesfortrade/codes_index.html</a>'
			}, {
				name : 'LAST_VISITED',
				type : 'esriFieldTypeDate',
				nullable : true,
				description : 'Sataman viimeisen vierailun aikaleima'
			}, {
				name : 'SHOW_PORT',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Tieto siitä näkyykö satama Liikennetilanne-palvelussa (1=kyllä, 0=ei). Palvelusta piilotetaan satamat, joissa ei ole tietyn aikaikkunan sisällä ollut satamakäyntejä.'
			}, {
				name : 'PORT_ICON',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Liikennetilanne-palvelussa käytettävän karttamerkin koodi. '
			}, {
				name : 'geometry',
				type : 'Point',
				nullable : true,
				description : ''
			}
		]
	}, {
		id : 'satamanosaryhmat',
		header : '/Satamat/FeatureServer/1',
		description : 'Suomen satamaosaryhmät. Satamanosaryhmä on Liikennetilanne-palvelua varten luotu käsite satamien ja sataman osien väliin. Yksi satamanosaryhmä kuuluu aina yhteen satamaan ja koostuu yhdestä tai useammasta satamanosasta. Esimerkiksi Helsingissä on kaksi ryhmää: Keskustan satamat ja Vuosaareen satama.',
		fields : [{
				name : 'OBJECTID',
				type : 'esriFieldTypeOID',
				nullable : false,
				description : 'ArcGis Onlinen antama ID'
			}, {
				name : 'PORT_COD',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Sataman kansainvälinen koodi'
			}, {
				name : 'PORT_NME',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Sataman nimi'
			}, {
				name : 'GROUP_COD',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Satamanosaryhmän numero, oletuksena 1'
			}, {
				name : 'GROUP_NME',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Satamanosaryhmän nimi'
			}, {
				name : 'LAST_VISITED',
				type : 'esriFieldTypeDate',
				nullable : true,
				description : 'Sataman viimeisen vierailun aikaleima'
			}, {
				name : 'SHOW_PORT',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Tieto siitä näkyykö satama Liikennetilanne-palvelussa (1=kyllä, 0=ei). Palvelusta piilotetaan satamat, joissa ei ole tietyn aikaikkunan sisällä ollut satamakäyntejä.'
			}, {
				name : 'geometry',
				type : 'Point',
				nullable : true,
				description : ''
			}
		]
	}, {
		id : 'satamanosat',
		header : '/Satamat/FeatureServer/2',
		description : 'Suomen satamien satamanosat. Satamanosa kuuluu aina yhteen satamanosaryhmään.',
		fields : [{
				name : 'OBJECTID',
				type : 'esriFieldTypeOID',
				nullable : false,
				description : 'ArcGis Onlinen antama ID'
			}, {
				name : 'PORT_COD',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Sataman kansainvälinen koodi'
			}, {
				name : 'PORT_NME',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Sataman nimi'
			}, {
				name : 'GROUP_COD',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Satamanosaryhmän numero, oletuksena 1'
			}, {
				name : 'GROUP_NME',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Satamanosaryhmän nimi'
			}, {
				name : 'P_AREA_COD',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Satamanosan koodi'
			}, {
				name : 'P_AREA_NME',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Satamanosan nimi'
			}, {
				name : 'geometry',
				type : 'Point',
				nullable : true,
				description : ''
			}
		]
	}, {
		id : 'sujuvuus',
		header : '/Sujuvuus/FeatureServer/0 - /Sujuvuus/FeatureServer/8',
		description : 'Matka-aika linkkejä pääkaupunkiseudulla. Matka-aikalinkit sisältävät tiedon  tieosuuden keskinopeus, sujuvuusluokka jne. PKS-järjestelmän matka-aikalinkit ovat linkkinumeroiltaan 1-3 numeroisia (alle 1000), eli ainoastaan pääkaupunkiseudun linkit ovat käytössä vaikka palvelu sisältäisikin koko suomen matka-aika linkit. Tietolähteenä toimii Digitrafficin rajapinta: <a target="_blank" href="https://github.com/finnishtransportagency/digitraffic/wiki/Ajantasaiset%20sujuvuustiedot">https://github.com/finnishtransportagency/digitraffic/wiki/Ajantasaiset%20sujuvuustiedot</a>',
		fields : [{
				name : 'OBJECTID',
				type : 'esriFieldTypeDouble',
				nullable : false,
				description : 'ArcGis Onlinen antama ID'
			}, {
				name : 'LINKKI',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Matka-aikalinkin numero (voimassa ainoastaan < 1000 linkit)'
			}, {
				name : 'SUUNTA',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : ''
			}, {
				name : 'SOURCE',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Tiedon lähde'
			}, {
				name : 'ATIEPIIRI',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Linkin alkupisteen tiepiirin numero'
			}, {
				name : 'ATIE',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Linkin alupisteen tienumero'
			}, {
				name : 'AOSA',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Linkin alkupisteen tiejakson osanumero'
			}, {
				name : 'AET',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Linkin alkupisteen etäisyys tiejakson alkupisteestä'
			}, {
				name : 'LTIEPIIRI',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Linkin loppupisteen tiepiirin numero'
			}, {
				name : 'LTIE',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Linkin loppupisteen tienumero'
			}, {
				name : 'LOSA',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Linkin loppupisteen tiejakson osanumero'
			}, {
				name : 'LET',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Linkin loppupisteen etäisyys tiejakson alkupisteestä'
			}, {
				name : 'TAET',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : ''
			}, {
				name : 'TLET',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : ''
			}, {
				name : 'PITUUS',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'Linkin pituus (m)'
			}, {
				name : 'SUJUVUUS',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : 'sujuvuusluokan numero\n1 = liikenne seisoo\2 = liikenne pysähtelee\n3 = liikenne hidasta\n4 = liikenne jonoutunut\n5 = liikenne sujuvaa'
			}, {
				name : 'VISIBLE',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : ''
			}, {
				name : 'TURNING',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : ''
			}, {
				name : 'REPLACEMEN',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : ''
			}, {
				name : 'Symbology',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Sujuvuuden kuvaus kymmeneellä alkavat numerot tarkoittaa linkin suuntaista tietoa ja kahdella kymmeneella alkavat tarkoittaa linkin vastainen suunta.\n10 = Ei tietoa\n11 = Liikenne seisoo\n12 = Liikenne pysähtelee\n13 = Liikenne hidasta\n14 = Liikennejonoutunut\n15 = Liikenne sujuvaa\n20 = Ei tietoa\nL21 = Liikenne seisoo\n22 = Liikenne pysähtelee\n23 = Liikenne hidasta\n24 = Liikennejonoutunut\n25 = Liikenne sujuvaa'
			}, {
				name : 'RuleID',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : ''
			}, {
				name : 'Offset',
				type : 'esriFieldTypeInteger',
				nullable : true,
				description : ''
			}, {
				name : 'm_alku',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : ''
			}, {
				name : 'm_loppu',
				type : 'esriFieldTypeDouble',
				nullable : true,
				description : ''
			}, {
				name : 'Mittausaika',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Tiedon päivityshetki'
			}, {
				name : 'NIMI',
				type : 'esriFieldTypeString',
				nullable : true,
				description : 'Tielinkin sanallinen kuvaus'
			}, {
				name : 'Keskinopeus',
				type : 'esriFieldTypeSmallInteger',
				nullable : true,
				description : 'Laskettu keskinopeus km/h'
			}, {
				name : 'geometry',
				type : 'esriGeometryPolyline',
				nullable : true,
				description : ''
			}
		]
	}
]
