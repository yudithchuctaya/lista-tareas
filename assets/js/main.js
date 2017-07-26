var listado =[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }
 
]


     var html = "";
  for (var i =0; i<listado.length;i++){
     var mi_lista = listado[i];


     var tarea =document.getElementById("tareas" ).value;
     var objeto =document.getElementById("lista" ).innerHTML='<li>'+  mi_lista.title  +"</li>";
     html+=objeto;
     document.getElementById("lista").innerHTML=html;
    }

// crea un nodo de tipo texto(hijo)y uno de tipo  elemento  como hijo de la pagina 
function Añadir(){
  var button = document.getElementById("añadirTarea").value;
  var add = document.createElement("li");
  var contenido = document.createTextNode(button); 
  add.appendChild(contenido);
  document.getElementById("tareas").appendChild(add);

  }

   var tachado = document.getElementsByTagName('ul');
   for (var i = 0; i < tachado.length; i++) {
      tachado[i].addEventListener('click',Tachar,false);

    }

// la funcion Tachar hace que  al darle clik en el mismo se tache y para limpiar el tachado (doble click)
function Tachar (){
//optener un elemento de un evento especifico y realizar el tachado

(event.target).style.textDecoration = ((event.target).style.textDecoration=='line-through') ? 'transparent' : 'line-through';
  console.log(event.target.textContent);
}





