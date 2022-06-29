import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-for-country',
  templateUrl: './for-country.component.html',

})
export class ForCountryComponent {

  termino: string = "";
  errorConsulta: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  buscar( termino: string){
    this.errorConsulta = false


    this.countryService.searchCountry(termino)
    .subscribe( (paises) => {
      console.log(paises);
      this.countries = paises;

    }, (err)=>{
      this.errorConsulta = true;
      this.countries = [];
    })
  }
}
