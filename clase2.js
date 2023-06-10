var nombre = 'Javier';
var apellido = 'Chacón'

// Letras en mayusculas
var NombreEnMayusculas = nombre.toUpperCase()

// Letras en minusculas
var ApellidoEnMiniscula = apellido.toLowerCase()

// Primer caracter del string
var primeraLetraDelNombre = nombre.charAt(0)

// Longitud del string
var cantidadDeLetrasDelNombre = nombre.length

// Concatenar dos variables
var nombreCompleto = nombre + ' ' + apellido

// Otra manera de concatenar texto (Interpolacion de texto)
var nombreCompletoDos = `${nombre} ${apellido.toLocaleUpperCase()}`

//Acceder a sub-strings
var str = nombre.substr(1, 2)