import { Injectable } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';

export const GET_COUNTRY = gql`
  query GetCountry($countryId: ID!) {
    country(code: $countryId) {
      name
      native
      capital
      emoji
      phone
      currency
      continent {
        name
      }
      languages {
        name
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})

export class CountryService {
   
  
  constructor(private apollo: Apollo) { }

  getCountry(id: string){

    return this.apollo
        .watchQuery({
            query: GET_COUNTRY, 
            variables: {
              countryId: id
            },
          })
          .valueChanges;
  
  }


}
