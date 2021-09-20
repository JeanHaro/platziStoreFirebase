import { AbstractControl } from "@angular/forms"

export class MyValidators {
    // Métodos estáticos

    // Precios menores a 
    static isPriceValid (control: AbstractControl) {
        // Valor actual
        const value = control.value;
        
        console.log(value);

        if (value > 10000) {
            return { price_invalid: true }
        }

        return null;
    }
}