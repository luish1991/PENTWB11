describe("Operaciones",function(){
    it("sumar dos numeros",function(){
        expect(sumar(3,10)).toBe(13);
    });
    it("restar dos numeros",function(){
        expect(restar(10,34)).toBe(-24);
    });
    it("multiplicar dos numeros",function(){
        expect(multiplicar(8,7)).toBe(56);
    });
    it("dividir dos numeros",function(){
        expect(dividir(10,2)).toBe(5);
        expect(function(){dividir(10,0)}).toThrow("No se puede dividir entre 0");
    });
});

describe("Procesamiento Cadenas",function(){
    var customMatch = {
        tieneCaseCorrecto:function(){
            return {
                compare: function(actual,expected){
                    if(expected===undefined){
                        expected='';
                    }

                    var result={
                        pass:false,
                        message: 'Esperado: '+expected+', obtenido: '+actual
                    };

                    if(expected===actual){
                        result.pass=true;
                        result.message= 'Esperado: '+expected+', obtenido: '+actual;
                    }
                    return result;
                }
            }
        },
        verificarPipe:function(){
            return{
                compare:function(valor){
                    if(valor===undefined){
                        valor='';
                    }

                    var result={
                        pass:false,
                        message: 'La cadena '+valor+' no tiene los pipes en los lugares correspondientes'
                    };

                    if(valor!=='' && valor!==null){
                        var pattern=/([a-z]+\|)+/;
                        var ind=pattern.test(valor);
                        if(ind){
                            result.pass=true;
                            result.message='La cadena '+valor+' tiene pipe';
                        }
                    }

                    return result;

                }
            }
        }
    };

    beforeEach(function(){
        jasmine.addMatchers(customMatch);
    });

    it("Es mayuscula",function(){
        expect(mayuscula("hola")).tieneCaseCorrecto("HOLA");
    });

    it("Es minuscula",function(){
        expect(minuscula("HOla")).tieneCaseCorrecto("hola");
    });

    it("verificar pipe",function(){
        expect(ponerPipe(["Java","Spring"])).verificarPipe();
    });
});