class Api {
    data = null;
    async getData() {
        await fetch("../data/data.json").then(response => {
            return response.json();
        }).then(newData => {
            this.data = newData.episodes;
            //console.log(this.data);
        });

        
    }

     
}


class Header {
    headerElement;
    profileElement;
    placeToRenderHeader;
    logoElement;
    logoHeadingElement;

    constructor(placeToRenderHeader) {
        this.placeToRenderHeader = document.getElementsByTagName(placeToRenderHeader)[0];
        this.headerElement = document.createElement("header");
        this.headerElement.classList = "header";

        this.logoElement = document.createElement("i");
        this.logoElement.classList = "fa-solid fa-microphone";

        this.logoHeadingElement = document.createElement("h1");
        this.logoHeadingElement.classList = "header__happiness";
        this.logoHeadingElement.innerText = "Collection Of Happiness";
    }

    render() {
        this.placeToRenderHeader.appendChild(this.headerElement);
        this.headerElement.appendChild(this.logoElement);
        this.logoElement.appendChild(this.logoHeadingElement);
       
    }

}

class Main {
    placeToRenderMain;
    mainElement;
    leftSection;
    rightSection;
    getDataFromApi;
   
    constructor(placeToRenderMain,data) {
        this.placeToRenderMain = document.getElementsByTagName(placeToRenderMain)[0];
        this.data = data;
        this.mainElement = document.createElement("main");
        this.mainElement.classList = "main";

         this.getDataFromApi = new Api().getData();
        this.leftSection = new LeftSection(this.mainElement);
        this.rightSection = new RightSection(this.mainElement);
    }




    render() {
        this.placeToRenderMain.appendChild(this.mainElement);
        //this.leftSection = new LeftSection(this.mainElement);
        //this.rightSection = new RightSection(this.mainElement);
        this.leftSection.generateImages(this.data);
        //this.rightSection.generateImages(this.data);
        this.rightSection.render();
    }
}

class LeftSection {
    mainElement;
    leftSectionElement;
    cardsElement;
    getDataFromApi;
    data;

    constructor(mainElement, getDataFromApi) {    //getDataFromApi
        this.mainElement = mainElement;
        this.leftSectionElement = document.createElement("section");
        this.leftSectionElement.classList = "section Left__section";

        this.cardsUlElement = document.createElement("ul");
        this.cardsUlElement.classList = "left__cards";

        this.cardsLeftElement = document.createElement("li");
        this.cardsLeftElement.classList = "left__card";

        this.cardsImgElement = document.createElement("img");
        this.cardsImgElement.classList = "img__sizes";

        this.cardsDateElement = document.createElement("p");
        this.cardsDateElement.classList = "date";

        this.cardsTitleElement = document.createElement("p");
        this.cardsTitleElement.classList = "title";

      
        
        console.log(this.cardsUlElement);
    }


    render() {
        this.leftSectionElement.appendChild(this.cardsUlElement);
        this.cardsUlElement.appendChild(this.cardsLeftElement);
        this.cardsLeftElement.appendChild(this.cardsImgElement);
        this.cardsDateElement.appendChild(this.cardsTitleElement)
        this.cardsTitleElement.appendChild(this.cardsImgElement);

        // this.cardsLeftElement.appendChild(this.cardsImgElement);
        // this.cardsImgElement.appendChild(this.cardsDateElement)
        // this.cardsDateElement.appendChild(this.cardsTitleElement);
    }
 
    generateImages(data) { //mainelement
        this.ul = document.createElement("ul");
        this.ul.classList = "left__cards"
        //random;
       
    

        for (let i = 0; i < 4; i++) {
            console.log("li");
            const random = Math.random() * 7;
            this.cardsLiElement = document.createElement("li");
            this.img = document.createElement("img");
            this.pText = document.createElement("p");
            this.pDate = document.createElement("p");

            this.cardsLiElement.classList = "left__card";
            this.img.classList = "img__sizes";
            this.pDate.classList = "date";
            this.pText.classList = "title";
           
      
             //console.log(data);
            this.img.src = data[Math.floor(random)].img;
            this.pDate.innerText = data[Math.floor(random)].date;
            this.pText.innerText = data[Math.floor(random)].title;
            //this.buttonAudioElement.src data[Math.floor(random)].audio;
          
        
            this.cardsLiElement.appendChild(this.img);
            this.cardsLiElement.appendChild(this.pText);
            this.cardsLiElement.appendChild(this.pDate);
           
            this.ul.appendChild(this.cardsLiElement);

            this.cardsLiElement.addEventListener('click', function (event) {
                // hier roep je een functie aan die de right section beinvloed.
               
            
            });
          
            this.mainElement.appendChild(this.ul);

        }
    }

}

class RightSection {
    mainElement;
    data;
    rightSectionElement;
   
    constructor(mainElement, data) {
        this.mainElement = mainElement;
        //this.data = data;
      this.rightSectionElement = document.createElement("section");
      this.rightSectionElement.classList = "section Right__section";
  
      this.descriptionElement = document.createElement("div");
      this.descriptionElement.classList = "description__header";
  
      this.dateElement = document.createElement("h3");
      this.dateElement.classList = "description__date";
      
      this.titleElement = document.createElement("h3");
      this.titleElement.classList = "description__title";
      
      this.textElement = document.createElement("p");
      this.textElement.classList = "description__text";
       
      this.buttonElement = document.createElement("div");
      this.buttonElement.classList = "buttonWrapper";
  
      this.buttonAudioElement = document.createElement("audio");
      this.buttonAudioElement.classList = "Audio__button";
      this.buttonAudioElement.src = "";
  
      this.buttonSourceElement = document.createElement("a");
      this.buttonSourceElement.classList = "source__button";
  
        //this.descriptionElement.style.backgroundImage = "url(" + data.img + ")";
      //console.log(data);
        
        
  
    }


    
  
    render() {
      this.mainElement.appendChild(this.rightSectionElement); // append to first element of array-like object
      this.rightSectionElement.appendChild(this.descriptionElement);
      this.descriptionElement.appendChild(this.dateElement);
      this.dateElement.appendChild(this.titleElement);
      this.titleElement.appendChild(this.textElement);
      this.textElement.appendChild(this.buttonElement);
      this.buttonElement.appendChild(this.buttonAudioElement);
      this.buttonAudioElement.appendChild(this.buttonSourceElement);
        
    }

 
  }
  


class Footer{
    placeToRenderFooter;
    footerElement;
    namingElement;


    constructor(placeToRenderFooter) {
        this.placeToRenderFooter = document.getElementsByTagName(placeToRenderFooter)[0];
        this.footerElement = document.createElement("footer");
        this.footerElement.classList = "footer";

        this.namingElement = document.createElement("h2");
        this.namingElement.classList = "mijn__info";
        this.namingElement.innerText = "Gemaakt door Uday Singh uit Klas SD2C";
    }

    render() {
        this.placeToRenderFooter.appendChild(this.footerElement);
        this.footerElement.appendChild(this.namingElement);
    }

    

}

class App {
    HappyHeader;
    getDataFromApi;
    leftSection;
    rightSection;
    main;



    constructor() {
        this.header = new Header("body");
        this.mainElement = document.getElementsByTagName("main")[0];
         //this.leftSection = new LeftSection("main");
        //this.rightSection = new RightSection("main");
        this.footer = new Footer("body");

        this.getDataFromApi = new Api("../data/data.json");

        this.getDataFromApi.getData().then(
            () => {
                this.header.render();
                this.main = new Main("body", this.getDataFromApi.data);
                this.main.render();
                this.footer.render();
            }
        );


    }
}

const app = new App();
