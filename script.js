const items= [
    {
        id: 0,
        nome: 'serviço0',
        img: 'img.jpg',
        quantidade: 0
    },
        
    {
        id: 1,
        nome: 'serviço1',
        img: 'img.jpg',
        quantidade: 0
    },    
    {
        id: 2,
        nome: 'serviço2',
        img: 'img.jpg',
        quantidade: 0
    },]
    const items2= [
    {
        id: 3,
        nome: 'serviço3',
        img: 'img.jpg',
        quantidade: 0
    },
    {
        id: 4,
        nome: 'serviço4',
        img: 'img.jpg',
        quantidade: 0
    },
    {
        id: 5,
        nome: 'serviço5',
        img: 'img.jpg',
        quantidade: 0
    }
]


inicializarSite = () => {
    var containerProdutos = document.getElementById ('serviços');
    items.map ((val)=>{
        containerProdutos.innerHTML += `
        <div class= "serviço-single">
             <img src= "`+val.img+`"  width="250" height="250"/>
             <p>`+val.nome+`</p>
             <a href="https://api.whatsapp.com/send?phone=+5541995764941&text=Quero%20este%20serviço%20" class="btn btn-success">Solicitar serviço
             </a>
        </div>
        
             `
    })
    var containerProdutos = document.getElementById ('serviços2');
    items2.map ((val)=>{
        containerProdutos.innerHTML += `
        <div class= "serviço-single2">
             <img src= "`+val.img+`" width="250" height="250" />
             <p>`+val.nome+`</p>
             <a href="https://api.whatsapp.com/send?phone=+5541995764941&text=Quero%20este%20serviço%20" class="btn btn-success">Solicitar serviço
             </a>
        </div>
        
             `
    })
}

inicializarSite ();

