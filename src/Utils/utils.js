export function formatToReal(value ,set){
     value = value.replace(/\D/g, '');  // retira tudo que não for número
     value = value.replace(/^0+/, '');  // retira zeros do começo
     if(value.length === 0)
        value = '0,00';
     else if(value.length === 1)
         value = '0,0' +value;
     else if(value.length === 2)
         value = '0,' + value;   
     else
         value = value.substr(0,value.length-2) + ',' + value.substr(-2,2);
    set(value);
}

export function formatedValue(v){
    let r = v.toString().replace('.', ',');
    r += (!r.includes(',')) ? ',00' : '';
    return r
}
    