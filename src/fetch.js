import http from "./interceptor";
import axios from 'axios'

let apiEndpoint = "https://aztro.sameerkumar.website/";

export default function fetchHoro(query) {
 apiEndpoint=apiEndpoint+query;
  return http.post(apiEndpoint);
}
