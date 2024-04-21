

console.log("input functions: 'fromInputA' and 'fromInputB'")
console.log(`
a(\`
1 ,   0  ,   0   ,
0 , cos_x, -sin_x,
0 , sin_x,  cos_x,
\`)

b(\`
cos_y , 0, sin_y,
   0  , 1,   0  ,
-sin_y, 0, cos_y,
\`)


XY
a(\`
    cos_y    ,    0  ,     sin_y    ,  
-sin_x*-sin_y,  cos_x,  -sin_x*cos_y,  
cos_x*-sin_y ,  sin_x,  cos_x*cos_y ,  
\`)

b(\`
cos_z , -sin_z, 0,
sin_z ,  cos_z , 0,
   0  ,    0  , 1,
\`)


XYZ
a(\`
           cos_y*cos_z           ,            cos_y*-sin_z           ,     sin_y    ,  
-sin_x*-sin_y*cos_z + cos_x*sin_z,  -sin_x*-sin_y*-sin_z + cos_x*cos_z,  -sin_x*cos_y,  
cos_x*-sin_y*cos_z + sin_x*sin_z ,  cos_x*-sin_y*-sin_z + sin_x*cos_z ,  cos_x*cos_y ,  
\`)
`)

const A00 = document.getElementById("A00");  const A10 = document.getElementById("A10");  const A20 = document.getElementById("A20");  const A30 = document.getElementById("A30");
const A01 = document.getElementById("A01");  const A11 = document.getElementById("A11");  const A21 = document.getElementById("A21");  const A31 = document.getElementById("A31");
const A02 = document.getElementById("A02");  const A12 = document.getElementById("A12");  const A22 = document.getElementById("A22");  const A32 = document.getElementById("A32");
const A03 = document.getElementById("A03");  const A13 = document.getElementById("A13");  const A23 = document.getElementById("A23");  const A33 = document.getElementById("A33");

const B00 = document.getElementById("B00");  const B10 = document.getElementById("B10");  const B20 = document.getElementById("B20");  const B30 = document.getElementById("B30");
const B01 = document.getElementById("B01");  const B11 = document.getElementById("B11");  const B21 = document.getElementById("B21");  const B31 = document.getElementById("B31");
const B02 = document.getElementById("B02");  const B12 = document.getElementById("B12");  const B22 = document.getElementById("B22");  const B32 = document.getElementById("B32");
const B03 = document.getElementById("B03");  const B13 = document.getElementById("B13");  const B23 = document.getElementById("B23");  const B33 = document.getElementById("B33");

const A00p = document.getElementById("A00p");  const A10p = document.getElementById("A10p");  const A20p = document.getElementById("A20p");  const A30p = document.getElementById("A30p");
const A01p = document.getElementById("A01p");  const A11p = document.getElementById("A11p");  const A21p = document.getElementById("A21p");  const A31p = document.getElementById("A31p");
const A02p = document.getElementById("A02p");  const A12p = document.getElementById("A12p");  const A22p = document.getElementById("A22p");  const A32p = document.getElementById("A32p");
const A03p = document.getElementById("A03p");  const A13p = document.getElementById("A13p");  const A23p = document.getElementById("A23p");  const A33p = document.getElementById("A33p");

const B00p = document.getElementById("B00p");  const B10p = document.getElementById("B10p");  const B20p = document.getElementById("B20p");  const B30p = document.getElementById("B30p");
const B01p = document.getElementById("B01p");  const B11p = document.getElementById("B11p");  const B21p = document.getElementById("B21p");  const B31p = document.getElementById("B31p");
const B02p = document.getElementById("B02p");  const B12p = document.getElementById("B12p");  const B22p = document.getElementById("B22p");  const B32p = document.getElementById("B32p");
const B03p = document.getElementById("B03p");  const B13p = document.getElementById("B13p");  const B23p = document.getElementById("B23p");  const B33p = document.getElementById("B33p");

const outEl = document.getElementById("out");
outEl.style.fontFamily = "monospace,monospace";

document.getElementById("identity").onclick = () => {
	A00.value = "1"; A10.value = "0"; A20.value = "0"; A30.value = "0";
	A01.value = "0"; A11.value = "1"; A21.value = "0"; A31.value = "0";
	A02.value = "0"; A12.value = "0"; A22.value = "1"; A32.value = "0";
	A03.value = "0"; A13.value = "0"; A23.value = "0"; A33.value = "1";
}

document.getElementById("identity2").onclick = () => {
	B00.value = "1"; B10.value = "0"; B20.value = "0"; B30.value = "0";
	B01.value = "0"; B11.value = "1"; B21.value = "0"; B31.value = "0";
	B02.value = "0"; B12.value = "0"; B22.value = "1"; B32.value = "0";
	B03.value = "0"; B13.value = "0"; B23.value = "0"; B33.value = "1";
}

document.getElementById("axb").onclick = () => {
	A00.value = "A00"; A10.value = "A10"; A20.value = "A20"; A30.value = "A30";
	A01.value = "A01"; A11.value = "A11"; A21.value = "A21"; A31.value = "A31";
	A02.value = "A02"; A12.value = "A12"; A22.value = "A22"; A32.value = "A32";
	A03.value = "A03"; A13.value = "A13"; A23.value = "A23"; A33.value = "A33";
}
document.getElementById("axb2").onclick = () => {
	B00.value = "B00"; B10.value = "B10"; B20.value = "B20"; B30.value = "B30";
	B01.value = "B01"; B11.value = "B11"; B21.value = "B21"; B31.value = "B31";
	B02.value = "B02"; B12.value = "B12"; B22.value = "B22"; B32.value = "B32";
	B03.value = "B03"; B13.value = "B13"; B23.value = "B23"; B33.value = "B33";
}

const enable = (input, span) => {
	input.disabled = false;
	span.style = "color:black";
}

const disable = (input, span) => {
	input.disabled = true;
	span.style = "color:gray";
}

const typeEl = document.getElementById("type");
typeEl.onchange = () => {
	const mode = typeEl.value;

	if (mode === "3x3") {
		 enable(A00, A00p);  enable(A10, A10p);  enable(A20, A20p); disable(A30, A30p);
		 enable(A01, A01p);  enable(A11, A11p);  enable(A21, A21p); disable(A31, A31p);
		 enable(A02, A02p);  enable(A12, A12p);  enable(A22, A22p); disable(A32, A32p);
		disable(A03, A03p); disable(A13, A13p); disable(A23, A23p); disable(A33, A33p);

		 enable(B00, B00p);  enable(B10, B10p);  enable(B20, B20p); disable(B30, B30p);
		 enable(B01, B01p);  enable(B11, B11p);  enable(B21, B21p); disable(B31, B31p);
		 enable(B02, B02p);  enable(B12, B12p);  enable(B22, B22p); disable(B32, B32p);
		disable(B03, B03p); disable(B13, B13p); disable(B23, B23p); disable(B33, B33p);
		return;
	}

	if (mode === "4x4") {
		enable(A00, A00p); enable(A10, A10p); enable(A20, A20p); enable(A30, A30p);
		enable(A01, A01p); enable(A11, A11p); enable(A21, A21p); enable(A31, A31p);
		enable(A02, A02p); enable(A12, A12p); enable(A22, A22p); enable(A32, A32p);
		enable(A03, A03p); enable(A13, A13p); enable(A23, A23p); enable(A33, A33p);

		enable(B00, B00p); enable(B10, B10p); enable(B20, B20p); enable(B30, B30p);
		enable(B01, B01p); enable(B11, B11p); enable(B21, B21p); enable(B31, B31p);
		enable(B02, B02p); enable(B12, B12p); enable(B22, B22p); enable(B32, B32p);
		enable(B03, B03p); enable(B13, B13p); enable(B23, B23p); enable(B33, B33p);
		return;
	}

	if (mode === "3x1") {
		 enable(A00, A00p);  enable(A10, A10p);  enable(A20, A20p); disable(A30, A30p);
		 enable(A01, A01p);  enable(A11, A11p);  enable(A21, A21p); disable(A31, A31p);
		 enable(A02, A02p);  enable(A12, A12p);  enable(A22, A22p); disable(A32, A32p);
		disable(A03, A03p); disable(A13, A13p); disable(A23, A23p); disable(A33, A33p);

		 enable(B00, B00p); disable(B10, B10p); disable(B20, B20p); disable(B30, B30p);
		 enable(B01, B01p); disable(B11, B11p); disable(B21, B21p); disable(B31, B31p);
		 enable(B02, B02p); disable(B12, B12p); disable(B22, B22p); disable(B32, B32p);
		disable(B03, B03p); disable(B13, B13p); disable(B23, B23p); disable(B33, B33p);
		return;
	}

	if (mode === "4x1") {
		 enable(A00, A00p);  enable(A10, A10p);  enable(A20, A20p); disable(A30, A30p);
		 enable(A01, A01p);  enable(A11, A11p);  enable(A21, A21p); disable(A31, A31p);
		 enable(A02, A02p);  enable(A12, A12p);  enable(A22, A22p); disable(A32, A32p);
		disable(A03, A03p); disable(A13, A13p); disable(A23, A23p); disable(A33, A33p);

		 enable(B00, B00p); disable(B10, B10p); disable(B20, B20p); disable(B30, B30p);
		 enable(B01, B01p); disable(B11, B11p); disable(B21, B21p); disable(B31, B31p);
		 enable(B02, B02p); disable(B12, B12p); disable(B22, B22p); disable(B32, B32p);
		 enable(B03, B03p); disable(B13, B13p); disable(B23, B23p); disable(B33, B33p);
		return;
	}

}

typeEl.onchange();

document.getElementById("faz").onclick = () => {
	const A00val = A00.value; const A10val = A10.value; const A20val = A20.value; const A30val = A30.value;
	const A01val = A01.value; const A11val = A11.value; const A21val = A21.value; const A31val = A31.value;
	const A02val = A02.value; const A12val = A12.value; const A22val = A22.value; const A32val = A32.value;
	const A03val = A03.value; const A13val = A13.value; const A23val = A23.value; const A33val = A33.value;

	const B00val = B00.value; const B10val = B10.value; const B20val = B20.value; const B30val = B30.value;
	const B01val = B01.value; const B11val = B11.value; const B21val = B21.value; const B31val = B31.value;
	const B02val = B02.value; const B12val = B12.value; const B22val = B22.value; const B32val = B32.value;
	const B03val = B03.value; const B13val = B13.value; const B23val = B23.value; const B33val = B33.value;

	const arrA = [
		[A00val, A10val, A20val, A30val, ],
		[A01val, A11val, A21val, A31val, ],
		[A02val, A12val, A22val, A32val, ],
		[A03val, A13val, A23val, A33val, ],
	]

	const arrB = [
		[B00val, B10val, B20val, B30val, ],
		[B01val, B11val, B21val, B31val, ],
		[B02val, B12val, B22val, B32val, ],
		[B03val, B13val, B23val, B33val, ],
	]

	const arrC = [
		["", "", "", "", ],
		["", "", "", "", ],
		["", "", "", "", ],
		["", "", "", "", ],
	]

	let out = "";

	const mode = document.getElementById("type").value
	let szy = 4;
	let szx = 4;
	if (mode === "3x3") {
		szx = 3;
		szy = 3;
	} else if (mode === "3x1") {
		szx = 1;
		szy = 3;
	} else if (mode === "4x1") {
		szx = 1;
		szy = 4;
	}

	const keep0 = document.getElementById("keep0").checked;

	for (let i = 0; i < szx; ++i) {
		for (let j = 0; j < szy; ++j) {
			for (let k = 0; k < szy; ++k) {

				// debugar os index
				// console.log(`[${j},${i}]  += A[${j},${k}] * B[${k},${i}] `);

				if (!keep0 && arrA[j][k].trim() === "0" || arrB[k][i].trim() === "0")  {
					arrC[j][i] += "0";
				} else {
					arrC[j][i] += `${arrA[j][k]}*${arrB[k][i]}`
				}

				if ( k != szy-1 )
					arrC[j][i] += " + "
				// else if ( i != sz-1 )
				// 	arrC[j][i] += ",   "
			}

		}
	}


	// FILTERS

	const keep0PlusSmth = document.getElementById("keep02").checked;
	if (!keep0PlusSmth) {

		// X e Y TÃO INVERTIDO MERDA!!!
		for (let x = 0; x < szy; ++x) {
			for (let y = 0; y < szy; ++y) {

				let need = "0 + ";
				let ct = 10;
				while (arrC[x][y].startsWith(need)) {
					arrC[x][y] = arrC[x][y].slice(need.length)
					ct -= 1;
					if (ct === 0) throw "BOSTA LOOP INFINITO"
				}

				need = " + 0";
				while (arrC[x][y].endsWith(need)) {
					arrC[x][y] = arrC[x][y].substring(0, arrC[x][y].length - need.length)
					ct -= 1;
					if (ct === 0) throw "BOSTA LOOP INFINITO"
				}

				while (arrC[x][y].includes("+ 0 +")) {
					arrC[x][y] = arrC[x][y].replace("+ 0 +", "+");
					ct -= 1;
					if (ct === 0) throw "BOSTA LOOP INFINITO"
				}

				// "naive approach"

				// console.log(`${arrC[x][y]}] contains ? ${arrC[x][y].includes(" + 0") || arrC[x][y].includes("0 + ")}`);
				// arrC[x][y] = arrC[x][y].replaceAll(" + 0", "")
				// arrC[x][y] = arrC[x][y].replaceAll("0 + ", "")
			}
		}

	}

	// console.log(" ######################## KEEP 1")
	const keep1TimesSmth = document.getElementById("keep1").checked;
	if (!keep1TimesSmth) {

		// X e Y TÃO INVERTIDO MERDA!!!
		for (let x = 0; x < szy; ++x) {
			for (let y = 0; y < szy; ++y) {

				// console.log(`[${arrC[x][y]}] contains ? ${arrC[x][y].includes("1*")}`);
				// console.log(`[${arrC[x][y]}] contains ? ${arrC[x][y].includes("*1")}`);

				let need = "1*";
				let ct = 10;
				while (arrC[x][y].startsWith(need)) {
					arrC[x][y] = arrC[x][y].slice(need.length)
					ct -= 1;
					if (ct === 0) throw "BOSTA LOOP INFINITO"
				}

				need = "*1";
				while (arrC[x][y].endsWith(need)) {
					arrC[x][y] = arrC[x][y].substring(0, arrC[x][y].length - need.length)
					ct -= 1;
					if (ct === 0) throw "BOSTA LOOP INFINITO"
				}

				// acho que num precisa disso

				// while (arrC[x][y].includes("+ 0 +")) {
				// 	arrC[x][y] = arrC[x][y].replace("+ 0 +", "+");
				// 	ct -= 1;
				// 	if (ct === 0) throw "BOSTA LOOP INFINITO"
				// }

				// console.log(`- - - `);
				// arrC[x][y] = arrC[x][y].replaceAll("1*", "")
				// arrC[x][y] = arrC[x][y].replaceAll("*1", "")
			}
		}

	}


	const ySize = []
	for (let i = 0; i < szy; ++i) ySize[i] = 0;

	for (let x = 0; x < szy; ++x) {
		let maxY = arrC[0][x].length;
		for (let y = 0; y < szy; ++y) {
			if (arrC[y][x].length > maxY) maxY = arrC[y][x].length;
			// console.log(`[${arrC[y][x]}]: ${arrC[y][x].length}`);
		}
		ySize[x] = maxY;
		// console.log(`max size of x ${x} is ${maxY}`);
	}
	// console.log(ySize);


	for (let x = 0; x < szy; ++x) {
		for (let y = 0; y < szx; ++y) {
			let maxLen = ySize[y];
			// console.log(`out [${arrC[y][x]}]`);
			// out += arrC[x][y].padStart(maxLen/2);
			// out += arrC[x][y].padStart(maxLen)
			// out += arrC[x][y]
			// console.log(`[${arrC[x][y].padStart(maxLen)}] SZ: ${arrC[x][y].padStart(maxLen)}`);
			// out += arrC[x][y]

			let str = arrC[x][y];
			if (str.length < maxLen) {
				let diff = maxLen - str.length;
				str = " ".repeat(Math.floor(diff/2)) + str;
				str = str + " ".repeat(Math.ceil(diff/2));
			}


			out += str;
			out += ",";

			// except the last
			if ( y < (szx-1) )
				out += "  "
		}
		out += "\n"
	}


	outEl.value = out;
}


const a = input => {
	let split = input.replaceAll("\n", "").split(",");

	// ignore last one
	for (let i = 0; i < split.length - 1; i++) {
		split[i] = split[i].trim();
	}


	if (split.length == 17) {
		console.log(`4x4`);
		fillAWith(`4x4`, split);
		return;
	}

	if (split.length == 10) {
		console.log(`3x3`);
		fillAWith(`3x3`, split);
		return;

	}

	if (split.length == 4) {
		console.log(`3x1`);
		fillAWith(`3x1`, split);
		return;
	}

	if (split.length == 5) {
		console.log(`4x1`);
		fillAWith(`4x1`, split);
		return;
	}

	console.error(`Unrecognized, of size ${split.length}`);
}

const fillAWith = (mode, arr) => {

	let i = 0;

	if (mode === "3x3") {
		A00.value = arr[i++]; A10.value = arr[i++]; A20.value = arr[i++]; A30.value = "0";
		A01.value = arr[i++]; A11.value = arr[i++]; A21.value = arr[i++]; A31.value = "0";
		A02.value = arr[i++]; A12.value = arr[i++]; A22.value = arr[i++]; A32.value = "0";
		A03.value = "0";      A13.value = "0";      A23.value = "0";      A33.value = "1";
		return;
	}

	if (mode === "4x4") {
		A00.value = arr[i++]; A10.value = arr[i++]; A20.value = arr[i++]; A30.value = arr[i++];
		A01.value = arr[i++]; A11.value = arr[i++]; A21.value = arr[i++]; A31.value = arr[i++];
		A02.value = arr[i++]; A12.value = arr[i++]; A22.value = arr[i++]; A32.value = arr[i++];
		A03.value = arr[i++]; A13.value = arr[i++]; A23.value = arr[i++]; A33.value = arr[i++];
		return;
	}

	if (mode === "3x1") {
		A00.value = arr[i++]; A10.value = arr[i++]; A20.value = arr[i++]; A30.value = "0";
		A01.value = arr[i++]; A11.value = arr[i++]; A21.value = arr[i++]; A31.value = "0";
		A02.value = arr[i++]; A12.value = arr[i++]; A22.value = arr[i++]; A32.value = "0";
		A03.value = "0";      A13.value = "0";      A23.value = "0";      A33.value = "1";
		return;
	}

	if (mode === "4x1") {
		A00.value = arr[i++]; A10.value = arr[i++]; A20.value = arr[i++]; A30.value = "0";
		A01.value = arr[i++]; A11.value = arr[i++]; A21.value = arr[i++]; A31.value = "0";
		A02.value = arr[i++]; A12.value = arr[i++]; A22.value = arr[i++]; A32.value = "0";
		A03.value = "0";      A13.value = "0";      A23.value = "0";      A33.value = "1";
		return;
	}

}


const b = input => {
	let split = input.replaceAll("\n", "").split(",");

	// ignore last one
	for (let i = 0; i < split.length - 1; i++) {
		split[i] = split[i].trim();
	}


	if (split.length == 17) {
		console.log(`4x4`);
		fillBWith(`4x4`, split);
		return;
	}

	if (split.length == 10) {
		console.log(`3x3`);
		fillBWith(`3x3`, split);
		return;

	}

	if (split.length == 4) {
		console.log(`3x1`);
		fillBWith(`3x1`, split);
		return;
	}

	if (split.length == 5) {
		console.log(`4x1`);
		fillBWith(`4x1`, split);
		return;
	}

	console.error(`Unrecognized, of size ${split.length}`);
}

const fillBWith = (mode, arr) => {

	let i = 0;

	if (mode === "3x3") {
		B00.value = arr[i++]; B10.value = arr[i++]; B20.value = arr[i++]; B30.value = "0";
		B01.value = arr[i++]; B11.value = arr[i++]; B21.value = arr[i++]; B31.value = "0";
		B02.value = arr[i++]; B12.value = arr[i++]; B22.value = arr[i++]; B32.value = "0";
		B03.value = "0";      B13.value = "0";      B23.value = "0";      B33.value = "1";
		return;
	}

	if (mode === "4x4") {
		B00.value = arr[i++]; B10.value = arr[i++]; B20.value = arr[i++]; B30.value = arr[i++];
		B01.value = arr[i++]; B11.value = arr[i++]; B21.value = arr[i++]; B31.value = arr[i++];
		B02.value = arr[i++]; B12.value = arr[i++]; B22.value = arr[i++]; B32.value = arr[i++];
		B03.value = arr[i++]; B13.value = arr[i++]; B23.value = arr[i++]; B33.value = arr[i++];
		return;
	}

	if (mode === "3x1") {
		B00.value = arr[i++]; B10.value = "0"; B20.value = "0"; B30.value = "0";
		B01.value = arr[i++]; B11.value = "1"; B21.value = "0"; B31.value = "0";
		B02.value = arr[i++]; B12.value = "0"; B22.value = "1"; B32.value = "0";
		B03.value = "0";      B13.value = "0"; B23.value = "0"; B33.value = "1";
		return;
	}

	if (mode === "4x1") {
		B00.value = arr[i++]; B10.value = "0"; B20.value = "0"; B30.value = "0";
		B01.value = arr[i++]; B11.value = "1"; B21.value = "0"; B31.value = "0";
		B02.value = arr[i++]; B12.value = "0"; B22.value = "1"; B32.value = "0";
		B03.value = arr[i++]; B13.value = "0"; B23.value = "0"; B33.value = "1";
		return;
	}

}


// const font = document.getElementById("font");
// font.oninput = () => {
// 	document.getElementById("out").style.fontSize = `${font.value}px`
// }

// font.oninput()

// "A00";  "A10";  "A20";  "A30";
// "A01";  "A11";  "A21";  "A31";
// "A02";  "A12";  "A22";  "A32";
// "A03";  "A13";  "A23";  "A33";

// "B00";  "B10";  "B20";  "B30";
// "B01";  "B11";  "B21";  "B31";
// "B02";  "B12";  "B22";  "B32";
// "B03";  "B13";  "B23";  "B33";

