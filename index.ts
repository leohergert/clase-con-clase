// crear las clases Edificio, Piso y Departamento aquí
class Edificio{

    arrayPisos 
    
    constructor(pisos : Piso[]){
        this.arrayPisos = pisos
    }

    addDepartamentoToPiso(nombreDePisoBuscado:string,departamento:Departamento){
        //Recibe un Departamento y lo ubica en el piso con el nombre indicado, si no existe el piso debe mostrar un error 
        const pisoBuscado = this.arrayPisos.find(x=>x.nombrePiso == nombreDePisoBuscado)
        pisoBuscado.pushDepartamento(departamento)
    }

    getDepartamentosByPiso(nombreDePisoBuscado:string):Departamento[]{
        //devuelve todos los departamentos de ese piso 
        const dptoBuscado = this.arrayPisos.find(x=>x.nombrePiso == nombreDePisoBuscado)
        return dptoBuscado.getDepartamentos()
    }
    
}

class Piso{
    nombrePiso
    arrayDepartamentos : Departamento[] = []
    constructor(nombre:string){
        this.nombrePiso = nombre
    }

    pushDepartamento(dpto:Departamento){
        this.arrayDepartamentos.push(dpto)
    }
    getDepartamentos(){
        return this.arrayDepartamentos
    }
}


class Departamento{
    nombreDpto

    constructor(nombre:string){
        this.nombreDpto = nombre
    }

    getName(){
        return this.nombreDpto
    }
}

// no modificar este test

function testClaseEdificio() {
    const unPiso = new Piso("planta baja");
	const otroPiso = new Piso("primer piso");
	const unEdificio = new Edificio([unPiso, otroPiso]);
	const deptoUno = new Departamento("depto uno");
	const deptoDos = new Departamento("depto dos");
	const deptoTres = new Departamento("depto tres");
	unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
	unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
	unEdificio.addDepartamentoToPiso("planta baja", deptoTres);
    
	const deptos = unEdificio.getDepartamentosByPiso("planta baja");
	const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");
    
	if (
		Array.isArray(deptosEmpty) &&
		deptosEmpty.length == 0 &&
		deptos.length == 3 &&
		deptos[2].getName() == "depto tres"
        ) {
            console.log("testClaseBandaApartment passed");
        } else {
            throw "testClaseBandaApartment not passed";
	}
}



function main() {
    testClaseEdificio();

}

main();
