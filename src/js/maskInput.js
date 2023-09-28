let inputElem = document.querySelector('#phone');

inputElem.addEventListener('input', function(){
	let mask = '_ (___) ___ - __ - __';

	let phoneText = inputElem.value.replace(/\D/g, '');

	if(phoneText.length > 11){
		phoneText = phoneText.slice(0, phoneText.length - 1);
	}
	let sliceIndex = findIndex(mask, '_', phoneText.length) + 1;

	for(let elem of phoneText){
		mask = mask.replace('_', elem);

	}

	mask = mask.slice(0, sliceIndex);

	if(mask[0] == '7' || mask[0] == '8'){
		mask = `+7${mask.slice(1,mask.length)}`;
	}
	inputElem.value = mask;
})
function findIndex(str, substr, count){
	for(let i = 0 ; i <= str.length ; i++){
		if(substr === str[i]){
			count--
		}
		if(count === 0 ){
			return i;
		}
	}
}