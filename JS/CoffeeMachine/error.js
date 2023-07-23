/* try {
    console.log("Awal blok kode");
    errorCode;
    console.log("Akhir blok kode");
} catch (error) {
    //console.log("terjadi error");
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {
    console.log('Akan tetap diajalankan apapun hasil try-catch');
}
*/

/*const json = '{ "name": "Yoda", "Age": 20 }';

try {
    const user = JSON.parse(json);

    console.log(user.name);
    console.log(user.age);
} catch (error) {
	console.log(error.name);
	console.log(error.message);
}
*/

const json = '{"Age": 20 }';

try {
    const user = JSON.parse(json);
	
	if (!user.name) {
		throw new SyntaxError("'name' is required.");
	}
	
    console.log(user.name);
    console.log(user.age);
} catch (error) {
	console.log(`JSON Error: ${error.message}`);
}