var NAME='TY Chen';
var age = 39;
var affiliataion ='NTHU';

var profile={
	name: 'YP TSENG', 
	age: 20,
	affiliation: 'NTHU',
	heught: 154,
	weight:47
	contact: {
		home:22558098,
        mobile: [4598734875, 5708345087 ,454987534]
	}
};   // organize information in same catogory 

console.log(profile.name);
console.log (profile['name']);

profile.gender='female';  

console.log(profile.gender);

console.log(profile.contact.home);

console.log(profile.contact.mobile[1]); 

console.log(name.length); //a var is like an obkect, element in js 

console.log(profile.contact.mobile.length); //in the mobile  there are three information (three mobile numbers)

