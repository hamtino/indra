dias = 1;
//casas = [1,1,1,0,1,1,1,1];
casas = [1,0,0,0,0,1,0,0];

console.log(celdas(casas, dias));

function celdas(casas, dias){
    entrada = casas;
    salida = [];
    for(i = 0; i < dias; i ++)
    {
        salida = [];
        for(j = 0; j < casas.length; j ++)
        {
            if(j == 0)
            {
                if(entrada[1] == 0)
                {
                    salida.push(0)
                }else
                {
                    salida.push(1)
                }
            }else if(j == (casas.length -1))
            {
                if(entrada[casas.length - 2] == 0)
                {
                    salida.push(0)
                }else
                {
                    salida.push(1)
                }
            }else
            {
                if(entrada[j - 1] == entrada[j + 1])
                {
                    salida.push(0)
                }else
                {
                    salida.push(1)
                }
            }
        }
        entrada = salida;
    }
    return salida;
}