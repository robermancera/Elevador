class Elevador
{
    pisoActual: number
    numPisos: number
    edoPuerta: boolean

    constructor(numPisos: number)
    {
        this.numPisos = numPisos
        this.pisoActual = 0
        this.edoPuerta = false
    }

    get NumPisos(){return this.numPisos}

    get PisoActual(){return this.pisoActual}

    get EdoPuerta(){return this.edoPuerta}

    public abrirPuerta(){
        
        this.edoPuerta = true
        console.log("Abriendo puerta")
    }

    public cerrarPuerta(){

        this.edoPuerta = false
        console.log("Cerrando puerta")
    }

    private subir(){

        this.pisoActual += 1
        console.log("Subiendo. . .")
    }

    private bajar(){

        this.pisoActual -= 1
        console.log("Bajando. . .")
    }

    public irAPiso(x)
    {
        if(x === this.NumPisos)
        {
            return console.log("No puedes subir mas pisos")
        }
        else
        {
            if(x >= 0 && x <= this.NumPisos)
            {
                for(let i = 0; i <= x; i++)
                {
                    if (this.EdoPuerta === true) 
                    {
                        this.cerrarPuerta()
                    } 
                    else if(x > this.PisoActual) 
                    {
                        this.subir()
                        console.log(this.PisoActual)
                    } 
                    else if(x < this.PisoActual)
                    {
                        this.bajar()
                        console.log(this.PisoActual)
                    } 
                    else 
                    {
                        this.abrirPuerta()
                    }
                }
            }
            else
            console.log("El piso al que te quieres mover es el piso actual")
        }
    }
}

let elevador = new Elevador(10)
elevador.irAPiso(9)
elevador.irAPiso(4)