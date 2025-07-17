# Esto es un comentario
print("Hola, mundo!")  # Imprime un mensaje en la consola
edad = 30
altura = 1.75
print(f"edad: {edad}, altura: {altura}")  # Imprime variables con formato
saludos = "Hola"
es_estudiante = True
colores = ["rojo", "verde", "azul"]
persona = {"nombre": "Juan", "edad": 30}
# Imprime las variables
print(persona["nombre"])  # Imprime el nombre de la persona
personas = [
    {"nombre": "Ana", "edad": 25},
    {"nombre": "Luis", "edad": 28}
]
print(personas[0]["nombre"])  # Imprime el nombre de la primera persona en la lista
# Imprimir la edad de la primera persona
suma=10+5
print(f"Suma: {suma}")  # Imprime la suma
resta = 10 - 3
print(f"Resta: {resta}")  # Imprime la resta
multiplicacion = 4 * 3
print(f"Multiplicación: {multiplicacion}")  # Imprime la multiplicación
division = 10 / 2
print(f"División: {division}")  # Imprime la división
modulo = 10 % 3
print(f"Módulo: {modulo}")  # Imprime el módulo
potencia = 2 ** 3
print(f"Potencia: {potencia}")  # Imprime la potencia

igual = (5==5)
print(f"la comparación es : {igual}") #Imprime el resultado de la comparción

difetente = (5!=5)
print(f"La comparación es: {difetente}") #Imprime el resultado de la comparación

mayor = (10 > 7)
print(f"La comparación es: {mayor}")  # Imprime el resultado de la comparación

menor = (3 < 5)
print(f"La comparación es: {menor}")  # Imprime el resultado de la comparación

mayor_igual = (10 >= 10)
print(f"La comparación es: {mayor_igual}")  # Imprime el resultado de la comparación

#operadores lógicos
y_logico = (5 > 3) and (2 < 4)
print(f"La comparación es: {y_logico}")  # Imprime el resultado de la comparación

o_logico = (5 > 3) or (2 > 4)
print(f"La comparación es: {o_logico}")  # Imprime el resultado de la comparación

no_logico = not(5 > 3)
print(f"La comparación es: {no_logico}")  # Imprime el resultado de la comparación

#Estructuras de Control
edad = 20
if edad >= 18:
    print("Eres Adulto")
elif edad >= 13:
    print("Eres Adolecente")
else:
    print("eres niñ@")

# Itera sobre una lista de números 
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 40, 50, 60, 70, 80, 90] 
for numero in numeros: 
    print(numero) # Salida: 1, 2, 3, 4, 5

# Función para encontrar el número mayor de un conjunto
def encontrar_mayor(conjunto):
    mayor = conjunto[0]
    for num in conjunto:
        if num > mayor:
            mayor = num
    return mayor

# Uso de la función
mayor_numero = encontrar_mayor(numeros)
print(f"El número mayor es: {mayor_numero}")

#sumar los elementos de una lista
for numero in numeros:
    suma += numero
print(f"La suma de los números es: {suma}")