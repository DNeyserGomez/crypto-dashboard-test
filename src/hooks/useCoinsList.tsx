import axios from 'axios';
import { useEffect, useState } from 'react';

interface Coin {
  id: string;
  name: string;
  current_price: number;
  image: string;
}

const fetchCoins = async ()=> {
    
   
}

export default function useCoinsList (cryptoType?: string) {
    const [coins, setCoins] = useState<Coin[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=> {
        const fetchCoins = async () => {
            try {
                const response = await axios.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets', {
                  params: {
                    vs_currency: 'usd',
                    order: 'market_cap_desc',
                    per_page: 10,
                    page: 1,
                    sparkline: false,
                  },
                });
                setCoins(response.data);
              } catch (error) {
                setError('Error fetching data');
                console.error('Error fetching data: ', error);
              } finally {
                setLoading(false);
              }
        }
 
        fetchCoins();
    }, []);
    
    return { coins, loading, error };
}