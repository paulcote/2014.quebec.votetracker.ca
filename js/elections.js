var montrealDistricts = "Acadie,Anjou—Louis-Riel,Bourassa-Sauvé,Bourget,Crémazie,D'Arcy-McGee,Gouin,Hochelaga-Maisonneuve,Jacques-Cartier,Jeanne-Mance—Viger,LaFontaine,Laurier-Dorion,Marguerite-Bourgeoys,Marquette,Mercier,Mont-Royal,Nelligan,Notre-Dame-de-Grâce,Outremont,Pointe-aux-Trembles,Robert-Baldwin,Rosemont,Saint-Henri—Sainte-Anne,Saint-Laurent,Sainte-Marie—Saint-Jacques,Verdun,Viau,Westmount—Saint-Louis,Chomedey,Fabre,Laval-des-Rapides,Mille-Îles,Sainte-Rose,Vimont";

var quebecDistricts = "Charlesbourg,Chauveau,Jean-Lesage,Jean-Talon,La Peltrie,Louis-Hébert,Montmorency,Portneuf,Taschereau,Vanier-Les Rivières,Chutes-de-la-Chaudière,Lévis";

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

var regions = new Array();

function loadRegionsFromKML(file){
	$.ajax( file ,{async:false, success: function( xml ) {
	
		$( xml ).find( 'Placemark' ).each( function(nbDistrict) {
		
			var name = $( this ).find( 'name' ).text().trim();
			
			var rings = new Array();
			
			$( this ).find( 'outerBoundaryIs' ).each( function() {
				var ring = new Array();
				var coordsText = $( this ).find( 'LinearRing' ).find( 'coordinates' ).text();
				var coordStrings = coordsText.split( ' ' );
				var index = 0;
				for ( var coordText in coordStrings ) {
					var coordinate = new Array();
					var coordSplit = coordStrings[ coordText ].split( ',' );
					if(index % 2 == 0){
    					if ( coordSplit.length == 2 ) {
    						for ( var coordInd in coordSplit ) {
    							coordinate.push( Number( coordSplit[ coordInd ] ).toFixed(4) );
    						}
    						ring.push( coordinate );
    					}
    					else if ( coordSplit.length == 3 ) {
    						coordSplit.pop();
    						for ( var coordInd in coordSplit ) {
    							coordinate.push( Number( coordSplit[ coordInd ] ).toFixed(4) );
    						}
    						ring.push( coordinate );
    					}
					}
				}
				rings.push( ring );
			} );
			
			var district = findDistrictByName(name);

			regions[district.id] = new Object();
			regions[district.id].rings = new Array();
			regions[district.id].rings = rings;

			districts[district.id].rings = new Array();
			districts[district.id].rings = rings;
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
			
			if(candidate.incumbent){
				districts[district.id].color = parties[candidate.party].color;
			}
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

function loadResults(file){
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

function projectPolygonFeatures( features, id ) 
{
	var projectedFeatures = new Array();
	var minX = Infinity;
	var maxX = -Infinity;
	var minY = Infinity;
	var maxY = -Infinity;
	for ( var featureNum in features ) {
		var projectedFeature = new Array();
		var projectedRings = new Array();
		for ( var ringNum in features[ featureNum ].rings) {
			var projectedRing = new Array();
			var ring = features[ featureNum ].rings[ ringNum ];
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
	drawPolygonFeatures( features, minX, maxX, minY, maxY, id );
}

function drawPolygonFeatures( features, minX, maxX, minY, maxY, id ) 
{
	var c_canvas = document.getElementById( "map" );
	var context = c_canvas.getContext("2d");
	//context.scale(2, 2)
	c_canvas.width = c_canvas.width;
	var multiFactor = Math.min( c_canvas.width / ( maxX - minX ), c_canvas.height / ( maxY - minY ) );
	var x = 0; var y = 0;
	for ( var featureNum in features ) {
		
		context.beginPath();
		
		var minHeight = Infinity, maxHeight = 0,
			minWidth = Infinity, maxWidth = 0;
		
		for ( var ringNum in features[ featureNum ].rings ) {
			var ring = features[ featureNum ].rings[ ringNum ];
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
		
		if(id){
			context.fillStyle = ColorLuminance(features[featureNum].color,-0.8);
		}
		else{
			var grd=context.createLinearGradient(minWidth,minHeight,minWidth,maxHeight);
			grd.addColorStop(0,features[featureNum].color);
			grd.addColorStop(1,ColorLuminance(features[featureNum].color,-0.5));
			context.fillStyle = grd;
		}
		
		context.fill();
		context.strokeStyle = "#fff";
		context.stroke();
		context.closePath();
	}
	
	if(id){
		c_canvas = document.getElementById( "map2" );
		context = c_canvas.getContext("2d");
		c_canvas.width = c_canvas.width;
		multiFactor = Math.min( c_canvas.width / ( maxX - minX ), c_canvas.height / ( maxY - minY ) );
		x = 0; 
		y = 0;
		
		var minHeight = Infinity, maxHeight = 0,
			minWidth = Infinity, maxWidth = 0;
		
		for ( var ringNum in features[ id ].rings ) {
			var ring = features[ id ].rings[ ringNum ];
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
		
		
		var grd=context.createLinearGradient(minWidth,minHeight,minWidth,maxHeight);
		grd.addColorStop(0,features[id].color);
		grd.addColorStop(1,ColorLuminance(features[id].color,-0.5));
		context.fillStyle = grd;
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

$(function() {
	loadDisctricts("data/liste_circonscription.csv");
	loadRegionsFromKML("data/carte2011.kml");
	loadParties("data/partispolitiques.csv");
	loadPartiesColors("http://elections.paulcote.net/data/colors.json");
	loadCandidates("data/liste_candidat.csv");
	//projectPolygonFeatures(districts);
					
	setTimeout(function(){
		console.log('Results loaded');
		//loadPartiesResults("data/partispolitiques.csv");
		//loadCandidatesResults("data/candidats.csv");
		loadResults("http://elections.paulcote.net/data/resultats.json");
	}, 5000);
});
