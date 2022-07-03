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
  suggestedCountries: Country[] = [];
  suggestedShow: boolean = false;

  constructor(private countryService: CountryService) { }

  buscar( termino: string){
    this.errorConsulta = false
    this.suggestedShow = false


    this.countryService.searchCountry(termino)
    .subscribe( (paises) => {
      console.log(paises);
      this.countries = paises;


    }, (err)=>{
      this.errorConsulta = true;
      this.countries = [];
    })
  }

  sugerencias( termino: string){
    this.errorConsulta = false;
    this.termino = termino;
    this.suggestedShow = true;

    this.countryService.searchCountry(termino)
      .subscribe( countries => this.suggestedCountries = countries.splice(0,5),
      (err)=> this.suggestedCountries =[]);
  }
}
