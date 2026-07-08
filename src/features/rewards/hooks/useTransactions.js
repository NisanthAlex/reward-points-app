import { useEffect, useState } from 'react';

import { fetchTransactions } from '../../rewards/services/transactionService'


export const useTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadTransactions = async () => {
      try {
        const response = await fetchTransactions();

        if (isMounted) {
          setTransactions(response);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadTransactions();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    transactions,
    loading,
    error,
  };
};