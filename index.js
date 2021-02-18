exports.function02 = (req, res) => {

    if(req.method == "POST"){
        const item = {
            "sku":"12345463",
            "name":"Polo rojo modelo fit"
        }
        res.status(200).send(item);
    }else{
        res.status(405).send("Metodo no permitido");
    }
  }
