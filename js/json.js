// Irvin Reaves
// Project 1
// MIU 1204
// Mobile Development
// Full Sail University
// Music Catalog js


var json = {
	"song1": {
		"songInfo": ["Select Song Type:", "Party"],
		"sname": ["Name of Song:", "Raw"],
		"aname": ["Album:", "Raw"],
		"arname": ["Artist:", "Kane"],
		"url": ["Music Down website:", "http://www.apple.com"],
		"favorite": ["Favorite:", "Yes"],
		"fav": ["Save as Favorite:", "Yes"],
		"range": ["Rating:", "5"],
		"date": ["Date:", "2012-4-21"],
		"notes": ["Notes:", "MiU"]
	},
	"song2": {
		"songInfo": ["Select Song Type:", "Relaxed"],
		"sname": ["Name of Song:", "Live"],
		"aname": ["Album:", "Live"],
		"arname": ["Artist:", "Live Band"],
		"url": ["Music Down website:", "http://www.yahoo.com"],
		"favorite": ["Favorite:", "No"],
		"fav": ["Save as Favorite:", "Yes"],
		"range": ["Rating:", "7"],
		"date": ["Date:", "2012-4-19"],
		"notes": ["Notes:", "MiU"]
	},
	"song3": {
		"songInfo": ["Select Song Type:", "Fun"],
		"sname": ["Name of Song:", "Good Times"],
		"aname": ["Album:", "Funk Band"],
		"arname": ["Artist:", "Tim"],
		"url": ["Music Down website:", "http://www.rhaposody.com"],
		"favorite": ["Favorite:", "Yes"],
		"fav": ["Save as Favorite:", "Yes"],
		"range": ["Rating:", "4"],
		"date": ["Date:", "2012-4-22"],
		"notes": ["Notes:", "MiU"]
	},
	"song4": {
		"songInfo": ["Select Song Type:", "Other"],
		"sname": ["Name of Song:", "Jazz Cool"],
		"aname": ["Album:", "Jazz Time"],
		"arname": ["Artist:", "Cool Breeze"],
		"url": ["Music Down website:", "http://www.apple.com"],
		"favorite": ["Favorite:", "Yes"],
		"fav": ["Save as Favorite:", "Yes"],
		"range": ["Rating:", "10"],
		"date": ["Date:", "2012-4-17"],
		"notes": ["Notes:", "MiU"]
	},

	"song5": {
		"songInfo": ["Select Song Type:", "Party"],
		"sname": ["Name of Song:", "Jump To It"],
		"aname": ["Album:", "Old School Jams 4"],
		"arname": ["Artist:", "Aretha Franklin"],
		"url": ["Music Down website:", "http://www.apple.com"],
		"favorite": ["Favorite:", "Yes"],
		"fav": ["Save as Favorite:", "Yes"],
		"range": ["Rating:", "10"],
		"date": ["Date:", "2012-4-17"],
		"notes": ["Notes:", "MiU"]
	},
	"song6": {
		"songInfo": ["Select Song Type:", "Other"],
		"sname": ["Name of Song:", "South Bronx"],
		"aname": ["Album:", "Criminal Minded"],
		"arname": ["Artist:", "Boogie Down Production"],
		"url": ["Music Down website:", "http://www.apple.com"],
		"favorite": ["Favorite:", "Yes"],
		"fav": ["Save as Favorite:", "Yes"],
		"range": ["Rating:", "9"],
		"date": ["Date:", "2012-4-21"],
		"notes": ["Notes:", "MiU"]
	},
	"song7": {
		"songInfo": ["Select Song Type:", "Relaxed"],
		"sname": ["Name of Song:", "Best Friend"],
		"aname": ["Album:", "Brandy"],
		"arname": ["Artist:", "Brandy"],
		"url": ["Music Down website:", "http://www.yahoo.com"],
		"favorite": ["Favorite:", "No"],
		"fav": ["Save as Favorite:", "Yes"],
		"range": ["Rating:", "7"],
		"date": ["Date:", "2012-4-19"],
		"notes": ["Notes:", "MiU"]
	},
	"song8": {
		"songInfo": ["Select Song Type:", "Fun"],
		"sname": ["Name of Song:", "Word Up"],
		"aname": ["Album:", "Cameo"],
		"arname": ["Artist:", "Cameo"],
		"url": ["Music Down website:", "http://www.rhaposody.com"],
		"favorite": ["Favorite:", "Yes"],
		"fav": ["Save as Favorite:", "Yes"],
		"range": ["Rating:", "4"],
		"date": ["Date:", "2012-4-22"],
		"notes": ["Notes:", "MiU"]
	},
	"song9": {
		"songInfo": ["Select Song Type:", "Other"],
		"sname": ["Name of Song:", "Treat Em Right"],
		"aname": ["Album:", "Chubb Rock"],
		"arname": ["Artist:", "Chubb Rock"],
		"url": ["Music Down website:", "http://www.apple.com"],
		"favorite": ["Favorite:", "Yes"],
		"fav": ["Save as Favorite:", "Yes"],
		"range": ["Rating:", "10"],
		"date": ["Date:", "2012-4-17"],
		"notes": ["Notes:", "MiU"]
	},

	"song10": {
		"songInfo": ["Select Song Type:", "Party"],
		"sname": ["Name of Song:", "Glamourous Life"],
		"aname": ["Album:", "Cool C"],
		"arname": ["Artist:", "Cool C"],
		"url": ["Music Down website:", "http://www.apple.com"],
		"favorite": ["Favorite:", "Yes"],
		"fav": ["Save as Favorite:", "Yes"],
		"range": ["Rating:", "10"],
		"date": ["Date:", "2012-4-17"],
		"notes": ["Notes:", "MiU"]
	},
	"song11": {
		"songInfo": ["Select Song Type:", "Other"],
		"sname": ["Name of Song:", "Call Me D Nice"],
		"aname": ["Album:", "D-Nice"],
		"arname": ["Artist:", "D-Nice"],
		"url": ["Music Down website:", "http://www.apple.com"],
		"favorite": ["Favorite:", "Yes"],
		"fav": ["Save as Favorite:", "Yes"],
		"range": ["Rating:", "9"],
		"date": ["Date:", "2012-4-21"],
		"notes": ["Notes:", "MiU"]
	},
	"song12": {
		"songInfo": ["Select Song Type:", "Relaxed"],
		"sname": ["Name of Song:", "It's Funky Enough"],
		"aname": ["Album:", "The D. O. C."],
		"arname": ["Artist:", "The D. O. C."],
		"url": ["Music Down website:", "http://www.yahoo.com"],
		"favorite": ["Favorite:", "No"],
		"fav": ["Save as Favorite:", "Yes"],
		"range": ["Rating:", "7"],
		"date": ["Date:", "2012-4-19"],
		"notes": ["Notes:", "MiU"]
	},
	"song13": {
		"songInfo": ["Select Song Type:", "Fun"],
		"sname": ["Name of Song:", "Cinderfella"],
		"aname": ["Album:", "Dana Dane"],
		"arname": ["Artist:", "Dana Dane"],
		"url": ["Music Down website:", "http://www.rhaposody.com"],
		"favorite": ["Favorite:", "Yes"],
		"fav": ["Save as Favorite:", "Yes"],
		"range": ["Rating:", "4"],
		"date": ["Date:", "2012-4-22"],
		"notes": ["Notes:", "MiU"]
	},
	"song14": {
		"songInfo": ["Select Song Type:", "Other"],
		"sname": ["Name of Song:", "Best Kept Secret"],
		"aname": ["Album:", "Diamond D"],
		"arname": ["Artist:", "Diamond D"],
		"url": ["Music Down website:", "http://www.apple.com"],
		"favorite": ["Favorite:", "Yes"],
		"fav": ["Save as Favorite:", "Yes"],
		"range": ["Rating:", "10"],
		"date": ["Date:", "2012-4-17"],
		"notes": ["Notes:", "MiU"]
	},

	"song15": {
		"songInfo": ["Select Song Type:", "Party"],
		"sname": ["Name of Song:", "Reasons"],
		"aname": ["Album:", "Earth Wind & Fire"],
		"arname": ["Artist:", "Earth Wind & Fire"],
		"url": ["Music Down website:", "http://www.apple.com"],
		"favorite": ["Favorite:", "Yes"],
		"fav": ["Save as Favorite:", "Yes"],
		"range": ["Rating:", "10"],
		"date": ["Date:", "2012-4-17"],
		"notes": ["Notes:", "MiU"]
	},
	"song16": {
		"songInfo": ["Select Song Type:", "Other"],
		"sname": ["Name of Song:", "Lies"],
		"aname": ["Album:", "En Vogue"],
		"arname": ["Artist:", "En Vogue"],
		"url": ["Music Down website:", "http://www.apple.com"],
		"favorite": ["Favorite:", "Yes"],
		"fav": ["Save as Favorite:", "Yes"],
		"range": ["Rating:", "9"],
		"date": ["Date:", "2012-4-21"],
		"notes": ["Notes:", "MiU"]
	},
	"song17": {
		"songInfo": ["Select Song Type:", "Relaxed"],
		"sname": ["Name of Song:", "Cross Over"],
		"aname": ["Album:", "EPMD"],
		"arname": ["Artist:", "EPMD"],
		"url": ["Music Down website:", "http://www.yahoo.com"],
		"favorite": ["Favorite:", "No"],
		"fav": ["Save as Favorite:", "Yes"],
		"range": ["Rating:", "7"],
		"date": ["Date:", "2012-4-19"],
		"notes": ["Notes:", "MiU"]
	},
	"song18": {
		"songInfo": ["Select Song Type:", "Fun"],
		"sname": ["Name of Song:", "Nice N Slow"],
		"aname": ["Album:", "Freddy Jackson"],
		"arname": ["Artist:", "Freddy Jackson"],
		"url": ["Music Down website:", "http://www.rhaposody.com"],
		"favorite": ["Favorite:", "Yes"],
		"fav": ["Save as Favorite:", "Yes"],
		"range": ["Rating:", "4"],
		"date": ["Date:", "2012-4-22"],
		"notes": ["Notes:", "MiU"]
	},
	"song19": {
		"songInfo": ["Select Song Type:", "Other"],
		"sname": ["Name of Song:", "Ready Or Not"],
		"aname": ["Album:", "The Fugees"],
		"arname": ["Artist:", "The Fugees"],
		"url": ["Music Down website:", "http://www.apple.com"],
		"favorite": ["Favorite:", "Yes"],
		"fav": ["Save as Favorite:", "Yes"],
		"range": ["Rating:", "10"],
		"date": ["Date:", "2012-4-17"],
		"notes": ["Notes:", "MiU"]
	},

	"song20": {
		"songInfo": ["Select Song Type:", "Party"],
		"sname": ["Name of Song:", "Groove Me"],
		"aname": ["Album:", "Guy"],
		"arname": ["Artist:", "Guy"],
		"url": ["Music Down website:", "http://www.apple.com"],
		"favorite": ["Favorite:", "Yes"],
		"fav": ["Save as Favorite:", "Yes"],
		"range": ["Rating:", "10"],
		"date": ["Date:", "2012-4-17"],
		"notes": ["Notes:", "MiU"]
	}

}