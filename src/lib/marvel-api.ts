import md5 from "md5";

const MARVEL_PUBLIC_KEY="b2310bfa325e0e8211124e61febbf1d3"
const MARVEL_PRIVATE_KEY="41cba49c22416e6709bdf36182ebbe9b4ffa3105"

const API_BASE_URL = 'https://gateway.marvel.com/v1/public';

function createHash(timestamp: string) {
  return md5(timestamp + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY);
}

export async function fetchMarvelData(endpoint: string, queryParams = {}) {
  const ts = new Date().getTime().toString();
  const hash = createHash(ts);

  const queryString = new URLSearchParams({
    ...queryParams,
    apikey: MARVEL_PUBLIC_KEY,
    ts,
    hash,
  });

  const response = await fetch(`${API_BASE_URL}/${endpoint}?${queryString}`);
  const data = await response.json();

  if (data.code !== 200) {
    throw new Error(`Error fetching Marvel API: ${data.status}`);
  }

  return data.data;
}