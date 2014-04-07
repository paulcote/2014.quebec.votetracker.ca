var regions = [{"name" : "Montréal", "districts" : "Acadie,Anjou—Louis-Riel,Bourassa-Sauvé,Bourget,Crémazie,D'Arcy-McGee,Gouin,Hochelaga-Maisonneuve,Jacques-Cartier,Jeanne-Mance—Viger,LaFontaine,Laurier-Dorion,Marguerite-Bourgeoys,Marquette,Mercier,Mont-Royal,Nelligan,Notre-Dame-de-Grâce,Outremont,Pointe-aux-Trembles,Robert-Baldwin,Rosemont,Saint-Henri—Sainte-Anne,Saint-Laurent,Sainte-Marie—Saint-Jacques,Verdun,Viau,Westmount—Saint-Louis,Chomedey,Fabre,Laval-des-Rapides,Mille-Îles,Sainte-Rose,Vimont"},{"name" : "Québec", "districts" : "Charlesbourg,Chauveau,Jean-Lesage,Jean-Talon,La Peltrie,Louis-Hébert,Montmorency,Portneuf,Taschereau,Vanier-Les Rivières,Chutes-de-la-Chaudière,Lévis"}];

var regionsCircs = {
    "Abitibi-Est" : "Abitibi-Témiscamingue",
    "Abitibi-Ouest" : "Abitibi-Témiscamingue",
    "Rouyn-Noranda—Témiscamingue" : "Abitibi-Témiscamingue",
    "Côte-du-Sud" : "Bas-Saint-Laurent",
    "Matane-Matapédia" : "Bas-Saint-Laurent",
    "Rimouski" : "Bas-Saint-Laurent",
    "Rivière-du-Loup–Témiscouata" : "Bas-Saint-Laurent",
    "Charlesbourg" : "Capitale-Nationale",
    "Charlevoix–Côte-de-Beaupré" : "Capitale-Nationale",
    "Chauveau" : "Capitale-Nationale",
    "Jean-Lesage" : "Capitale-Nationale",
    "Jean-Talon" : "Capitale-Nationale",
    "La Peltrie" : "Capitale-Nationale",
    "Louis-Hébert" : "Capitale-Nationale",
    "Montmorency" : "Capitale-Nationale",
    "Portneuf" : "Capitale-Nationale",
    "Taschereau" : "Capitale-Nationale",
    "Vanier-Les Rivières" : "Capitale-Nationale",
    "Arthabaska" : "Centre-du-Québec",
    "Drummond–Bois-Francs" : "Centre-du-Québec",
    "Johnson" : "Centre-du-Québec",
    "Nicolet-Bécancour" : "Centre-du-Québec",
    "Beauce-Nord" : "Chaudière-Appalaches",
    "Beauce-Sud" : "Chaudière-Appalaches",
    "Bellechasse" : "Chaudière-Appalaches",
    "Chutes-de-la-Chaudière" : "Chaudière-Appalaches",
    "Côte-du-Sud" : "Chaudière-Appalaches",
    "Lévis" : "Chaudière-Appalaches",
    "Lotbinière-Frontenac" : "Chaudière-Appalaches",
    "Mégantic" : "Chaudière-Appalaches",
    "Duplessis" : "Côte-Nord",
    "René-Lévesques" : "Côte-Nord",
    "Beauce-Sud" : "Estrie",
    "Mégantic" : "Estrie",
    "Orford" : "Estrie",
    "Richmond" : "Estrie",
    "Saint-François" : "Estrie",
    "Sherbrooke" : "Estrie",
    "Bonaventure" : "Gaspésie—Îles-de-la-Madeleine",
    "Gaspé" : "Gaspésie—Îles-de-la-Madeleine",
    "Îles-de-la-Madeleine" : "Gaspésie—Îles-de-la-Madeleine",
    "Chomedey" : "Laval",
    "Fabre" : "Laval",
    "Laval-des-Rapides" : "Laval",
    "Mille-Îles" : "Laval",
    "Sainte-Rose" : "Laval",
    "Vimont" : "Laval",
    "Berthier" : "Lanaudière",
    "Bertrand" : "Lanaudière",
    "Joliette" : "Lanaudière",
    "L'Assomption" : "Lanaudière",
    "Masson" : "Lanaudière",
    "Repentigny" : "Lanaudière",
    "Rousseau" : "Lanaudière",
    "Terrebonne" : "Lanaudière",
    "Argenteuil" : "Laurentides",
    "Bertrand" : "Laurentides",
    "Blainville" : "Laurentides",
    "Deux-Montagnes" : "Laurentides",
    "Groulx" : "Laurentides",
    "Labelle" : "Laurentides",
    "Mirabel" : "Laurentides",
    "Rousseau" : "Laurentides",
    "Saint-Jérôme" : "Laurentides",
    "Champlain" : "Mauricie",
    "Laviolette" : "Mauricie",
    "Maskinongé" : "Mauricie",
    "Saint-Maurice" : "Mauricie",
    "Trois-Rivières" : "Mauricie",
    "Acadie" : "Montréal",
    "Anjou–Louis-Riel" : "Montréal",
    "Bourassa-Sauvé" : "Montréal",
    "Bourget" : "Montréal",
    "Crémazie" : "Montréal",
    "D'Arcy-McGee" : "Montréal",
    "Gouin" : "Montréal",
    "Hochelaga-Maisonneuve" : "Montréal",
    "Jacques-Cartier" : "Montréal",
    "Jeanne-Mance—Viger" : "Montréal",
    "LaFontaine" : "Montréal",
    "Laurier-Dorion" : "Montréal",
    "Marguerite-Bourgeoys" : "Montréal",
    "Marquette" : "Montréal",
    "Mercier" : "Montréal",
    "Mont-Royal" : "Montréal",
    "Nelligan" : "Montréal",
    "Notre-Dame-de-Grâce" : "Montréal",
    "Outremont" : "Montréal",
    "Pointe-aux-Trembles" : "Montréal",
    "Robert-Baldwin" : "Montréal",
    "Rosemont" : "Montréal",
    "Saint-Henri—Sainte-Anne" : "Montréal",
    "Saint-Laurent" : "Montréal",
    "Sainte-Marie—Saint-Jacques" : "Montréal",
    "Verdun" : "Montréal",
    "Viau" : "Montréal",
    "Westmount—Saint-Louis" : "Montréal",
    "Chapleau" : "Outaouais",
    "Gatineau" : "Outaouais",
    "Hull" : "Outaouais",
    "Papineau" : "Outaouais",
    "Pontiac" : "Outaouais",
    "Beauharnois" : "Montérégie",
    "Borduas" : "Montérégie",
    "Brome-Missisquoi" : "Montérégie",
    "Chambly" : "Montérégie",
    "Châteauguay" : "Montérégie",
    "Granby" : "Montérégie",
    "Huntingdon" : "Montérégie",
    "Iberville" : "Montérégie",
    "Johnson" : "Montérégie",
    "La Pinière" : "Montérégie",
    "Laporte" : "Montérégie",
    "La Prairie" : "Montérégie",
    "Marie-Victorin" : "Montérégie",
    "Montarville" : "Montérégie",
    "Richelieu" : "Montérégie",
    "Saint-Hyacinthe" : "Montérégie",
    "Saint-Jean" : "Montérégie",
    "Sanguinet" : "Montérégie",
    "Soulanges" : "Montérégie",
    "Taillon" : "Montérégie",
    "Vachon" : "Montérégie",
    "Vaudreuil" : "Montérégie",
    "Verchères" : "Montérégie",
    "Duplessis" : "Nord-du-Québec",
    "Ungava" : "Nord-du-Québec",
    "Chicoutimi" : "Saguenay—Lac-Saint-Jean",
    "Dubuc" : "Saguenay—Lac-Saint-Jean",
    "Jonquière" : "Saguenay—Lac-Saint-Jean",
    "Lac-Saint-Jean" : "Saguenay—Lac-Saint-Jean",
    "Roberval" : "Saguenay—Lac-Saint-Jean",
}

var districts = new Array();

function loadDisctricts(file){
	
	$.ajax( file ,{async:false, success: function( csv ) {
		var csvDistricts = $.csv.toArrays(csv,{separator: ';'});
		csvDistricts.splice(0,1);
		
		for (var nbDistrict=0;nbDistrict<csvDistricts.length;nbDistrict++){
			var csvDistrict = csvDistricts[nbDistrict];
			var district = new Object();
			district.id = nbDistrict;
			district.number = csvDistrict[0];
			district.name = csvDistrict[1];
			district.color = "#D6D6D6";
			district.pollsReported = 0;
			district.pollsTotal = Infinity;
			district.nbVoters = Infinity;
			district.votes = 0;
			district.validVotes = 0;
			district.rejectedVotes = 0;
			district.final = false;
			districts[parseInt(nbDistrict)] = district;
		}
	}});
		
}

function loadRegionsFromKML(file){
	$.ajax( file ,{async:false, success: function( xml ) {
	
		$( xml ).find( 'Placemark' ).each( function(nbDistrict) {
		
			var name = $( this ).find( 'name' ).text().trim();
			
			var rings = new Array();
			
			$( this ).find( 'outerBoundaryIs' ).each( function() {
				var ring = new Array();
				var coordsText = $( this ).find( 'LinearRing' ).find( 'coordinates' ).text();
				var coordStrings = coordsText.split( ' ' );
				var indexRing = 0;
				for ( var coordText in coordStrings ) {
					var coordinate = new Array();
					var coordSplit = coordStrings[ coordText ].split( ',' );
					if(indexRing % 3 == 0){
						if ( coordSplit.length == 2 ) {
							for ( var coordInd in coordSplit ) {
								coordinate.push( Number( coordSplit[ coordInd ] ) );
							}
							ring.push( coordinate );
						}
						else if ( coordSplit.length == 3 ) {
							coordSplit.pop();
							for ( var coordInd in coordSplit ) {
								coordinate.push( Number( coordSplit[ coordInd ] ) );
							}
							ring.push( coordinate );
						}
					}
					indexRing++;
				}
				rings.push( ring );
			} );
			
			var district = findDistrictByName(name);
			
			if(!districts[district.id]){
				var stop = 1;
				console.log(name);
			}
			else{
				districts[district.id].rings = new Array();
				districts[district.id].rings = rings;
			}
		});
	}});
}

function loadRegionsFromJSON(file, callback){
	$.ajax( file ,{async:false, success: function( json ) {
		var my_lzma = new LZMA("js/vendor/lzmajs/src/lzma_worker.js");
		my_lzma.decompress(json, function(result) {
			
			var regions = JSON.parse(result);
			
			var arr = regions,
			    len, i;
			
			for (i = 0, len = arr.length; i < len; i++) {
				var rings = arr[i].rings;
				
				districts[i].rings = rings;
			}
			
			callback();
		
		}, function(percent) {
			if(Math.ceil(percent*100) == 100){
				$('.percent-load').text("99%");
			}
			else{
				$('.percent-load').text(Math.ceil(percent*100)+"%");
			}
		
		});
	}});
}

var parties = new Array();

function loadParties(file){
	
	$.ajax( file ,{async:false, success: function( csv ) {
		var csvParties = $.csv.toArrays(csv,{separator: ';'});
		csvParties.splice(0,1);
		
		for (var nbParty=0;nbParty<csvParties.length;nbParty++){
			var csvParty = csvParties[nbParty];
			var party = new Object();
			
			party.id = nbParty;
			party.number = csvParty[0];
			party.name = csvParty[1];
			party.abbr = csvParty[2];
			party.nbCandidates = 0;
			party.nbVotes = 0;
			party.nbVotesPercent = 0;
			party.nbDistricts = 0;
			party.nbDistrictsPercent = 0;
			party.color = "#D6D6D6";
			
			parties.push(party);
		}
	}});
	
}

function loadPartiesColors(file){
	$.ajax( file ,{async:false, success: function( json ) {
		var arr = json.parties,
		    len, i;
		
		for (i = 0, len = arr.length; i < len; i++) {
			var partyJson = arr[i];
			var party = findPartyByName(partyJson.name);
			
			if(party){
				parties[party.id].color = partyJson.color;
			}
		}
	}});
		
}

function loadCandidates(file){
	
	$.ajax( file ,{async:false, success: function( csv ) {
		var csvCandidates = $.csv.toArrays(csv,{separator: ';'});
		csvCandidates.splice(0,1);
		
		for (var nbCandidate=0;nbCandidate<csvCandidates.length;nbCandidate++){
			var csvCandidate = csvCandidates[nbCandidate];
			var candidate = new Object();
			candidate.id = nbCandidate;
			candidate.number = csvCandidate[2];
			candidate.lastname = csvCandidate[4];
			candidate.firstname = csvCandidate[5];
			candidate.incumbent = (csvCandidate[10] == 'O' ? true : false);
			candidate.sex = csvCandidate[3]
			candidate.nbVotes = 0;
			candidate.nbVotesPercent = 0;
			
			var party = findPartyByName(csvCandidate[9]);
			if(parties[party.id]){
				candidate.party = party.id;
				parties[party.id].nbCandidates = party.nbCandidates+1;
			}
			else{
				var party = new Object();
				party.id = parties.length;
				party.abbr = csvCandidate[8];
				party.name = csvCandidate[9];
				party.nbCandidates = 1;
				party.nbVotes = 0;
				party.nbVotesPercent = 0;
				party.nbDistricts = 0;
				party.nbDistrictsPercent = 0;
				party.color = "#D6D6D6";
				parties.push(party);
				loadPartiesColors("data/colors.json");
				candidate.party = party.id;
			}
			
			var district = findDistrictByNumber(csvCandidate[0]);
			if(districts[district.id].candidates){
				districts[district.id].candidates.push(candidate);
			}
			else{
				districts[district.id].candidates = new Array();
				districts[district.id].candidates.push(candidate);
			}
			
			/*if(candidate.incumbent){
				districts[district.id].color = parties[candidate.party].color;
			}*/
		}
	}});
	
}

function loadPartiesResults(file){
	
	$.ajax( file ,{async:false, success: function( csv ) {
		var csvParties = $.csv.toArrays(csv,{separator: ';'});
		csvParties.splice(0,1);
		
		for (var nbParty=0;nbParty<csvParties.length;nbParty++){
			var csvParty = csvParties[nbParty];
			
			var party = findPartyByName(csvParty[1]);
			
			parties[party.id].nbVotes = parseInt(csvParty[3]);
			parties[party.id].nbVotesPercent = parseFloat(csvParty[4])/100;
			parties[party.id].nbDistricts = parseInt(csvParty[5]);
			parties[party.id].nbDistrictsPercent = parseFloat(csvParty[6])/100;
		}
	}});
}

function loadCandidatesResults(file){
	
	$.ajax( file ,{async:false, success: function( csv ) {
		var csvCandidates = $.csv.toArrays(csv,{separator: ';'});
		csvCandidates.splice(0,1);
		
		for (var nbCandidate=0;nbCandidate<csvCandidates.length;nbCandidate++){
			var csvCandidate = csvCandidates[nbCandidate];
			csvCandidate[1] = 436;
			var district = findDistrictByNumber(csvCandidate[0]);
			
			var arr = district.candidates,
			    len, i;
			
			for (i = 0, len = arr.length; i < len; i++) {
				var candidate = district.candidates[i];
				if(candidate.number == csvCandidate[1]){
					districts[district.id].candidates[i].nbVotes = parseInt(csvCandidate[6]);
					districts[district.id].candidates[i].nbVotesPercent = parseFloat(csvCandidate[7])/100;
				}
			}
			
		}
	
		var arr = districts,
		    len, i;
		
		for (i = 0, len = arr.length; i < len; i++) {
			var district = districts[i];
			var candidates = district.candidates;
			
			if(candidates){
				candidates.sort(function(x, y){ 
					if(x.nbVotes == y.nbVotes){
						if(x.incumbent){
							return -1;
						}
						else{
							return 0;
						}
					}
					return x.nbVotes > y.nbVotes 
				});
				
				districts[i].candidates = candidates;
			}
			
		}
	}});
}

function loadResults(file, callback){
	$.ajax( file ,{async:false, success: function( json ) {
	
		var arr = json.circonscriptions,
		    len, i;
		
		for (i = 0, len = arr.length; i < len; i++) {
			var circonscription = arr[i];
			
			var district = findDistrictByNumber(circonscription.numeroCirconscription);
			
			districts[district.id].pollsReported = circonscription.nbBureauComplete;
			districts[district.id].pollsTotal = circonscription.nbBureauTotal;
			districts[district.id].nbVoters = circonscription.nbElecteurInscrit;
			districts[district.id].votes = circonscription.nbVoteExerce;
			districts[district.id].validVotes = circonscription.nbVoteValide;
			districts[district.id].rejectedVotes = circonscription.nbVoteRejete;
			districts[district.id].final = circonscription.isResultatsFinaux;
			
			var arr1 = district.candidates,
			    len1, i1, winningParty, mostVotes = 0;
			
			for (i1 = 0, len1 = arr1.length; i1 < len1; i1++) {
				var candidate = district.candidates[i1];
				
				var arr2 = circonscription.candidats,
				    len2, i2;
				
				for (i2 = 0, len2 = arr2.length; i2 < len2; i2++) {
					var candidateJson = circonscription.candidats[i2];
					
					if(candidate.number == candidateJson.numeroCandidat){
						districts[district.id].candidates[i1].nbVotes = candidateJson.nbVoteTotal;
						districts[district.id].candidates[i1].nbVotesPercent = candidateJson.tauxVote/100;
						
						if(candidateJson.nbVoteTotal > mostVotes){
							mostVote = candidateJson.nbVoteTotal;
							winningParty = districts[district.id].candidates[i1].party;
						}
					}
					
				}
			}
			
			if(mostVotes != 0)
				districts[district.id].color = parties[winningParty].color;
		}
		
		var arr = districts,
		    len, i;
		
		for (i = 0, len = arr.length; i < len; i++) {
			var district = districts[i];
			var candidates = district.candidates;
			
			if(candidates){
				candidates.sort(function(x, y){ 
					if(x.nbVotes == y.nbVotes){
						if(x.incumbent){
							return -1;
						}
						else{
							return 0;
						}
					}
					return x.nbVotes > y.nbVotes 
				});
				
				districts[i].candidates = candidates;
			}
			
		}
		
		if(callback)
			callback();
		
	},error: function(){
		if(callback)
			callback();
	}});
}

function showDistrict(id){
	console.log(districts[id].name);
	projectPolygonFeatures(districts,id);
}

function findDistrictByName(name){
	var result = $.grep(districts, function(e){ 
		return e.name == name; 
	});
	if(result.length > 1){
		return result;
	}
	else if(result.length == 1){
		return result[0];
	}
	else{
		return false;
	}
}

function findDistrictByNumber(number){
	var result = $.grep(districts, function(e){ 
		return e.number == number; 
	});
	if(result.length > 1){
		return result;
	}
	else if(result.length == 1){
		return result[0];
	}
	else{
		return false;
	}
}

function getSubsetDistricts(districtsList){
	var districtsSubset = new Array();
	
	var arr = districtsList.split(','),
	    len, i;
	
	for (i = 0, len = arr.length; i < len; i++) {
		var circonscription = arr[i];
		var district = findDistrictByName(circonscription);
		if(district)
			districtsSubset.push(district);
	}
	
	return districtsSubset;
}

function findPartyByName(name){
	var result = $.grep(parties, function(e){ 
		return e.name == name; 
	});
	if(result.length > 1){
		return result;
	}
	else if(result.length == 1){
		return result[0];
	}
	else{
		return false;
	}
}

function showMap( districtsMap, map ) 
{
	var projectedFeatures = new Array();
	var minX = Infinity;
	var maxX = -Infinity;
	var minY = Infinity;
	var maxY = -Infinity;
	for ( var featureNum in districtsMap ) {
		var projectedFeature = new Array();
		var projectedRings = new Array();
		for ( var ringNum in districtsMap[ featureNum ].rings) {
			var projectedRing = new Array();
			var ring = districtsMap[ featureNum ].rings[ ringNum ];
			var pt = new Proj4js.Point();
			for ( var coordNum in ring ) {
				var coord = ring[ coordNum ];
				pt.x = coord[ 0 ];
				pt.y = coord[ 1 ];
				var projectedCoord = [ pt.x, pt.y ];
				projectedRing.push( projectedCoord );
				if ( pt.x > maxX ) maxX = pt.x;
				if ( pt.y > maxY ) maxY = pt.y;
				if ( pt.x < minX ) minX = pt.x;
				if ( pt.y < minY ) minY = pt.y;
			}
			projectedRings.push( projectedRing );
		}
		projectedFeature.rings = projectedRings;
		projectedFeatures.push( projectedFeature );
	}
	drawMap( districtsMap, minX, maxX, minY, maxY, map );
}

function drawMap( districtsMap, minX, maxX, minY, maxY, map ) 
{
	var c_canvas = $(map).get(0);
	var context = c_canvas.getContext("2d");
	//context.scale(2, 2)
	//c_canvas.width = c_canvas.width;
	c_canvas.width = $(map).width();
	c_canvas.height = $(map).height();
	var multiFactor = Math.min( c_canvas.width / ( maxX - minX ), c_canvas.height / ( maxY - minY ) );
	var x = 0; var y = 0;
	for ( var featureNum in districtsMap ) {
		
		context.beginPath();
		
		var minHeight = Infinity, maxHeight = 0,
			minWidth = Infinity, maxWidth = 0;
		
		for ( var ringNum in districtsMap[ featureNum ].rings ) {
			var ring = districtsMap[ featureNum ].rings[ ringNum ];
			context.moveTo( ( ring[ 0 ][ 0 ] - minX ) * multiFactor, c_canvas.height - ( ring[ 0 ][ 1 ] - minY ) * multiFactor );						
			for ( var coordNum = 1; coordNum < ring.length; coordNum++ ) {
				x = ( ring[ coordNum ][ 0 ] - minX ) * multiFactor;
				y = c_canvas.height - ( ring[ coordNum ][ 1 ] - minY ) * multiFactor;
				context.lineTo( x, y );
				
				if(x < minWidth)
					minWidth = x;
				if(x > maxWidth)
					maxWidth = x;
				if(y < minHeight)
					minHeight = y;
				if(y > maxHeight)
					maxHeight = y;
			}
		}
		
		if(districtsMap.length > 1){
			context.fillStyle = districtsMap[featureNum].color;
		}
		else {
			context.fillStyle = "#fff";
		}
		
		context.fill();
		context.strokeStyle = "#fff";
		context.stroke();
		context.closePath();
	}
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function ColorLuminance(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}

function print(obj, maxDepth, prefix){
   var result = '';
   if (!prefix) prefix='';
   for(var key in obj){
       if (typeof obj[key] == 'object'){
           if (maxDepth !== undefined && maxDepth <= 1){
               result += (prefix + key + '=object [max depth reached]\n');
           } else {
               result += print(obj[key], (maxDepth) ? maxDepth - 1: maxDepth, prefix + key + '.');
           }
       } else {
           result += (prefix + key + '=' + obj[key] + '\n');
       }
   }
   return result;
}

var basicPartiesAbbr = ['plqqlp','plq','pq','caq','caqefl','on','onpiq','qs'];

function createDistrictScreen(id){

	$('.overview:not(.model), .district:not(.model)').remove();
	
	var district = districts[id];

	var districtScreen = $(".district.model").clone();
	districtScreen.removeClass('model').addClass('active').addClass('d'+id);
	districtScreen.find('h2').text(district.name);
	districtScreen.find('.details .region').text(regionsCircs[district.name]);
	districtScreen.find('.details .button').remove();
	
	var arr2 = district.candidates,
	    len, i;
	
	var candidatesOutput = '';
	for (ci = 0, len = arr2.length; ci < len; ci++) {
		var candidate = district.candidates[ci];
		
		var partyAbbr = parties[candidate.party].abbr.toLowerCase().replace('é','e').replace(/[^a-zA-Z0-9]/g,'');
		if(basicPartiesAbbr.indexOf(partyAbbr) == -1){
			partyAbbr = 'otr';
		}
		
		candidatesOutput += '<li>';
			candidatesOutput += '<div class="infos">';
				candidatesOutput += '<h3>'+candidate.firstname+' <strong>'+candidate.lastname+'</strong></h3>';
				candidatesOutput += '<span class="leader">'+parties[candidate.party].name+'</span>';
				if(candidate.incumbent)
					candidatesOutput += '<span class="rounded button border white">Sortant</span>';
				if(ci == 0 && district.pollsReported != 0 && district.votes > 0)
					candidatesOutput += '<span class="rounded button border white">En avance</span>';
				else if(ci == 0 && candidate.incumbent && district.pollsReported == district.pollsTotal && district.votes > 0)
					candidatesOutput += '<span class="rounded filled button border white">Rélu'+(candidate.sex == 'F'?'e':'')+'</span>';
				else if(ci == 0 && district.pollsReported == district.pollsTotal && district.votes > 0)
					candidatesOutput += '<span class="rounded filled button border white">Élu'+(candidate.sex == 'F'?'e':'')+'</span>';
			candidatesOutput += '</div>';
			candidatesOutput += '<span class="box bg border '+partyAbbr+' rounded">';
				candidatesOutput += '<span class="picture rounded drkgb '+partyAbbr+'">';
					candidatesOutput += '<img class="rounded" src="img/logos/'+partyAbbr+'.png" alt="" />';
				candidatesOutput += '</span>';
				candidatesOutput += '<span class="percent">'+(candidate.nbVotesPercent*100)+'%</span>';
				candidatesOutput += '<span class="votes">'+candidate.nbVotes.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')+'<span class="visuallyhidden"> votes</span></span>';
			candidatesOutput += '</span>';
		candidatesOutput += '</li>';
	}
	districtScreen.find('ul').html(candidatesOutput);
	
	if(district.final){
		districtScreen.find('.details').append('<span class="rounded filled button border white">Résultats finaux</span>');
	}
	else if(district.pollsReported == 0){
		districtScreen.find('.details').append('<span class="rounded button border white">Aucune données</span>');
	}
	else if(district.pollsReported != 0 && district.pollsReported != district.pollsTotal){
		districtScreen.find('.details').append('<span class="rounded button border white">En dépouillement</span><span class="rounded button filled border white offset-left">'+Math.floor(district.pollsReported/district.pollsTotal*100)+'%</span>');
	}
	else if(district.pollsReported != 0 && district.pollsReported == district.pollsTotal){
		districtScreen.find('.details').append('<span class="rounded button border white">Résultats non officiels</span>');
	}
	
	if(!district.votes > 0){
		districtScreen.find('ul').addClass('no-advance');
	}
	
	districtScreen.insertAfter(".district:last");
	showMap([district],districtScreen.find('canvas'));
}


function createOverviewScreen(id){

	$('.overview:not(.model), .district:not(.model)').remove();
	
	if(id != -1){
		var region = regions[id];
		var districtsScreen = getSubsetDistricts(region.districts);
	}
	else {
		var region = {};
		region.name = "Québec";
		var districtsScreen = districts;
	}

	var overviewScreen = $(".overview.model").clone();
	overviewScreen.removeClass('model').addClass('active').addClass('r'+id);
	overviewScreen.find('h2').text(region.name);
	overviewScreen.find('.details .button').remove();
	
	var countParties = [];
	var arr = districtsScreen,
	    len, i;
	
	for (i = 0, len = arr.length; i < len; i++) {
		var district = districtsScreen[i];
		
		if(!countParties[district.candidates[0].party]){
			countParties[district.candidates[0].party] = {};
			countParties[district.candidates[0].party].id = district.candidates[0].party;
			countParties[district.candidates[0].party].won = 0;
			countParties[district.candidates[0].party].advance = 0;
		}
		
		if(district.final || district.pollsReported == district.pollsTotal){
			countParties[district.candidates[0].party].won++;
		}
		else if(district.noVotes > 0){
			countParties[district.candidates[0].party].advance++;
		}
	}
	
	var candidatesOutput = '';
	
	countParties.sort(function(x, y){ 
		if((x.won+x.advance) == (y.won+y.advance)){
			if(x.won == y.won){
				if(x.advance == y.advance){
					return 0;
				}
				else{
					return (x.advance) > (y.advance);
				}
			}
			else{
				return (x.won) > (y.won);
			}
		}
		return (x.won+x.advance) > (y.won+y.advance)
	});
	
	var arr = countParties,
	    len, i;
	
	for (i = 0, len = arr.length; i < len; i++) {
	  	var partyCount = countParties[i];
		
		if(typeof partyCount !== "undefined"){
			var partyAbbr = parties[partyCount.id].abbr.toLowerCase().replace('é','e').replace(/[^a-zA-Z0-9]/g,'');
			if(basicPartiesAbbr.indexOf(partyAbbr) != -1){
		    	candidatesOutput += '<li>';
		    		candidatesOutput += '<div class="infos">';
		    			
		    			partyName = parties[partyCount.id].name;
		    			if(partyName.indexOf('-') != -1){
		    				partyName = partyName.substr(0, partyName.indexOf('-'));
		    			}
		    			else if(partyName.indexOf('/') != -1){
		    				partyName = partyName.substr(0, partyName.indexOf('/'));
		    			}
		    		
		    			candidatesOutput += '<h3>'+partyName+'</h3>';
		    			//candidatesOutput += '<span class="leader">'+parties[partyCount.id].leader+'</span>';
		    			
		    		candidatesOutput += '</div>';
		    		candidatesOutput += '<span class="box bg border '+partyAbbr+' rounded">';
		    			candidatesOutput += '<span class="picture rounded drkgb '+partyAbbr+'">';
		    				candidatesOutput += '<img class="rounded" src="img/logos/'+partyAbbr+'.png" alt="" />';
		    			candidatesOutput += '</span>';
		    			candidatesOutput += '<span class="seats">'+partyCount.won+'<span class="visuallyhidden"> sièges</span></span>';
		    			candidatesOutput += '<span class="advance">+ '+partyCount.advance+'<span class="visuallyhidden"> sièges</span></span>';
		    		candidatesOutput += '</span>';
		    	candidatesOutput += '</li>';
			}
		}
	}
	
	overviewScreen.find('ul').html(candidatesOutput);
	
	overviewScreen.insertAfter(".overview:last");
	showMap(districtsScreen,overviewScreen.find('canvas'));
}

function createPartiesResults(){
	
	var districtsScreen = districts;
	var countParties = [];
	var arr = districtsScreen,
	    len, i;
	
	for (i = 0, len = arr.length; i < len; i++) {
		var district = districtsScreen[i];
		
		if(!countParties[district.candidates[0].party]){
			countParties[district.candidates[0].party] = {};
			countParties[district.candidates[0].party].id = district.candidates[0].party;
			countParties[district.candidates[0].party].won = 0;
			countParties[district.candidates[0].party].advance = 0;
		}
		
		if(district.final || district.pollsReported == district.pollsTotal){
			countParties[district.candidates[0].party].won++;
		}
		else if(district.noVotes > 0){
			countParties[district.candidates[0].party].advance++;
		}
	}
	
	countParties.sort(function(x, y){ 
		if((x.won+x.advance) == (y.won+y.advance)){
			if(x.won == y.won){
				if(x.advance == y.advance){
					return 0;
				}
				else{
					return (x.advance) > (y.advance);
				}
			}
			else{
				return (x.won) > (y.won);
			}
		}
		return (x.won+x.advance) > (y.won+y.advance)
	});
	
	var arr = countParties,
	    len, i;
	
	var partiesOutput = '';
	
	for (i = 0, len = arr.length; i < len; i++) {
		var partyCount = countParties[i];
		
		if(typeof partyCount !== "undefined"){
			var partyAbbr = parties[partyCount.id].abbr.toLowerCase().replace('é','e').replace(/[^a-zA-Z0-9]/g,'');
			if(basicPartiesAbbr.indexOf(partyAbbr) != -1){
					
				partyName = parties[partyCount.id].abbr;
				if(partyName.indexOf('-') != -1){
					partyName = partyName.substr(0, partyName.indexOf('-'));
				}
				else if(partyName.indexOf('/') != -1){
					partyName = partyName.substr(0, partyName.indexOf('/'));
				}
				
				partyName = partyName.toLowerCase().replace('é','e').replace(/[^a-zA-Z0-9]/g,'').toUpperCase();
						
				partiesOutput += '<li class="rounded fntclr border elected '+partyAbbr+'">';
					partiesOutput += '<span class="abbr">'+partyName+'</span>';
					partiesOutput += '<span class="seats">'+(partyCount.won+partyCount.advance)+'</span>';
				partiesOutput += '</li>';
			}
		}
	}
	
	$('header .parties').html(partiesOutput);
}

function createMenu(){
	var arr = districts,
		i, len;

	for (i = 0, len = arr.length; i < len; i++) {
		var district = districts[i];
		
		$('header .menu .districts ul').append('<li class="d'+district.id+'"><a href="#d'+district.id+'">'+district.name+'</a></li>');
		
	}
	
	$('.menu .districts a').on('click',function(e){
		createDistrictScreen(Number($(this).parent().attr('class').replace('d', '')));
	});
	
	var arr = regions,
		i, len;

	for (i = 0, len = arr.length; i < len; i++) {
		var region = regions[i];
		
		$('header .menu .regions ul').append('<li class="r'+i+'"><a href="#r'+i+'">'+region.name+'</a></li>');
		
	}
	
	$('.menu .regions a').on('click',function(e){
		createOverviewScreen(Number($(this).parent().attr('class').replace('r', '')));
	});
}

function updateCurrentScreens(){
	$.each($('.overview:not(.model), .district:not(.model)'), function( index, value ) {
		if($(this).hasClass('overview'))
			createOverviewScreen(Number($(this).attr('class').replace('overview active r', '')));
		else if($(this).hasClass('district'))
			createDistrictScreen(Number($(this).attr('class').replace('district active d', '')));
	});
}

var timer = -1;
function updateData(){
	
	if(timer == 0){
		timer --;
		$('.maj').html('<span class="rounded button filled border white">Mise à jour<span class="one">.</span><span class="two">.</span><span class="three">.</span>​</span>');
		loadResults("http://elections.paulcote.net/data/resultats.json", function(){
			createPartiesResults();
			updateCurrentScreens();
			setTimeout("timer = 150;",3000);
		});
	}
	else if(timer > 0){
		timer --;
	
		if(timer > 60){
			$('.maj').html('<span class="rounded button border white">Mise à jour dans </span><span class="rounded button filled border white offset-left">'+Math.ceil(timer/60)+'m</span>');
		}
		else{
			$('.maj').html('<span class="rounded button border white">Mise à jour dans </span><span class="rounded button filled border white offset-left">'+timer+'s</span>');
		}
	}
}

$(function() {

	$('h1 a').on('click',function(e){
		createOverviewScreen(-1);
	});

	$('#licence').on('click',function(e){
		e.stopPropagation();
		$('footer .licence').css('display','block');
	});
	
	$('.licence').on('click',function(e){
		e.stopPropagation();
	});
	
	$('html').on('click',function(e){
		$('footer .licence').css('display','none');
	});

	setTimeout(function(){
		loadDisctricts("data/liste_circonscription.csv");
		loadParties("data/partispolitiques.csv");
		loadPartiesColors("data/colors.json");
		loadCandidates("data/liste_candidat.csv");
		loadRegionsFromJSON("data/regions.json",function(){
			createMenu();
			
			if(window.location.hash) {
			  if(window.location.hash.indexOf('#d') != -1){
			      createDistrictScreen(Number(window.location.hash.replace('#d', '')));
			  }
			  else if (window.location.hash.indexOf('#r') != -1) {
			      createOverviewScreen(Number(window.location.hash.replace('#r', '')));
			  }
			}
			else{
    			createOverviewScreen(-1);
			}
			
			$('.maj').html('<span class="rounded button filled border white">Mise à jour<span class="one">.</span><span class="two">.</span><span class="three">.</span>​</span>');
			loadResults("http://elections.paulcote.net/data/resultats.json", function(){
				createPartiesResults();
				updateCurrentScreens();
				$('.percent-load').text("100%");
				$('body').removeClass('loading');
				setInterval(updateData,1000);
				setTimeout("timer = 150;",3000);
			});

		});
	}, 1000);
});
