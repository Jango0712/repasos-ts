const hasEven = (array: number[]): boolean  => {
        let i:number = 0;
        let encontrado = false;
        while (i < array.length) {
          if (array[i] % 2 === 0) {
            encontrado = true;
          }
          i++;
        }
        return encontrado;
    }

    // console.log(hasEven([2,3,5,2]))
    
    function startWithM(array: string[]): boolean {
        let i = 0;
        let todosConM = true;
        while (i < array.length && todosConM) {
          if (array[i][0] !== "m" && array[i][0] !== "M") {
            todosConM = false;
          }
          i++;
        }
        return todosConM;
    }

    // console.log(startWithM(["Jeo","mar"]))