class Logo {
    constructor(url) {
      this.top = 0;
      this.left = 0;
      this.width = 200;
      this.imgUrl = url;
      this.html = null;
    }
  
    init() {
        this.img = document.createElement('img')
        this.img.src = this.imgUrl
        this.html = this.img
        this.render()
        // document.body.style.backgroundColor = 'black'
      // метод должен создать тег img
      // вложить в него src картинки (this.imgUrl)
      // и записать в this.html
      // + дергаем render
  
      // + странице должен залится фон черным
    }

    // createTemplate() {
    //   return `
    //   <div><img src="${this.imgUrl}" alt=""
    //   style="
    //   width:${this.width}px;
    //   position:fixed;
    //   top:${this.top}px;
    //   left:${this.left}px
    //   "></div>
    //   `
    // }
    
    render() {

      // document.body.innerHTML = this.createTemplate

        this.html.style.position = 'fixed'
        this.html.style.top = `${this.top}px`
        this.html.style.left = `${this.left}px`
        this.html.style.width = `${this.width}px`

        document.body.appendChild(this.html)

      // метод должен отрисовать изображение (this.html) на странице
      // применить фиксированное позиционирование
      // использовать this.top и this.left для указания позиции
      // использовать this.width для указания ширины
    }
  
    moveUp() {
        this.top = this.top - 20
        this.render()
      // метод должен изменять top нашего объекта так
      // чтобы элемент передвинулся ВЫШЕ
      // на 20px
      // + дергаем render
    }

    moveDown() {
        this.top = this.top + 20
        this.render()
      // метод должен изменять top нашего объекта так
      // чтобы элемент передвинулся НИЖЕ
      // на 20px
      // + дергаем render
    }

    moveLeft() {
        this.left = this.left - 20
        this.render()
      // метод должен изменять left нашего объекта так
      // чтобы элемент передвинулся ЛЕВЕЕ
      // на 20px
      // + дергаем render
    }

    moveRight() {
        this.left = this.left + 20
        this.render()
      // метод должен изменять left нашего объекта так
      // чтобы элемент передвинулся ПРАВЕЕ
      // на 20px
      // + дергаем render
    }
  }
  
  const imgUrl = 'https://bit.ly/2tcDito';
  var mfLogotip = new Logo(imgUrl);
  console.log(mfLogotip);
  
  // запускаем наше микро-приложение
  mfLogotip.init();
  
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  // something else, чтобы всё работало


  class Calculator {
    constructor() {
      this.first = prompt('введите первое число', [0])
      this.second = prompt('введите второе число', [0])
      let result1 = confirm('Сложить их?')

      if (result1 === true) {
        this.sum()
      }

      else {
        let result2 = confirm('Перемножить их?') 
        if (result2 === true) {
          this.mul()
        }
      }
    }

    sum() {
      console.log(this.first)
      this.sumResult = +this.first + +this.second
      alert(this.sumResult)
    }

    mul() {
      this.mulResult = +this.first * +this.second
      alert(this.mulResult)
    }
  }

  var calculate = new Calculator