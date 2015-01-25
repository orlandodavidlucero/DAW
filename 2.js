
function blanco(campo){
    if (campo=="" || campo==null){
   	
   	 return false;
    }
	else
		return true;
}

function controlar(campo,mensaje, min, max){
	if (campo.length<min ||  campo.length>max){
	alert(mensaje);
	return false;
	}
}


function validartodo(campo,mensaje, expr){
	if (!expr.test(campo)){
	alert(mensaje);
	return false;
	}
}

function validarcheckbox(campo, mensaje){
	 var i, contador=0;
	 for(i=0; i<campo.length; i++){
	 if (campo[i].checked==true)
	 contador++;
}
	 if(contador>=3)
     return true;
	 else{
		alert(mensaje);
	 return false;
	 }
}

function validar(formulario){
    with(formulario){
	//Nombre
   	if(blanco(nombre.value)==false){
		alert("Introduzca el Nombre por favor.");
   		 nombre.focus();
   		 return false;
   	 }
	 
	if(controlar(nombre.value,"El Nombre tiene que contener entre 3 y 15 letras.",3,15)==false){
   		 nombre.focus();
   		 return false;
   	 }
	 
	if(validartodo(nombre.value,"Introduzca correctamente el Nombre(no se admiten números ni espacios).",/^[a-zA-Z]+$/)==false){
		 nombre.focus();
		 return false;
	}
	//Poblacion
	if(blanco(poblacion.value)==true){
		if(validartodo(poblacion.value,"Introduzca correctamente la Población(no se admiten números ni espacios).",/^[a-zA-Z]+$/)==false){
			poblacion.focus();
			return false;
		}
	}
	//Codigo Postal
	if(blanco(codpostal.value)==true){
		if(validartodo(codpostal.value,"Introduzca un Código Postal de 5 cifras.",/^[0-9]{5}$/)==false){
			codpostal.focus();
			return false;
		}
	}
	//Provincia
	if(blanco(provincia.value)==false){
		alert("Selecione una Provincia  por favor.");
   		 provincia.focus();
   		 return false;
		}
	//Telefono
	if(blanco(telefono.value)==false){
		alert("Introduzca el Teléfono por favor.")
   		 telefono.focus();
   		 return false;	 
		}
	
	if(validartodo(telefono.value,"Introduzca un Teléfono de 9 cifras.",/^[0-9]{9}$/)==false){
   		 telefono.focus();
   		 return false;
   	 }  	
	//Email	
	if(blanco(email.value)==false){
		alert("Introduzca el E-mail por favor.");
   		 email.focus();
   		 return false;	 
		}
		
	if(validartodo(email.value,"Introduzca correctamente el Email(ejemplo@dominio.com).",/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)==false){
		 email.focus();
		 return false;
	}
	//Fecha de nacimiento
	if(blanco(nacimiento.value)==true){
		if(validartodo(nacimiento.value,"Introduzca un fecha de nacimiento valida(dd/mm/aaaa).",/^\d{2}\/\d{2}\/\d{4}$/)==false){
			nacimiento.focus();
			return false;
		}
	}
	//Text Area	
	if(blanco(textarea.value,"Introduzca algun comentario sobre como nos conoció.")==false){
	     textarea.focus();
	     return false;
	}
	//Checkbox
	if(validarcheckbox(categoria, "Debe seleccionar 3 intereses como mínimo.")==false){
		 return false;
	}
  }
}
