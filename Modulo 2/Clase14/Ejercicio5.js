/*DESAFIO Ejercicio 5: Cifrado y Descifrado Básico con crypto 
Crea un script en Node.js que permita al usuario ingresar un texto, luego 
lo cifre usando el algoritmo AES-256-CBC y lo descifre para mostrar el 
resultado original. Usa el módulo crypto para el cifrado y descifrado.*/

const crypto = require('crypto');

const algoritmo = 'aes-256-cbc'; 
const key = crypto.randomBytes(32); 
const iv = crypto.randomBytes(16); 

const cipher = crypto.createCipheriv(algoritmo, key, iv); 


const data = 'Este mensaje es super secreto y se autodestruira en 5 segundos...'

let encriptado = cipher.update(data, 'utf-8', 'hex'); 
encriptado += cipher.final('hex')

console.log('Texto cifrado: ', encriptado); 

const decipher = crypto.createDecipheriv(algoritmo, key, iv); 
let descifrado = decipher.update(encriptado, 'hex', 'utf-8'); 
descifrado += decipher.final('utf-8'); 

console.log('Texto descifrado: ', descifrado); 

