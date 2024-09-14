const nestedObj3 = {
	"person1": {
		"id": "1",
		"education":{
			"graduation":{
				"type":"be",
				"college":"ii"
			}
		},
		"address":{
			"city":"ched",
			"pincode":"78905"
		},
		"friends":["satoshi","vin"]
	},
	"person2": {
		"id": "2",
		"education":{
			"graduation":{
				"type":"barch",
				"college":"si"
			},
			"postgraduation":{
				"type":"ms",
				"college":"il"
			}
		},
		"address":{
			"city":"bin",
			"pincode":"78965"
		},
		"friends":["bob"]
	},
}
//result: {
//   'person1.id': '1',
//   'person1.education.graduation.type': 'be',
//   'person1.education.graduation.college': 'ii',
//   'person1.address.city': 'ched',
//   'person1.address.pincode': '78905',
//   'person1.friends.0': 'satoshi',
//   'person1.friends.1': 'vin',
//   'person2.id': '2',
//   'person2.education.graduation.type': 'barch',
//   'person2.education.graduation.college': 'si',
//   'person2.education.postgraduation.type': 'ms',
//   'person2.education.postgraduation.college': 'il',
//   'person2.address.city': 'bin',
//   'person2.address.pincode': '78965',
//   'person2.friends.0': 'bob'
// }

const nestedObj2 = {
	"pedro": {
		"id": "1",
		"father":"trejo"
	},
}
//result = {"pedro.id":"1","pedro.father":"trejo"}

const nestedObj1 = {
	"name":"pasal"
}
//result = {"name":"pasal"}
let result = {};

const objectFlatten = (objecthere,keyHere) => {
	let res = {}
	for( const [key,value] of Object.entries(objecthere)){
		let keyNeeded = keyHere ? `${keyHere}.${key}` :key
		if(typeof value === 'object'){
			Object.assign(res, objectFlatten(value, keyNeeded))
		}else{
			res[keyNeeded] = value
		}
	}
	return res;
}


let resultFromObject1 = objectFlatten(nestedObj1);
console.log(resultFromObject1);

let resultFromObject2 = objectFlatten(nestedObj2);
console.log(resultFromObject2);

let resultFromObject3 = objectFlatten(nestedObj3);
console.log(resultFromObject3);

