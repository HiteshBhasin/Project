document.addEventListener("DOMContentLoaded", function() {

        let div = document.createElement('div');
        div.setAttribute("id", "container");
        this.body.appendChild(div);
        let div2 = document.createElement('div');
        div2.setAttribute("id", "box");
        div.appendChild(div2);
        let btn = document.createElement('button');
        btn.setAttribute("class", "generate");
        btn.innerHTML = "Generate Quote"
        this.body.appendChild(btn);
        const url = new URL('https://quote-garden.onrender.com/api/v3/quotes');
        // const option = {
        //     method: "GET",
        //     headers: {
        //         "key": 'SIGN-UP-FOR-KEY',
        //         "host": 'healthruwords.p.rapidapi.com'
        //     }
        // }
        let bttn = document.querySelector('.generate');
        let clearDiv = document.querySelectorAll("#data");
        bttn.addEventListener("click", () => {
            fetch(url).then((response) => response.json())
                .then((data) => {
                    let x = Math.floor(Math.random() * 10);
                    console.log(x);
                    let quote = data.data[x].quoteText;
                    let author = data.data[x].quoteAuthor;
                    displayData(quote, author);
                })

            // need to add the quotes to the paragraph and remove any dupilcates 
            //also catagorise the quotes. 

            function displayData(quote, author) {
                let newDiv = document.createElement('div');
                newDiv.setAttribute("id", "data");
                const divText = document.createTextNode(quote);
                const divText1 = document.createTextNode(author);
                newDiv.appendChild(divText);
                newDiv.appendChild(divText1);
                div2.appendChild(newDiv);


            }
            bttn.addEventListener("click", () => {

            })



        })
    })
    // need to clear the box after every display and avoid repeatition. 
    // in this project will use wb work may be add web sockets and weather app to work on the same page/
    // to add txt to paragraph https://www.w3schools.com/jsref/met_node_appendchild.asp
    // classication https://metacognitive.me/how-to-do-text-classification-with-javascript/