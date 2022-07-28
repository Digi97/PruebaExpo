const apiRoute = 'https://pokeapi.co/api/v2/';
import axios from 'axios';
const appUtil = {

  getAPI:async function getAPI(route)
  {
      try
      {
          let response = await axios.get(`${apiRoute}${route}`);
          return response;
      }
      catch (e)
      {
          console.error(e.message);
          return false;
      }
  }

}
